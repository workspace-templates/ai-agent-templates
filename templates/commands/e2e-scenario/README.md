# E2E Scenario

**Command** · Testing

Turns a plain-language user journey into an end-to-end test written in the framework your project already uses.

## Install

```bash
npx workspacetemplates add e2e-scenario
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/commands/e2e-scenario.md](claude-code/.claude/commands/e2e-scenario.md) | `.claude/commands/e2e-scenario.md` |
| Codex | [codex/home/.codex/prompts/e2e-scenario.md](codex/home/.codex/prompts/e2e-scenario.md) | `~/.codex/prompts/e2e-scenario.md` |
| Cursor | [cursor/.cursor/skills/e2e-scenario/SKILL.md](cursor/.cursor/skills/e2e-scenario/SKILL.md) | `.cursor/skills/e2e-scenario/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/commands/e2e-scenario.toml](gemini-cli/.gemini/commands/e2e-scenario.toml) | `.gemini/commands/e2e-scenario.toml` |
| GitHub Copilot | [copilot/.github/skills/e2e-scenario/SKILL.md](copilot/.github/skills/e2e-scenario/SKILL.md) | `.github/skills/e2e-scenario/SKILL.md` |

## What it does

End-to-end tests are slow to write and easy to make flaky. This command takes a journey described in everyday words, finds your existing setup, and writes the scenario with stable selectors, explicit waits for state and clean test data.

It runs the new test several times to check it is steady, and reports the result along with anything that needs a data-test attribute in the app.

## Use it when

- When QA hands you a manual test script to automate
- After shipping a critical flow such as checkout or signup
- To cover a bug that only shows in the browser
- When a team starts its first browser test

## What it can access

- Reads the app, config and existing e2e tests
- Adds a test file and runs a browser locally

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/e2e-scenario/
