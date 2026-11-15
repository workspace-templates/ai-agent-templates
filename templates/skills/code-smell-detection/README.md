# Code Smell Detection

**Skill** · Code quality

Scans a diff or folder for long methods, feature envy and god classes, and proposes the smallest change that removes each smell. It reports before editing.

## Install

```bash
npx workspacetemplates add code-smell-detection
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/code-smell-detection/SKILL.md](claude-code/.claude/skills/code-smell-detection/SKILL.md) | `.claude/skills/code-smell-detection/SKILL.md` |
| Codex | [codex/.agents/skills/code-smell-detection/SKILL.md](codex/.agents/skills/code-smell-detection/SKILL.md) | `.agents/skills/code-smell-detection/SKILL.md` |
| Cursor | [cursor/.cursor/skills/code-smell-detection/SKILL.md](cursor/.cursor/skills/code-smell-detection/SKILL.md) | `.cursor/skills/code-smell-detection/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/code-smell-detection/SKILL.md](gemini-cli/.gemini/skills/code-smell-detection/SKILL.md) | `.gemini/skills/code-smell-detection/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/code-smell-detection/SKILL.md](copilot/.github/skills/code-smell-detection/SKILL.md) | `.github/skills/code-smell-detection/SKILL.md` |

## What it does

A smell list is only useful if it is short and each item comes with a way out. This skill reads the changed code, names the smells it can point to, and ties each one to a small refactoring with a clear before and after.

It does not rewrite your design. Large moves are listed as suggestions, and only the cheap, safe ones are offered to apply.

## Use it when

- A pull request adds another 80-line function to a file that is already crowded
- You inherit a module and want to know where to start cleaning
- A class keeps gaining unrelated methods
- Reviewers keep saying "this is hard to follow" without saying why

## What it can access

- Reads source files and git history
- Runs read-only git commands
- Edits code only after you approve a finding

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/code-smell-detection/
