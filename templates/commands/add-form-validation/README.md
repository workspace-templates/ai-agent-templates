# Add Form Validation

**Command** · Frontend

Adds matching client and server validation to a form, with plain error messages that are announced to screen readers.

## Install

```bash
npx workspacetemplates add add-form-validation
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/commands/add-form-validation.md](claude-code/.claude/commands/add-form-validation.md) | `.claude/commands/add-form-validation.md` |
| Codex | [codex/home/.codex/prompts/add-form-validation.md](codex/home/.codex/prompts/add-form-validation.md) | `~/.codex/prompts/add-form-validation.md` |
| Cursor | [cursor/.cursor/skills/add-form-validation/SKILL.md](cursor/.cursor/skills/add-form-validation/SKILL.md) | `.cursor/skills/add-form-validation/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/commands/add-form-validation.toml](gemini-cli/.gemini/commands/add-form-validation.toml) | `.gemini/commands/add-form-validation.toml` |
| GitHub Copilot | [copilot/.github/skills/add-form-validation/SKILL.md](copilot/.github/skills/add-form-validation/SKILL.md) | `.github/skills/add-form-validation/SKILL.md` |

## What it does

Client checks make a form pleasant, but only server checks make it safe, and the two drift apart when written separately. This command defines the rules once, applies them in the browser and on the endpoint, and keeps the messages the same.

Errors are tied to their fields and read out by assistive technology. Libraries already in the project are used instead of adding new ones.

## Use it when

- A signup, checkout or settings form accepts bad input
- The server returns raw errors that the form cannot display
- You need the same rules in the UI and the API
- A form fails accessibility review because errors are only red text

## What it can access

- Reads the form, handler and endpoint
- Edits the form, server route and their tests

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/add-form-validation/
