import { createMiddleware, createStart } from "@tanstack/react-start";

import { renderErrorPage } from "./lib/error-page";

function isHttpLikeError(error: unknown) {
  return (
    error != null &&
    typeof error === "object" &&
    ("statusCode" in error || "status" in error)
  );
}

function isResponse(error: unknown): error is Response {
  return error instanceof Response;
}

const errorMiddleware = createMiddleware().server(async ({ next, request }) => {
  try {
    return await next();
  } catch (error) {
    if (isResponse(error)) {
      throw error;
    }

    if (isHttpLikeError(error)) {
      throw error;
    }

    console.error("[Style Daddy] Unhandled server error", {
      url: request.url,
      method: request.method,
      error,
    });

    return new Response(renderErrorPage(), {
      status: 500,
      headers: {
        "content-type": "text/html; charset=utf-8",
        "cache-control": "no-store",
        "x-robots-tag": "noindex",
      },
    });
  }
});

export const startInstance = createStart(() => ({
  requestMiddleware: [errorMiddleware],
}));