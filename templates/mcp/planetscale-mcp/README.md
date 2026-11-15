# PlanetScale MCP Server

**MCP setup** · Databases

Inspect PlanetScale databases and branches from your agent, run read queries, check schema and review performance insights over OAuth.

## Install

```bash
npx workspacetemplates add planetscale-mcp
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

PlanetScale hosts an MCP server that covers organizations, databases and branches. The agent can read a branch's schema, run read queries, pull query insights, list schema recommendations and search the PlanetScale documentation.

You sign in with OAuth and choose, per organization or database, whether the grant is none, read-only or full. Pick read-only for everyday work. The read query tool accepts only SELECT, SHOW, DESCRIBE and EXPLAIN, and reads go to a replica when one exists. PlanetScale also offers an insights-only endpoint with no query tools at all.

## Use it when

- Compare the schema of a branch with production
- Ask which queries are slowest and what indexes are suggested
- Check error patterns in recent queries
- Look up a PlanetScale feature without leaving the editor

## What it can access

- Reads PlanetScale schema, metrics and query data you grant
- Can run writes only with the full access level
- Reads organizations, databases, branches and schema you grant
- Runs read queries; write queries only if you grant full access
- Can read billing information if you allow it

Official source: https://planetscale.com/docs/connect/mcp

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ℹ️ **Connects to a hosted server.** Your agent talks to mcp.pscale.dev, run by the vendor.

More: https://workspacetemplates.com/ai/planetscale-mcp/
