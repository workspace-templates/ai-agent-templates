# TDD Workflow

**Skill** · Testing

Builds a feature in small red, green, refactor cycles, with one failing test first and one commit per cycle, so every step stays verified.

## Install

```bash
npx workspacetemplates add tdd-workflow
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/tdd-workflow/SKILL.md](claude-code/.claude/skills/tdd-workflow/SKILL.md) | `.claude/skills/tdd-workflow/SKILL.md` |
| Codex | [codex/.agents/skills/tdd-workflow/SKILL.md](codex/.agents/skills/tdd-workflow/SKILL.md) | `.agents/skills/tdd-workflow/SKILL.md` |
| Cursor | [cursor/.cursor/skills/tdd-workflow/SKILL.md](cursor/.cursor/skills/tdd-workflow/SKILL.md) | `.cursor/skills/tdd-workflow/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/tdd-workflow/SKILL.md](gemini-cli/.gemini/skills/tdd-workflow/SKILL.md) | `.gemini/skills/tdd-workflow/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/tdd-workflow/SKILL.md](copilot/.github/skills/tdd-workflow/SKILL.md) | `.github/skills/tdd-workflow/SKILL.md` |

## What it does

Writing the tests after the code lets the tests describe whatever the code happens to do. This skill flips the order: state the next behavior as a failing test, make it pass with the least code, then tidy up with the tests as a safety net.

The agent works in tiny steps and commits after each cycle, so the history reads like a log of behaviors. If a step grows large, it stops and splits it rather than writing a pile of code first.

## Use it when

- You are building a function or module with clear rules
- Fixing a bug and you want a test that proves it stays fixed
- You want the agent to take small, reviewable steps
- Code you are about to change has no tests yet

## What it can access

- Reads and edits source and test files
- Runs your test command and makes local git commits

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/tdd-workflow/
