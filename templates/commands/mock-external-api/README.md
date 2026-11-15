# Mock External API

**Command** · Testing

Builds a realistic mock of an external API for your tests, shaped from recorded or documented responses.

## Install

```bash
npx workspacetemplates add mock-external-api
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/commands/mock-external-api.md](claude-code/.claude/commands/mock-external-api.md) | `.claude/commands/mock-external-api.md` |
| Codex | [codex/home/.codex/prompts/mock-external-api.md](codex/home/.codex/prompts/mock-external-api.md) | `~/.codex/prompts/mock-external-api.md` |
| Cursor | [cursor/.cursor/skills/mock-external-api/SKILL.md](cursor/.cursor/skills/mock-external-api/SKILL.md) | `.cursor/skills/mock-external-api/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/commands/mock-external-api.toml](gemini-cli/.gemini/commands/mock-external-api.toml) | `.gemini/commands/mock-external-api.toml` |
| GitHub Copilot | [copilot/.github/skills/mock-external-api/SKILL.md](copilot/.github/skills/mock-external-api/SKILL.md) | `.github/skills/mock-external-api/SKILL.md` |

## What it does

Tests that call real services are slow and break on someone else's outage, but hand-made mocks drift from reality. This command builds the mock from real response shapes, including error replies, pagination and rate limits.

It adds a small contract check, so when the provider changes a field you find out from a failing test instead of production.

## Use it when

- When tests hit a payment, email or maps API
- Before adding a third-party integration
- When mocks in the repo have gone stale
- To make CI run without network or credentials

## What it can access

- Reads the integration code and docs you point to
- Adds mock and fixture files, runs tests offline

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/mock-external-api/
