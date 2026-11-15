# ClickUp MCP Server

**MCP setup** · Workflow

Connect your agent to ClickUp's hosted MCP server to search, create and update tasks, docs and time entries after an OAuth sign-in.

## Install

```bash
npx workspacetemplates add clickup-mcp
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

ClickUp offers an official hosted MCP server at mcp.clickup.com. An agent can search tasks, docs and comments, change assignees, priorities and due dates, log time, and write status updates from what it finds.

Authentication is OAuth only. ClickUp does not accept personal API keys here, so there is no header to configure and no secret to store. Deletion tools are not offered yet.

## Use it when

- Search ClickUp for the task that matches a branch name
- Log time against a task when you finish a change
- Summarize the comment thread on a long-running task
- Create follow-up tasks from review comments

## What it can access

- ClickUp tasks and docs your account can open
- Writes task changes and time entries when asked
- Reads tasks, docs, lists and comments in your ClickUp Workspace
- Can create and update tasks and log time; no delete tools

Official source: https://developer.clickup.com/docs/connect-an-ai-assistant-to-clickups-mcp-server

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ℹ️ **Connects to a hosted server.** Your agent talks to mcp.clickup.com, run by the vendor.

More: https://workspacetemplates.com/ai/clickup-mcp/
