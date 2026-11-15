# Document Endpoint

**Command** · Backend and APIs

Writes reference docs for one endpoint from the real code: parameters, responses, errors and a working example call.

## Install

```bash
npx workspacetemplates add document-endpoint
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/commands/document-endpoint.md](claude-code/.claude/commands/document-endpoint.md) | `.claude/commands/document-endpoint.md` |
| Codex | [codex/home/.codex/prompts/document-endpoint.md](codex/home/.codex/prompts/document-endpoint.md) | `~/.codex/prompts/document-endpoint.md` |
| Cursor | [cursor/.cursor/skills/document-endpoint/SKILL.md](cursor/.cursor/skills/document-endpoint/SKILL.md) | `.cursor/skills/document-endpoint/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/commands/document-endpoint.toml](gemini-cli/.gemini/commands/document-endpoint.toml) | `.gemini/commands/document-endpoint.toml` |
| GitHub Copilot | [copilot/.github/skills/document-endpoint/SKILL.md](copilot/.github/skills/document-endpoint/SKILL.md) | `.github/skills/document-endpoint/SKILL.md` |

## What it does

API docs go stale when they are written from memory. This command reads the handler, its validation and its tests, then writes the reference from what the code actually does.

The result follows the format of your existing docs when there is one. If the code and the tests disagree, it lists the mismatch instead of picking a side quietly.

## Use it when

- A route shipped without any documentation
- Frontend developers keep asking what an endpoint returns
- You are preparing docs for a public or partner API
- An endpoint changed and its page needs a refresh

## What it can access

- Reads handlers, schemas, tests and existing docs
- Writes a doc file only after you approve

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/document-endpoint/
