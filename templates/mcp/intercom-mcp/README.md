# Intercom MCP Server

**MCP setup** · Workflow

Let your coding agent search Intercom conversations, contacts and Help Center articles through Intercom's hosted MCP server with OAuth sign-in.

## Install

```bash
npx workspacetemplates add intercom-mcp
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

Intercom runs a hosted MCP server for US workspaces. Once connected, the agent can search conversations and contacts, read companies, and look up or draft Help Center articles from the same chat where you write code.

Sign-in is OAuth in your browser, so no token sits in a config file. It is handy when a support ticket points at a bug and you want the customer's exact words next to the stack trace.

EU workspaces use a different host, mcp.eu.intercom.com, and Australian workspaces are not supported.

## Use it when

- Find the support conversations that mention a bug you are fixing
- Look up which company a reporting contact belongs to
- Check a Help Center article before changing the feature it describes
- Add an internal note to a conversation after a fix ships

## What it can access

- Reads support conversations and customer data in Intercom
- Can write internal notes and Help Center articles
- Reads conversations, contacts, companies and Help Center articles in your Intercom workspace
- Can add internal notes to conversations and create or update Help Center articles
- Cannot send customer-visible replies

Official source: https://developers.intercom.com/docs/guides/mcp

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ℹ️ **Connects to a hosted server.** Your agent talks to mcp.intercom.com, run by the vendor.

More: https://workspacetemplates.com/ai/intercom-mcp/
