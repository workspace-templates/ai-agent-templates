# Add Index

**Command** · Databases

Proposes an index for one slow query with plan evidence and the write cost, then creates it safely only when you approve.

## Install

```bash
npx workspacetemplates add add-index
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/commands/add-index.md](claude-code/.claude/commands/add-index.md) | `.claude/commands/add-index.md` |
| Codex | [codex/home/.codex/prompts/add-index.md](codex/home/.codex/prompts/add-index.md) | `~/.codex/prompts/add-index.md` |
| Cursor | [cursor/.cursor/skills/add-index/SKILL.md](cursor/.cursor/skills/add-index/SKILL.md) | `.cursor/skills/add-index/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/commands/add-index.toml](gemini-cli/.gemini/commands/add-index.toml) | `.gemini/commands/add-index.toml` |
| GitHub Copilot | [copilot/.github/skills/add-index/SKILL.md](copilot/.github/skills/add-index/SKILL.md) | `.github/skills/add-index/SKILL.md` |

## What it does

An index speeds one read and slows every write, so adding one by habit is a mistake. This command starts from the slow query, looks at its plan and existing indexes, and proposes the narrowest index that helps.

It states what the index costs in disk and write time, writes the migration with a non-blocking build where the database supports it, and waits for your approval.

## Use it when

- One endpoint or report is slow and you know the query
- The plan reads every row of a large table
- You suspect existing indexes are duplicates
- Preparing for traffic growth on a hot table

## What it can access

- Reads the query, schema and existing indexes
- Runs EXPLAIN on a read-only connection and creates a migration after approval

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/add-index/
