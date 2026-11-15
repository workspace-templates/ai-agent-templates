# Update OpenAPI

**Command** · Backend and APIs

Brings your OpenAPI spec in line with changed routes and validates the file, so the spec matches what the server does.

## Install

```bash
npx workspacetemplates add update-openapi
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/commands/update-openapi.md](claude-code/.claude/commands/update-openapi.md) | `.claude/commands/update-openapi.md` |
| Codex | [codex/home/.codex/prompts/update-openapi.md](codex/home/.codex/prompts/update-openapi.md) | `~/.codex/prompts/update-openapi.md` |
| Cursor | [cursor/.cursor/skills/update-openapi/SKILL.md](cursor/.cursor/skills/update-openapi/SKILL.md) | `.cursor/skills/update-openapi/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/commands/update-openapi.toml](gemini-cli/.gemini/commands/update-openapi.toml) | `.gemini/commands/update-openapi.toml` |
| GitHub Copilot | [copilot/.github/skills/update-openapi/SKILL.md](copilot/.github/skills/update-openapi/SKILL.md) | `.github/skills/update-openapi/SKILL.md` |

## What it does

Clients build against whatever the spec says, so an out-of-date file does real damage. This command compares the routes in the code with the paths in the spec and edits only what differs.

After editing it runs a validator and, where possible, checks that the spec still lints cleanly. Breaking changes are called out so you can decide on a version bump.

## Use it when

- You changed routes and the spec was not touched
- Generated client code no longer matches the server
- You are about to publish API docs from the spec
- A review asks whether the contract changed

## What it can access

- Reads route code and the spec file
- Edits the spec and runs a linter after you approve large changes

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/update-openapi/
