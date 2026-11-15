# Figma MCP Server

**MCP setup** · Frontend

Read Figma frames, variables and components through Figma's remote MCP server so generated UI code follows the real design.

## Install

```bash
npx workspacetemplates add figma-mcp
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

Figma's MCP server hands an agent the structure behind a selected frame: layout, spacing, the variables and styles in use, and a screenshot for reference. Code written from that data is much closer to the design than code guessed from a description.

This setup uses the remote server at mcp.figma.com, so there is no app to run for the connection itself. You sign in with your Figma account, and the agent sees files that account can open. Paste a link to a frame in your prompt to point it at the right node.

## Use it when

- Build a component from a Figma frame link
- Match spacing and colors to the design variables
- Compare a coded screen against the design
- Pull the design tokens a frame uses into a theme file

## What it can access

- Reads design data from Figma files you can open
- Reads frames, components, variables and screenshots from Figma files your account can open
- Uses your Figma sign-in; the agent can also upload generated images if asked

Official source: https://github.com/figma/mcp-server-guide

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ℹ️ **Connects to a hosted server.** Your agent talks to mcp.figma.com, run by the vendor.

More: https://workspacetemplates.com/ai/figma-mcp/
