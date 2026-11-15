# GitLab MCP Server

**MCP setup** · Git and releases

Work with GitLab issues, merge requests and pipelines from your agent through the MCP server built into GitLab itself.

## Install

```bash
npx workspacetemplates add gitlab-mcp
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

GitLab ships an MCP server inside the product, at /api/v4/mcp on your instance. An agent can read issues and merge requests, look at repository files and check CI pipelines, using the permissions of the account that signed in.

This config points at gitlab.com. For a self-managed instance, change the host. Your group owner (on GitLab.com) or administrator (self-managed) has to allow MCP server access first. Sign-in uses OAuth, so no token is stored in the config.

## Use it when

- Summarize a merge request and its review threads
- List the issues assigned to you this sprint
- Find out why a merge request pipeline failed
- Open an issue from a bug you just found

## What it can access

- Acts with the permissions of the signed-in GitLab user
- Reads projects, issues, merge requests, repository files and pipelines your account can see
- Can create or update issues and merge requests where your account has rights

Official source: https://docs.gitlab.com/user/gitlab_duo/model_context_protocol/mcp_server/

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ℹ️ **Connects to a hosted server.** Your agent talks to gitlab.com, run by the vendor.

More: https://workspacetemplates.com/ai/gitlab-mcp/
