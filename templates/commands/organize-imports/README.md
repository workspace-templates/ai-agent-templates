# Organize Imports

**Command** · Code quality

Sorts, groups and prunes imports in your changed files to match the project convention, then proves nothing broke.

## Install

```bash
npx workspacetemplates add organize-imports
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/commands/organize-imports.md](claude-code/.claude/commands/organize-imports.md) | `.claude/commands/organize-imports.md` |
| Codex | [codex/home/.codex/prompts/organize-imports.md](codex/home/.codex/prompts/organize-imports.md) | `~/.codex/prompts/organize-imports.md` |
| Cursor | [cursor/.cursor/skills/organize-imports/SKILL.md](cursor/.cursor/skills/organize-imports/SKILL.md) | `.cursor/skills/organize-imports/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/commands/organize-imports.toml](gemini-cli/.gemini/commands/organize-imports.toml) | `.gemini/commands/organize-imports.toml` |
| GitHub Copilot | [copilot/.github/skills/organize-imports/SKILL.md](copilot/.github/skills/organize-imports/SKILL.md) | `.github/skills/organize-imports/SKILL.md` |

## What it does

Import blocks drift: unused names, mixed ordering, relative paths where an alias exists. This command learns the convention the project already follows and applies it to the files you changed, not the whole repo.

It prefers the formatter or linter the project has configured, falls back to hand edits only where needed, and shows the diff before anything else happens.

## Use it when

- Before opening a pull request with many touched files
- After a merge left import blocks messy
- When a new teammate keeps using a different import style
- After deleting a module and leaving dead imports behind

## What it can access

- Reads the git diff and tool configuration
- Edits import lines in changed files and runs the linter, type check and tests

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/organize-imports/
