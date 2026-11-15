# Hugging Face MCP Server

**MCP setup** · Data and AI

Search Hugging Face models, datasets, Spaces and papers from your agent through the official hosted MCP server and a read token.

## Install

```bash
npx workspacetemplates add huggingface-mcp
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

Hugging Face runs a hosted MCP server for the Hub. Once connected, the agent can look up models and datasets, find Spaces that do a given job, search papers, and query the Hub documentation in plain language.

No local package is involved: point the client at the server URL and send a Hugging Face access token in an Authorization header. Extra tools such as repository creation, jobs and sandboxes can be switched on or off in your account's MCP settings, so you decide how much the agent can do.

## Use it when

- Find a small model that fits a task and license
- Check which datasets exist for a language or domain
- Look up how a library in the Hub docs handles a feature
- Find a Space that already demos what you plan to build

## What it can access

- Reads Hub content, including private repos your token can see
- Changes only what you enable in your MCP settings
- Reads public Hub models, datasets, Spaces and papers
- Can reach private repos your token allows
- Write tools only exist if you enable them in your MCP settings

Official source: https://huggingface.co/docs/hub/agents-mcp

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ℹ️ **Connects to a hosted server.** Your agent talks to huggingface.co, run by the vendor.

More: https://workspacetemplates.com/ai/huggingface-mcp/
