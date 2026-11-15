# Notion MCP Server

**MCP setup** · Documentation

Connect your agent to Notion's hosted MCP server to search workspace pages, read databases and write notes, specs and tasks back.

## Install

```bash
npx workspacetemplates add notion-mcp
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

Notion runs its own MCP server, so an agent can search your workspace, read a spec or a meeting page, query a database and create or update pages. It is a good fit when requirements or runbooks already live in Notion and you want them in the same chat as the code.

Setup is a URL and a browser sign-in. The agent only sees what your Notion account can see in the workspace you pick. Business and Enterprise workspaces can also use a token created by a workspace owner.

## Use it when

- Read the product spec before you start a feature
- Write release notes into a Notion page when a release ships
- Turn a task database into a list of tickets to work on
- Save a design decision as a page the team can find later

## What it can access

- Reads and writes Notion content as the signed-in user
- Reads pages and databases your Notion account can open
- Creates and edits pages and comments in the workspace you authorize

Official source: https://developers.notion.com/docs/mcp

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ℹ️ **Connects to a hosted server.** Your agent talks to mcp.notion.com, run by the vendor.

More: https://workspacetemplates.com/ai/notion-mcp/
