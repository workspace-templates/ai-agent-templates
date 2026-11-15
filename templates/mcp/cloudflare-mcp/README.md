# Cloudflare MCP Server

**MCP setup** · DevOps and cloud

Point your agent at Cloudflare's hosted API MCP server to manage Workers, R2, DNS and other products and to search the Cloudflare docs.

## Install

```bash
npx workspacetemplates add cloudflare-mcp
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

Cloudflare's current MCP server covers its whole public API through three tools: one to search endpoints, one to call them and one to search the developer docs. The agent writes small scripts that run in an isolated sandbox on Cloudflare's side.

You sign in with OAuth and pick the permissions to grant. For automation, a scoped API token can be sent as a bearer token instead.

## Use it when

- Check DNS records for a zone before a migration
- List Workers and their latest deploys
- Find the right Cloudflare API endpoint for a task
- Look up a limit or setting in the Cloudflare docs

## What it can access

- Acts on your Cloudflare account within the approved permissions
- Searches Cloudflare's public documentation
- Cloudflare accounts, zones and products allowed by the permissions you approve
- Can change DNS, Workers and storage if you grant write permissions

Official source: https://github.com/cloudflare/mcp-server-cloudflare

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ℹ️ **Connects to a hosted server.** Your agent talks to mcp.cloudflare.com, run by the vendor.

More: https://workspacetemplates.com/ai/cloudflare-mcp/
