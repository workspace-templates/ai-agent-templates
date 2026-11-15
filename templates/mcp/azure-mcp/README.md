# Azure MCP Server

**MCP setup** · DevOps and cloud

Start Microsoft's Azure MCP server via npx and let the agent work with Azure storage, Monitor logs and Cosmos DB using your az login.

## Install

```bash
npx workspacetemplates add azure-mcp
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

The Azure MCP server gives an agent tools for Azure Blob storage, Azure Monitor queries and metrics, and Cosmos DB NoSQL data. The old Azure/azure-mcp repository is archived; development moved to microsoft/mcp, which is where this setup comes from.

It authenticates with the Azure Identity SDK, so run az login first and the server acts as you. It has no documented read-only flag, so use an Azure role that only grants read access.

## Use it when

- Run a Log Analytics query while chasing an incident
- List blobs in a storage container
- Query a Cosmos DB container for sample documents
- Check metrics for a misbehaving app

## What it can access

- Reads and may change Azure resources your identity can use
- Runs locally through npx
- Azure resources your signed-in identity can reach
- Can write data and run queries according to that identity's roles

Official source: https://github.com/microsoft/mcp/blob/main/servers/Azure.Mcp.Server/README.md

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ℹ️ **Runs a local server.** Starts `npx -y @azure/mcp@latest server start` on your machine, from the vendor's package.

More: https://workspacetemplates.com/ai/azure-mcp/
