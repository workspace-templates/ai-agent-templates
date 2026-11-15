# Firebase MCP Server

**MCP setup** · Backend and APIs · firebase

Run the Firebase CLI's built-in MCP server so your agent can work with Firestore, Auth, rules and hosting in your Firebase project.

## Install

```bash
npx workspacetemplates add firebase-mcp
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

The Firebase CLI ships an MCP server of its own. Started with firebase-tools mcp, it gives the agent tools for projects and apps, Firestore documents and indexes, Auth users, security rules, Remote Config, Cloud Functions logs, deploys and a search over Google's developer docs.

It uses the same login as the Firebase CLI, so run firebase login first. You can narrow it to a few feature groups with the --only flag and point it at a project folder with --dir.

## Use it when

- Query Firestore to see why a document is missing a field
- Review and validate security rules before a deploy
- Read recent Cloud Functions logs after an error report
- Look up a user in Auth while reproducing a sign-in bug

## What it can access

- Acts with your Firebase CLI credentials on the selected project
- Can change Firestore data, Auth users and deploy resources
- Reads and writes Firestore, Auth and Storage data in the project you are logged in to
- Uses your Firebase CLI credentials and runs on your machine

Official source: https://firebase.google.com/docs/cli/mcp-server

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ℹ️ **Runs a local server.** Starts `npx -y firebase-tools@latest mcp --only firestore,auth,storage` on your machine, from the vendor's package.

More: https://workspacetemplates.com/ai/firebase-mcp/
