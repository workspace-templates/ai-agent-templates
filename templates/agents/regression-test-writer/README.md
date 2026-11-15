# Regression Test Writer

**Subagent** · Testing

Subagent that turns a fixed bug into a regression test that fails on the old code and passes on the fix, at the lowest useful test level.

## Install

```bash
npx workspacetemplates add regression-test-writer
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/agents/regression-test-writer.md](claude-code/.claude/agents/regression-test-writer.md) | `.claude/agents/regression-test-writer.md` |
| Codex | [codex/.codex/agents/regression-test-writer.toml](codex/.codex/agents/regression-test-writer.toml) | `.codex/agents/regression-test-writer.toml` |
| Cursor | [cursor/.cursor/agents/regression-test-writer.md](cursor/.cursor/agents/regression-test-writer.md) | `.cursor/agents/regression-test-writer.md` |
| Gemini CLI | [gemini-cli/.gemini/agents/regression-test-writer.md](gemini-cli/.gemini/agents/regression-test-writer.md) | `.gemini/agents/regression-test-writer.md` |
| GitHub Copilot | [copilot/.github/agents/regression-test-writer.agent.md](copilot/.github/agents/regression-test-writer.agent.md) | `.github/agents/regression-test-writer.agent.md` |

## What it does

Fixing a bug without a test invites the same bug back next quarter. This subagent takes a bug report and its fix and writes the test that would have caught it, then proves the test is honest by watching it fail first.

It aims for the smallest scope that still reproduces the problem, so the test is fast, clear and cheap to keep.

## Use it when

- You just fixed a bug and need a test before merging
- A production incident traced back to untested code
- A bug was fixed in a hotfix with no time for tests
- Reviewers asked for a regression test on a pull request

## What it can access

- Reads the bug report, diff and surrounding code
- Adds test files and runs git and test commands

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/regression-test-writer/
