# API Doc Generator

**Subagent** · Documentation

Subagent that documents HTTP endpoints from the routes, types and validators in your code, with request and response examples that match them.

## Install

```bash
npx workspacetemplates add api-doc-generator
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/agents/api-doc-generator.md](claude-code/.claude/agents/api-doc-generator.md) | `.claude/agents/api-doc-generator.md` |
| Codex | [codex/.codex/agents/api-doc-generator.toml](codex/.codex/agents/api-doc-generator.toml) | `.codex/agents/api-doc-generator.toml` |
| Cursor | [cursor/.cursor/agents/api-doc-generator.md](cursor/.cursor/agents/api-doc-generator.md) | `.cursor/agents/api-doc-generator.md` |
| Gemini CLI | [gemini-cli/.gemini/agents/api-doc-generator.md](gemini-cli/.gemini/agents/api-doc-generator.md) | `.gemini/agents/api-doc-generator.md` |
| GitHub Copilot | [copilot/.github/agents/api-doc-generator.agent.md](copilot/.github/agents/api-doc-generator.agent.md) | `.github/agents/api-doc-generator.agent.md` |

## What it does

API docs written by hand drift away from the handlers. This subagent reads the routes, the input validation and the return types, and writes reference pages from what the code actually accepts and returns.

Every endpoint gets its method, path, parameters, auth requirement, error cases and a copyable request with a realistic response. It works from the source, so it documents only what exists.

## Use it when

- You have an API with no reference documentation
- The existing docs no longer match the handlers
- You need examples partners can paste into a terminal
- Before releasing a new API version with changed responses

## What it can access

- Reads route, type and schema files
- Writes documentation files only, not application code

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/api-doc-generator/
