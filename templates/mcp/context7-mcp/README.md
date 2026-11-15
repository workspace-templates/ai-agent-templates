# Context7 MCP Server

**MCP setup** · Documentation

Give your coding agent current library documentation and code examples through Upstash's Context7 MCP server, so it stops guessing at old APIs.

## Install

```bash
npx workspacetemplates add context7-mcp
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

Context7 is an MCP server from Upstash that looks up documentation for a library at the version you use and hands the relevant snippets to the agent. It is aimed at the common failure where a model writes code against an API that has since changed.

This setup uses the hosted server over HTTP. It works without a key at a low rate limit, and an API key from the Context7 dashboard raises it.

## Use it when

- Use a framework that changed since your model was trained
- Write code against a new library release
- Look up the exact signature of a method before calling it
- Stop the agent from inventing options that do not exist

## What it can access

- Sends queries to the Context7 hosted service
- No file access
- Sends the library name and your question to the Context7 service
- Returns documentation text; does not read your files

Official source: https://github.com/upstash/context7

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ℹ️ **Connects to a hosted server.** Your agent talks to mcp.context7.com, run by the vendor.

More: https://workspacetemplates.com/ai/context7-mcp/
