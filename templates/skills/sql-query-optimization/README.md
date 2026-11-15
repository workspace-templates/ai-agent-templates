# SQL Query Optimization

**Skill** · Databases · postgresql

Speeds up slow PostgreSQL queries by reading EXPLAIN ANALYZE, fixing indexes and N+1 patterns, and rewriting only when results stay identical.

## Install

```bash
npx workspacetemplates add sql-query-optimization
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/sql-query-optimization/SKILL.md](claude-code/.claude/skills/sql-query-optimization/SKILL.md) | `.claude/skills/sql-query-optimization/SKILL.md` |
| Codex | [codex/.agents/skills/sql-query-optimization/SKILL.md](codex/.agents/skills/sql-query-optimization/SKILL.md) | `.agents/skills/sql-query-optimization/SKILL.md` |
| Cursor | [cursor/.cursor/skills/sql-query-optimization/SKILL.md](cursor/.cursor/skills/sql-query-optimization/SKILL.md) | `.cursor/skills/sql-query-optimization/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/sql-query-optimization/SKILL.md](gemini-cli/.gemini/skills/sql-query-optimization/SKILL.md) | `.gemini/skills/sql-query-optimization/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/sql-query-optimization/SKILL.md](copilot/.github/skills/sql-query-optimization/SKILL.md) | `.github/skills/sql-query-optimization/SKILL.md` |

## What it does

A slow query is a measurement problem before it is a writing problem. This skill starts from the real plan and row counts, names the node that costs the time, and proposes the one change that fixes it.

Every rewrite is checked against the original for identical results, and every index suggestion comes with its write cost, so a faster read does not quietly slow down your inserts.

## Use it when

- A page or job is slow and a query is the suspect
- EXPLAIN shows a sequential scan on a large table
- The ORM issues hundreds of queries for one request
- You want to know whether a new index is worth it

## What it can access

- Reads files in your project
- Runs EXPLAIN and SELECT queries against the database you point it at, never writes data

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/sql-query-optimization/
