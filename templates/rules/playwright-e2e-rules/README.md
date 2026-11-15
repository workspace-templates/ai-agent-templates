# Playwright E2E Rules

**Project rules** · Testing · typescript

Project rules for Playwright suites: role-based locators, fixtures, test isolation, web-first assertions, traces and CI sharding.

## Install

```bash
npx workspacetemplates add playwright-e2e-rules
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/CLAUDE.md](claude-code/CLAUDE.md) | `CLAUDE.md` (merge) |
| Codex | [codex/AGENTS.md](codex/AGENTS.md) | `AGENTS.md` (merge) |
| Cursor | [cursor/.cursor/rules/playwright-e2e-rules.mdc](cursor/.cursor/rules/playwright-e2e-rules.mdc) | `.cursor/rules/playwright-e2e-rules.mdc` |
| Gemini CLI | [gemini-cli/GEMINI.md](gemini-cli/GEMINI.md) | `GEMINI.md` (merge) |
| GitHub Copilot | [copilot/.github/copilot-instructions.md](copilot/.github/copilot-instructions.md) | `.github/copilot-instructions.md` (merge) |

## What it does

These rules keep end-to-end suites fast and stable. They steer an agent toward locators users would recognize, independent tests and assertions that wait for the page instead of guessing.

They also cover failure diagnosis and CI, so a red run produces a trace you can open and the suite scales across machines.

## Use it when

- You add Playwright to a project
- Tests fail intermittently because of timeouts
- Locators are long CSS chains
- The suite is too slow to run on every pull request

## What it can access

- Instructions only; it does not read or run anything by itself

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/playwright-e2e-rules/
