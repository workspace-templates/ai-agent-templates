# SQL Analyst

**Subagent** · Data and AI

Subagent that answers a business question with SQL against your database and returns the query, the result and the caveats.

## Install

```bash
npx workspacetemplates add sql-analyst
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/agents/sql-analyst.md](claude-code/.claude/agents/sql-analyst.md) | `.claude/agents/sql-analyst.md` |
| Codex | [codex/.codex/agents/sql-analyst.toml](codex/.codex/agents/sql-analyst.toml) | `.codex/agents/sql-analyst.toml` |
| Cursor | [cursor/.cursor/agents/sql-analyst.md](cursor/.cursor/agents/sql-analyst.md) | `.cursor/agents/sql-analyst.md` |
| Gemini CLI | [gemini-cli/.gemini/agents/sql-analyst.md](gemini-cli/.gemini/agents/sql-analyst.md) | `.gemini/agents/sql-analyst.md` |
| GitHub Copilot | [copilot/.github/agents/sql-analyst.agent.md](copilot/.github/agents/sql-analyst.agent.md) | `.github/agents/sql-analyst.agent.md` |

## What it does

Business questions rarely arrive as table names. This subagent turns a question such as "how many customers churned last quarter" into a precise definition, inspects the schema, writes the query and runs it read-only.

It always shows its work: the definition it chose, the exact SQL, a small result table, and the assumptions that could change the number. When two readings of the question give different answers, it says so.

## Use it when

- A teammate asks for a number and you need the query behind it
- You do not know which table holds the data you want
- A dashboard figure looks wrong and you want to recompute it
- You want one-off analysis without opening a SQL client

## What it can access

- Reads project files such as schema and migrations
- Runs read-only SQL through your local database client
- Returns aggregated results, not raw personal data

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/sql-analyst/
