# Database Expert

**Subagent** · Databases · postgres, sql

Designs schemas and queries, reads query plans and suggests indexes. Always asks before running anything that writes or alters data.

## Install

```bash
npx workspacetemplates add database-expert
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/agents/database-expert.md](claude-code/.claude/agents/database-expert.md) | `.claude/agents/database-expert.md` |
| Codex | [codex/.codex/agents/database-expert.toml](codex/.codex/agents/database-expert.toml) | `.codex/agents/database-expert.toml` |
| Cursor | [cursor/.cursor/agents/database-expert.md](cursor/.cursor/agents/database-expert.md) | `.cursor/agents/database-expert.md` |
| Gemini CLI | [gemini-cli/.gemini/agents/database-expert.md](gemini-cli/.gemini/agents/database-expert.md) | `.gemini/agents/database-expert.md` |
| GitHub Copilot | [copilot/.github/agents/database-expert.agent.md](copilot/.github/agents/database-expert.agent.md) | `.github/agents/database-expert.agent.md` |

## What it does

Schema and query problems are cheap to fix on paper and expensive in production. This subagent designs tables and constraints, rewrites slow queries, and explains EXPLAIN output in plain terms so you see why a plan is slow.

It treats your data as untouchable. Reads and plans run freely; any statement that changes data or structure is shown to you first and waits for your yes.

## Use it when

- You are designing tables for a new feature
- A query is slow and you do not know why
- You need a migration that will not lock a big table
- You want a second opinion on indexes and constraints

## What it can access

- Reads migrations, schema files and query code
- Runs read-only SQL and EXPLAIN through the shell
- Asks before any statement that writes

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/database-expert/
