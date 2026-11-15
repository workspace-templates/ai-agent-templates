# Redis MCP Server

**MCP setup** · Databases

Let your agent read and write Redis strings, hashes, streams and vector indexes through the official Redis MCP server, run with uvx.

## Install

```bash
npx workspacetemplates add redis-mcp
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

The Redis MCP server from Redis itself gives an agent typed tools for strings, hashes, lists, sets, sorted sets, JSON documents, pub/sub and streams, plus vector search through the query engine.

It runs locally over stdio with uvx and connects with the usual REDIS_ variables. The server has no read-only switch, so the safe route is a Redis ACL user that can only read, passed in as the username and password.

## Use it when

- Inspect what a cache key actually holds while debugging
- Look at a stream and its consumer groups
- Check TTLs on session keys before changing expiry
- Try a vector index query against sample data

## What it can access

- Runs a local process that connects to the Redis instance you point it at
- Writes allowed unless the Redis user is limited
- Reads and writes keys in the Redis database it connects to
- Can publish to channels and add or delete stream entries unless the ACL user forbids it

Official source: https://github.com/redis/mcp-redis

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ℹ️ **Runs a local server.** Starts `uvx --from redis-mcp-server@latest redis-mcp-server` on your machine, from the vendor's package.

More: https://workspacetemplates.com/ai/redis-mcp/
