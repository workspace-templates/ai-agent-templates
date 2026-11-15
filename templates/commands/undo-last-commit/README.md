# Undo Last Commit

**Command** · Git and releases

Undoes the most recent commit safely, keeps your work, and picks between soft reset, mixed reset and revert for your case.

## Install

```bash
npx workspacetemplates add undo-last-commit
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/commands/undo-last-commit.md](claude-code/.claude/commands/undo-last-commit.md) | `.claude/commands/undo-last-commit.md` |
| Codex | [codex/home/.codex/prompts/undo-last-commit.md](codex/home/.codex/prompts/undo-last-commit.md) | `~/.codex/prompts/undo-last-commit.md` |
| Cursor | [cursor/.cursor/skills/undo-last-commit/SKILL.md](cursor/.cursor/skills/undo-last-commit/SKILL.md) | `.cursor/skills/undo-last-commit/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/commands/undo-last-commit.toml](gemini-cli/.gemini/commands/undo-last-commit.toml) | `.gemini/commands/undo-last-commit.toml` |
| GitHub Copilot | [copilot/.github/skills/undo-last-commit/SKILL.md](copilot/.github/skills/undo-last-commit/SKILL.md) | `.github/skills/undo-last-commit/SKILL.md` |

## What it does

The right way to undo a commit depends on whether it was pushed and whether you want the changes back. Choosing wrong either loses work or rewrites shared history. This command checks the facts first and explains the choice.

Your changes stay on disk in every path it takes, and it asks before any step that discards them.

## Use it when

- You committed to the wrong branch
- The commit was made too early and you want to keep editing
- A pushed commit broke the build and must be reverted
- You committed files that should have been ignored

## What it can access

- Reads status, log and remote branches
- Runs a reset or revert on the current branch only after your confirmation

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/undo-last-commit/
