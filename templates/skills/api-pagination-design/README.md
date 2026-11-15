# API Pagination Design

**Skill** · Backend and APIs

Picks cursor or offset pagination for a list endpoint, then implements stable ordering, hard limits and next links that never skip or repeat rows.

## Install

```bash
npx workspacetemplates add api-pagination-design
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/api-pagination-design/SKILL.md](claude-code/.claude/skills/api-pagination-design/SKILL.md) | `.claude/skills/api-pagination-design/SKILL.md` |
| Codex | [codex/.agents/skills/api-pagination-design/SKILL.md](codex/.agents/skills/api-pagination-design/SKILL.md) | `.agents/skills/api-pagination-design/SKILL.md` |
| Cursor | [cursor/.cursor/skills/api-pagination-design/SKILL.md](cursor/.cursor/skills/api-pagination-design/SKILL.md) | `.cursor/skills/api-pagination-design/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/api-pagination-design/SKILL.md](gemini-cli/.gemini/skills/api-pagination-design/SKILL.md) | `.gemini/skills/api-pagination-design/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/api-pagination-design/SKILL.md](copilot/.github/skills/api-pagination-design/SKILL.md) | `.github/skills/api-pagination-design/SKILL.md` |

## What it does

Offset pagination looks fine in a demo and then returns duplicates and gaps once rows are inserted during paging, or crawls once the offset reaches the millions. This skill has the agent look at the actual table and traffic before choosing.

It then implements the choice end to end: the query, the index that backs it, the limit cap and the response links. A test inserts rows between page requests to prove the pages stay consistent.

## Use it when

- A list endpoint gets slower the deeper clients page
- Clients report duplicate or missing items while scrolling
- You are adding a new collection endpoint
- An export job needs to walk a table of millions of rows

## What it can access

- Reads source files and schema or migration files
- Runs read-only EXPLAIN queries only if you point it at a database
- Edits queries and adds an index migration when approved

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/api-pagination-design/
