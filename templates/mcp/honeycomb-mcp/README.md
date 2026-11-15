# Honeycomb MCP Server

**MCP setup** · DevOps and cloud

Query Honeycomb traces, datasets and SLOs from your agent through Honeycomb's hosted MCP server, signed in with OAuth.

## Install

```bash
npx workspacetemplates add honeycomb-mcp
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

Honeycomb runs the server itself, which means you install nothing locally. Once connected, an agent can run queries on your event data, fetch a trace, look up column definitions and review SLOs while it works on a slow endpoint or an error spike.

You sign in with OAuth in the browser. The consent screen lets you choose read-only access, so the agent can investigate without creating boards or triggers. Teams in the EU region use the eu1 address instead of the one in this setup.

## Use it when

- Find what changed when p99 latency doubled
- Pull the slowest traces for one endpoint
- Check how much error budget an SLO has left
- Look up which attributes exist on a dataset before writing a query

## What it can access

- Reads telemetry from environments you approve
- Write access only if granted at sign-in
- Reads queries, traces, datasets and SLOs in the Honeycomb environments you authorize
- Can create boards, triggers and SLOs only if you grant write access at sign-in

Official source: https://docs.honeycomb.io/integrations/mcp/

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ℹ️ **Connects to a hosted server.** Your agent talks to mcp.honeycomb.io, run by the vendor.

More: https://workspacetemplates.com/ai/honeycomb-mcp/
