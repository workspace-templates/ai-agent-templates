# OpenAPI Sync Checker

**Subagent** · Backend and APIs

Read-only subagent that compares your OpenAPI spec with the routes the code really serves and lists every mismatch it can prove.

## Install

```bash
npx workspacetemplates add openapi-sync-checker
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/agents/openapi-sync-checker.md](claude-code/.claude/agents/openapi-sync-checker.md) | `.claude/agents/openapi-sync-checker.md` |
| Codex | [codex/.codex/agents/openapi-sync-checker.toml](codex/.codex/agents/openapi-sync-checker.toml) | `.codex/agents/openapi-sync-checker.toml` |
| Cursor | [cursor/.cursor/agents/openapi-sync-checker.md](cursor/.cursor/agents/openapi-sync-checker.md) | `.cursor/agents/openapi-sync-checker.md` |
| Gemini CLI | [gemini-cli/.gemini/agents/openapi-sync-checker.md](gemini-cli/.gemini/agents/openapi-sync-checker.md) | `.gemini/agents/openapi-sync-checker.md` |
| GitHub Copilot | [copilot/.github/agents/openapi-sync-checker.agent.md](copilot/.github/agents/openapi-sync-checker.agent.md) | `.github/agents/openapi-sync-checker.agent.md` |

## What it does

Once an API document and the handlers disagree, generated clients and published docs quietly inherit the error. This subagent reads the OpenAPI file and the route handlers, then lists what exists in one and not the other.

It checks paths, methods, parameters, request bodies, response codes and security. Findings come with the file and line on both sides, and it tells you which side looks wrong.

## Use it when

- Generated client code started failing against the live API
- You want to check the docs before a release
- A team has been editing routes without touching the spec
- You are about to switch to spec-first or code-first and need the current gap

## What it can access

- Reads the OpenAPI file and route code
- May run a read-only spec linter if one is configured

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/openapi-sync-checker/
