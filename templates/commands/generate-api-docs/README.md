# Generate API Docs

**Command** · Documentation

Builds API reference pages from your source code in the docs format and folder your project already uses.

## Install

```bash
npx workspacetemplates add generate-api-docs
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/commands/generate-api-docs.md](claude-code/.claude/commands/generate-api-docs.md) | `.claude/commands/generate-api-docs.md` |
| Codex | [codex/home/.codex/prompts/generate-api-docs.md](codex/home/.codex/prompts/generate-api-docs.md) | `~/.codex/prompts/generate-api-docs.md` |
| Cursor | [cursor/.cursor/skills/generate-api-docs/SKILL.md](cursor/.cursor/skills/generate-api-docs/SKILL.md) | `.cursor/skills/generate-api-docs/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/commands/generate-api-docs.toml](gemini-cli/.gemini/commands/generate-api-docs.toml) | `.gemini/commands/generate-api-docs.toml` |
| GitHub Copilot | [copilot/.github/skills/generate-api-docs/SKILL.md](copilot/.github/skills/generate-api-docs/SKILL.md) | `.github/skills/generate-api-docs/SKILL.md` |

## What it does

Reference docs written by hand fall behind the code within a sprint. This command reads the public surface, whether routes or exported functions, and writes pages in the style of the documentation you already have.

Every entry comes from the source: names, parameters, types and error cases. Anything the code does not make clear is flagged for you instead of guessed, and existing pages are updated rather than duplicated.

## Use it when

- A service has endpoints but no reference page
- Docs and code disagree on parameter names
- You are publishing a library with public exports
- Your docs site expects Markdown or OpenAPI files

## What it can access

- Reads source code and existing docs
- Writes or updates documentation files after you approve

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/generate-api-docs/
