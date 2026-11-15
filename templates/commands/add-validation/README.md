# Add Validation

**Command** · Backend and APIs

Adds request validation to a handler using the validation library your project already uses, with tests for bad input.

## Install

```bash
npx workspacetemplates add add-validation
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/commands/add-validation.md](claude-code/.claude/commands/add-validation.md) | `.claude/commands/add-validation.md` |
| Codex | [codex/home/.codex/prompts/add-validation.md](codex/home/.codex/prompts/add-validation.md) | `~/.codex/prompts/add-validation.md` |
| Cursor | [cursor/.cursor/skills/add-validation/SKILL.md](cursor/.cursor/skills/add-validation/SKILL.md) | `.cursor/skills/add-validation/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/commands/add-validation.toml](gemini-cli/.gemini/commands/add-validation.toml) | `.gemini/commands/add-validation.toml` |
| GitHub Copilot | [copilot/.github/skills/add-validation/SKILL.md](copilot/.github/skills/add-validation/SKILL.md) | `.github/skills/add-validation/SKILL.md` |

## What it does

Handlers that trust the request body fail in odd places, far from the real cause. This command puts a schema at the edge of the handler so bad input is rejected early with a clear message.

It does not bring in a new library. It finds whether you use Zod, Joi, Pydantic, class-validator or something else, and follows the way existing handlers use it.

## Use it when

- A handler reads req.body fields without checking them
- A bug report traces back to a null or wrongly typed value
- You are hardening a public route before launch
- Different routes return different error shapes for bad input

## What it can access

- Reads the handler and dependency manifest
- Edits the handler and test files, then runs the tests

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/add-validation/
