# Perplexity MCP Server

**MCP setup** · Workflow

Add Perplexity's official MCP server so your coding agent can run live web searches and get cited research answers while it works.

## Install

```bash
npx workspacetemplates add perplexity-mcp
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

Perplexity's MCP server gives an agent four tools: ranked web search, quick conversational answers, deep research with citations, and step-by-step reasoning. It is useful when a library changed after the model's training data ended.

This setup runs the server locally through npx and reads your key from the PERPLEXITY_API_KEY variable. Perplexity also offers a hosted Streamable HTTP endpoint with OAuth sign-in, if you prefer no local process.

## Use it when

- Check the current release notes for a library before upgrading
- Look for a known issue behind an error message you cannot place
- Get a cited comparison of two tools before you pick one
- Verify an API detail that may have changed recently

## What it can access

- Sends your queries to Perplexity and uses your API quota
- No access to your files
- Sends your search questions and prompts to Perplexity's API, which bills your API key
- Does not read or change local files

Official source: https://docs.perplexity.ai/docs/getting-started/integrations/mcp-server

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ℹ️ **Runs a local server.** Starts `npx -y @perplexity-ai/mcp-server` on your machine, from the vendor's package.

More: https://workspacetemplates.com/ai/perplexity-mcp/
