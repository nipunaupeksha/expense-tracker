import { serialize } from "hono/utils/cookie";
import app from "./app";

const port = process.env.PORT || 8000;

const server = Bun.serve({
  port,
  fetch: app.fetch,
});

console.log("Server running", server.port);
