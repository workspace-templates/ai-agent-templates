# Project rules: TypeScript on Node.js

## Compiler and style
- `strict` true, plus `noUncheckedIndexedAccess` and `noImplicitOverride`. No `any` and no `as` casts to silence errors; use `unknown` and narrow it. ES modules only.
- Prefer small pure functions and explicit return types on exported functions. Keep files under 300 lines.

## Boundaries
- Treat everything from outside as `unknown`: request bodies, queries, env, files, queue messages. Parse with zod and derive types with `z.infer`.
- Load configuration once at startup into a typed, frozen object. Fail fast on a missing variable. Never read `process.env` elsewhere.

## Async and errors
- Every promise is awaited or returned. No floating promises (`@typescript-eslint/no-floating-promises` is on).
- Throw `Error` subclasses with a `cause`. Map them to HTTP codes in one error handler. Never send stack traces to clients.
- Use `AbortSignal` and timeouts for outbound calls. Handle `SIGTERM`: stop accepting requests, drain, then exit.

## Logging and security
- Use pino with structured fields and a request id. Never log tokens, passwords or full request bodies.
- Parameterize every SQL query. Pin dependencies with a lockfile and run `npm audit` in CI.

## Tests
- Vitest, one test file per module, mock only network and time.
- Before finishing run `tsc --noEmit`, `eslint .` and `vitest run`.
