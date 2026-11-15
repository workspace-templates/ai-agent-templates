# Upstash MCP Server

**MCP setup** · Databases

Use Upstash's hosted MCP server to manage Redis databases, QStash and Workflow from your coding agent with OAuth sign-in and no local install.

## Install

```bash
npx workspacetemplates add upstash-mcp
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

Upstash offers a remote MCP server that exposes its serverless products to an agent: Redis databases, QStash messaging, Workflow, Vector, Search and Blob. The older npm package is no longer maintained, so this setup uses the hosted URL.

Sign-in is OAuth in the browser. For a headless machine, Upstash accepts a Basic authorization header built from your email and API key instead. A read-only API key turns off every tool that changes state.

## Use it when

- Spin up a free Redis database for a prototype
- Run a Redis command against a staging database
- List QStash schedules that are failing
- Audit which Upstash databases an account has

## What it can access

- Reads and manages Upstash resources on your account
- Runs Redis commands on databases you choose
- Upstash databases and queues on the account you sign in with
- Can create and delete databases unless you sign in with a read-only API key

Official source: https://github.com/upstash/mcp-server

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ℹ️ **Connects to a hosted server.** Your agent talks to mcp.upstash.com, run by the vendor.

More: https://workspacetemplates.com/ai/upstash-mcp/
