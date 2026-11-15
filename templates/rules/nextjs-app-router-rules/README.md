# Next.js App Router Rules

**Project rules** · Frontend · nextjs, react, typescript

Project rules for a Next.js App Router codebase: server components first, explicit caching, typed data boundaries and no client-side waterfalls.

## Install

```bash
npx workspacetemplates add nextjs-app-router-rules
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/CLAUDE.md](claude-code/CLAUDE.md) | `CLAUDE.md` (merge) |
| Codex | [codex/AGENTS.md](codex/AGENTS.md) | `AGENTS.md` (merge) |
| Cursor | [cursor/.cursor/rules/nextjs-app-router-rules.mdc](cursor/.cursor/rules/nextjs-app-router-rules.mdc) | `.cursor/rules/nextjs-app-router-rules.mdc` |
| Gemini CLI | [gemini-cli/GEMINI.md](gemini-cli/GEMINI.md) | `GEMINI.md` (merge) |
| GitHub Copilot | [copilot/.github/copilot-instructions.md](copilot/.github/copilot-instructions.md) | `.github/copilot-instructions.md` (merge) |

## What it does

Most App Router mistakes come from treating it like the old pages directory. These rules tell the agent where code belongs: server by default, a client component only when it needs state or a browser API.

They also cover caching, data fetching, forms and type safety, the places where generated code tends to make slow or leaky pages.

## Use it when

- You start a new Next.js project with the App Router
- An agent keeps adding use client to every file
- Pages are slow because of fetch waterfalls
- You want consistent routing and data conventions

## What it can access

- Instructions only; it does not read or run anything by itself

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/nextjs-app-router-rules/
