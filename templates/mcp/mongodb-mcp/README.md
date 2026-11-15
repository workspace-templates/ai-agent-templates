# MongoDB MCP Server

**MCP setup** · Databases

Query MongoDB and Atlas clusters, inspect collections and indexes from your agent with the official server, started in read-only mode.

## Install

```bash
npx workspacetemplates add mongodb-mcp
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

MongoDB's official server lets an agent connect to a cluster, list databases and collections, run queries and aggregations, and look at indexes and schema. With Atlas service account credentials it can also work with projects and clusters.

The setup starts it with the --readOnly flag, which switches off the tools that create, update or delete data. The connection string goes in an environment variable rather than the command line, because arguments can show up in process lists. Drop the flag only for a database you can afford to change.

## Use it when

- Explore an unfamiliar database and its collections
- Write and test an aggregation pipeline on real documents
- Check which indexes a collection has and which are missing
- Answer a data question without opening a shell

## What it can access

- Reads data from the cluster your connection string points to
- Cannot write while --readOnly is set
- Reads databases, collections, documents and indexes reachable with your connection string
- Read-only flag blocks create, update and delete tools

Official source: https://github.com/mongodb-js/mongodb-mcp-server

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ℹ️ **Runs a local server.** Starts `npx -y mongodb-mcp-server@latest --readOnly` on your machine, from the vendor's package.

More: https://workspacetemplates.com/ai/mongodb-mcp/
