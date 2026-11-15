# Docker MCP Gateway

**MCP setup** · DevOps and cloud

Route your agent through Docker's MCP gateway so each tool server runs in its own isolated container with secrets kept out of env variables.

## Install

```bash
npx workspacetemplates add docker-mcp
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

The Docker MCP gateway sits between your coding agent and a set of MCP servers. Instead of starting each server yourself, you pick them in a profile and the gateway runs the local ones in separate containers, with minimal access to your machine.

Your agent sees one server and the gateway handles the rest. You can also turn individual tools on or off per profile, which is a simple way to keep a risky tool out of reach. It needs Docker Desktop 4.59 or later with the MCP Toolkit enabled.

## Use it when

- Use several MCP servers without wiring each into every agent
- Keep third-party MCP servers off your host by running them in containers
- Restrict an agent to a short list of approved tools
- Share one tool set between Claude Code and Cursor

## What it can access

- Runs containers on your machine
- Reach depends on the servers in your profile
- Starts containers for the MCP servers in your active profile
- Exposes whichever tools those servers offer to your agent

Official source: https://github.com/docker/mcp-gateway

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ℹ️ **Runs a local server.** Starts `docker mcp gateway run` on your machine, from the vendor's package.

More: https://workspacetemplates.com/ai/docker-mcp/
