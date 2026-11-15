# Git Conflict Resolution

**Skill** · Git and releases

Resolves merge and rebase conflicts by working out what each side intended, combining them on purpose and proving the result with tests.

## Install

```bash
npx workspacetemplates add git-conflict-resolution
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/git-conflict-resolution/SKILL.md](claude-code/.claude/skills/git-conflict-resolution/SKILL.md) | `.claude/skills/git-conflict-resolution/SKILL.md` |
| Codex | [codex/.agents/skills/git-conflict-resolution/SKILL.md](codex/.agents/skills/git-conflict-resolution/SKILL.md) | `.agents/skills/git-conflict-resolution/SKILL.md` |
| Cursor | [cursor/.cursor/skills/git-conflict-resolution/SKILL.md](cursor/.cursor/skills/git-conflict-resolution/SKILL.md) | `.cursor/skills/git-conflict-resolution/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/git-conflict-resolution/SKILL.md](gemini-cli/.gemini/skills/git-conflict-resolution/SKILL.md) | `.gemini/skills/git-conflict-resolution/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/git-conflict-resolution/SKILL.md](copilot/.github/skills/git-conflict-resolution/SKILL.md) | `.github/skills/git-conflict-resolution/SKILL.md` |

## What it does

The usual agent move on a conflict is to pick one side and delete the other, which quietly loses someone's work. This skill reads the history behind both sides first, so the resolution keeps the purpose of each change, not just the text.

It resolves one file at a time, builds and tests before continuing, and never finishes a merge with conflict markers or failing checks.

## Use it when

- A merge or rebase stopped with conflicts in several files
- Two long-lived branches changed the same module
- A lockfile or generated file conflicts again and again
- You do not trust a resolution that only picked "ours" or "theirs"

## What it can access

- Runs git status, diff and log, plus merge --continue or rebase --continue
- Edits the conflicted files and runs your build and tests

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/git-conflict-resolution/
