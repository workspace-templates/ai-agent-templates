# Netlify MCP Server

**MCP setup** · DevOps and cloud

Netlify's official MCP server, started with npx, lets your agent create, configure and deploy sites and manage environment variables.

## Install

```bash
npx workspacetemplates add netlify-mcp
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

Netlify's MCP server wraps the Netlify API and CLI. An agent can create a project, deploy it, manage environment variables and secrets, turn on form handling and look up team details.

It runs locally with npx and needs Node.js 22 or later. It normally uses your existing Netlify login. A personal access token can be set as an environment variable only to troubleshoot authentication.

## Use it when

- Deploy a static site from a folder you just built
- Add an environment variable to a site
- Enable form submissions on a landing page
- Check which team a site belongs to

## What it can access

- Reads and changes Netlify sites and settings on your account
- Runs locally through npx
- Netlify sites, environment variables and extensions on your account
- Can deploy sites and change access controls

Official source: https://github.com/netlify/netlify-mcp

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ℹ️ **Runs a local server.** Starts `npx -y @netlify/mcp` on your machine, from the vendor's package.

More: https://workspacetemplates.com/ai/netlify-mcp/
