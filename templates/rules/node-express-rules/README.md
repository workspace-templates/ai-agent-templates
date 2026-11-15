# Node Express Rules

**Project rules** · Backend and APIs · node, express

Project rules for Express services: routes, services and data layers, schema validation, central error middleware, structured logs and supertest.

## Install

```bash
npx workspacetemplates add node-express-rules
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/CLAUDE.md](claude-code/CLAUDE.md) | `CLAUDE.md` (merge) |
| Codex | [codex/AGENTS.md](codex/AGENTS.md) | `AGENTS.md` (merge) |
| Cursor | [cursor/.cursor/rules/node-express-rules.mdc](cursor/.cursor/rules/node-express-rules.mdc) | `.cursor/rules/node-express-rules.mdc` |
| Gemini CLI | [gemini-cli/GEMINI.md](gemini-cli/GEMINI.md) | `GEMINI.md` (merge) |
| GitHub Copilot | [copilot/.github/copilot-instructions.md](copilot/.github/copilot-instructions.md) | `.github/copilot-instructions.md` (merge) |

## What it does

Express does not impose structure, so a service often grows into route files that validate, query and format in one place. These rules separate those jobs and give errors a single exit.

They also cover the production basics an agent forgets: request validation, structured logging, graceful shutdown and tests that never open a real port.

## Use it when

- You are building or extending an Express API
- Handlers throw unhandled promise rejections
- Error responses come in several shapes
- Server code and app setup are tangled together

## What it can access

- Instructions only; nothing runs unless the agent acts on them

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/node-express-rules/
