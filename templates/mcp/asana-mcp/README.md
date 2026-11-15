# Asana MCP Server

**MCP setup** · Workflow

Let your coding agent read and update Asana tasks and projects through Asana's hosted V2 MCP server with a browser OAuth sign-in.

## Install

```bash
npx workspacetemplates add asana-mcp
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

Asana hosts its own MCP server, so there is nothing to install. Point a client at the V2 endpoint and approve access with your Asana account. The agent can then look up tasks, create and update them, and summarize project status.

The older beta endpoint at /sse is being retired, so use the /v2/mcp address. Your client must support OAuth and Streamable HTTP transport.

## Use it when

- Turn the open to-do comments in the code into Asana tasks
- Ask what is still open on this sprint's project
- Mark a task done and leave a comment linking the merged change
- Draft a weekly status from the project's recent activity

## What it can access

- Asana tasks and projects your account can open
- Writes tasks and comments on request
- Reads tasks, projects and comments in workspaces your Asana account belongs to
- Can create and change tasks and projects

Official source: https://developers.asana.com/docs/using-asanas-mcp-server

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ℹ️ **Connects to a hosted server.** Your agent talks to mcp.asana.com, run by the vendor.

More: https://workspacetemplates.com/ai/asana-mcp/
