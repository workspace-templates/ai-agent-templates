# Chroma MCP Server

**MCP setup** · Data and AI

Create Chroma collections and add, query and inspect embeddings from your coding agent with the chroma-mcp server, run through uvx.

## Install

```bash
npx workspacetemplates add chroma-mcp
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

Chroma's MCP server turns the agent into a client of a Chroma database. It can create and modify collections, add documents with metadata, run semantic queries, fetch by id or filter, and delete what you no longer need.

You choose where the data lives with a client type: ephemeral keeps everything in memory, persistent writes to a folder you name, and http or cloud connect to a running Chroma. The server starts with uvx, so uv must be installed. The default embedding function needs no key.

## Use it when

- Try a retrieval idea on a handful of documents in memory
- Keep a persistent local collection of notes and search it
- Inspect what a collection holds before debugging a RAG pipeline
- Compare how two embedding settings rank the same query

## What it can access

- Reads collections from the configured Chroma
- Can modify and delete collections and documents
- Reads and queries collections in the Chroma instance you choose
- Can create, change and delete collections and documents

Official source: https://github.com/chroma-core/chroma-mcp

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ℹ️ **Runs a local server.** Starts `uvx chroma-mcp` on your machine, from the vendor's package.

More: https://workspacetemplates.com/ai/chroma-mcp/
