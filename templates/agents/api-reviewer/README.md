# API Reviewer

**Subagent** · Backend and APIs

Read-only subagent that reviews HTTP endpoints for naming, status codes, validation and consistency, and lists concrete fixes by severity.

## Install

```bash
npx workspacetemplates add api-reviewer
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/agents/api-reviewer.md](claude-code/.claude/agents/api-reviewer.md) | `.claude/agents/api-reviewer.md` |
| Codex | [codex/.codex/agents/api-reviewer.toml](codex/.codex/agents/api-reviewer.toml) | `.codex/agents/api-reviewer.toml` |
| Cursor | [cursor/.cursor/agents/api-reviewer.md](cursor/.cursor/agents/api-reviewer.md) | `.cursor/agents/api-reviewer.md` |
| Gemini CLI | [gemini-cli/.gemini/agents/api-reviewer.md](gemini-cli/.gemini/agents/api-reviewer.md) | `.gemini/agents/api-reviewer.md` |
| GitHub Copilot | [copilot/.github/agents/api-reviewer.agent.md](copilot/.github/agents/api-reviewer.agent.md) | `.github/agents/api-reviewer.agent.md` |

## What it does

Individual endpoints usually look fine. The trouble shows up across the whole API: one route returns 404 for a missing record and another returns 200 with null, one list is paginated and its sibling is not. This subagent reads the routes side by side and reports where they disagree.

It only reads. Each finding names the file and line, says what a client will experience, and gives the corrected shape, so you can decide what is worth a breaking change.

## Use it when

- A teammate added several endpoints and you want a consistency check before merge
- You inherited an API and need to know how uneven it is
- You are about to publish an API to outside clients
- Clients keep asking why two similar routes behave differently

## What it can access

- Reads route, controller and validation files in your project
- Edits nothing and runs no commands

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/api-reviewer/
