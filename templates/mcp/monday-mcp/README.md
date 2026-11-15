# monday.com MCP Server

**MCP setup** · Workflow

Run monday.com's official MCP server locally in read-only mode so your agent can inspect boards and items without changing anything.

## Install

```bash
npx workspacetemplates add monday-mcp
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

monday.com publishes an MCP server as the npm package @mondaydotcomorg/monday-api-mcp. It gives an agent tools to read board schemas, fetch items, and, when allowed, create items, post updates and change column values.

This setup starts it through npx with the documented --read-only flag, so write tools are left out. You supply a personal API token through the MONDAY_TOKEN variable. Drop the flag later if you want the agent to edit boards.

## Use it when

- Look up what is on the product roadmap board before planning work
- Check the status column of a bug item
- List which items are in a group and who owns them
- Read a board's columns before writing an integration against it

## What it can access

- monday.com boards your token can see, read-only by default here
- Runs a local npx process
- Reads boards, items, columns and users that your token can see
- Read-only while the --read-only flag stays in the args

Official source: https://github.com/mondaycom/mcp

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ℹ️ **Runs a local server.** Starts `npx @mondaydotcomorg/monday-api-mcp@latest --read-only` on your machine, from the vendor's package.

More: https://workspacetemplates.com/ai/monday-mcp/
