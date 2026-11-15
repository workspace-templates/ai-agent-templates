# Project rules: Next.js App Router

## Components
- Every component is a server component unless it needs state, effects, event handlers or browser APIs. Add `'use client'` only in that leaf file, never in a layout or page just for convenience.
- Pass serializable props from server to client components. Never pass functions, class instances or secrets.
- Keep `page.tsx` and `layout.tsx` thin; put logic in `lib/` and UI in `components/`.

## Data
- Fetch on the server, in the component that needs the data. Start independent requests together with `Promise.all` to avoid waterfalls. Wrap slow parts in `<Suspense>` with a loading fallback.
- State caching on purpose: set `revalidate`, tags or `cache: 'no-store'` explicitly; do not rely on defaults.
- Mutations use Server Actions or route handlers. Validate every input with zod on the server and check the user's permission there, not in the UI.
- Read secrets and environment variables only in server code. Only `NEXT_PUBLIC_` values may reach the browser.

## Routing and files
- Use route groups for layout sections, `loading.tsx` and `error.tsx` for states, `notFound()` for missing records.
- Use `next/image`, `next/font` and `generateMetadata` for every public page.

## TypeScript
- Strict mode. No `any`; type API responses from a zod schema and infer the type.

## Done means
`npm run lint`, `tsc --noEmit` and `next build` pass without new warnings.
