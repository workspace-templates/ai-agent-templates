# AWS Documentation MCP Server

**MCP setup** · DevOps and cloud

Run the AWS Labs documentation MCP server with uvx so your agent can search and read current AWS docs instead of guessing from memory.

## Install

```bash
npx workspacetemplates add aws-mcp
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

AWS Labs publishes a family of open source MCP servers. This setup uses the documentation server from that repository, which lets an agent read and search AWS documentation pages.

Started by uvx on your machine, it asks for no AWS credentials since it only reads public docs. The same repository also lists servers for infrastructure as code, billing and cost management and the AWS API; add those separately once you want them.

## Use it when

- Check the current limits of an AWS service before designing around it
- Find the right IAM action name for a policy
- Read the docs page for a new feature
- Compare two services using the official wording

## What it can access

- Reads public AWS documentation
- No access to your AWS resources
- Fetches public AWS documentation pages over the internet
- Does not touch your AWS account

Official source: https://github.com/awslabs/mcp

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ℹ️ **Runs a local server.** Starts `uvx awslabs.aws-documentation-mcp-server@latest` on your machine, from the vendor's package.

More: https://workspacetemplates.com/ai/aws-mcp/
