# Migration Writer

**Subagent** · Databases

Subagent that writes a reversible database migration for a described change and checks it against the current schema before finishing.

## Install

```bash
npx workspacetemplates add migration-writer
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/agents/migration-writer.md](claude-code/.claude/agents/migration-writer.md) | `.claude/agents/migration-writer.md` |
| Codex | [codex/.codex/agents/migration-writer.toml](codex/.codex/agents/migration-writer.toml) | `.codex/agents/migration-writer.toml` |
| Cursor | [cursor/.cursor/agents/migration-writer.md](cursor/.cursor/agents/migration-writer.md) | `.cursor/agents/migration-writer.md` |
| Gemini CLI | [gemini-cli/.gemini/agents/migration-writer.md](gemini-cli/.gemini/agents/migration-writer.md) | `.gemini/agents/migration-writer.md` |
| GitHub Copilot | [copilot/.github/agents/migration-writer.agent.md](copilot/.github/agents/migration-writer.agent.md) | `.github/agents/migration-writer.agent.md` |

## What it does

A migration that passes on an empty dev database may block writes to a busy production table. This subagent reads your existing migrations and schema, matches your migration tool's conventions, and writes the new migration with both an up and a down step.

It checks the change against the schema it found and warns about operations that rewrite or lock large tables. It never applies the migration to a shared database; that stays with you.

## Use it when

- You need to add, rename or drop a column and want it done safely
- A change must backfill existing rows without locking the table
- You want the rollback step written at the same time as the migration
- Your team wants new migrations to follow one consistent style

## What it can access

- Reads existing migrations and schema files
- Creates one new migration file
- Runs the migration only against a local scratch database

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/migration-writer/
