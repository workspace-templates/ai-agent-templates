# PagerDuty MCP Server

**MCP setup** · DevOps and cloud

Read PagerDuty incidents, services, schedules and on-call rotations from your coding agent using PagerDuty's local MCP server in read-only mode.

## Install

```bash
npx workspacetemplates add pagerduty-mcp
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

PagerDuty's MCP server gives an agent a view of your incident data: open incidents, which services they touch, who is on call and how escalation policies are set up. It helps when you are debugging a service and want the paging context next to the code.

The package runs through uvx with a PagerDuty user API token. It exposes only read tools until you pass the --enable-write-tools flag, which this setup leaves off. PagerDuty has marked this repository deprecated in favor of its hosted remote server, so check the source page before you rely on it long term.

## Use it when

- Find out who is on call for a service tonight
- List open high-urgency incidents before a deploy
- Pull the timeline of a past incident into a postmortem draft
- Check which escalation policy covers a service you are changing

## What it can access

- Reads PagerDuty incident and schedule data with your token
- Reads incidents, services, teams, schedules and on-call data in your PagerDuty account
- Changes nothing unless you add the --enable-write-tools flag

Official source: https://github.com/PagerDuty/pagerduty-mcp-server

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ℹ️ **Runs a local server.** Starts `uvx pagerduty-mcp` on your machine, from the vendor's package.

More: https://workspacetemplates.com/ai/pagerduty-mcp/
