# Prisma Schema Workflow

**Skill** · Databases · typescript, prisma

Evolves a Prisma schema safely with named migrations, seed scripts, type-safe queries and a check for destructive changes.

## Install

```bash
npx workspacetemplates add prisma-schema-workflow
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/prisma-schema-workflow/SKILL.md](claude-code/.claude/skills/prisma-schema-workflow/SKILL.md) | `.claude/skills/prisma-schema-workflow/SKILL.md` |
| Codex | [codex/.agents/skills/prisma-schema-workflow/SKILL.md](codex/.agents/skills/prisma-schema-workflow/SKILL.md) | `.agents/skills/prisma-schema-workflow/SKILL.md` |
| Cursor | [cursor/.cursor/skills/prisma-schema-workflow/SKILL.md](cursor/.cursor/skills/prisma-schema-workflow/SKILL.md) | `.cursor/skills/prisma-schema-workflow/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/prisma-schema-workflow/SKILL.md](gemini-cli/.gemini/skills/prisma-schema-workflow/SKILL.md) | `.gemini/skills/prisma-schema-workflow/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/prisma-schema-workflow/SKILL.md](copilot/.github/skills/prisma-schema-workflow/SKILL.md) | `.github/skills/prisma-schema-workflow/SKILL.md` |

## What it does

Prisma makes schema changes easy to write and easy to get wrong. This skill gives the agent a repeatable loop: edit the schema, generate a named migration, read the SQL it produced, then update code and seeds.

The step most people skip is reading the generated SQL, which is where dropped columns and table rewrites show up.

## Use it when

- You are adding or changing models in a Prisma project
- A migration drifted from the database or fails to apply
- You need seed data for development and tests
- Queries return too much data or lose type safety

## What it can access

- Reads and edits schema, migrations and TypeScript files
- Runs Prisma CLI commands against your development database

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/prisma-schema-workflow/
