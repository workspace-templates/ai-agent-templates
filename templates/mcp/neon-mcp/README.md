# Neon MCP Server

**MCP setup** · Databases

Manage Neon Postgres projects and branches from your agent, and test schema changes on a temporary branch before they touch your main data.

## Install

```bash
npx workspacetemplates add neon-mcp
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.mcp.json](claude-code/.mcp.json) | `.mcp.json` (merge) |
| Codex | [codex/home/.codex/config.toml](codex/home/.codex/config.toml) | `~/.codex/config.toml` (merge) |
| Cursor | [cursor/.cursor/mcp.json](cursor/.cursor/mcp.json) | `.cursor/mcp.json` (merge) |
| Gemini CLI | [gemini-cli/.gemini/settings.json](gemini-cli/.gemini/settings.json) | `.gemini/settings.json` (merge) |
| GitHub Copilot | [copilot/.vscode/mcp.json](copilot/.vscode/mcp.json) | `.vscode/mcp.json` (merge) |

## What it does

Neon's official MCP server lets an agent list projects, create branches, inspect schema, run SQL and explain slow queries. Neon branches are cheap copies, which is what makes its migration tools safe: the change is prepared on a temporary branch and only applied to the main one after you confirm.

This setup uses Neon's hosted endpoint with readonly set in the URL. You sign in through OAuth in the browser, so no key goes into the config. In read-only mode each query runs in a read-only transaction and the transaction and migration tools are not offered. Take the readonly parameter out of the URL once you are ready for the agent to make changes.

## Use it when

- Inspect tables and indexes in a Neon project
- Find the slowest queries and ask for an explanation
- Review a branch's schema against its parent
- Plan a migration, then switch off read-only to apply it on a test branch

## What it can access

- Reads your Neon projects and databases, read-only by default here
- Writes only if you remove the readonly flag
- Reads projects, branches, schema and query statistics in your Neon account
- Read-only queries only while readonly=true is in the URL
- Without that flag it can create and delete projects and run migrations

Official source: https://github.com/neondatabase/mcp-server-neon

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ℹ️ **Connects to a hosted server.** Your agent talks to mcp.neon.tech, run by the vendor.

More: https://workspacetemplates.com/ai/neon-mcp/
