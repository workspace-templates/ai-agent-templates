# Resend MCP Server

**MCP setup** · Backend and APIs

Run Resend's official MCP server so your agent can send test emails, manage domains, templates and contacts and check delivery from the chat.

## Install

```bash
npx workspacetemplates add resend-mcp
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

Resend's MCP server wraps most of the Resend platform: sending and batching email, templates, contacts and segments, broadcasts, domains, webhooks and logs. It is handy when you build transactional email and want to try a send without leaving the editor.

It runs locally with npx and needs one environment variable, RESEND_API_KEY. You can also set a default sender and restrict which folders it may read attachments from.

## Use it when

- Send yourself a test of a new welcome email
- Check whether a sending domain is verified
- List recent emails to see which ones bounced
- Draft a template and send it to a staging inbox

## What it can access

- Sends email and changes settings in the Resend account behind the key
- On stdio, file access is unrestricted unless you set allowed folders
- Sends real email from your Resend account
- Reads and changes domains, templates, contacts and webhooks the key allows

Official source: https://github.com/resend/mcp-send-email

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ℹ️ **Runs a local server.** Starts `npx -y resend-mcp` on your machine, from the vendor's package.

More: https://workspacetemplates.com/ai/resend-mcp/
