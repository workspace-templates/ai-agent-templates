# MySQL Query Tuning

**Skill** · Databases · mysql

Finds slow MySQL queries in the slow log, reads EXPLAIN, and fixes them with correctly ordered composite indexes and query rewrites.

## Install

```bash
npx workspacetemplates add mysql-query-tuning
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/mysql-query-tuning/SKILL.md](claude-code/.claude/skills/mysql-query-tuning/SKILL.md) | `.claude/skills/mysql-query-tuning/SKILL.md` |
| Codex | [codex/.agents/skills/mysql-query-tuning/SKILL.md](codex/.agents/skills/mysql-query-tuning/SKILL.md) | `.agents/skills/mysql-query-tuning/SKILL.md` |
| Cursor | [cursor/.cursor/skills/mysql-query-tuning/SKILL.md](cursor/.cursor/skills/mysql-query-tuning/SKILL.md) | `.cursor/skills/mysql-query-tuning/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/mysql-query-tuning/SKILL.md](gemini-cli/.gemini/skills/mysql-query-tuning/SKILL.md) | `.gemini/skills/mysql-query-tuning/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/mysql-query-tuning/SKILL.md](copilot/.github/skills/mysql-query-tuning/SKILL.md) | `.github/skills/mysql-query-tuning/SKILL.md` |

## What it does

MySQL tuning pays off when you start from the slow log, not from the query someone suspects. This skill ranks queries by total time, then fixes the worst ones with indexes and rewrites you can verify.

Special attention goes to column order in composite indexes, which decides whether an index helps at all.

## Use it when

- The database CPU is high and nobody knows which query causes it
- A page that lists records got slow as the table grew
- EXPLAIN shows type ALL or Using filesort
- You need to decide the column order for a composite index

## What it can access

- Reads code and query logs you provide
- Runs EXPLAIN and read-only statements on the database you connect it to

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/mysql-query-tuning/
