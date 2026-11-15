# Jest Testing Patterns

**Skill** · Testing · javascript, typescript

Structures Jest suites with factories, fake timers and module mocks that reset cleanly, so tests stay independent and order does not matter.

## Install

```bash
npx workspacetemplates add jest-testing-patterns
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/jest-testing-patterns/SKILL.md](claude-code/.claude/skills/jest-testing-patterns/SKILL.md) | `.claude/skills/jest-testing-patterns/SKILL.md` |
| Codex | [codex/.agents/skills/jest-testing-patterns/SKILL.md](codex/.agents/skills/jest-testing-patterns/SKILL.md) | `.agents/skills/jest-testing-patterns/SKILL.md` |
| Cursor | [cursor/.cursor/skills/jest-testing-patterns/SKILL.md](cursor/.cursor/skills/jest-testing-patterns/SKILL.md) | `.cursor/skills/jest-testing-patterns/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/jest-testing-patterns/SKILL.md](gemini-cli/.gemini/skills/jest-testing-patterns/SKILL.md) | `.gemini/skills/jest-testing-patterns/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/jest-testing-patterns/SKILL.md](copilot/.github/skills/jest-testing-patterns/SKILL.md) | `.github/skills/jest-testing-patterns/SKILL.md` |

## What it does

Jest suites tend to rot into a tangle of shared fixtures, leaked mocks and tests that pass only in a fixed order. This skill gives the agent the setup patterns that keep each test isolated and easy to read.

It covers data factories, fake timers, module and spy mocking with automatic restore, async assertions, and the config switches that catch leaks early.

## Use it when

- Writing or reviewing Jest tests in a Node or React project
- Tests pass alone and fail together
- Mocks from one file affect another
- Tests use real timers and take seconds to run

## What it can access

- Reads source and test files
- Edits tests and Jest config, and runs the test suite

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/jest-testing-patterns/
