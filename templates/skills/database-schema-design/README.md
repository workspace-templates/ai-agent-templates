# Database Schema Design

**Skill** · Databases

Models entities, keys, relationships and constraints for a new feature, and states the reason for any denormalization before writing DDL.

## Install

```bash
npx workspacetemplates add database-schema-design
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/database-schema-design/SKILL.md](claude-code/.claude/skills/database-schema-design/SKILL.md) | `.claude/skills/database-schema-design/SKILL.md` |
| Codex | [codex/.agents/skills/database-schema-design/SKILL.md](codex/.agents/skills/database-schema-design/SKILL.md) | `.agents/skills/database-schema-design/SKILL.md` |
| Cursor | [cursor/.cursor/skills/database-schema-design/SKILL.md](cursor/.cursor/skills/database-schema-design/SKILL.md) | `.cursor/skills/database-schema-design/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/database-schema-design/SKILL.md](gemini-cli/.gemini/skills/database-schema-design/SKILL.md) | `.gemini/skills/database-schema-design/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/database-schema-design/SKILL.md](copilot/.github/skills/database-schema-design/SKILL.md) | `.github/skills/database-schema-design/SKILL.md` |

## What it does

A schema outlives the code around it, so mistakes in keys and constraints are the expensive ones. This skill makes the agent work from the questions the data must answer, then write the tables.

Constraints do the policing: foreign keys, not null, unique and check rules go in the database, where every writer has to obey them.

## Use it when

- You are starting a feature that needs new tables
- A design review asks why a column or table exists
- Data keeps ending up inconsistent between rows
- You are tempted to store a list or JSON blob in one column

## What it can access

- Reads your code and existing schema files
- Writes migration files, never runs them against a live database

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/database-schema-design/
