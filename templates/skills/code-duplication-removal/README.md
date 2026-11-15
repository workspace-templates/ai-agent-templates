# Code Duplication Removal

**Skill** · Code quality

Detects copy-pasted blocks and merges them into one abstraction only when the copies change together, leaving look-alikes that evolve apart untouched.

## Install

```bash
npx workspacetemplates add code-duplication-removal
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/code-duplication-removal/SKILL.md](claude-code/.claude/skills/code-duplication-removal/SKILL.md) | `.claude/skills/code-duplication-removal/SKILL.md` |
| Codex | [codex/.agents/skills/code-duplication-removal/SKILL.md](codex/.agents/skills/code-duplication-removal/SKILL.md) | `.agents/skills/code-duplication-removal/SKILL.md` |
| Cursor | [cursor/.cursor/skills/code-duplication-removal/SKILL.md](cursor/.cursor/skills/code-duplication-removal/SKILL.md) | `.cursor/skills/code-duplication-removal/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/code-duplication-removal/SKILL.md](gemini-cli/.gemini/skills/code-duplication-removal/SKILL.md) | `.gemini/skills/code-duplication-removal/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/code-duplication-removal/SKILL.md](copilot/.github/skills/code-duplication-removal/SKILL.md) | `.github/skills/code-duplication-removal/SKILL.md` |

## What it does

Duplicated code is not always a problem, and a wrong abstraction costs more than a copy. This skill finds repeated blocks, then checks the history to see whether the copies were edited together or drifted apart.

Only duplicates that move as a group are merged. Others are left alone and listed with the reason, so the cleanup never ties together things that have separate reasons to change.

## Use it when

- A bug fix had to be made in three places
- Two handlers or components are almost identical
- You want a cleanup that does not create over-general helpers
- Review keeps flagging copy-paste in new code

## What it can access

- Reads source files and git history
- Runs read-only git commands and an optional duplicate detector
- Edits code and runs your tests

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/code-duplication-removal/
