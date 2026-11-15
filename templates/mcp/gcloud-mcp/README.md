# Google Cloud MCP Server

**MCP setup** · DevOps and cloud

Let the agent run gcloud commands through Google's MCP server (npx), under your own account or a limited service account.

## Install

```bash
npx workspacetemplates add gcloud-mcp
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

Google's gcloud MCP server exposes a single tool that runs gcloud commands. It lets an agent list projects, inspect resources and run the same operations you would type in a terminal, minus a deny list of interactive or arbitrary-input commands.

It has no credentials of its own: it uses the account active in your gcloud CLI. To narrow what it can do, authorize gcloud as a service account with a restricted role and use impersonation.

## Use it when

- List Compute Engine instances across a project
- Check which APIs are enabled before deploying
- Look at Cloud Run service revisions
- Inspect IAM bindings on a project

## What it can access

- Runs gcloud commands on your machine
- Permissions equal the active gcloud account
- Runs gcloud commands with the active gcloud account permissions
- Can change cloud resources if that account is allowed to

Official source: https://github.com/googleapis/gcloud-mcp

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ℹ️ **Runs a local server.** Starts `npx -y @google-cloud/gcloud-mcp` on your machine, from the vendor's package.

More: https://workspacetemplates.com/ai/gcloud-mcp/
