# Sentry MCP Server

**MCP setup** · DevOps and cloud

Connect your agent to Sentry's hosted MCP server to read issues, stack traces and events for a project and fix the bug behind an alert.

## Install

```bash
npx workspacetemplates add sentry-mcp
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

Sentry hosts an official MCP server that exposes your organization's issues and events to the agent. Instead of pasting a stack trace, you ask about an issue and the agent reads the trace, the release and the affected users itself.

Sign-in uses OAuth, so there is no token to store. Scope the URL to one organization and project to keep the agent focused.

## Use it when

- Fix the bug behind a fresh Sentry alert
- Find the newest unresolved issues in one project
- See which release introduced an error
- Summarize an issue with its stack trace and tags

## What it can access

- Reads Sentry issues and events you can access
- Reads issues, events and projects in your Sentry account after you sign in
- Authenticates with OAuth; no token is stored in the config

Official source: https://mcp.sentry.dev/

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ℹ️ **Connects to a hosted server.** Your agent talks to mcp.sentry.dev, run by the vendor.

More: https://workspacetemplates.com/ai/sentry-mcp/
