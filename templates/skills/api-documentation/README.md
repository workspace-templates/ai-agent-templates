# API Documentation

**Skill** · Documentation

Documents HTTP endpoints from the real handlers, with request and response examples, error cases and auth, so integrators succeed on the first call.

## Install

```bash
npx workspacetemplates add api-documentation
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/api-documentation/SKILL.md](claude-code/.claude/skills/api-documentation/SKILL.md) | `.claude/skills/api-documentation/SKILL.md` |
| Codex | [codex/.agents/skills/api-documentation/SKILL.md](codex/.agents/skills/api-documentation/SKILL.md) | `.agents/skills/api-documentation/SKILL.md` |
| Cursor | [cursor/.cursor/skills/api-documentation/SKILL.md](cursor/.cursor/skills/api-documentation/SKILL.md) | `.cursor/skills/api-documentation/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/api-documentation/SKILL.md](gemini-cli/.gemini/skills/api-documentation/SKILL.md) | `.gemini/skills/api-documentation/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/api-documentation/SKILL.md](copilot/.github/skills/api-documentation/SKILL.md) | `.github/skills/api-documentation/SKILL.md` |

## What it does

Generated reference pages list parameters but rarely show a working call. This skill has the agent read each handler, route and validator, then write documentation an integrator can follow with only a terminal and an API key.

Every endpoint gets a runnable example, the success body, and the errors a caller will actually hit. Authentication, pagination and rate limits are written once and linked from each endpoint.

## Use it when

- A public or partner API has no docs beyond the OpenAPI stub
- Support tickets ask how to authenticate or why a call returns 422
- You are adding endpoints and want docs that match the code
- An internal service is about to get its first outside consumer

## What it can access

- Reads route handlers, schemas and tests
- Writes documentation files
- May call a local dev server to test examples

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/api-documentation/
