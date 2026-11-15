# SQL From Question

**Command** · Data and AI

Turns a plain-language question into a SQL query that fits your real schema, explains each part and runs only read-only statements.

## Install

```bash
npx workspacetemplates add sql-from-question
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/commands/sql-from-question.md](claude-code/.claude/commands/sql-from-question.md) | `.claude/commands/sql-from-question.md` |
| Codex | [codex/home/.codex/prompts/sql-from-question.md](codex/home/.codex/prompts/sql-from-question.md) | `~/.codex/prompts/sql-from-question.md` |
| Cursor | [cursor/.cursor/skills/sql-from-question/SKILL.md](cursor/.cursor/skills/sql-from-question/SKILL.md) | `.cursor/skills/sql-from-question/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/commands/sql-from-question.toml](gemini-cli/.gemini/commands/sql-from-question.toml) | `.gemini/commands/sql-from-question.toml` |
| GitHub Copilot | [copilot/.github/skills/sql-from-question/SKILL.md](copilot/.github/skills/sql-from-question/SKILL.md) | `.github/skills/sql-from-question/SKILL.md` |

## What it does

Asking a database a question usually starts with guessing table and column names. This command reads the actual schema in your project first, so the query it writes uses columns that exist.

You get the SQL, a line-by-line explanation, and the assumptions it made, such as how it treated nulls or time zones. It runs only SELECT statements, and only if you say yes.

## Use it when

- A teammate asks a business question and you need the numbers
- You do not remember how the tables join
- You want a query reviewed against the schema before running it
- Learning an unfamiliar database

## What it can access

- Reads migrations, models and schema files
- Runs read-only queries on a connected database only after you confirm

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/sql-from-question/
