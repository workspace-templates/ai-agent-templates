# Linear MCP Server

**MCP setup** · Workflow

Connect your agent to Linear's hosted MCP server to find, read, create and update issues and projects without leaving the terminal.

## Install

```bash
npx workspacetemplates add linear-mcp
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

Linear provides an official remote MCP server for its workspace. The agent can look up an issue by key, read the thread, create follow-ups and move work between states.

Authentication is OAuth, started the first time you connect. Linear also serves a read-only endpoint if you only want the agent to look.

## Use it when

- Start work from an issue key and read its full context
- File follow-up issues for the TODOs found in a change
- Summarize what is in the current cycle
- Update an issue status after a pull request merges

## What it can access

- Reads and can change Linear issues you can access
- Reads and writes issues, projects and comments you can access in Linear
- Authenticates with OAuth

Official source: https://linear.app/docs/mcp

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ℹ️ **Connects to a hosted server.** Your agent talks to mcp.linear.app, run by the vendor.

More: https://workspacetemplates.com/ai/linear-mcp/
