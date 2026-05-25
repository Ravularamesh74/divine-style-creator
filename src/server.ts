import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";

type ServerEntry = {
  fetch: (
    request: Request,
    env: unknown,
    ctx: unknown,
  ) => Promise<Response> | Response;
};

type H3UnhandledErrorPayload = {
  message?: unknown;
  status?: unknown;
  statusCode?: unknown;
  unhandled?: unknown;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  serverEntryPromise ??= import("@tanstack/react-start/server-entry").then(
    (module) =>
      ((module as { default?: ServerEntry }).default ??
        (module as unknown as ServerEntry)),
  );

  return serverEntryPromise;
}

function brandedErrorResponse(): Response {
  return new Response(renderErrorPage(), {
    status: 500,
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "no-store",
      "x-robots-tag": "noindex",
    },
  });
}

function getErrorStatus(payload: H3UnhandledErrorPayload): number | undefined {
  const status = payload.status ?? payload.statusCode;

  return typeof status === "number" ? status : undefined;
}

function isCatastrophicSsrErrorPayload(
  payload: unknown,
  responseStatus: number,
): payload is H3UnhandledErrorPayload {
  if (!payload || Array.isArray(payload) || typeof payload !== "object") {
    return false;
  }

  const fields = payload as H3UnhandledErrorPayload;
  const status = getErrorStatus(fields);

  return (
    fields.unhandled === true &&
    fields.message === "HTTPError" &&
    (status === undefined || status === responseStatus)
  );
}

// h3 can swallow in-handler SSR throws into a normal 500 JSON Response.
// try/catch never sees those, so this converts only that known catastrophic
// payload into the branded HTML error page.
async function normalizeCatastrophicSsrResponse(
  response: Response,
): Promise<Response> {
  if (response.status < 500) return response;

  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.toLowerCase().includes("application/json")) {
    return response;
  }

  let payload: unknown;
  try {
    payload = await response.clone().json();
  } catch {
    return response;
  }

  if (!isCatastrophicSsrErrorPayload(payload, response.status)) {
    return response;
  }

  console.error(
    consumeLastCapturedError() ??
      new Error(`h3 swallowed SSR error: ${JSON.stringify(payload)}`),
  );

  return brandedErrorResponse();
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    try {
      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);

      return await normalizeCatastrophicSsrResponse(response);
    } catch (error) {
      console.error(error);
      return brandedErrorResponse();
    }
  },
};