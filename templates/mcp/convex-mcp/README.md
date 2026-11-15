# Convex MCP Server

**MCP setup** · Databases · typescript

Let your coding agent inspect a Convex deployment's tables, data, logs and functions through the Convex CLI's MCP server, with write tools turned off.

## Install

```bash
npx workspacetemplates add convex-mcp
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

The Convex CLI ships an MCP server that starts with npx and talks to your project's deployment. The agent can list tables and schemas, page through documents, run read-only queries and read recent function logs.

This setup passes the documented --disable-tools flag to remove run, envSet and envRemove, so the agent can look at your backend but cannot call mutations or change environment variables.

Production deployments stay off by default. Convex asks for an explicit dangerous flag to enable them, and this setup does not add it.

## Use it when

- Check what is really stored in a table while you debug a query
- Read the last function errors after a failed deploy
- Compare a schema with the types you wrote in your code
- Find slow or failing functions from the health insights

## What it can access

- Reads data and logs from your Convex development deployment
- Write tools are disabled in this setup
- Reads tables, documents, function metadata and logs from your development deployment
- Environment variable values can be read with envGet and envList, so keep secrets out of dev
- Cannot run functions or set and remove environment variables with the tools disabled here

Official source: https://docs.convex.dev/ai/convex-mcp-server

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ℹ️ **Runs a local server.** Starts `npx -y convex@latest mcp start --disable-tools run,envSet,envRemove` on your machine, from the vendor's package.

More: https://workspacetemplates.com/ai/convex-mcp/
