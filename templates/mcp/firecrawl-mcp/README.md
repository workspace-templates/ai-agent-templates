# Firecrawl MCP Server

**MCP setup** · Data and AI

Scrape pages, crawl whole sites and pull structured data into your agent as clean markdown with the official Firecrawl MCP server.

## Install

```bash
npx workspacetemplates add firecrawl-mcp
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

Firecrawl turns web pages into text an agent can use. Its MCP server can scrape a single URL, map a site's links, search the web, crawl many pages and extract structured fields, returning markdown instead of raw HTML.

This setup runs the npm package locally with your Firecrawl API key. Requests go to Firecrawl's service, so the pages you ask about are fetched by that service and each call uses credits on your plan. Firecrawl also offers hosted endpoints and a self-hosted option, described in its README.

## Use it when

- Pull a documentation site into markdown before asking questions about it
- Collect product names and prices from a listing page as structured data
- Map every URL on a site before planning a migration
- Search the web and read the top results in one step

## What it can access

- Fetches any public URL the agent names, through Firecrawl
- Does not change files on your machine
- Sends URLs and search queries you or the agent choose to Firecrawl's service
- Returns the fetched page content to the agent
- Spends credits from your Firecrawl plan

Official source: https://github.com/firecrawl/firecrawl-mcp-server

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ℹ️ **Runs a local server.** Starts `npx -y firecrawl-mcp` on your machine, from the vendor's package.

More: https://workspacetemplates.com/ai/firecrawl-mcp/
