# Git Sync

**Command** · Git and releases

Brings your current branch up to date with its upstream by rebase or merge, resolves small conflicts and reports what changed.

## Install

```bash
npx workspacetemplates add git-sync
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/commands/git-sync.md](claude-code/.claude/commands/git-sync.md) | `.claude/commands/git-sync.md` |
| Codex | [codex/home/.codex/prompts/git-sync.md](codex/home/.codex/prompts/git-sync.md) | `~/.codex/prompts/git-sync.md` |
| Cursor | [cursor/.cursor/skills/git-sync/SKILL.md](cursor/.cursor/skills/git-sync/SKILL.md) | `.cursor/skills/git-sync/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/commands/git-sync.toml](gemini-cli/.gemini/commands/git-sync.toml) | `.gemini/commands/git-sync.toml` |
| GitHub Copilot | [copilot/.github/skills/git-sync/SKILL.md](copilot/.github/skills/git-sync/SKILL.md) | `.github/skills/git-sync/SKILL.md` |

## What it does

Falling behind the main branch is routine, and so is picking the wrong way to catch up. This command checks the state of your branch, chooses rebase or merge based on whether the branch is already shared, and does the update.

Simple conflicts are resolved with an explanation. Anything involving real logic is shown to you instead of guessed.

## Use it when

- Your feature branch is behind main and the pull request shows conflicts
- You come back to a branch after a few days
- You are unsure whether to rebase or merge
- You want a summary of what others changed while you worked

## What it can access

- Runs git fetch, rebase or merge on the current branch
- Edits conflicted files and may stash with your approval

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/git-sync/
