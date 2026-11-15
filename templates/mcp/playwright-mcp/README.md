# Playwright MCP Server

**MCP setup** · Testing

Let your coding agent drive a real browser through Microsoft's Playwright MCP server to click through pages, fill forms and check what renders.

## Install

```bash
npx workspacetemplates add playwright-mcp
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

Playwright MCP is Microsoft's official server for browser automation. The agent reads pages through the accessibility tree rather than screenshots, so it can open your app, click, type and report what it finds.

It runs locally through npx, needs no account and no key. Use it to reproduce a bug in a real browser or to check a flow you just built.

## Use it when

- Reproduce a UI bug in a real browser
- Check that a sign-up form works end to end
- Walk through a page and list broken links or console errors
- Explore a flow before writing a Playwright test for it

## What it can access

- Controls a browser on your machine
- Reads page content and can submit forms
- Opens and controls a browser on your machine
- Can visit any URL you or the agent give it

Official source: https://github.com/microsoft/playwright-mcp

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ℹ️ **Runs a local server.** Starts `npx @playwright/mcp@latest` on your machine, from the vendor's package.

More: https://workspacetemplates.com/ai/playwright-mcp/
