# Project rules: Express

## Structure
- Split `app.ts` (builds and exports the Express app) from `server.ts` (listens and handles shutdown). Tests import the app only.
- Layers per feature: `routes` map URLs, `controllers` handle req and res, `services` hold logic, `repositories` talk to the database. Lower layers never import `req` or `res`.

## Requests
- Validate `body`, `params` and `query` with Zod or similar in a middleware before the handler runs. Trust nothing past that point unvalidated.
- Add `helmet`, a body size limit and rate limiting on public routes. Configure CORS with an explicit origin list.

## Errors
- Throw typed errors (`NotFoundError`, `ValidationError`) carrying a status. Wrap async handlers, or use Express 5 which forwards rejections, so none escape.
- One error middleware, registered last, returns `{ error: { code, message } }`. It logs the stack and hides it from clients.

## Logging and config
- Use pino with a request id; never `console.log` in code that ships. Never log tokens or passwords.
- Parse environment variables once at startup into a typed config object and fail fast if one is missing.

## Runtime
- Handle SIGTERM: stop accepting connections, finish in-flight requests, close the database pool.

## Tests
- Vitest or Jest with supertest against the exported app. Mock only at the repository boundary.

## Before finishing
Run `npm run lint`, `npm run typecheck` and `npm test`.
