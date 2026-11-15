# Index Advisor

**Subagent** · Databases · postgres

Read-only subagent that compares your Postgres query patterns with existing indexes and lists which to add, merge or drop.

## Install

```bash
npx workspacetemplates add index-advisor
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/agents/index-advisor.md](claude-code/.claude/agents/index-advisor.md) | `.claude/agents/index-advisor.md` |
| Codex | [codex/.codex/agents/index-advisor.toml](codex/.codex/agents/index-advisor.toml) | `.codex/agents/index-advisor.toml` |
| Cursor | [cursor/.cursor/agents/index-advisor.md](cursor/.cursor/agents/index-advisor.md) | `.cursor/agents/index-advisor.md` |
| Gemini CLI | [gemini-cli/.gemini/agents/index-advisor.md](gemini-cli/.gemini/agents/index-advisor.md) | `.gemini/agents/index-advisor.md` |
| GitHub Copilot | [copilot/.github/agents/index-advisor.agent.md](copilot/.github/agents/index-advisor.agent.md) | `.github/agents/index-advisor.agent.md` |

## What it does

Indexes pile up. Some were added for a query that no longer exists, others overlap, and the one the hot path needs is missing. This subagent collects the real query patterns from your code and statistics views, then compares them with the indexes that exist.

The output is a short list of recommended additions and removals, each with the evidence behind it. It reads and runs catalog queries only, and every CREATE or DROP statement is written out for you to decide on.

## Use it when

- Writes are slow and the table has many indexes
- You want to know which indexes are never used
- A new feature adds queries and you need to plan its indexes
- Reviewing a database nobody has tuned in years

## What it can access

- Reads application code and schema files
- Runs read-only catalog queries through psql
- Writes no changes; every statement is a proposal

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/index-advisor/
