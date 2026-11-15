# Jest Vitest Rules

**Project rules** · Testing · javascript, typescript

Project rules for Jest and Vitest unit tests: clear names, arrange-act-assert, narrow mocks, deterministic time and meaningful coverage.

## Install

```bash
npx workspacetemplates add jest-vitest-rules
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/CLAUDE.md](claude-code/CLAUDE.md) | `CLAUDE.md` (merge) |
| Codex | [codex/AGENTS.md](codex/AGENTS.md) | `AGENTS.md` (merge) |
| Cursor | [cursor/.cursor/rules/jest-vitest-rules.mdc](cursor/.cursor/rules/jest-vitest-rules.mdc) | `.cursor/rules/jest-vitest-rules.mdc` |
| Gemini CLI | [gemini-cli/GEMINI.md](gemini-cli/GEMINI.md) | `GEMINI.md` (merge) |
| GitHub Copilot | [copilot/.github/copilot-instructions.md](copilot/.github/copilot-instructions.md) | `.github/copilot-instructions.md` (merge) |

## What it does

These rules set one style for unit tests in JavaScript and TypeScript projects, whether the runner is Jest or Vitest. Tests read as specifications and fail with messages that point at the cause.

They limit mocking to boundaries and ban hidden shared state, so the suite stays quick and trustworthy as it grows.

## Use it when

- You ask an agent to add unit tests
- Tests mock every internal module
- Test names say "works" or "test 1"
- Green suites miss real regressions despite many tests

## What it can access

- Instructions only; it does not read or run anything by itself

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/jest-vitest-rules/
