# ClickHouse MCP Server

**MCP setup** · Data and AI

Let your agent run read-only SQL against ClickHouse and browse its databases and tables using ClickHouse's official MCP server.

## Install

```bash
npx workspacetemplates add clickhouse-mcp
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

mcp-clickhouse is ClickHouse's own MCP server. It gives the agent three tools: run a query, list databases and list tables, with paging and name filters for large schemas. That is enough to explore an analytics warehouse and draft queries against real column names.

Queries run with the readonly setting on by default, because CLICKHOUSE_ALLOW_WRITE_ACCESS is false unless you change it. The ClickHouse user's grants remain the real boundary, so connect with an account that can only read.

## Use it when

- Explore an unfamiliar events table before writing a report query
- Check a materialized view's output against the raw table
- Find the slowest query patterns from system tables
- Draft an aggregation and test it on a small time window

## What it can access

- Runs read-only SQL as the ClickHouse user you configure
- Lists databases and tables visible to that user
- Reads any table the ClickHouse user can select from
- Read-only by default; writes need CLICKHOUSE_ALLOW_WRITE_ACCESS set to true, which this setup leaves off

Official source: https://github.com/ClickHouse/mcp-clickhouse

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ℹ️ **Runs a local server.** Starts `uv run --with mcp-clickhouse --python 3.12 mcp-clickhouse` on your machine, from the vendor's package.

More: https://workspacetemplates.com/ai/clickhouse-mcp/
