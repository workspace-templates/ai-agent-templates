# Schema Reviewer

**Subagent** · Databases

Read-only subagent that reviews a database schema for missing constraints, poor column types, naming drift and normalization problems.

## Install

```bash
npx workspacetemplates add schema-reviewer
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/agents/schema-reviewer.md](claude-code/.claude/agents/schema-reviewer.md) | `.claude/agents/schema-reviewer.md` |
| Codex | [codex/.codex/agents/schema-reviewer.toml](codex/.codex/agents/schema-reviewer.toml) | `.codex/agents/schema-reviewer.toml` |
| Cursor | [cursor/.cursor/agents/schema-reviewer.md](cursor/.cursor/agents/schema-reviewer.md) | `.cursor/agents/schema-reviewer.md` |
| Gemini CLI | [gemini-cli/.gemini/agents/schema-reviewer.md](gemini-cli/.gemini/agents/schema-reviewer.md) | `.gemini/agents/schema-reviewer.md` |
| GitHub Copilot | [copilot/.github/agents/schema-reviewer.agent.md](copilot/.github/agents/schema-reviewer.agent.md) | `.github/agents/schema-reviewer.agent.md` |

## What it does

A schema outlives the code that first wrote to it, so its mistakes are expensive. This subagent reads your migrations or DDL and checks what the database itself should be enforcing: keys, nullability, uniqueness, foreign keys and sensible types.

It never touches the database or the files. You receive findings sorted by how hard they will be to fix later, because a missing constraint is cheap today and painful after the data goes bad.

## Use it when

- Before the first production deploy of a new data model
- A migration adds tables and you want a design review
- Bad data keeps appearing and you suspect missing constraints
- You are inheriting a database nobody documented

## What it can access

- Reads migration, model and SQL files in your project
- Cannot edit files or connect to a database

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/schema-reviewer/
