// Captures original thrown values out-of-band so server.ts can recover stack
// details when h3 has already converted the failure into a generic 500 Response.

type CapturedError = {
  error: unknown;
  at: number;
};

const TTL_MS = 5_000;
const MAX_CAPTURED_ERRORS = 10;

const capturedErrors: CapturedError[] = [];

function now() {
  return Date.now();
}

function pruneExpired(currentTime = now()) {
  while (
    capturedErrors.length > 0 &&
    currentTime - capturedErrors[0]!.at > TTL_MS
  ) {
    capturedErrors.shift();
  }
}

function record(error: unknown) {
  const currentTime = now();

  pruneExpired(currentTime);

  capturedErrors.push({
    error,
    at: currentTime,
  });

  while (capturedErrors.length > MAX_CAPTURED_ERRORS) {
    capturedErrors.shift();
  }
}

function getErrorEventValue(event: Event): unknown {
  if ("error" in event) {
    return (event as ErrorEvent).error ?? event;
  }

  return event;
}

function getUnhandledRejectionValue(event: Event): unknown {
  if ("reason" in event) {
    return (event as PromiseRejectionEvent).reason;
  }

  return event;
}

const eventTarget =
  typeof globalThis.addEventListener === "function" ? globalThis : undefined;

if (eventTarget) {
  eventTarget.addEventListener("error", (event) => {
    record(getErrorEventValue(event));
  });

  eventTarget.addEventListener("unhandledrejection", (event) => {
    record(getUnhandledRejectionValue(event));
  });
}

export function consumeLastCapturedError(): unknown {
  pruneExpired();

  const captured = capturedErrors.pop();

  return captured?.error;
}

export function peekLastCapturedError(): unknown {
  pruneExpired();

  return capturedErrors.at(-1)?.error;
}

export function clearCapturedErrors() {
  capturedErrors.length = 0;
}