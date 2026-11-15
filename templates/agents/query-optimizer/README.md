# Query Optimizer

**Subagent** · Databases

Subagent that tunes one slow SQL query from its EXPLAIN output and proposes an index or rewrite backed by before and after plans.

## Install

```bash
npx workspacetemplates add query-optimizer
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/agents/query-optimizer.md](claude-code/.claude/agents/query-optimizer.md) | `.claude/agents/query-optimizer.md` |
| Codex | [codex/.codex/agents/query-optimizer.toml](codex/.codex/agents/query-optimizer.toml) | `.codex/agents/query-optimizer.toml` |
| Cursor | [cursor/.cursor/agents/query-optimizer.md](cursor/.cursor/agents/query-optimizer.md) | `.cursor/agents/query-optimizer.md` |
| Gemini CLI | [gemini-cli/.gemini/agents/query-optimizer.md](gemini-cli/.gemini/agents/query-optimizer.md) | `.gemini/agents/query-optimizer.md` |
| GitHub Copilot | [copilot/.github/agents/query-optimizer.agent.md](copilot/.github/agents/query-optimizer.agent.md) | `.github/agents/query-optimizer.agent.md` |

## What it does

Slow queries get fixed by guessing: add an index, hope. This subagent starts from the execution plan. It finds the node where the time goes, explains why the planner chose it, and tests a change against the same data before recommending anything.

It runs only read statements and plain EXPLAIN, and writes proposed index or query changes as text for you to review. Every claim of improvement comes with the two plans side by side.

## Use it when

- One query dominates your slow query log
- A page got slower as a table grew
- You are unsure whether an index would be used
- A rewrite is proposed and you want proof it returns the same rows

## What it can access

- Reads schema files and migrations in your project
- Runs SELECT and EXPLAIN through your local database client
- Proposes index and query changes as text; applies none

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/query-optimizer/
