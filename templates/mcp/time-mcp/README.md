# Time MCP Server

**MCP setup** · Workflow

Give your agent the real current time and reliable time zone conversion, so it stops guessing dates, deadlines and meeting hours.

## Install

```bash
npx workspacetemplates add time-mcp
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

Language models do not know what time it is. This reference server adds get_current_time, convert_time and get_time_ago, all based on IANA zone names such as Europe/Warsaw.

Launch it with uvx, which comes with the uv tool. It has no keys and does not use the network for answers.

Pass --local-timezone in the args if the machine's own zone is wrong or you want a fixed default.

## Use it when

- Schedule a call across three time zones
- Check what a timestamp in a log means in local time
- Work out the date for a deadline two weeks from now
- Write release notes with the correct current date

## What it can access

- Reads the system clock
- No network, no file access
- Reads the system clock and your configured time zone
- No file or network access

Official source: https://github.com/modelcontextprotocol/servers/tree/main/src/time

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ℹ️ **Runs a local server.** Starts `uvx mcp-server-time` on your machine, from the vendor's package.

More: https://workspacetemplates.com/ai/time-mcp/
