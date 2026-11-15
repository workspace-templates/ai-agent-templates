# E2E Test Design

**Skill** · Testing

Chooses the few user journeys that deserve end-to-end coverage and writes stable browser tests with resilient locators and no fixed waits.

## Install

```bash
npx workspacetemplates add e2e-test-design
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/e2e-test-design/SKILL.md](claude-code/.claude/skills/e2e-test-design/SKILL.md) | `.claude/skills/e2e-test-design/SKILL.md` |
| Codex | [codex/.agents/skills/e2e-test-design/SKILL.md](codex/.agents/skills/e2e-test-design/SKILL.md) | `.agents/skills/e2e-test-design/SKILL.md` |
| Cursor | [cursor/.cursor/skills/e2e-test-design/SKILL.md](cursor/.cursor/skills/e2e-test-design/SKILL.md) | `.cursor/skills/e2e-test-design/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/e2e-test-design/SKILL.md](gemini-cli/.gemini/skills/e2e-test-design/SKILL.md) | `.gemini/skills/e2e-test-design/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/e2e-test-design/SKILL.md](copilot/.github/skills/e2e-test-design/SKILL.md) | `.github/skills/e2e-test-design/SKILL.md` |

## What it does

End-to-end suites tend to grow into slow, flaky piles that people stop trusting. The cure is fewer tests, chosen with care: the journeys that make money or break trust if they fail, written to survive ordinary UI changes.

This skill picks those journeys with you, then writes them with role-based locators, per-test data and condition-based waits. The tests are small, independent and fast to diagnose when they do fail.

## Use it when

- You are starting Playwright or Cypress on an existing app
- The current E2E suite is flaky or takes too long
- You need a smoke test for the release pipeline
- Business-critical flows such as signup or checkout have no coverage

## What it can access

- Reads and edits test files and may add test ids to markup
- Runs a browser through your test runner against a local or test environment

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/e2e-test-design/
