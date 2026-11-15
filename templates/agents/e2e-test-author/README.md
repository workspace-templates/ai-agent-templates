# E2E Test Author

**Subagent** · Testing · playwright

Subagent that writes Playwright end-to-end tests for one user journey, using stable locators and web-first assertions with no fixed sleeps.

## Install

```bash
npx workspacetemplates add e2e-test-author
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/agents/e2e-test-author.md](claude-code/.claude/agents/e2e-test-author.md) | `.claude/agents/e2e-test-author.md` |
| Codex | [codex/.codex/agents/e2e-test-author.toml](codex/.codex/agents/e2e-test-author.toml) | `.codex/agents/e2e-test-author.toml` |
| Cursor | [cursor/.cursor/agents/e2e-test-author.md](cursor/.cursor/agents/e2e-test-author.md) | `.cursor/agents/e2e-test-author.md` |
| Gemini CLI | [gemini-cli/.gemini/agents/e2e-test-author.md](gemini-cli/.gemini/agents/e2e-test-author.md) | `.gemini/agents/e2e-test-author.md` |
| GitHub Copilot | [copilot/.github/agents/e2e-test-author.agent.md](copilot/.github/agents/e2e-test-author.agent.md) | `.github/agents/e2e-test-author.agent.md` |

## What it does

End-to-end tests earn their cost only when they are reliable. This subagent writes a Playwright test for a single user journey, reading the real pages first so it can pick locators that survive a redesign.

It uses the framework the way it is meant to be used: auto-waiting, web-first assertions and isolated test data. You will not find a waitForTimeout in its output.

## Use it when

- A critical flow such as signup, checkout or login has no browser test
- Existing e2e tests break every time the UI changes
- You need a smoke test to run after each deploy
- You are replacing Cypress or Selenium tests with Playwright

## What it can access

- Reads the application, Playwright config and existing specs
- Creates and edits test files, runs Playwright in headless mode

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/e2e-test-author/
