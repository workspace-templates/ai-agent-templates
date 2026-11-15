# Write Tests

**Command** · Testing

Writes tests for a named file or function in your existing test style, runs them and reports what they cover and what they miss.

## Install

```bash
npx workspacetemplates add write-tests
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/commands/write-tests.md](claude-code/.claude/commands/write-tests.md) | `.claude/commands/write-tests.md` |
| Codex | [codex/home/.codex/prompts/write-tests.md](codex/home/.codex/prompts/write-tests.md) | `~/.codex/prompts/write-tests.md` |
| Cursor | [cursor/.cursor/skills/write-tests/SKILL.md](cursor/.cursor/skills/write-tests/SKILL.md) | `.cursor/skills/write-tests/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/commands/write-tests.toml](gemini-cli/.gemini/commands/write-tests.toml) | `.gemini/commands/write-tests.toml` |
| GitHub Copilot | [copilot/.github/skills/write-tests/SKILL.md](copilot/.github/skills/write-tests/SKILL.md) | `.github/skills/write-tests/SKILL.md` |

## What it does

Tests written without looking at the project end up with the wrong runner, the wrong naming and mocks the team does not use. This command first learns how your repository tests, then writes cases that match.

It aims at behavior and edge cases, not line coverage, and it runs the new tests before it hands them back. A failing test that reveals a real bug is reported, not hidden.

## Use it when

- You added a function and want tests before the pull request
- Legacy code has no tests and you must change it safely
- You want edge cases you would not think of yourself
- A bug was fixed and you need a regression test

## What it can access

- Reads source and existing tests
- Creates or edits test files and runs your test command

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/write-tests/
