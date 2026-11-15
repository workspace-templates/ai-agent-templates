# Nuxt Rules

**Project rules** · Frontend · nuxt, vue

Project rules for Nuxt 3: directory conventions, auto imports, useFetch data loading, Nitro server routes and per-route rendering modes.

## Install

```bash
npx workspacetemplates add nuxt-rules
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/CLAUDE.md](claude-code/CLAUDE.md) | `CLAUDE.md` (merge) |
| Codex | [codex/AGENTS.md](codex/AGENTS.md) | `AGENTS.md` (merge) |
| Cursor | [cursor/.cursor/rules/nuxt-rules.mdc](cursor/.cursor/rules/nuxt-rules.mdc) | `.cursor/rules/nuxt-rules.mdc` |
| Gemini CLI | [gemini-cli/GEMINI.md](gemini-cli/GEMINI.md) | `GEMINI.md` (merge) |
| GitHub Copilot | [copilot/.github/copilot-instructions.md](copilot/.github/copilot-instructions.md) | `.github/copilot-instructions.md` (merge) |

## What it does

These rules help an agent follow the conventions Nuxt already provides, instead of rebuilding them. Pages, layouts, composables and server routes each have a folder, and the agent is told to use it.

They also cover data loading and rendering choices, where mistakes cause duplicate requests, hydration errors or secrets reaching the browser.

## Use it when

- You build pages in a Nuxt 3 app with an agent
- Data is fetched twice on the server and client
- Hydration warnings appear in the console
- You need a server route or a mixed rendering strategy

## What it can access

- Instructions only; the agent runs Nuxt commands only when you ask it to

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/nuxt-rules/
