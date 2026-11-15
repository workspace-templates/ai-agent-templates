# Test Reviewer

**Subagent** · Testing

Read-only subagent that reviews tests for weak assertions, over-mocking, hidden coupling and the edge cases a suite quietly skips.

## Install

```bash
npx workspacetemplates add test-reviewer
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/agents/test-reviewer.md](claude-code/.claude/agents/test-reviewer.md) | `.claude/agents/test-reviewer.md` |
| Codex | [codex/.codex/agents/test-reviewer.toml](codex/.codex/agents/test-reviewer.toml) | `.codex/agents/test-reviewer.toml` |
| Cursor | [cursor/.cursor/agents/test-reviewer.md](cursor/.cursor/agents/test-reviewer.md) | `.cursor/agents/test-reviewer.md` |
| Gemini CLI | [gemini-cli/.gemini/agents/test-reviewer.md](gemini-cli/.gemini/agents/test-reviewer.md) | `.gemini/agents/test-reviewer.md` |
| GitHub Copilot | [copilot/.github/agents/test-reviewer.agent.md](copilot/.github/agents/test-reviewer.agent.md) | `.github/agents/test-reviewer.agent.md` |

## What it does

A green suite can still protect nothing. This subagent reads tests the way a skeptical reviewer would, asking of each one what real bug would turn it red.

It looks for tests that cannot fail, tests that only check the mocks, tests that depend on the order they run in, and obvious gaps around the code being tested.

## Use it when

- Reviewing a pull request that adds a lot of tests
- Coverage is high but bugs still reach production
- You inherited a suite nobody trusts
- You want to set a quality bar before writing more tests

## What it can access

- Reads test files and the code they cover
- Cannot edit files or run commands

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/test-reviewer/
