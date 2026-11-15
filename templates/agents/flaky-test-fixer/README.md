# Flaky Test Fixer

**Subagent** · Testing

Subagent that reproduces a flaky test with repeated runs, identifies why it is unstable, and fixes the test or the code it exposes.

## Install

```bash
npx workspacetemplates add flaky-test-fixer
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/agents/flaky-test-fixer.md](claude-code/.claude/agents/flaky-test-fixer.md) | `.claude/agents/flaky-test-fixer.md` |
| Codex | [codex/.codex/agents/flaky-test-fixer.toml](codex/.codex/agents/flaky-test-fixer.toml) | `.codex/agents/flaky-test-fixer.toml` |
| Cursor | [cursor/.cursor/agents/flaky-test-fixer.md](cursor/.cursor/agents/flaky-test-fixer.md) | `.cursor/agents/flaky-test-fixer.md` |
| Gemini CLI | [gemini-cli/.gemini/agents/flaky-test-fixer.md](gemini-cli/.gemini/agents/flaky-test-fixer.md) | `.gemini/agents/flaky-test-fixer.md` |
| GitHub Copilot | [copilot/.github/agents/flaky-test-fixer.agent.md](copilot/.github/agents/flaky-test-fixer.agent.md) | `.github/agents/flaky-test-fixer.agent.md` |

## What it does

When one run in twenty goes red for no reason, the team learns to ignore red builds. This subagent hunts it down: it runs the test in a loop, varies the conditions, finds the real source of nondeterminism and then fixes it.

It will not paper over the problem with a retry or a longer timeout. If the flake exposes a real race in production code, it says so and fixes that instead.

## Use it when

- CI fails randomly and passes on rerun
- Green on its own, red once the whole suite runs
- A test depends on the clock, ports or network
- Someone proposed adding retries to make CI green

## What it can access

- Reads and edits test files, and application code when the cause is there
- Runs your test command many times

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/flaky-test-fixer/
