# GraphQL API Rules

**Project rules** · Backend and APIs · graphql

Project rules for GraphQL servers: consistent schema naming, deliberate nullability, dataloaders, typed errors and depth and cost limits.

## Install

```bash
npx workspacetemplates add graphql-api-rules
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/CLAUDE.md](claude-code/CLAUDE.md) | `CLAUDE.md` (merge) |
| Codex | [codex/AGENTS.md](codex/AGENTS.md) | `AGENTS.md` (merge) |
| Cursor | [cursor/.cursor/rules/graphql-api-rules.mdc](cursor/.cursor/rules/graphql-api-rules.mdc) | `.cursor/rules/graphql-api-rules.mdc` |
| Gemini CLI | [gemini-cli/GEMINI.md](gemini-cli/GEMINI.md) | `GEMINI.md` (merge) |
| GitHub Copilot | [copilot/.github/copilot-instructions.md](copilot/.github/copilot-instructions.md) | `.github/copilot-instructions.md` (merge) |

## What it does

Once clients ship against a GraphQL schema, renaming anything gets expensive, so naming and nullability decisions matter more than resolver code. These rules front-load those choices.

They also guard the server: batching removes the usual N+1 trap, and query limits stop one expensive request from taking the service down.

## Use it when

- You are designing or extending a GraphQL schema
- Resolvers hit the database once per list item
- Clients cannot tell expected failures from crashes
- You expose the API publicly and need abuse limits

## What it can access

- Instructions only; nothing is executed by the file itself

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/graphql-api-rules/
