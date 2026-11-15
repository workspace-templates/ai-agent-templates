# Document Function

**Command** · Documentation

Writes a docstring for the selected function in your language and style: inputs, return value, errors raised and a working example.

## Install

```bash
npx workspacetemplates add document-function
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/commands/document-function.md](claude-code/.claude/commands/document-function.md) | `.claude/commands/document-function.md` |
| Codex | [codex/home/.codex/prompts/document-function.md](codex/home/.codex/prompts/document-function.md) | `~/.codex/prompts/document-function.md` |
| Cursor | [cursor/.cursor/skills/document-function/SKILL.md](cursor/.cursor/skills/document-function/SKILL.md) | `.cursor/skills/document-function/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/commands/document-function.toml](gemini-cli/.gemini/commands/document-function.toml) | `.gemini/commands/document-function.toml` |
| GitHub Copilot | [copilot/.github/skills/document-function/SKILL.md](copilot/.github/skills/document-function/SKILL.md) | `.github/skills/document-function/SKILL.md` |

## What it does

A good docstring answers what a caller needs without reading the body: what goes in, what comes out, what can fail. This command reads the function and the code that calls it, then writes comments that say exactly that.

It matches the comment format already used in the file, whether JSDoc, Google-style Python or Rust doc comments, and it does not change any code.

## Use it when

- A public function has no comment at all
- A parameter is easy to misuse and callers keep guessing
- You are preparing a library for release
- Generated API docs show empty descriptions

## What it can access

- Reads the function and its callers
- Edits one comment block after you approve

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/document-function/
