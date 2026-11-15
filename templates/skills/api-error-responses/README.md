# API Error Responses

**Skill** · Backend and APIs

Defines one error format with stable machine codes and problem details, then applies it to every endpoint so clients can handle failures reliably.

## Install

```bash
npx workspacetemplates add api-error-responses
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/api-error-responses/SKILL.md](claude-code/.claude/skills/api-error-responses/SKILL.md) | `.claude/skills/api-error-responses/SKILL.md` |
| Codex | [codex/.agents/skills/api-error-responses/SKILL.md](codex/.agents/skills/api-error-responses/SKILL.md) | `.agents/skills/api-error-responses/SKILL.md` |
| Cursor | [cursor/.cursor/skills/api-error-responses/SKILL.md](cursor/.cursor/skills/api-error-responses/SKILL.md) | `.cursor/skills/api-error-responses/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/api-error-responses/SKILL.md](gemini-cli/.gemini/skills/api-error-responses/SKILL.md) | `.gemini/skills/api-error-responses/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/api-error-responses/SKILL.md](copilot/.github/skills/api-error-responses/SKILL.md) | `.github/skills/api-error-responses/SKILL.md` |

## What it does

Every API drifts into five error shapes: a bare string here, a framework stack trace there, a 200 with "success: false" somewhere else. Clients end up parsing messages with regular expressions. This skill makes the agent inventory what your endpoints return today and converge on a single format.

The format follows RFC 9457 problem details, plus a stable code string that clients can switch on. The agent also maps exceptions to status codes in one place, so new endpoints inherit the behavior instead of inventing it.

## Use it when

- Your endpoints return errors in more than one shape
- Mobile or frontend teams parse error messages as text
- You are adding validation and need field-level failures
- An incident showed that stack traces leak to clients

## What it can access

- Reads source files in your project
- Edits handlers and adds tests when you approve the plan
- Runs your test command

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/api-error-responses/
