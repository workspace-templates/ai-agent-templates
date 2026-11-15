# GitHub MCP Server

**MCP setup** · Git and releases

Connect your coding agent to GitHub's official MCP server to read issues, pull requests, code and Actions runs without leaving the chat.

## Install

```bash
npx workspacetemplates add github-mcp
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

GitHub's official MCP server lets an agent search code, read and comment on issues and pull requests, and check Actions runs on the repositories your token can see.

This setup uses the hosted server, so there is nothing to install: add the config and give it a personal access token.

## Use it when

- Triage issues from your editor
- Review a pull request with the agent
- Check why a CI run failed

## What it can access

- What your GitHub token allows
- Repositories, issues and pull requests your token can see
- Actions runs and logs

Official source: https://github.com/github/github-mcp-server

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ℹ️ **Connects to a hosted server.** Your agent talks to api.githubcopilot.com, run by the vendor.

More: https://workspacetemplates.com/ai/github-mcp/
