# Add Pagination

**Command** · Backend and APIs

Adds pagination to a list endpoint in the style your project already uses, with a stable order and updated tests.

## Install

```bash
npx workspacetemplates add add-pagination
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/commands/add-pagination.md](claude-code/.claude/commands/add-pagination.md) | `.claude/commands/add-pagination.md` |
| Codex | [codex/home/.codex/prompts/add-pagination.md](codex/home/.codex/prompts/add-pagination.md) | `~/.codex/prompts/add-pagination.md` |
| Cursor | [cursor/.cursor/skills/add-pagination/SKILL.md](cursor/.cursor/skills/add-pagination/SKILL.md) | `.cursor/skills/add-pagination/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/commands/add-pagination.toml](gemini-cli/.gemini/commands/add-pagination.toml) | `.gemini/commands/add-pagination.toml` |
| GitHub Copilot | [copilot/.github/skills/add-pagination/SKILL.md](copilot/.github/skills/add-pagination/SKILL.md) | `.github/skills/add-pagination/SKILL.md` |

## What it does

An unbounded list works in development and times out in production. This command adds paging to one list endpoint, choosing between page numbers and cursors based on what the codebase already does.

It insists on a deterministic sort, since paging over an unstable order skips or repeats rows. Tests cover the first page, the last page and an empty result.

## Use it when

- A list route returns every row and is getting slow
- The frontend needs infinite scroll or numbered pages
- You want new paging to match the convention of older routes
- Clients report duplicate rows between pages

## What it can access

- Reads the endpoint, query code and tests
- Edits the endpoint and test files, then runs tests

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/add-pagination/
