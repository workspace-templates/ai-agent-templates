# Seed Database

**Command** · Databases

Writes a seed script with realistic, properly related sample data that is safe to run twice and refuses to run in production.

## Install

```bash
npx workspacetemplates add seed-database
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/commands/seed-database.md](claude-code/.claude/commands/seed-database.md) | `.claude/commands/seed-database.md` |
| Codex | [codex/home/.codex/prompts/seed-database.md](codex/home/.codex/prompts/seed-database.md) | `~/.codex/prompts/seed-database.md` |
| Cursor | [cursor/.cursor/skills/seed-database/SKILL.md](cursor/.cursor/skills/seed-database/SKILL.md) | `.cursor/skills/seed-database/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/commands/seed-database.toml](gemini-cli/.gemini/commands/seed-database.toml) | `.gemini/commands/seed-database.toml` |
| GitHub Copilot | [copilot/.github/skills/seed-database/SKILL.md](copilot/.github/skills/seed-database/SKILL.md) | `.github/skills/seed-database/SKILL.md` |

## What it does

Empty tables make every screen look broken, and random strings make demos look fake. This command reads your schema and writes a seed script with believable names, valid foreign keys and a mix of normal and edge-case rows.

The script is idempotent, so running it again does not duplicate anything, and it stops itself when pointed at anything that looks like production.

## Use it when

- A new hire needs a database that works on day one
- You want realistic demo data for a screenshot or sales call
- Tests need the same starting rows every time
- A new feature needs related data across many tables

## What it can access

- Reads schema and migration files
- Creates a seed script and runs it only after you confirm the target database

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/seed-database/
