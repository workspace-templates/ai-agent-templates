# Coverage Improver

**Subagent** · Testing

Subagent that raises coverage on one module by writing meaningful tests for its riskiest uncovered branches, not for the easy lines.

## Install

```bash
npx workspacetemplates add coverage-improver
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/agents/coverage-improver.md](claude-code/.claude/agents/coverage-improver.md) | `.claude/agents/coverage-improver.md` |
| Codex | [codex/.codex/agents/coverage-improver.toml](codex/.codex/agents/coverage-improver.toml) | `.codex/agents/coverage-improver.toml` |
| Cursor | [cursor/.cursor/agents/coverage-improver.md](cursor/.cursor/agents/coverage-improver.md) | `.cursor/agents/coverage-improver.md` |
| Gemini CLI | [gemini-cli/.gemini/agents/coverage-improver.md](gemini-cli/.gemini/agents/coverage-improver.md) | `.gemini/agents/coverage-improver.md` |
| GitHub Copilot | [copilot/.github/agents/coverage-improver.agent.md](copilot/.github/agents/coverage-improver.agent.md) | `.github/agents/coverage-improver.agent.md` |

## What it does

A coverage number is easy to inflate and hard to trust. This subagent takes one module, reads the coverage report, and ranks the uncovered code by how much damage a bug there would do before it writes a single test.

Every test it adds asserts behavior. It does not call a function just to turn a line green, and it reports any test it could not make meaningful.

## Use it when

- A critical module sits at low coverage and you have an afternoon
- A coverage gate in CI is about to fail on a pull request
- You inherited code that nobody dares to touch
- You want tests in place before a risky refactor

## What it can access

- Reads the module and its tests, and writes new test files
- Runs your test and coverage commands

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/coverage-improver/
