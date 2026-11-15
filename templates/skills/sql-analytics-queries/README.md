# SQL Analytics Queries

**Skill** · Data and AI

Writes readable CTE-based SQL for funnels, cohorts and retention, with the grain stated up front. Use it for product and revenue analytics questions.

## Install

```bash
npx workspacetemplates add sql-analytics-queries
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/sql-analytics-queries/SKILL.md](claude-code/.claude/skills/sql-analytics-queries/SKILL.md) | `.claude/skills/sql-analytics-queries/SKILL.md` |
| Codex | [codex/.agents/skills/sql-analytics-queries/SKILL.md](codex/.agents/skills/sql-analytics-queries/SKILL.md) | `.agents/skills/sql-analytics-queries/SKILL.md` |
| Cursor | [cursor/.cursor/skills/sql-analytics-queries/SKILL.md](cursor/.cursor/skills/sql-analytics-queries/SKILL.md) | `.cursor/skills/sql-analytics-queries/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/sql-analytics-queries/SKILL.md](gemini-cli/.gemini/skills/sql-analytics-queries/SKILL.md) | `.gemini/skills/sql-analytics-queries/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/sql-analytics-queries/SKILL.md](copilot/.github/skills/sql-analytics-queries/SKILL.md) | `.github/skills/sql-analytics-queries/SKILL.md` |

## What it does

Analytics queries go wrong quietly: a join that multiplies rows, a funnel that counts users twice, a cohort off by one week. This skill writes each query as a chain of named steps, states the grain of every step, and checks totals against a simple count.

You get SQL a colleague can read top to bottom, plus a note on the assumptions behind it so the number can be defended.

## Use it when

- You need a signup to purchase funnel from raw event tables
- Leadership asks for weekly retention by signup cohort
- A dashboard query is one hundred lines of nested subqueries nobody dares touch
- Two reports give different user counts and you need to find out why

## What it can access

- Reads existing SQL files and schema definitions
- Writes new query files
- Can run read-only queries if a database client is available

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/sql-analytics-queries/
