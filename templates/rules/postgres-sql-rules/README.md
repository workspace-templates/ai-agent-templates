# Postgres SQL Rules

**Project rules** · Databases · postgres

Project rules for PostgreSQL SQL: naming, column types, constraints, indexes, reversible migrations and queries that stay safe and fast.

## Install

```bash
npx workspacetemplates add postgres-sql-rules
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/CLAUDE.md](claude-code/CLAUDE.md) | `CLAUDE.md` (merge) |
| Codex | [codex/AGENTS.md](codex/AGENTS.md) | `AGENTS.md` (merge) |
| Cursor | [cursor/.cursor/rules/postgres-sql-rules.mdc](cursor/.cursor/rules/postgres-sql-rules.mdc) | `.cursor/rules/postgres-sql-rules.mdc` |
| Gemini CLI | [gemini-cli/GEMINI.md](gemini-cli/GEMINI.md) | `GEMINI.md` (merge) |
| GitHub Copilot | [copilot/.github/copilot-instructions.md](copilot/.github/copilot-instructions.md) | `.github/copilot-instructions.md` (merge) |

## What it does

These rules set how an agent writes schemas and queries for PostgreSQL. The aim is a database that enforces its own rules, so the application cannot quietly store bad data.

They also cover migrations on live tables and common query mistakes, which are where most Postgres incidents start.

## Use it when

- You are designing tables or writing migrations for Postgres
- Generated schemas use text for everything and have no constraints
- A migration might lock a busy table
- Queries build SQL by joining strings

## What it can access

- Instructions only; it does not read or run anything by itself

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/postgres-sql-rules/
