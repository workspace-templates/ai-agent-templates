# Convert to TypeScript

**Command** · Frontend · typescript

Converts a JavaScript file to TypeScript with real types and no any shortcuts, and keeps the build and tests passing.

## Install

```bash
npx workspacetemplates add convert-to-typescript
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/commands/convert-to-typescript.md](claude-code/.claude/commands/convert-to-typescript.md) | `.claude/commands/convert-to-typescript.md` |
| Codex | [codex/home/.codex/prompts/convert-to-typescript.md](codex/home/.codex/prompts/convert-to-typescript.md) | `~/.codex/prompts/convert-to-typescript.md` |
| Cursor | [cursor/.cursor/skills/convert-to-typescript/SKILL.md](cursor/.cursor/skills/convert-to-typescript/SKILL.md) | `.cursor/skills/convert-to-typescript/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/commands/convert-to-typescript.toml](gemini-cli/.gemini/commands/convert-to-typescript.toml) | `.gemini/commands/convert-to-typescript.toml` |
| GitHub Copilot | [copilot/.github/skills/convert-to-typescript/SKILL.md](copilot/.github/skills/convert-to-typescript/SKILL.md) | `.github/skills/convert-to-typescript/SKILL.md` |

## What it does

A rename from .js to .ts only moves the errors around. This command reads how the code is used, writes types that describe actual values, and avoids `any` and blanket casts that silence the compiler without helping.

It works on one file or folder at a time, so each conversion is a small change you can review.

## Use it when

- You are migrating a codebase to TypeScript one file at a time
- A module has grown bugs from wrong argument shapes
- You want types for an untyped utility before others depend on it
- A reviewer asked for stricter typing

## What it can access

- Reads the file and the code that imports it
- Renames and edits the target file
- Runs tsc and the test suite

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/convert-to-typescript/
