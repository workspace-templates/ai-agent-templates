# TypeScript Reviewer

**Subagent** · Code quality · typescript

Read-only subagent that reviews TypeScript for weak type design, unsafe casts, unhandled promises and tangled module boundaries.

## Install

```bash
npx workspacetemplates add typescript-reviewer
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/agents/typescript-reviewer.md](claude-code/.claude/agents/typescript-reviewer.md) | `.claude/agents/typescript-reviewer.md` |
| Codex | [codex/.codex/agents/typescript-reviewer.toml](codex/.codex/agents/typescript-reviewer.toml) | `.codex/agents/typescript-reviewer.toml` |
| Cursor | [cursor/.cursor/agents/typescript-reviewer.md](cursor/.cursor/agents/typescript-reviewer.md) | `.cursor/agents/typescript-reviewer.md` |
| Gemini CLI | [gemini-cli/.gemini/agents/typescript-reviewer.md](gemini-cli/.gemini/agents/typescript-reviewer.md) | `.gemini/agents/typescript-reviewer.md` |
| GitHub Copilot | [copilot/.github/agents/typescript-reviewer.agent.md](copilot/.github/agents/typescript-reviewer.agent.md) | `.github/agents/typescript-reviewer.agent.md` |

## What it does

TypeScript only helps as much as the types say. A codebase full of any, non-null assertions and casts compiles but catches nothing. This subagent reviews a change for type design first, then for async mistakes and imports that cut across layers.

It runs the compiler to see what it already catches, reads the rest and edits nothing.

## Use it when

- A pull request introduces new types or API models
- You see "as unknown as" or any spreading through a module
- A change adds async code and error handling
- Folders are importing each other in circles

## What it can access

- Reads files in your project
- Runs tsc and your lint command locally

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/typescript-reviewer/
