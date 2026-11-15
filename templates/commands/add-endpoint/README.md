# Add Endpoint

**Command** · Backend and APIs

Adds a new API endpoint that matches your existing routes, with validation, error handling, tests and docs in one pass.

## Install

```bash
npx workspacetemplates add add-endpoint
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/commands/add-endpoint.md](claude-code/.claude/commands/add-endpoint.md) | `.claude/commands/add-endpoint.md` |
| Codex | [codex/home/.codex/prompts/add-endpoint.md](codex/home/.codex/prompts/add-endpoint.md) | `~/.codex/prompts/add-endpoint.md` |
| Cursor | [cursor/.cursor/skills/add-endpoint/SKILL.md](cursor/.cursor/skills/add-endpoint/SKILL.md) | `.cursor/skills/add-endpoint/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/commands/add-endpoint.toml](gemini-cli/.gemini/commands/add-endpoint.toml) | `.gemini/commands/add-endpoint.toml` |
| GitHub Copilot | [copilot/.github/skills/add-endpoint/SKILL.md](copilot/.github/skills/add-endpoint/SKILL.md) | `.github/skills/add-endpoint/SKILL.md` |

## What it does

A new endpoint is rarely just a handler. It needs input checks, error shapes that match the rest of the API, tests and a line in the docs. This command finds how your project already does each of those and repeats the pattern.

It starts by reading a neighboring endpoint, so the new route lands in the right folder with the same naming, auth and response envelope. It shows the plan before it writes anything.

## Use it when

- You need a new route and want it to look like the ones next to it
- A feature ticket says "add GET /orders/:id/refunds"
- You keep forgetting to update tests or docs after adding a route
- A new teammate is unsure where handlers, schemas and services live

## What it can access

- Reads route, schema, test and doc files
- Creates and edits source files, then runs tests and lint

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/add-endpoint/
