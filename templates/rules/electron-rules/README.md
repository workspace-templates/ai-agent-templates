# Electron Rules

**Project rules** · Frontend · electron, typescript

Project rules for Electron apps: isolated renderers, a narrow preload API, validated IPC, safe packaging and signed auto-updates.

## Install

```bash
npx workspacetemplates add electron-rules
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/CLAUDE.md](claude-code/CLAUDE.md) | `CLAUDE.md` (merge) |
| Codex | [codex/AGENTS.md](codex/AGENTS.md) | `AGENTS.md` (merge) |
| Cursor | [cursor/.cursor/rules/electron-rules.mdc](cursor/.cursor/rules/electron-rules.mdc) | `.cursor/rules/electron-rules.mdc` |
| Gemini CLI | [gemini-cli/GEMINI.md](gemini-cli/GEMINI.md) | `GEMINI.md` (merge) |
| GitHub Copilot | [copilot/.github/copilot-instructions.md](copilot/.github/copilot-instructions.md) | `.github/copilot-instructions.md` (merge) |

## What it does

Electron apps mix a web page with full system access, so the main risk is a compromised renderer. These rules keep that boundary tight and make every cross-process call explicit.

They also cover shipping: how to package, sign and update the app, so the agent does not leave debug flags or broad permissions in a release build.

## Use it when

- You start an Electron desktop app
- An agent enables nodeIntegration to make something work
- IPC handlers accept anything the renderer sends
- You prepare the first signed release

## What it can access

- Instructions only; it does not read or run anything by itself

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/electron-rules/
