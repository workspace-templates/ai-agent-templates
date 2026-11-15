# Tavily MCP Server

**MCP setup** · Workflow

Run Tavily's official MCP server through npx so your agent can search the web and extract page content with tavily-search and tavily-extract.

## Install

```bash
npx workspacetemplates add tavily-mcp
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

Tavily builds search for AI agents, and its tavily-mcp package adds tools such as tavily-search and tavily-extract. The agent gets ranked results with snippets and can pull the readable content of specific URLs.

It starts locally with npx and reads your key from TAVILY_API_KEY. An optional DEFAULT_PARAMETERS variable, a JSON string, sets defaults like search depth and result count.

## Use it when

- Check the latest version and changelog of a dependency
- Extract the text of a documentation page into the conversation
- Gather sources on a technical question before you decide
- Verify a claim in a README against the vendor's own site

## What it can access

- Queries and URLs are sent to Tavily's API
- Runs a local npx process, no file access needed
- Sends search queries and page URLs to Tavily
- Returns web content to the agent; no access to your files

Official source: https://github.com/tavily-ai/tavily-mcp

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ℹ️ **Runs a local server.** Starts `npx -y tavily-mcp@latest` on your machine, from the vendor's package.

More: https://workspacetemplates.com/ai/tavily-mcp/
