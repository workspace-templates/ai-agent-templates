# Branch Cleanup

**Command** · Git and releases

Lists merged and stale local branches, shows exactly what would be removed and deletes only the ones you approve.

## Install

```bash
npx workspacetemplates add branch-cleanup
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/commands/branch-cleanup.md](claude-code/.claude/commands/branch-cleanup.md) | `.claude/commands/branch-cleanup.md` |
| Codex | [codex/home/.codex/prompts/branch-cleanup.md](codex/home/.codex/prompts/branch-cleanup.md) | `~/.codex/prompts/branch-cleanup.md` |
| Cursor | [cursor/.cursor/skills/branch-cleanup/SKILL.md](cursor/.cursor/skills/branch-cleanup/SKILL.md) | `.cursor/skills/branch-cleanup/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/commands/branch-cleanup.toml](gemini-cli/.gemini/commands/branch-cleanup.toml) | `.gemini/commands/branch-cleanup.toml` |
| GitHub Copilot | [copilot/.github/skills/branch-cleanup/SKILL.md](copilot/.github/skills/branch-cleanup/SKILL.md) | `.github/skills/branch-cleanup/SKILL.md` |

## What it does

Old branches pile up until nobody knows which ones still matter. This command separates branches already merged from those that are simply old, and shows unpushed work that would be lost.

Nothing is deleted before you confirm the list. Protected branches such as main, develop and the current branch are never touched.

## Use it when

- `git branch` scrolls past one screen
- After a release when many feature branches are merged
- You are handing over a repository and want it tidy
- You want to know which stale branches hold unmerged commits

## What it can access

- Reads branch and commit data
- Deletes local branches only after you confirm the list

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/branch-cleanup/
