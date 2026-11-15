# Square MCP Server

**MCP setup** · Backend and APIs

Use Square's hosted MCP server to let your agent work with payments, catalog, orders and customers through the Square API after an OAuth sign-in.

## Install

```bash
npx workspacetemplates add square-mcp
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

Square's MCP server exposes its whole API through three tools: one to discover a service's methods, one to read a method's parameters and one to make the call. That keeps the tool list small while covering payments, orders, catalog, customers and more.

The hosted endpoint signs you in with OAuth, so you do not paste an access token. If you prefer to run it yourself with your own token, Square also documents a local npx mode with a DISALLOW_WRITES switch for read-only use.

## Use it when

- Explore the Square API for a point-of-sale integration
- Look up an order and its payments while debugging a mismatch
- List catalog items to seed a staging store
- Check which fields a Square method requires before you code the call

## What it can access

- Reads and can change data in the Square seller account you authorize
- Sends requests to mcp.squareup.com
- Calls the Square API for the seller account you sign in with
- Can read and change orders, catalog, customers and payments within that account's permissions

Official source: https://github.com/square/square-mcp-server

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ℹ️ **Connects to a hosted server.** Your agent talks to mcp.squareup.com, run by the vendor.

More: https://workspacetemplates.com/ai/square-mcp/
