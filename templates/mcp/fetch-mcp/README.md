# Fetch MCP Server

**MCP setup** · Workflow

Let your agent download a web page and read it as clean markdown, in chunks, using the reference fetch server from the MCP project.

## Install

```bash
npx workspacetemplates add fetch-mcp
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

The fetch server adds one tool, fetch, that takes a URL and returns the page as markdown. You can ask for a longer slice with max_length and start_index, or request the raw HTML.

It is a Python package started with uvx, so you need uv installed. There is no account and no key.

By default it refuses private and loopback addresses and obeys a site's robots.txt for requests the model makes, which keeps an agent from poking at your internal network.

## Use it when

- Read a documentation page you paste as a link
- Summarize a long blog post or RFC in several chunks
- Pull the text of a public issue or changelog into the chat
- Compare two vendor pages without opening a browser

## What it can access

- Reads public web pages over the network
- Writes nothing to your files
- Makes outbound HTTP requests to any public URL the agent chooses
- Blocks loopback and private addresses unless you add a flag

Official source: https://github.com/modelcontextprotocol/servers/tree/main/src/fetch

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ℹ️ **Runs a local server.** Starts `uvx mcp-server-fetch` on your machine, from the vendor's package.

More: https://workspacetemplates.com/ai/fetch-mcp/
