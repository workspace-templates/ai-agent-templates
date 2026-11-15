# Git MCP Server

**MCP setup** · Git and releases

Give your agent structured git tools for status, diffs, logs, branches and commits through the reference mcp-server-git, fenced to one repository.

## Install

```bash
npx workspacetemplates add git-mcp
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

mcp-server-git is the reference Git server from the Model Context Protocol project. It exposes tools such as git_status, git_diff, git_log, git_show, git_branch and git_commit, so an agent can inspect and stage work without shelling out.

It runs locally through uvx and needs no account. The --repository flag confines it to the working tree you name, which is worth setting so the agent cannot wander into other clones on the disk.

## Use it when

- Ask what changed since the last release tag
- Have the agent draft a commit message from the staged diff
- Compare a feature branch with main before opening a pull request
- Find which commit touched a file in the last two weeks

## What it can access

- Local git repository: reads history, writes commits and branches
- No network calls of its own
- Reads status, diffs, history and branches of the repository you point it at
- Can stage files, commit, create branches, check out and merge (fast-forward only by default)

Official source: https://github.com/modelcontextprotocol/servers/tree/main/src/git

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ℹ️ **Runs a local server.** Starts `uvx mcp-server-git --repository .` on your machine, from the vendor's package.

More: https://workspacetemplates.com/ai/git-mcp/
