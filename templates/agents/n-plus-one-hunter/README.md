# N+1 Hunter

**Subagent** · Backend and APIs

Read-only subagent that finds N+1 query patterns in ORM and GraphQL code and proposes batched or eager-loaded replacements.

## Install

```bash
npx workspacetemplates add n-plus-one-hunter
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/agents/n-plus-one-hunter.md](claude-code/.claude/agents/n-plus-one-hunter.md) | `.claude/agents/n-plus-one-hunter.md` |
| Codex | [codex/.codex/agents/n-plus-one-hunter.toml](codex/.codex/agents/n-plus-one-hunter.toml) | `.codex/agents/n-plus-one-hunter.toml` |
| Cursor | [cursor/.cursor/agents/n-plus-one-hunter.md](cursor/.cursor/agents/n-plus-one-hunter.md) | `.cursor/agents/n-plus-one-hunter.md` |
| Gemini CLI | [gemini-cli/.gemini/agents/n-plus-one-hunter.md](gemini-cli/.gemini/agents/n-plus-one-hunter.md) | `.gemini/agents/n-plus-one-hunter.md` |
| GitHub Copilot | [copilot/.github/agents/n-plus-one-hunter.agent.md](copilot/.github/agents/n-plus-one-hunter.agent.md) | `.github/agents/n-plus-one-hunter.agent.md` |

## What it does

An N+1 is one query for a list plus one more query per row. It passes every test with five rows and takes a service down with five thousand. This subagent hunts for the shape in ORM code, serializers, templates and GraphQL resolvers.

It reports each suspect with the loop that hides the query, the number of queries it implies, and a batched version written out. Nothing is edited, so you can compare the proposals with how your team prefers to load data.

## Use it when

- A list endpoint got slow as the table grew
- A GraphQL resolver tree makes dozens of database calls per request
- You want a sweep before a launch or a data import
- Query logs show the same statement repeating with different IDs

## What it can access

- Reads source files, models, resolvers and serializers
- Edits nothing and runs no commands

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/n-plus-one-hunter/
