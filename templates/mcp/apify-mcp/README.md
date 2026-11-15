# Apify MCP Server

**MCP setup** · Data and AI

Give your coding agent Apify's hosted MCP server to find Actors, run web scrapers and read their datasets, signing in with OAuth.

## Install

```bash
npx workspacetemplates add apify-mcp
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

Apify is a platform of ready-made scrapers and automation programs called Actors. Its hosted MCP server lets an agent search the Apify Store, read an Actor's input schema, run it and fetch the results.

By default the server loads the Actor and docs tools plus web search and web fetch. Run storage, tasks, schedules and builds are off until you ask for them with a tools parameter on the URL, which keeps the surface small.

Running an Actor can use your Apify credits, so name the Actor and the limits in your prompt.

## Use it when

- Scrape a list of product pages into structured rows for a prototype
- Search the Apify Store for an Actor that already does the job
- Pull the dataset from a finished run into your test fixtures
- Look up an Apify API detail without leaving the editor

## What it can access

- Runs Actors on your Apify account and reads their output
- Can consume Apify credits
- Searches the Apify Store and reads Actor details and Apify documentation
- Runs Actors on your account, which can spend Apify credits, and reads their datasets
- Limit the tools with ?tools= on the URL; the endpoint allows 20 requests per second per user

Official source: https://docs.apify.com/platform/integrations/mcp

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ℹ️ **Connects to a hosted server.** Your agent talks to mcp.apify.com, run by the vendor.

More: https://workspacetemplates.com/ai/apify-mcp/
