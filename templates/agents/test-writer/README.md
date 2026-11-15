# Test Writer

**Subagent** · Testing

Writes and runs unit tests for a change, covers edge cases and failure paths, and never edits the code under test.

## Install

```bash
npx workspacetemplates add test-writer
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/agents/test-writer.md](claude-code/.claude/agents/test-writer.md) | `.claude/agents/test-writer.md` |
| Codex | [codex/.codex/agents/test-writer.toml](codex/.codex/agents/test-writer.toml) | `.codex/agents/test-writer.toml` |
| Cursor | [cursor/.cursor/agents/test-writer.md](cursor/.cursor/agents/test-writer.md) | `.cursor/agents/test-writer.md` |
| Gemini CLI | [gemini-cli/.gemini/agents/test-writer.md](gemini-cli/.gemini/agents/test-writer.md) | `.gemini/agents/test-writer.md` |
| GitHub Copilot | [copilot/.github/agents/test-writer.agent.md](copilot/.github/agents/test-writer.agent.md) | `.github/agents/test-writer.agent.md` |

## What it does

Tests written by the same agent that wrote the code tend to mirror the code and prove nothing. This subagent is handed a change and told to treat the implementation as a black box: it reads the behavior, writes tests that would fail if that behavior broke, and runs them.

If a test fails because of a real bug, it stops and reports the bug instead of bending the test or patching the source. You get new test files and an honest account of what they cover.

## Use it when

- You finished a feature and need unit tests before review
- A bug fix needs a regression test that fails without the fix
- Coverage is thin on a module you are about to refactor
- You want tests written by something that did not write the code

## What it can access

- Reads source files and existing tests
- Creates and edits test files only
- Runs your test command in the shell

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/test-writer/
