# Vercel MCP Server

**MCP setup** · DevOps and cloud

Connect your agent to Vercel's official remote MCP server to inspect projects, deployments and build logs and search the Vercel docs.

## Install

```bash
npx workspacetemplates add vercel-mcp
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

Vercel hosts its own MCP server at mcp.vercel.com. An agent can search the docs, look at projects and deployments, read build and runtime logs and query Web Analytics.

Clients authorize through OAuth, so the config holds only the URL. The CLI command vercel mcp can set up several clients for you.

## Use it when

- Find out why the latest deployment failed
- Read runtime errors for a production project
- List recent deployments for a branch
- Look up a Vercel setting in the docs

## What it can access

- Reads deployment logs and analytics for authorized teams
- Can change project settings and deployments
- Projects, deployments and logs in the Vercel teams you authorize
- Can manage projects and deployments through the tools it exposes

Official source: https://vercel.com/docs/mcp

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ℹ️ **Connects to a hosted server.** Your agent talks to mcp.vercel.com, run by the vendor.

More: https://workspacetemplates.com/ai/vercel-mcp/
