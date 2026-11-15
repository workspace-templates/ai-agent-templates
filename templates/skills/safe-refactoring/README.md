# Safe Refactoring

**Skill** · Code quality

Restructures code in small steps that each keep behavior identical and tests green. Use it for renames, extractions, moves and cleanup of messy modules.

## Install

```bash
npx workspacetemplates add safe-refactoring
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/safe-refactoring/SKILL.md](claude-code/.claude/skills/safe-refactoring/SKILL.md) | `.claude/skills/safe-refactoring/SKILL.md` |
| Codex | [codex/.agents/skills/safe-refactoring/SKILL.md](codex/.agents/skills/safe-refactoring/SKILL.md) | `.agents/skills/safe-refactoring/SKILL.md` |
| Cursor | [cursor/.cursor/skills/safe-refactoring/SKILL.md](cursor/.cursor/skills/safe-refactoring/SKILL.md) | `.cursor/skills/safe-refactoring/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/safe-refactoring/SKILL.md](gemini-cli/.gemini/skills/safe-refactoring/SKILL.md) | `.gemini/skills/safe-refactoring/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/safe-refactoring/SKILL.md](copilot/.github/skills/safe-refactoring/SKILL.md) | `.github/skills/safe-refactoring/SKILL.md` |

## What it does

A refactor goes wrong when it is one big edit that also changes behavior. This skill splits the work into steps small enough that each can be run, checked and undone on its own, and it keeps new features out of the diff.

Before any change it looks for tests that pin the current behavior and adds characterization tests where there are none. You end up with a history you can review commit by commit.

## Use it when

- A function or class has grown past what anyone wants to read
- You need to rename or move something used in many files
- Before adding a feature to code that has no tests
- Duplicated logic should become one shared helper

## What it can access

- Reads and edits files in your project
- Runs your tests, type checker and git commits

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/safe-refactoring/
