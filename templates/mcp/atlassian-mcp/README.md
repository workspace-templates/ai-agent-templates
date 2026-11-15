# Atlassian MCP Server

**MCP setup** · Workflow

Connect your agent to Atlassian's hosted MCP server to search and update Jira work items and Confluence pages with your own permissions.

## Install

```bash
npx workspacetemplates add atlassian-mcp
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

Atlassian runs an official remote MCP server for its cloud products. Through it an agent can search and summarize Jira, Jira Service Management, Confluence and Bitbucket content, and create or edit Jira work items and Confluence pages.

You sign in with OAuth in the browser the first time, so no token goes into a config file. Every tool call follows the permissions your Atlassian account already has, and calls appear in the organization's audit log.

## Use it when

- Pull the acceptance criteria from a Jira ticket before you start coding
- Summarize a long Confluence design page
- File a bug in Jira from a failing test
- Find every open ticket that mentions a service you are about to change

## What it can access

- Your Atlassian cloud data, limited by your own permissions
- Writes to Jira and Confluence when you ask for changes
- Reads Jira, Confluence and Bitbucket content your Atlassian account can see
- Can create and edit Jira work items and Confluence pages; delete and manage actions are off until an admin enables them

Official source: https://github.com/atlassian/atlassian-mcp-server

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ℹ️ **Connects to a hosted server.** Your agent talks to mcp.atlassian.com, run by the vendor.

More: https://workspacetemplates.com/ai/atlassian-mcp/
