# TypeScript Node.js Rules

**Project rules** · Backend and APIs · typescript, nodejs

Project rules for TypeScript services on Node.js: strict types, validated boundaries, structured logging and safe async error handling.

## Install

```bash
npx workspacetemplates add typescript-node-rules
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/CLAUDE.md](claude-code/CLAUDE.md) | `CLAUDE.md` (merge) |
| Codex | [codex/AGENTS.md](codex/AGENTS.md) | `AGENTS.md` (merge) |
| Cursor | [cursor/.cursor/rules/typescript-node-rules.mdc](cursor/.cursor/rules/typescript-node-rules.mdc) | `.cursor/rules/typescript-node-rules.mdc` |
| Gemini CLI | [gemini-cli/GEMINI.md](gemini-cli/GEMINI.md) | `GEMINI.md` (merge) |
| GitHub Copilot | [copilot/.github/copilot-instructions.md](copilot/.github/copilot-instructions.md) | `.github/copilot-instructions.md` (merge) |

## What it does

Node services fail in quiet ways: an unhandled rejection, a body nobody validated, a config value that was undefined. These rules make the agent close those gaps by default.

They set the compiler options, how to treat input from outside, how to handle errors and shutdown, and which commands prove a change is finished.

## Use it when

- You start a new Node backend in TypeScript
- Generated handlers trust request bodies as typed
- Process crashes come from unhandled promise rejections
- You want identical lint, test and logging habits across services

## What it can access

- Instructions only; it does not read or run anything by itself

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/typescript-node-rules/
