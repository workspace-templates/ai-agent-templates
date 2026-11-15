# Box MCP Server

**MCP setup** · Documentation

Connect your coding agent to Box's hosted MCP server to search folders, read files and ask Box AI questions about documents you can already open.

## Install

```bash
npx workspacetemplates add box-mcp
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

Box hosts its own remote MCP server at mcp.box.com. The agent can identify the signed-in user, list and search folders, read file content and use Box AI to answer questions about files or pull out metadata.

Access follows your Box permissions, so it reaches only what you could open yourself. An administrator has to switch the server on first, either the predefined Box MCP Server integration or an unlisted one, in the Admin Console under Integrations.

## Use it when

- Pull a spec or contract out of a shared Box folder while you implement it
- Ask Box AI what a long PDF says about a deadline
- Find the latest version of a design brief by folder search
- Check an API requirements file stored in Box against your code

## What it can access

- Reads your Box files and folders through your own permissions
- OAuth scopes allow writes, so review what your admin enables
- Reads files and folders your Box account can open, and runs Box AI questions on them
- The OAuth scopes are readwrite, so Box lets the connection change content up to your own permissions

Official source: https://developer.box.com/guides/box-mcp/remote

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ℹ️ **Connects to a hosted server.** Your agent talks to mcp.box.com, run by the vendor.

More: https://workspacetemplates.com/ai/box-mcp/
