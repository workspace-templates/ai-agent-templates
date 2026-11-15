# Auth0 MCP Server

**MCP setup** · Security

Inspect Auth0 applications, APIs, actions and logs from your coding agent with Auth0's official MCP server, in read-only mode by default.

## Install

```bash
npx workspacetemplates add auth0-mcp
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

Auth0 ships this server to manage a tenant from chat. Its tools list and read applications, resource servers, actions, forms and logs, and can also create and update them when you allow it.

Setup has two parts. Run npx @auth0/auth0-mcp-server init once to sign in with the browser device flow and choose a tenant; the credentials go into your system keychain. Then the agent starts the server with the run command.

This config adds --read-only, so the agent can inspect the tenant but not change it. Remove the flag only when you want writes.

## Use it when

- Find out why a login failed by reading the tenant logs
- List every application and its callback settings
- Review which actions are deployed in a tenant
- Pull the quickstart guide for a new app

## What it can access

- Reads Auth0 tenant configuration and logs
- Stores tokens in your system keychain after init
- Reads applications, APIs, actions, forms and logs of the tenant you signed in to
- Read-only because of the --read-only flag; without it the tools can create and update tenant objects

Official source: https://github.com/auth0/auth0-mcp-server

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ℹ️ **Runs a local server.** Starts `npx -y @auth0/auth0-mcp-server run --read-only` on your machine, from the vendor's package.

More: https://workspacetemplates.com/ai/auth0-mcp/
