# Grafana MCP Server

**MCP setup** · DevOps and cloud

Let your agent search Grafana dashboards, query Prometheus and Loki and read alert rules through Grafana's own MCP server, in read-only mode.

## Install

```bash
npx workspacetemplates add grafana-mcp
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

The Grafana MCP server connects an agent to a Grafana instance through a service account. It can find dashboards, run PromQL and LogQL queries against your datasources and list alert rules, so you can ask about a metric instead of hunting through panels.

This setup starts it with uvx and passes the --disable-write flag, which blocks every create, update and delete call. Remove the flag only if you want the agent to edit dashboards or alerts.

## Use it when

- Find the dashboard that tracks checkout latency
- Run a Prometheus query for error rate over the last hour
- Search Loki logs for a failing request id
- See which alert rules are firing right now

## What it can access

- Reads dashboards, alerts and datasource queries
- Write tools are turned off by the flag
- Reads dashboards, datasources, alert rules and query results from your Grafana
- Runs queries against Prometheus, Loki and other datasources the token can reach
- Cannot change anything while --disable-write is set

Official source: https://github.com/grafana/mcp-grafana

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ℹ️ **Runs a local server.** Starts `uvx mcp-grafana --disable-write` on your machine, from the vendor's package.

More: https://workspacetemplates.com/ai/grafana-mcp/
