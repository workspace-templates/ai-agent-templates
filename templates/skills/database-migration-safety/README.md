# Database Migration Safety

**Skill** · Databases

Plans schema changes that run without downtime: expand and contract steps, safe backfills, lock checks and a tested rollback for each migration.

## Install

```bash
npx workspacetemplates add database-migration-safety
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/database-migration-safety/SKILL.md](claude-code/.claude/skills/database-migration-safety/SKILL.md) | `.claude/skills/database-migration-safety/SKILL.md` |
| Codex | [codex/.agents/skills/database-migration-safety/SKILL.md](codex/.agents/skills/database-migration-safety/SKILL.md) | `.agents/skills/database-migration-safety/SKILL.md` |
| Cursor | [cursor/.cursor/skills/database-migration-safety/SKILL.md](cursor/.cursor/skills/database-migration-safety/SKILL.md) | `.cursor/skills/database-migration-safety/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/database-migration-safety/SKILL.md](gemini-cli/.gemini/skills/database-migration-safety/SKILL.md) | `.gemini/skills/database-migration-safety/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/database-migration-safety/SKILL.md](copilot/.github/skills/database-migration-safety/SKILL.md) | `.github/skills/database-migration-safety/SKILL.md` |

## What it does

A migration that works on your laptop can lock a production table for minutes. This skill reviews or writes migrations with that in mind, splitting risky changes into steps that old and new application versions can both survive.

It treats the rollback as part of the change and asks for it up front, so a bad deploy becomes a quick revert and not an incident.

## Use it when

- Adding, renaming or dropping a column on a busy table
- Writing a backfill that touches millions of rows
- Changing a type, constraint or index in production
- Reviewing a migration file in a pull request

## What it can access

- Reads migration files and schema in your project
- Runs migrations only against a local or test database you specify

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/database-migration-safety/
