# PayPal MCP Server

**MCP setup** · Backend and APIs

Run PayPal's official MCP server locally so your agent can create orders and invoices, manage subscriptions and list transactions in sandbox.

## Install

```bash
npx workspacetemplates add paypal-mcp
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

PayPal publishes an MCP server that wraps its REST APIs as agent tools: invoices, orders and refunds, disputes, shipment tracking, product catalog, subscription plans and transaction reports.

It starts locally with npx and reads an access token from your environment. It defaults to the SANDBOX environment, which is the right place to try it before pointing anything at real money.

## Use it when

- Create a test invoice while building an invoicing flow
- Check that an order moves from created to paid in sandbox
- Set up a subscription plan to test your billing page
- List recent transactions to reconcile a bug report

## What it can access

- Acts on the PayPal account behind your access token
- Runs locally through npx and calls PayPal's API
- Can create and send invoices, orders, refunds and subscriptions in the PayPal account behind the token
- Reads transactions, disputes and products

Official source: https://github.com/paypal/paypal-mcp-server

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ℹ️ **Runs a local server.** Starts `npx -y @paypal/mcp --tools=all` on your machine, from the vendor's package.

More: https://workspacetemplates.com/ai/paypal-mcp/
