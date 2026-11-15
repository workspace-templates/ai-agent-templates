# Resolve Todos

**Command** · Code quality

Gathers to-do and fix-me comments, ranks them by risk and age, and fixes only the small, safe ones once you approve.

## Install

```bash
npx workspacetemplates add resolve-todos
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/commands/resolve-todos.md](claude-code/.claude/commands/resolve-todos.md) | `.claude/commands/resolve-todos.md` |
| Codex | [codex/home/.codex/prompts/resolve-todos.md](codex/home/.codex/prompts/resolve-todos.md) | `~/.codex/prompts/resolve-todos.md` |
| Cursor | [cursor/.cursor/skills/resolve-todos/SKILL.md](cursor/.cursor/skills/resolve-todos/SKILL.md) | `.cursor/skills/resolve-todos/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/commands/resolve-todos.toml](gemini-cli/.gemini/commands/resolve-todos.toml) | `.gemini/commands/resolve-todos.toml` |
| GitHub Copilot | [copilot/.github/skills/resolve-todos/SKILL.md](copilot/.github/skills/resolve-todos/SKILL.md) | `.github/skills/resolve-todos/SKILL.md` |

## What it does

Leftover note comments multiply until no one is sure which ones still count. This command gathers every marker in a folder, dates each with its last edit, and sorts them into fix now, ticket it, and delete because stale.

Only the small, low-risk items get fixed, and only after you pick them. Anything that needs a design decision stays in the report with a suggested owner.

## Use it when

- Ahead of a release, to clear out the pile of note comments
- After inheriting a codebase full of old markers
- During a cleanup day with an hour to spare
- When a FIXME might hide a real bug

## What it can access

- Reads the repository and blame data
- Edits files only for the items you approve

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/resolve-todos/
