# MySQL Rules

**Project rules** · Databases · mysql

Project rules for MySQL 8: InnoDB and utf8mb4 defaults, careful indexes, online migrations, short transactions and parameterized queries.

## Install

```bash
npx workspacetemplates add mysql-rules
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/CLAUDE.md](claude-code/CLAUDE.md) | `CLAUDE.md` (merge) |
| Codex | [codex/AGENTS.md](codex/AGENTS.md) | `AGENTS.md` (merge) |
| Cursor | [cursor/.cursor/rules/mysql-rules.mdc](cursor/.cursor/rules/mysql-rules.mdc) | `.cursor/rules/mysql-rules.mdc` |
| Gemini CLI | [gemini-cli/GEMINI.md](gemini-cli/GEMINI.md) | `GEMINI.md` (merge) |
| GitHub Copilot | [copilot/.github/copilot-instructions.md](copilot/.github/copilot-instructions.md) | `.github/copilot-instructions.md` (merge) |

## What it does

MySQL has a few old defaults that cause trouble later, such as weak character sets and loose handling of bad data. These rules set the safe choices up front so an agent does not repeat them.

They also describe how to change tables that are in use and how to write queries that the optimizer can serve from an index.

## Use it when

- You are creating tables or migrations for MySQL or MariaDB
- Emoji or accented text is being stored incorrectly
- A schema change locked a busy table
- Queries are slow and nobody has looked at the plan

## What it can access

- Instructions only; it does not read or run anything by itself

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/mysql-rules/
