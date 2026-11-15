# Project rules: SvelteKit

## Routing and data
- Routes live in `src/routes`. Fetch page data in `+page.server.ts` or `+page.ts` `load` functions, not in `onMount`. Use the provided `fetch` so cookies and relative URLs work during server rendering.
- Return plain serializable data from `load`. Use `depends` and `invalidate` when data must refresh.
- Put database access, secrets and private environment variables in `+server.ts`, `+page.server.ts` and `$lib/server/`. Import secrets only from `$env/static/private` or `$env/dynamic/private`, never from client code.

## Mutations
- Use form actions in `+page.server.ts` with real `<form method="POST">` elements and `use:enhance` for progressive enhancement. Validate with Zod, and return `fail(400, { errors })` rather than throwing for user mistakes.
- Use `error()` for 404 and 403 and `redirect()` after a successful mutation.

## Svelte 5
- Use runes: `$state`, `$derived`, `$effect` (only for side effects), `$props`. Use `{@render}` snippets instead of slots in new code.
- Keep components small, and put reusable code in `$lib` with the alias, not long relative paths.
- Handle auth in `hooks.server.ts` and set `event.locals`; check it in each protected load.

## Quality
- Use TypeScript with generated `$types`. Test logic with Vitest and flows with Playwright.
- Run `svelte-check`, the linter and the tests before finishing.
