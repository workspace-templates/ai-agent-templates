# Write Migration

**Command** · Databases

Drafts an up and down migration for the schema change you describe, then checks it for table locks, data loss and rollout order.

## Install

```bash
npx workspacetemplates add write-migration
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/commands/write-migration.md](claude-code/.claude/commands/write-migration.md) | `.claude/commands/write-migration.md` |
| Codex | [codex/home/.codex/prompts/write-migration.md](codex/home/.codex/prompts/write-migration.md) | `~/.codex/prompts/write-migration.md` |
| Cursor | [cursor/.cursor/skills/write-migration/SKILL.md](cursor/.cursor/skills/write-migration/SKILL.md) | `.cursor/skills/write-migration/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/commands/write-migration.toml](gemini-cli/.gemini/commands/write-migration.toml) | `.gemini/commands/write-migration.toml` |
| GitHub Copilot | [copilot/.github/skills/write-migration/SKILL.md](copilot/.github/skills/write-migration/SKILL.md) | `.github/skills/write-migration/SKILL.md` |

## What it does

A migration that works on an empty dev database can still lock a busy table for minutes. This command writes the migration in your project's own tool and format, and includes a matching step to undo it.

Before it finishes it reviews the change for table locks, data loss and the order of deploy versus migrate, and splits risky changes into safe stages.

## Use it when

- Changing columns on a table that is serving traffic
- Changing a column type or adding a NOT NULL constraint
- You want the down migration written and checked, too
- Backfilling data for a new field

## What it can access

- Reads schema files and recent migrations
- Creates new migration files only

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/write-migration/
