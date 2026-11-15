# Terraform MCP Server

**MCP setup** · DevOps and cloud

Give your agent HashiCorp's Terraform MCP server to look up current provider and module docs from the registry while it writes infrastructure code.

## Install

```bash
npx workspacetemplates add terraform-mcp
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

Models often write Terraform from memory of older provider versions. HashiCorp's MCP server lets the agent search the Terraform Registry for the real resource arguments, provider versions and modules before it writes a block.

The default toolset is registry lookups only, which needs no credentials. The server runs from HashiCorp's Docker image over stdio. Tools that act on HCP Terraform workspaces need a token and are a separate step you add later.

## Use it when

- Write a resource block with the arguments the current provider version supports
- Find a module for a VPC and read its inputs and outputs
- Check whether an argument was renamed in a new provider release
- Upgrade a provider and update the affected resources

## What it can access

- Reads public Terraform Registry documentation
- Needs Docker running locally
- Fetches public provider and module documentation from the Terraform Registry
- Runs one short-lived Docker container, with no access to your files

Official source: https://github.com/hashicorp/terraform-mcp-server

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ℹ️ **Runs a local server.** Starts `docker run -i --rm hashicorp/terraform-mcp-server:1.4.1` on your machine, from the vendor's package.

More: https://workspacetemplates.com/ai/terraform-mcp/
