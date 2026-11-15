# ORM Query Review

**Skill** · Databases

Reviews ORM code for N+1 queries, lazy loading, over-fetching and missing transactions, and proves each finding by counting queries.

## Install

```bash
npx workspacetemplates add orm-query-review
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/orm-query-review/SKILL.md](claude-code/.claude/skills/orm-query-review/SKILL.md) | `.claude/skills/orm-query-review/SKILL.md` |
| Codex | [codex/.agents/skills/orm-query-review/SKILL.md](codex/.agents/skills/orm-query-review/SKILL.md) | `.agents/skills/orm-query-review/SKILL.md` |
| Cursor | [cursor/.cursor/skills/orm-query-review/SKILL.md](cursor/.cursor/skills/orm-query-review/SKILL.md) | `.cursor/skills/orm-query-review/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/orm-query-review/SKILL.md](gemini-cli/.gemini/skills/orm-query-review/SKILL.md) | `.gemini/skills/orm-query-review/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/orm-query-review/SKILL.md](copilot/.github/skills/orm-query-review/SKILL.md) | `.github/skills/orm-query-review/SKILL.md` |

## What it does

ORMs hide the SQL, which is how a list page ends up running 400 queries. This skill makes the agent surface the real statements, count them and trace each repeated one back to a line of code.

Fixes stay small: eager loading in the right place, selecting only needed columns, and wrapping related writes in one transaction.

## Use it when

- A page or endpoint got slower as data grew
- Logs show the same query repeated in a loop
- A multi-step write left half its data after an error
- You are reviewing a PR that touches models and queries

## What it can access

- Reads and edits your code
- Runs the app or tests with query logging on

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/orm-query-review/
