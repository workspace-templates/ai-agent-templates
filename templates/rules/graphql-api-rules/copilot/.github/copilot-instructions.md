# Project rules: GraphQL API

## Schema design
- Types are PascalCase nouns, fields camelCase, enums SCREAMING_SNAKE_CASE. Name mutations as verb plus noun, such as `createInvoice`.
- Each mutation takes one `input` object and returns a payload type with the changed object and a list of user errors. Do not return bare booleans.
- Make fields non-null only when the server can always provide them; one failing nullable field then does not null its parent. Keep list items non-null.
- Use cursor-based connections for lists that can grow. Never reuse or repurpose a field; add a new one and mark the old with `@deprecated(reason:)`.
- Use custom scalars (`DateTime`, `URL`) over raw strings, and opaque global ids.

## Resolvers
- Resolvers stay thin and call services. Batch and cache per request with DataLoader; create the loaders in the context for every request.
- Check authorization in the service layer or with a directive, not only at the top-level field, so nested access is covered.

## Errors
- Expected failures (validation, not found, conflict) are typed data in the payload. Unexpected ones throw; mask the details in production and keep a code in extensions.

## Limits
- Set query depth and complexity limits, a maximum page size, request timeouts and persisted queries for public clients. Disable introspection for anonymous production traffic if the API is private.

## Tests
- Test operations end to end against the executable schema, and run a schema diff check in CI to catch breaking changes.

## Before finishing
Run the schema lint, the breaking change check and the test suite.
