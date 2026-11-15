# Qdrant MCP Server

**MCP setup** · Data and AI

Give your agent a semantic memory in Qdrant: store notes and code snippets, then find them again by meaning with the official mcp-server-qdrant.

## Install

```bash
npx workspacetemplates add qdrant-mcp
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

The official Qdrant server exposes two tools. One stores a piece of text with optional metadata in a collection, and the other finds the stored entries closest in meaning to a query. It suits a long-lived memory for an agent, or a searchable index of snippets.

It runs through uvx, so you need uv installed. Point it at a Qdrant instance with a URL and key, or at a local folder for a file-based database. Embeddings are made locally with fastembed by default, so no embedding API key is involved.

Setting QDRANT_READ_ONLY to true removes the store tool and leaves lookup only.

## Use it when

- Keep project decisions where the agent can recall them in later sessions
- Index code snippets and ask for the closest match to a description
- Query an existing collection without allowing writes
- Prototype retrieval before adopting a larger vector pipeline

## What it can access

- Reads one Qdrant collection
- Writes entries to it unless read-only is set
- Searches the collection you configure
- Writes new entries to it unless QDRANT_READ_ONLY is true
- Downloads an embedding model on first run

Official source: https://github.com/qdrant/mcp-server-qdrant

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ℹ️ **Runs a local server.** Starts `uvx mcp-server-qdrant` on your machine, from the vendor's package.

More: https://workspacetemplates.com/ai/qdrant-mcp/
