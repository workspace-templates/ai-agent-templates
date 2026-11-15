# Brave Search MCP Server

**MCP setup** · Workflow

Give your coding agent live web, news, image and local search through Brave's own MCP server, so it can look up current docs and errors.

## Install

```bash
npx workspacetemplates add brave-mcp
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

Brave publishes this server for its Search API. It exposes tools such as brave_web_search, brave_news_search, brave_local_search, brave_image_search and brave_video_search, plus a summarizer and an LLM context tool.

It runs on your machine through npx over stdio. The only thing it needs is a Brave Search API key, which you create in the Brave API dashboard and keep in an environment variable.

Reach for it when the model's training data is too old: a library released last month, an error message you have never seen, or a question about a recent change.

## Use it when

- Look up the newest release notes for a dependency
- Search for the exact text of an obscure error message
- Check recent news about a vendor outage
- Find a nearby business or place while planning a trip

## What it can access

- Sends search queries to Brave over the network
- Needs an API key in BRAVE_API_KEY
- Sends your search queries to the Brave Search API
- Reads search results only; it changes nothing on your machine

Official source: https://github.com/brave/brave-search-mcp-server

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ℹ️ **Runs a local server.** Starts `npx -y @brave/brave-search-mcp-server --transport stdio` on your machine, from the vendor's package.

More: https://workspacetemplates.com/ai/brave-mcp/
