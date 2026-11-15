# Remove Duplication

**Command** · Code quality

Finds duplicated logic in one area and merges it only where the copies truly belong together, with tests proving behavior held.

## Install

```bash
npx workspacetemplates add remove-duplication
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/commands/remove-duplication.md](claude-code/.claude/commands/remove-duplication.md) | `.claude/commands/remove-duplication.md` |
| Codex | [codex/home/.codex/prompts/remove-duplication.md](codex/home/.codex/prompts/remove-duplication.md) | `~/.codex/prompts/remove-duplication.md` |
| Cursor | [cursor/.cursor/skills/remove-duplication/SKILL.md](cursor/.cursor/skills/remove-duplication/SKILL.md) | `.cursor/skills/remove-duplication/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/commands/remove-duplication.toml](gemini-cli/.gemini/commands/remove-duplication.toml) | `.gemini/commands/remove-duplication.toml` |
| GitHub Copilot | [copilot/.github/skills/remove-duplication/SKILL.md](copilot/.github/skills/remove-duplication/SKILL.md) | `.github/skills/remove-duplication/SKILL.md` |

## What it does

Not every repeated block should be merged: two pieces of code can look alike and still change for different reasons. This command finds the copies, compares them line by line and judges whether they share one reason to change.

Real duplicates are merged into one helper with a clear name. Coincidental ones stay separate, each with the reason noted, so you do not end up with an abstraction nobody can follow.

## Use it when

- One bug fix had to be repeated in three files
- Two services share copy-pasted validation
- You are about to add a fourth variation of the same function
- Review comments keep saying this looks like that other file

## What it can access

- Reads and searches the named area
- Edits source files and adds tests for the merged code

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/remove-duplication/
