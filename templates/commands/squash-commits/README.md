# Squash Commits

**Command** · Git and releases

Turns a messy branch history into a few clear commits with proper messages, showing the plan before rewriting anything.

## Install

```bash
npx workspacetemplates add squash-commits
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/commands/squash-commits.md](claude-code/.claude/commands/squash-commits.md) | `.claude/commands/squash-commits.md` |
| Codex | [codex/home/.codex/prompts/squash-commits.md](codex/home/.codex/prompts/squash-commits.md) | `~/.codex/prompts/squash-commits.md` |
| Cursor | [cursor/.cursor/skills/squash-commits/SKILL.md](cursor/.cursor/skills/squash-commits/SKILL.md) | `.cursor/skills/squash-commits/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/commands/squash-commits.toml](gemini-cli/.gemini/commands/squash-commits.toml) | `.gemini/commands/squash-commits.toml` |
| GitHub Copilot | [copilot/.github/skills/squash-commits/SKILL.md](copilot/.github/skills/squash-commits/SKILL.md) | `.github/skills/squash-commits/SKILL.md` |

## What it does

Work in progress leaves commits named "fix" or "again" that make review and later debugging harder. This command groups the commits on your branch into logical units and drafts a message for each.

It shows the plan and a backup point first, rewrites only after your yes, and warns you before touching commits that other people may already have.

## Use it when

- Before opening a pull request from a branch full of throwaway commits
- A review asked you to clean up the history
- You want one commit per logical change for an easy revert
- You are tidying a branch before a merge to main

## What it can access

- Reads branch history and diffs
- Rewrites local commits after you approve the plan, with a backup branch

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/squash-commits/
