# Component Extractor

**Subagent** · Frontend · react

Subagent that pulls repeated JSX into a typed, tested React component and updates every call site to use it.

## Install

```bash
npx workspacetemplates add component-extractor
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/agents/component-extractor.md](claude-code/.claude/agents/component-extractor.md) | `.claude/agents/component-extractor.md` |
| Codex | [codex/.codex/agents/component-extractor.toml](codex/.codex/agents/component-extractor.toml) | `.codex/agents/component-extractor.toml` |
| Cursor | [cursor/.cursor/agents/component-extractor.md](cursor/.cursor/agents/component-extractor.md) | `.cursor/agents/component-extractor.md` |
| Gemini CLI | [gemini-cli/.gemini/agents/component-extractor.md](gemini-cli/.gemini/agents/component-extractor.md) | `.gemini/agents/component-extractor.md` |
| GitHub Copilot | [copilot/.github/agents/component-extractor.agent.md](copilot/.github/agents/component-extractor.agent.md) | `.github/agents/component-extractor.agent.md` |

## What it does

Copy-pasted markup is the quiet cost in many React codebases: the same card, badge or form row appears in a dozen files, each slightly different. This subagent finds one such repeat and turns it into a single component with a clear props type.

It handles the whole job: it creates the component, writes a test for it, replaces every call site, and runs the type check and tests so you do not end up with half a refactor.

## Use it when

- You see the same block of JSX repeated across several components
- A design change would currently mean editing many files
- You want a shared component with typed props and a test
- A page component has grown past a few hundred lines

## What it can access

- Reads and edits component files across the project
- Creates new component and test files
- Runs your type check, linter and test commands

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/component-extractor/
