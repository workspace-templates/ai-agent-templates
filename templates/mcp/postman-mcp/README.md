# Postman MCP Server

**MCP setup** · Backend and APIs

Connect your coding agent to Postman's hosted MCP server to read and update collections, environments and API definitions from the chat.

## Install

```bash
npx workspacetemplates add postman-mcp
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

Postman's official MCP server connects an agent to your Postman workspaces. It can find collections, read requests, edit them and work with environments, so API work in your editor stays in step with what the team keeps in Postman.

This setup uses the hosted minimal endpoint, which exposes a small set of essential tools and signs in with OAuth. Full and code endpoints exist for the whole Postman API or for generating client code.

## Use it when

- Find the collection that documents an endpoint you are changing
- Add a request to a collection after you ship a new route
- Compare environments to see which variable differs in staging
- Generate client code from an API definition (switch to the code endpoint)

## What it can access

- Reads and edits Postman collections and environments you can access
- Sends requests to mcp.postman.com
- Reads Postman workspaces, collections and environments you can open
- Can create and edit collections and requests in those workspaces

Official source: https://github.com/postmanlabs/postman-mcp-server

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ℹ️ **Connects to a hosted server.** Your agent talks to mcp.postman.com, run by the vendor.

More: https://workspacetemplates.com/ai/postman-mcp/
