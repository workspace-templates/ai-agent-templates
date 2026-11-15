# MongoDB Rules

**Project rules** · Databases · mongodb

Project rules for MongoDB: schema design around queries, deliberate indexes, schema validation, projections and no unbounded arrays.

## Install

```bash
npx workspacetemplates add mongodb-rules
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/CLAUDE.md](claude-code/CLAUDE.md) | `CLAUDE.md` (merge) |
| Codex | [codex/AGENTS.md](codex/AGENTS.md) | `AGENTS.md` (merge) |
| Cursor | [cursor/.cursor/rules/mongodb-rules.mdc](cursor/.cursor/rules/mongodb-rules.mdc) | `.cursor/rules/mongodb-rules.mdc` |
| Gemini CLI | [gemini-cli/GEMINI.md](gemini-cli/GEMINI.md) | `GEMINI.md` (merge) |
| GitHub Copilot | [copilot/.github/copilot-instructions.md](copilot/.github/copilot-instructions.md) | `.github/copilot-instructions.md` (merge) |

## What it does

MongoDB does not force a schema, so the discipline has to come from the team. These rules ask an agent to design documents around how they are read and to say how each collection can grow.

They cover indexes, validation and query habits that keep a cluster fast as data accumulates.

## Use it when

- You are modeling collections for a new feature
- A document keeps growing because of an array of events
- Queries scan whole collections
- Different writers store the same field in different types

## What it can access

- Instructions only; it does not read or run anything by itself

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/mongodb-rules/
