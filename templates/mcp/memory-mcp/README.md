# Memory MCP Server

**MCP setup** · Workflow

Give your agent a persistent knowledge graph of people, projects and decisions that survives between sessions, stored in one local JSONL file.

## Install

```bash
npx workspacetemplates add memory-mcp
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

The memory server keeps a graph made of entities, the observations attached to them, and directed relations between them. Tools such as create_entities, add_observations, search_nodes and read_graph let the agent write and recall facts.

Everything lives in a single JSONL file on your disk. Point MEMORY_FILE_PATH at a folder you own, because a file inside the npx cache can be wiped when packages update.

It needs Node.js 24 or later and no account.

## Use it when

- Remember team conventions from one session to the next
- Track which services depend on each other
- Keep a running list of decisions and why they were made
- Store preferences so you stop repeating them

## What it can access

- Reads and writes the memory file you configure
- No network access
- Reads and rewrites one memory file at the path you set
- Can delete entities, relations and observations in that file

Official source: https://github.com/modelcontextprotocol/servers/tree/main/src/memory

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ℹ️ **Runs a local server.** Starts `npx -y @modelcontextprotocol/server-memory` on your machine, from the vendor's package.

More: https://workspacetemplates.com/ai/memory-mcp/
