# Git Bisect Regression

**Skill** · Git and releases

Finds the exact commit that introduced a regression by running git bisect with an automated test, then explains what that commit changed.

## Install

```bash
npx workspacetemplates add git-bisect-regression
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/git-bisect-regression/SKILL.md](claude-code/.claude/skills/git-bisect-regression/SKILL.md) | `.claude/skills/git-bisect-regression/SKILL.md` |
| Codex | [codex/.agents/skills/git-bisect-regression/SKILL.md](codex/.agents/skills/git-bisect-regression/SKILL.md) | `.agents/skills/git-bisect-regression/SKILL.md` |
| Cursor | [cursor/.cursor/skills/git-bisect-regression/SKILL.md](cursor/.cursor/skills/git-bisect-regression/SKILL.md) | `.cursor/skills/git-bisect-regression/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/git-bisect-regression/SKILL.md](gemini-cli/.gemini/skills/git-bisect-regression/SKILL.md) | `.gemini/skills/git-bisect-regression/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/git-bisect-regression/SKILL.md](copilot/.github/skills/git-bisect-regression/SKILL.md) | `.github/skills/git-bisect-regression/SKILL.md` |

## What it does

When something worked last month and fails today, reading code is slow and guessing is slower. Bisect finds the culprit in about log2 of the number of commits, as long as the check is automatic and honest.

This skill builds that check first, proves it on both ends of the range, runs the search unattended and always returns the repository to where you started.

## Use it when

- A test or behavior worked in an older release and fails now
- The range between a good tag and HEAD has dozens of commits
- You can reproduce the bug but do not know which change caused it
- A teammate says "it was fine last week"

## What it can access

- Runs git bisect, show and status on the local repository
- Executes your test or build command repeatedly while searching

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/git-bisect-regression/
