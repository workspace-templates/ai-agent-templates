# Git History Cleanup

**Skill** · Git and releases

Turns a noisy branch of wip and fixup commits into a short, logical series with interactive rebase, with a backup and a tree-equality check.

## Install

```bash
npx workspacetemplates add git-history-cleanup
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/git-history-cleanup/SKILL.md](claude-code/.claude/skills/git-history-cleanup/SKILL.md) | `.claude/skills/git-history-cleanup/SKILL.md` |
| Codex | [codex/.agents/skills/git-history-cleanup/SKILL.md](codex/.agents/skills/git-history-cleanup/SKILL.md) | `.agents/skills/git-history-cleanup/SKILL.md` |
| Cursor | [cursor/.cursor/skills/git-history-cleanup/SKILL.md](cursor/.cursor/skills/git-history-cleanup/SKILL.md) | `.cursor/skills/git-history-cleanup/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/git-history-cleanup/SKILL.md](gemini-cli/.gemini/skills/git-history-cleanup/SKILL.md) | `.gemini/skills/git-history-cleanup/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/git-history-cleanup/SKILL.md](copilot/.github/skills/git-history-cleanup/SKILL.md) | `.github/skills/git-history-cleanup/SKILL.md` |

## What it does

A branch with forty commits named "fix", "fix 2" and "oops" is hard to review and hard to bisect. This skill rewrites it into a handful of commits that each tell one thing, without changing what the branch finally does.

Safety comes first: a backup branch is created, the final tree is compared byte for byte with the original, and nothing already shared is rewritten unless you say so.

## Use it when

- A feature branch is ready for review but its history is a mess
- Fixup commits should be folded into the commit they correct
- One commit mixes a refactor with a behavior change
- You need each commit to build, so that bisect works

## What it can access

- Runs git log, rebase, reset and branch on your local repository
- Never pushes; edits only commit history and messages

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/git-history-cleanup/
