# Exa MCP Server

**MCP setup** · Workflow

Add Exa's hosted MCP server so your agent can run neural web search and fetch full page contents with web_search_exa and web_fetch_exa.

## Install

```bash
npx workspacetemplates add exa-mcp
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

Exa is a search engine built for AI use, and its hosted MCP server exposes two tools by default: web_search_exa for finding pages and web_fetch_exa for pulling a page's text. Optional tools such as web_search_advanced_exa can be switched on with a tools parameter on the URL.

This setup sends your Exa API key in the x-api-key header. Exa also supports OAuth, which you can use instead by leaving the header out and signing in through the client.

## Use it when

- Look up current library docs and release notes while coding
- Find real-world examples of an API call you are unsure about
- Read the full text of a page the agent found by search
- Research a vendor or a standard before choosing it

## What it can access

- Search queries and fetched URLs go to Exa
- Read-only for your files and accounts
- Sends search queries and URLs to Exa's servers
- Returns web page text to the agent; changes nothing on your machine

Official source: https://github.com/exa-labs/exa-mcp-server

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ℹ️ **Connects to a hosted server.** Your agent talks to mcp.exa.ai, run by the vendor.

More: https://workspacetemplates.com/ai/exa-mcp/
