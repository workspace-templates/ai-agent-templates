# CircleCI MCP Server

**MCP setup** · DevOps and cloud

Read CircleCI build failures, test results and pipeline status from your agent, then get help fixing the config or the failing job.

## Install

```bash
npx workspacetemplates add circleci-mcp
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

The CircleCI MCP server lets an agent pull the failure logs of a build, see which tests failed and check the latest pipeline on a branch, so you can say "why is main red" without opening the web app. It can also validate a config file and find flaky tests.

It runs through npx with a personal API token. Some tools do more than read: rerun_workflow and run_pipeline start work on your account. CircleCI marks this package deprecated in favor of its hosted server, so look at the source page for the current recommendation.

## Use it when

- Find out why the latest pipeline on a branch failed
- Read the logs of a failing job and propose a fix
- List the flaky tests across recent runs
- Validate a config.yml before you push it

## What it can access

- Reads CircleCI project data with your token
- May start pipelines or reruns on request
- Reads pipelines, job logs, test results and artifacts for projects your token can see
- Can rerun workflows and trigger pipelines when you ask it to

Official source: https://github.com/CircleCI-Public/mcp-server-circleci

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ℹ️ **Runs a local server.** Starts `npx -y @circleci/mcp-server-circleci@latest` on your machine, from the vendor's package.

More: https://workspacetemplates.com/ai/circleci-mcp/
