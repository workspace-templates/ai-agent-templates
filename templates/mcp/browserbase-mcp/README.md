# Browserbase MCP Server

**MCP setup** · Testing

Run browser sessions in the Browserbase cloud from your agent to open pages, act on them in plain language and extract data, via the self-hosted server.

## Install

```bash
npx workspacetemplates add browserbase-mcp
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

Browserbase hosts headless browsers, and this server connects an agent to them through Stagehand. The tools are start, end, navigate, act, observe and extract, so the agent can describe a click in words and read structured data back.

This setup uses the self-hosted stdio package, @browserbasehq/mcp. It needs a Browserbase API key and project ID, plus a Gemini key for the default Stagehand model. You can pass --modelName and --modelApiKey to use another supported model.

Note that the repository is now archived and no longer maintained, and Browserbase points to a hosted endpoint instead. Check their docs if you want that route.

## Use it when

- Scrape a page that needs a real browser
- Walk through a sign-up flow in a cloud session
- Extract a table from a site into structured text
- Run web automation without installing Chrome locally

## What it can access

- Controls cloud browsers on your Browserbase account
- Needs three keys in environment variables
- Starts remote browser sessions on your Browserbase account and visits URLs the agent picks
- Sends page content to the configured language model

Official source: https://github.com/browserbase/mcp-server-browserbase

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ℹ️ **Runs a local server.** Starts `npx @browserbasehq/mcp` on your machine, from the vendor's package.

More: https://workspacetemplates.com/ai/browserbase-mcp/
