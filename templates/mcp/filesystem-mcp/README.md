# Filesystem MCP Server

**MCP setup** · Workflow

Give an agent scoped file access through the reference Filesystem MCP server, limited to the folders you list and optionally read-only.

## Install

```bash
npx workspacetemplates add filesystem-mcp
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

The Filesystem server is part of the official Model Context Protocol servers repository. It reads, searches and edits files, but only inside the directories you pass on the command line.

Use it with agents that have no file tools of their own, or to expose a notes or docs folder outside the project. This config passes the current folder and starts in read-only mode.

## Use it when

- Let a chat client read a notes or docs folder
- Expose one folder to an agent and nothing else
- Search many text files by name or content
- Keep access read-only while the agent explores

## What it can access

- Reads files in the listed folders only
- Reads files inside the listed folders only
- Read-only because of the --read-only flag

Official source: https://github.com/modelcontextprotocol/servers/tree/main/src/filesystem

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ℹ️ **Runs a local server.** Starts `npx -y @modelcontextprotocol/server-filesystem --read-only .` on your machine, from the vendor's package.

More: https://workspacetemplates.com/ai/filesystem-mcp/
