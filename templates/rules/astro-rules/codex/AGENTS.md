# Project rules: Astro

## Structure
- Pages live in `src/pages`, shared layout in `src/layouts`, reusable markup in `.astro` components. Use a React, Svelte or Vue component only when it needs client state.
- Keep TypeScript strict. Extend `astro/tsconfigs/strict` and type component props with an `interface Props`.

## Islands and hydration
- Default to no client JavaScript. Choose the lightest directive: `client:visible` for below-the-fold widgets, `client:idle` for low priority, `client:only` only when SSR cannot work. Justify any `client:load` in a comment.
- Pass serializable props only. Share state between islands with a small store, not through the DOM.

## Content and data
- Put Markdown, MDX and JSON in content collections with a Zod schema in `src/content.config.ts`. Read them with `getCollection`, never by importing paths by hand.
- Fetch remote data in frontmatter at build time. Mark a route `prerender = false` only when it truly needs request data.

## Images and assets
- Use `<Image />` or `<Picture />` from `astro:assets` with width, height and alt text. Keep originals in `src`, not `public`.
- Scope styles inside the component; avoid global CSS except a tokens file.

## Before finishing
- Run `astro check`, then `astro build`. Fix every type error and broken link; do not suppress with `any`.
- Add a sitemap and a canonical URL in the shared layout.
