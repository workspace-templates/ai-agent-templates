# Project rules: TypeScript library

## Layout
- Source in `src/`, one `src/index.ts` that re-exports the public API. Anything not re-exported is private; do not add deep-import paths.
- Build with tsup, tsdown or tsc to `dist/`. Commit no build output.

## Package contract
- Describe entry points in the `exports` map with `types`, `import` and `require` conditions (types first). Keep `main` and `types` as fallbacks.
- Set `"sideEffects": false` when true, and list `files` explicitly so only `dist`, README and license ship.
- Dependencies are for runtime needs only. Frameworks the user already has go in `peerDependencies`.

## Types
- Enable `strict` and `declaration`. Prefer `unknown` over `any`, and never leak internal types in signatures.
- Export types with `export type`. Use `import type` inside the library.

## Versioning
- Removing or narrowing an export, or changing a signature, is a major bump. New optional features are minor. Record every change in CHANGELOG.md.
- Mark old APIs with `@deprecated` and a replacement before deleting them.

## Tests
- Unit tests with Vitest beside the code. Add a smoke test that imports the built package the way a consumer would.
- Run `npx publint` and `npx @arethetypeswrong/cli --pack` to catch export mistakes.

## Before finishing
Run `npm run lint`, `npm run typecheck`, `npm test` and `npm run build`. Report any change to the public API explicitly.
