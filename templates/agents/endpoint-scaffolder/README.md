# Endpoint Scaffolder

**Subagent** · Backend and APIs

Subagent that adds one new API endpoint end to end by copying your existing patterns: route, validation, service, tests and docs.

## Install

```bash
npx workspacetemplates add endpoint-scaffolder
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/agents/endpoint-scaffolder.md](claude-code/.claude/agents/endpoint-scaffolder.md) | `.claude/agents/endpoint-scaffolder.md` |
| Codex | [codex/.codex/agents/endpoint-scaffolder.toml](codex/.codex/agents/endpoint-scaffolder.toml) | `.codex/agents/endpoint-scaffolder.toml` |
| Cursor | [cursor/.cursor/agents/endpoint-scaffolder.md](cursor/.cursor/agents/endpoint-scaffolder.md) | `.cursor/agents/endpoint-scaffolder.md` |
| Gemini CLI | [gemini-cli/.gemini/agents/endpoint-scaffolder.md](gemini-cli/.gemini/agents/endpoint-scaffolder.md) | `.gemini/agents/endpoint-scaffolder.md` |
| GitHub Copilot | [copilot/.github/agents/endpoint-scaffolder.agent.md](copilot/.github/agents/endpoint-scaffolder.agent.md) | `.github/agents/endpoint-scaffolder.agent.md` |

## What it does

Adding an endpoint touches five or six files, and the easy mistake is inventing a new style in the sixth. This subagent finds the closest existing endpoint, treats it as the template, and builds the new one in the same shape.

It writes the route, input validation, service function, a data access call and tests, then runs the test suite. It will not add a library or a new pattern without telling you first.

## Use it when

- You need a CRUD-style endpoint that looks like the others
- A feature needs one new route and you want it done in the project style
- You are onboarding and want a worked example of how this codebase layers things
- You want tests written together with the endpoint, not after

## What it can access

- Reads route, service and test files
- Creates and edits source files and tests for the new endpoint
- Runs your test command

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/endpoint-scaffolder/
