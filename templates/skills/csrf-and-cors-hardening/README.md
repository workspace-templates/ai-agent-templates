# CSRF and CORS Hardening

**Skill** · Security

Sets up CORS and CSRF protection that fits how your app authenticates, with cookies or bearer tokens, and removes the wildcard shortcuts.

## Install

```bash
npx workspacetemplates add csrf-and-cors-hardening
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/csrf-and-cors-hardening/SKILL.md](claude-code/.claude/skills/csrf-and-cors-hardening/SKILL.md) | `.claude/skills/csrf-and-cors-hardening/SKILL.md` |
| Codex | [codex/.agents/skills/csrf-and-cors-hardening/SKILL.md](codex/.agents/skills/csrf-and-cors-hardening/SKILL.md) | `.agents/skills/csrf-and-cors-hardening/SKILL.md` |
| Cursor | [cursor/.cursor/skills/csrf-and-cors-hardening/SKILL.md](cursor/.cursor/skills/csrf-and-cors-hardening/SKILL.md) | `.cursor/skills/csrf-and-cors-hardening/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/csrf-and-cors-hardening/SKILL.md](gemini-cli/.gemini/skills/csrf-and-cors-hardening/SKILL.md) | `.gemini/skills/csrf-and-cors-hardening/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/csrf-and-cors-hardening/SKILL.md](copilot/.github/skills/csrf-and-cors-hardening/SKILL.md) | `.github/skills/csrf-and-cors-hardening/SKILL.md` |

## What it does

CORS and CSRF are often mixed up, and the usual fix for a blocked request, allowing every origin, quietly removes protection. They solve different problems, and which one you need depends on whether the browser sends credentials automatically.

This skill first works out how your app authenticates, then applies the matching settings: strict origins and cookie flags for cookie sessions, and a lighter setup for bearer-token APIs. It leaves you with tests that prove the policy.

## Use it when

- The browser blocks a call and someone suggests Access-Control-Allow-Origin: *
- You use cookie sessions and have no CSRF defence
- You are splitting frontend and API across different domains
- A scanner flagged a missing SameSite or reflected origin

## What it can access

- Reads and edits server configuration and middleware
- Runs your test suite

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/csrf-and-cors-hardening/
