# Sequential Thinking MCP Server

**MCP setup** · Workflow

Add a step-by-step reasoning tool to your agent so it can plan hard problems, revise earlier thoughts and branch, using the reference MCP server.

## Install

```bash
npx workspacetemplates add sequential-thinking-mcp
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

This server exposes a single tool, sequentialthinking. The agent records a numbered thought, says whether another is needed, and can mark a thought as a revision of an earlier one or start a branch.

It does not look anything up and does not touch your files. Its value is structure: a long task becomes a visible chain of steps you can read afterward.

It runs through npx over stdio and requires Node.js 24 or later.

## Use it when

- Plan a multi-step refactor before touching code
- Work out a tricky bug where the first guess may be wrong
- Compare two designs by branching the reasoning
- Break a vague request into ordered tasks

## What it can access

- Holds reasoning steps in memory only
- Reads and changes nothing on disk
- Keeps the agent's thought steps in memory for the session
- No file or network access

Official source: https://github.com/modelcontextprotocol/servers/tree/main/src/sequentialthinking

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ℹ️ **Runs a local server.** Starts `npx -y @modelcontextprotocol/server-sequential-thinking` on your machine, from the vendor's package.

More: https://workspacetemplates.com/ai/sequential-thinking-mcp/
