# Python FastAPI Rules

**Project rules** · Backend and APIs · python, fastapi

Project rules for FastAPI services: typed Pydantic models, dependency injection, async-safe database access and consistent error responses.

## Install

```bash
npx workspacetemplates add python-fastapi-rules
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/CLAUDE.md](claude-code/CLAUDE.md) | `CLAUDE.md` (merge) |
| Codex | [codex/AGENTS.md](codex/AGENTS.md) | `AGENTS.md` (merge) |
| Cursor | [cursor/.cursor/rules/python-fastapi-rules.mdc](cursor/.cursor/rules/python-fastapi-rules.mdc) | `.cursor/rules/python-fastapi-rules.mdc` |
| Gemini CLI | [gemini-cli/GEMINI.md](gemini-cli/GEMINI.md) | `GEMINI.md` (merge) |
| GitHub Copilot | [copilot/.github/copilot-instructions.md](copilot/.github/copilot-instructions.md) | `.github/copilot-instructions.md` (merge) |

## What it does

FastAPI makes it easy to write an endpoint and just as easy to write one that blocks the event loop or leaks database rows. These rules fix the structure so every new route looks like the last one.

They name the layers, say where validation lives and spell out the testing and tooling the agent must run before it calls a change finished.

## Use it when

- You start a new FastAPI service
- Generated endpoints mix database code and request handling
- You see blocking calls inside async routes
- A team needs one error format for every route

## What it can access

- Instructions only; it does not read or run anything by itself

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/python-fastapi-rules/
