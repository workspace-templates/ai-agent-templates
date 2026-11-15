# React TypeScript Rules

**Project rules** · Frontend · react, typescript

Project rules for React with TypeScript: typed props, hook discipline, feature-based layout, Testing Library tests and accessible markup.

## Install

```bash
npx workspacetemplates add react-typescript-rules
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/CLAUDE.md](claude-code/CLAUDE.md) | `CLAUDE.md` (merge) |
| Codex | [codex/AGENTS.md](codex/AGENTS.md) | `AGENTS.md` (merge) |
| Cursor | [cursor/.cursor/rules/react-typescript-rules.mdc](cursor/.cursor/rules/react-typescript-rules.mdc) | `.cursor/rules/react-typescript-rules.mdc` |
| Gemini CLI | [gemini-cli/GEMINI.md](gemini-cli/GEMINI.md) | `GEMINI.md` (merge) |
| GitHub Copilot | [copilot/.github/copilot-instructions.md](copilot/.github/copilot-instructions.md) | `.github/copilot-instructions.md` (merge) |

## What it does

These rules set the shape of a React and TypeScript codebase so generated components look like the ones you already have. They favor small function components, strict types and state kept as close to its use as possible.

They also make accessibility and testing part of the definition of done, not an afterthought.

## Use it when

- You start a new React feature with an agent
- Generated components use any or loose props
- Effects fetch data and cause loops or races
- Tests break whenever markup changes

## What it can access

- Instructions the agent reads; it does not execute anything on its own

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/react-typescript-rules/
