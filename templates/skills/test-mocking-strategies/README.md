# Test Mocking Strategies

**Skill** · Testing

Picks the right test double for each dependency (real object, fake, stub or spy) so tests stay fast without mocking away the behavior they should verify.

## Install

```bash
npx workspacetemplates add test-mocking-strategies
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/test-mocking-strategies/SKILL.md](claude-code/.claude/skills/test-mocking-strategies/SKILL.md) | `.claude/skills/test-mocking-strategies/SKILL.md` |
| Codex | [codex/.agents/skills/test-mocking-strategies/SKILL.md](codex/.agents/skills/test-mocking-strategies/SKILL.md) | `.agents/skills/test-mocking-strategies/SKILL.md` |
| Cursor | [cursor/.cursor/skills/test-mocking-strategies/SKILL.md](cursor/.cursor/skills/test-mocking-strategies/SKILL.md) | `.cursor/skills/test-mocking-strategies/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/test-mocking-strategies/SKILL.md](gemini-cli/.gemini/skills/test-mocking-strategies/SKILL.md) | `.gemini/skills/test-mocking-strategies/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/test-mocking-strategies/SKILL.md](copilot/.github/skills/test-mocking-strategies/SKILL.md) | `.github/skills/test-mocking-strategies/SKILL.md` |

## What it does

Over-mocked tests pass while the product is broken, because they only prove the code calls what the test told it to call. This skill gives the agent a decision order for every collaborator, with the real thing first.

It also audits existing tests for the common traps: mocking the unit under test, asserting call counts instead of outcomes, and stubs that drift from the real interface.

## Use it when

- Tests pass but a bug still reached production
- A refactor breaks forty tests that assert internal calls
- You are adding tests to code with database, HTTP and clock dependencies
- A mock setup is longer than the test itself

## What it can access

- Reads source and test files
- Edits test files and runs your tests when you ask it to apply the changes

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/test-mocking-strategies/
