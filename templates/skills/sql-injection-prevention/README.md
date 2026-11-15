# SQL Injection Prevention

**Skill** · Security

Finds queries built from strings and rewrites them as parameterized statements, with allowlists for column names, sort order and other identifiers.

## Install

```bash
npx workspacetemplates add sql-injection-prevention
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/sql-injection-prevention/SKILL.md](claude-code/.claude/skills/sql-injection-prevention/SKILL.md) | `.claude/skills/sql-injection-prevention/SKILL.md` |
| Codex | [codex/.agents/skills/sql-injection-prevention/SKILL.md](codex/.agents/skills/sql-injection-prevention/SKILL.md) | `.agents/skills/sql-injection-prevention/SKILL.md` |
| Cursor | [cursor/.cursor/skills/sql-injection-prevention/SKILL.md](cursor/.cursor/skills/sql-injection-prevention/SKILL.md) | `.cursor/skills/sql-injection-prevention/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/sql-injection-prevention/SKILL.md](gemini-cli/.gemini/skills/sql-injection-prevention/SKILL.md) | `.gemini/skills/sql-injection-prevention/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/sql-injection-prevention/SKILL.md](copilot/.github/skills/sql-injection-prevention/SKILL.md) | `.github/skills/sql-injection-prevention/SKILL.md` |

## What it does

A single concatenated query is enough to expose a whole database. This skill hunts for them across ORMs, query builders and raw drivers, since "we use an ORM" does not rule out raw fragments hiding in a search or reporting function.

Values become bound parameters. Parts that cannot be parameters, such as table names and ORDER BY columns, are mapped through a fixed allowlist. Each change gets a test that tries a hostile string.

## Use it when

- A code review found string interpolation in a query
- You maintain a legacy app with hand-written SQL
- Search, filter and sort features build dynamic queries
- You must show an auditor that injection was addressed

## What it can access

- Reads and edits source files containing queries
- Runs your tests; never connects to a production database

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/sql-injection-prevention/
