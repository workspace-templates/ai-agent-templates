# Flaky Test Diagnosis

**Skill** · Testing

Reproduces an intermittent test failure, finds the shared state or timing cause and fixes it, rather than hiding it behind retries or longer waits.

## Install

```bash
npx workspacetemplates add flaky-test-diagnosis
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/flaky-test-diagnosis/SKILL.md](claude-code/.claude/skills/flaky-test-diagnosis/SKILL.md) | `.claude/skills/flaky-test-diagnosis/SKILL.md` |
| Codex | [codex/.agents/skills/flaky-test-diagnosis/SKILL.md](codex/.agents/skills/flaky-test-diagnosis/SKILL.md) | `.agents/skills/flaky-test-diagnosis/SKILL.md` |
| Cursor | [cursor/.cursor/skills/flaky-test-diagnosis/SKILL.md](cursor/.cursor/skills/flaky-test-diagnosis/SKILL.md) | `.cursor/skills/flaky-test-diagnosis/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/flaky-test-diagnosis/SKILL.md](gemini-cli/.gemini/skills/flaky-test-diagnosis/SKILL.md) | `.gemini/skills/flaky-test-diagnosis/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/flaky-test-diagnosis/SKILL.md](copilot/.github/skills/flaky-test-diagnosis/SKILL.md) | `.github/skills/flaky-test-diagnosis/SKILL.md` |

## What it does

A test that fails one run in twenty teaches a team to ignore red builds. This skill makes the agent treat flakiness as a bug with a cause: loop the test until it fails, then change one variable at a time until the failure rate moves.

The usual culprits are leaked state between tests, real clocks, unawaited async work, port and file collisions, and ordering assumptions. The agent names which one it found and shows the failure rate before and after the fix.

## Use it when

- A CI job goes red and passes on rerun
- A test passes alone but fails in the full suite
- Someone suggests adding a retry decorator to quiet a test
- A suite got flaky after you turned on parallel workers

## What it can access

- Reads files in your project
- Runs your test command repeatedly, including under load

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/flaky-test-diagnosis/
