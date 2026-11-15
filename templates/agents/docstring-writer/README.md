# Docstring Writer

**Subagent** · Documentation

Subagent that adds accurate docstrings to undocumented public functions by reading what they do, how callers use them and which errors they raise.

## Install

```bash
npx workspacetemplates add docstring-writer
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/agents/docstring-writer.md](claude-code/.claude/agents/docstring-writer.md) | `.claude/agents/docstring-writer.md` |
| Codex | [codex/.codex/agents/docstring-writer.toml](codex/.codex/agents/docstring-writer.toml) | `.codex/agents/docstring-writer.toml` |
| Cursor | [cursor/.cursor/agents/docstring-writer.md](cursor/.cursor/agents/docstring-writer.md) | `.cursor/agents/docstring-writer.md` |
| Gemini CLI | [gemini-cli/.gemini/agents/docstring-writer.md](gemini-cli/.gemini/agents/docstring-writer.md) | `.gemini/agents/docstring-writer.md` |
| GitHub Copilot | [copilot/.github/agents/docstring-writer.agent.md](copilot/.github/agents/docstring-writer.agent.md) | `.github/agents/docstring-writer.agent.md` |

## What it does

A docstring that restates the function name is worse than none. This subagent reads the body, the types and the call sites of each undocumented public function, then writes a comment that states what a caller needs to know.

It documents behavior, edge cases and errors it can see in the code, uses your language's convention, and changes comments only. Anything it cannot determine is marked, not made up.

## Use it when

- A module has public functions with no comments at all
- You are preparing a library for release and need reference docs
- Reviewers keep asking what a helper returns when input is empty
- You want comments added without risking a behavior change

## What it can access

- Reads source files and their call sites
- Edits comments in the files you name

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/docstring-writer/
