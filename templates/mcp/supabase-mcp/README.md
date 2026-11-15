# Supabase MCP Server

**MCP setup** · Databases

Connect your agent to Supabase's hosted MCP server to inspect tables, run read-only SQL and manage a project from your editor.

## Install

```bash
npx workspacetemplates add supabase-mcp
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

Supabase runs an official MCP server that lets an agent list tables, read schemas, run SQL and look up the docs for one project. It is useful when the agent needs the real schema, not a guess.

This config pins the server to a single project and turns on read-only mode. Remove the read-only flag only when you want the agent to change data, and keep it away from production.

## Use it when

- Write queries against your real schema
- Review table structure and indexes
- Debug a failing row-level security policy
- Draft a migration after reading the current tables

## What it can access

- Reads your Supabase project through the token
- Read-only by default
- Reads schema and data of the one project in the URL
- Read-only SQL because of read_only=true

Official source: https://supabase.com/docs/guides/getting-started/mcp

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ℹ️ **Connects to a hosted server.** Your agent talks to mcp.supabase.com, run by the vendor.

More: https://workspacetemplates.com/ai/supabase-mcp/
