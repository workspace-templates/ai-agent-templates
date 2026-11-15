# Contract Testing

**Skill** · Testing

Adds consumer-driven contract tests between services so a breaking API change fails in CI before it ships to the service that depends on it.

## Install

```bash
npx workspacetemplates add contract-testing
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/contract-testing/SKILL.md](claude-code/.claude/skills/contract-testing/SKILL.md) | `.claude/skills/contract-testing/SKILL.md` |
| Codex | [codex/.agents/skills/contract-testing/SKILL.md](codex/.agents/skills/contract-testing/SKILL.md) | `.agents/skills/contract-testing/SKILL.md` |
| Cursor | [cursor/.cursor/skills/contract-testing/SKILL.md](cursor/.cursor/skills/contract-testing/SKILL.md) | `.cursor/skills/contract-testing/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/contract-testing/SKILL.md](gemini-cli/.gemini/skills/contract-testing/SKILL.md) | `.gemini/skills/contract-testing/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/contract-testing/SKILL.md](copilot/.github/skills/contract-testing/SKILL.md) | `.github/skills/contract-testing/SKILL.md` |

## What it does

Integration environments catch broken APIs late and fail for unrelated reasons. A contract test moves the check to each team build: the consumer states what it needs, and the provider proves it still delivers exactly that.

The skill guides the agent through scoping the contract to fields actually used, wiring the provider verification into CI, and handling versions so a change can be rolled out safely.

## Use it when

- Two services are deployed on different schedules
- A renamed field took down a downstream consumer
- You are splitting a monolith and need guardrails on the new seams
- Staging tests are slow and fail for reasons unrelated to your change

## What it can access

- Reads source and API definition files
- Adds contract test files and a CI step, and runs the tests

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/contract-testing/
