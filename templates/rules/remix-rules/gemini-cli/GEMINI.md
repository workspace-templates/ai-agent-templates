# Project rules: Remix

## Routes and data
- Each route file owns its data. Read data in `loader`, change data in `action`, and read it in the component with `useLoaderData<typeof loader>()`. Do not fetch initial data in `useEffect`.
- Use nested routes and `<Outlet />` for shared layouts. Name files with the flat-route dot convention and use pathless layouts for shared chrome.
- Return responses with `json` or plain objects, set `headers` for caching on the loader, and keep loaders fast; load independent data in parallel with `Promise.all` or defer slow data.

## Mutations
- Use `<Form>` for navigation-style submits and `useFetcher` for in-place updates. Forms must work without JavaScript.
- Validate form data on the server in the action with Zod, and return field errors with a 400 status; show them next to the inputs. Redirect after a successful write.
- Protect actions and loaders: check the session first and throw a redirect or a 401 response.

## Errors and UI state
- Export an `ErrorBoundary` from every route that can fail, and use `isRouteErrorResponse` to tell expected errors (404, 403) from crashes. Throw `Response` objects for expected cases.
- Use `useNavigation` for pending UI and optimistic updates.

## Server-only code
- Keep database and secrets in `*.server.ts` files so they never reach the client bundle.

## Before finishing
- Run `tsc`, the linter, the tests and `remix build`. Test loaders and actions as plain functions.
