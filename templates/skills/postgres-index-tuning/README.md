# Postgres Index Tuning

**Skill** · Databases · postgres

Reads EXPLAIN ANALYZE output for a slow Postgres query, then adds or drops indexes only when the measured timing proves a gain.

## Install

```bash
npx workspacetemplates add postgres-index-tuning
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/postgres-index-tuning/SKILL.md](claude-code/.claude/skills/postgres-index-tuning/SKILL.md) | `.claude/skills/postgres-index-tuning/SKILL.md` |
| Codex | [codex/.agents/skills/postgres-index-tuning/SKILL.md](codex/.agents/skills/postgres-index-tuning/SKILL.md) | `.agents/skills/postgres-index-tuning/SKILL.md` |
| Cursor | [cursor/.cursor/skills/postgres-index-tuning/SKILL.md](cursor/.cursor/skills/postgres-index-tuning/SKILL.md) | `.cursor/skills/postgres-index-tuning/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/postgres-index-tuning/SKILL.md](gemini-cli/.gemini/skills/postgres-index-tuning/SKILL.md) | `.gemini/skills/postgres-index-tuning/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/postgres-index-tuning/SKILL.md](copilot/.github/skills/postgres-index-tuning/SKILL.md) | `.github/skills/postgres-index-tuning/SKILL.md` |

## What it does

Guessing at indexes slows writes and rarely fixes the query. This skill has the agent read the real plan, find the node that burns the time, and change one thing at a time with before and after numbers.

It also hunts for indexes that never get used, since each one costs every insert and update.

## Use it when

- A query is slow in production but fine on your laptop
- EXPLAIN shows a sequential scan on a big table
- You inherited a table with a dozen indexes and no idea which matter
- Writes got slower after someone added indexes

## What it can access

- Reads your code and migrations
- Runs EXPLAIN and read-only catalog queries against the database you point it at

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/postgres-index-tuning/
