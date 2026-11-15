# JUnit Testing Java

**Skill** · Testing · java

Writes JUnit 5 tests with parameterized cases and Mockito used carefully, avoiding static mocking, over-stubbing and tests tied to implementation.

## Install

```bash
npx workspacetemplates add junit-testing-java
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/junit-testing-java/SKILL.md](claude-code/.claude/skills/junit-testing-java/SKILL.md) | `.claude/skills/junit-testing-java/SKILL.md` |
| Codex | [codex/.agents/skills/junit-testing-java/SKILL.md](codex/.agents/skills/junit-testing-java/SKILL.md) | `.agents/skills/junit-testing-java/SKILL.md` |
| Cursor | [cursor/.cursor/skills/junit-testing-java/SKILL.md](cursor/.cursor/skills/junit-testing-java/SKILL.md) | `.cursor/skills/junit-testing-java/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/junit-testing-java/SKILL.md](gemini-cli/.gemini/skills/junit-testing-java/SKILL.md) | `.gemini/skills/junit-testing-java/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/junit-testing-java/SKILL.md](copilot/.github/skills/junit-testing-java/SKILL.md) | `.github/skills/junit-testing-java/SKILL.md` |

## What it does

Java tests drift toward Mockito-heavy code that restates the implementation line by line. This skill shows the agent how to write JUnit 5 tests that survive refactoring: real collaborators where cheap, mocks at the edges, and clear assertions.

It also flags the usual traps, including static mocking, strict stubbing warnings, and tests that only verify interactions.

## Use it when

- Adding tests to a Spring or plain Java service
- A refactor broke dozens of Mockito tests without breaking behavior
- You need to cover many input cases in one test method
- Tests rely on mockStatic or on a shared mutable fixture

## What it can access

- Reads Java source and test files
- Edits test files and runs Maven or Gradle test tasks

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/junit-testing-java/
