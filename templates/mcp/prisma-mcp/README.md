# Prisma MCP Server

**MCP setup** · Databases

Connect your agent to Prisma's hosted MCP server to manage Prisma Postgres databases, run SQL, restore backups and search the Prisma docs.

## Install

```bash
npx workspacetemplates add prisma-mcp
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

Prisma runs a hosted MCP server for the Prisma Data Platform. Through it an agent can create and inspect Prisma Postgres databases, run SQL, restore automated backups, manage object storage buckets and read logs of Prisma Compute deployments.

There is nothing to install. You add the URL, sign in with your Prisma account in the browser, choose a workspace and approve access.

## Use it when

- Create a throwaway Prisma Postgres database for a branch
- Run a quick SQL check against a staging database
- Restore a database from an automated backup after a bad migration
- Look up Prisma docs without leaving the editor

## What it can access

- Reads and changes Prisma Postgres databases in the approved workspace
- Searches the public Prisma documentation
- Databases, buckets and deployments in the workspace you approve
- Can run SQL and restore backups, so approve only the workspace you intend

Official source: https://www.prisma.io/docs/postgres/integrations/mcp-server

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ℹ️ **Connects to a hosted server.** Your agent talks to mcp.prisma.io, run by the vendor.

More: https://workspacetemplates.com/ai/prisma-mcp/
