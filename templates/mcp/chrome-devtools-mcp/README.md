# Chrome DevTools MCP Server

**MCP setup** · Testing

Let your coding agent open Chrome, read the console and network panel, and record performance traces to debug a live page with DevTools.

## Install

```bash
npx workspacetemplates add chrome-devtools-mcp
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

The Chrome team publishes this server so an agent can use DevTools instead of guessing. It can navigate a page, take screenshots, read console and network activity, and run performance traces to find slow loads.

It starts through npx and needs no account. Chrome must be installed; the server launches its own browser, and a headless or isolated mode is available through flags.

The server sends usage statistics to Google by default and may look up field data for traced URLs. This config turns both off with --no-usage-statistics and --no-performance-crux.

## Use it when

- Find out why a page loads slowly
- Read a console error that only appears in the browser
- Check which network request returned a failure
- Verify a layout fix after you change the CSS

## What it can access

- Launches and controls Chrome on your machine
- Reads page content, console and network data
- Controls a Chrome browser on your machine and can open any URL
- Exposes page content, console output and network data to the agent

Official source: https://github.com/ChromeDevTools/chrome-devtools-mcp

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ℹ️ **Runs a local server.** Starts `npx -y chrome-devtools-mcp@latest --no-usage-statistics --no-performance-crux` on your machine, from the vendor's package.

More: https://workspacetemplates.com/ai/chrome-devtools-mcp/
