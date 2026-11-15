# Stripe MCP Server

**MCP setup** · Backend and APIs

Connect your coding agent to Stripe's hosted MCP server to look up customers, payments, subscriptions and invoices while you build billing code.

## Install

```bash
npx workspacetemplates add stripe-mcp
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

Stripe runs its own hosted MCP server at mcp.stripe.com. Once connected, the agent can look at the customers, charges, subscriptions and invoices in your Stripe account and search Stripe's documentation, so billing code is written against your real data model.

Sign-in uses OAuth. You approve access in a browser window the first time, and no API key goes into your config file. The older local @stripe/mcp package is deprecated, so this setup does not use it.

## Use it when

- Debug why a subscription renewal failed
- Check what a webhook payload should contain for a given event
- Find a customer by email while you reproduce a billing bug
- Look up the right Stripe API call before writing checkout code

## What it can access

- Reads and can change objects in the Stripe account you authorize
- Sends requests to mcp.stripe.com
- Customers, payments, subscriptions and invoices in the Stripe account you sign in to
- Can create or change Stripe objects with the permissions you grant, so use a test mode account while building

Official source: https://github.com/stripe/agent-toolkit

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ℹ️ **Connects to a hosted server.** Your agent talks to mcp.stripe.com, run by the vendor.

More: https://workspacetemplates.com/ai/stripe-mcp/
