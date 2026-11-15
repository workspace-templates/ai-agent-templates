# Pinecone MCP Server

**MCP setup** · Data and AI

Let your coding agent manage Pinecone indexes and run vector searches and upserts through Pinecone's own MCP server, started with npx.

## Install

```bash
npx workspacetemplates add pinecone-mcp
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

Pinecone publishes an MCP server that gives an agent direct access to your vector indexes. It can list and describe indexes, create new ones, upsert records, and run searches with filters and reranking, so you can test retrieval without writing a script first.

It starts locally with npx and needs a Pinecone API key and Node.js 22 or later. Without the key it still searches the Pinecone documentation, but it cannot touch your data. Pinecone documents no read-only switch, so use a key with limited rights when you only want to look around.

## Use it when

- Check what indexes exist and how many records each namespace holds
- Try a semantic query against an index before wiring it into an app
- Create a small test index and load sample documents
- Ask a Pinecone docs question while you write the client code

## What it can access

- Reads and queries indexes in the project your key belongs to
- Can create indexes and upsert records
- Lists, describes, creates and searches indexes in your Pinecone project
- Can upsert records into indexes, which changes stored data
- Searches the public Pinecone documentation

Official source: https://github.com/pinecone-io/pinecone-mcp

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ℹ️ **Runs a local server.** Starts `npx -y @pinecone-database/mcp` on your machine, from the vendor's package.

More: https://workspacetemplates.com/ai/pinecone-mcp/
