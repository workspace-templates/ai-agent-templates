# Authentication Flow Review

**Skill** · Security

Reviews login, session handling, password reset and MFA code for bypasses and weak defaults, reporting each flaw with its exact attack path.

## Install

```bash
npx workspacetemplates add authentication-flow-review
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/authentication-flow-review/SKILL.md](claude-code/.claude/skills/authentication-flow-review/SKILL.md) | `.claude/skills/authentication-flow-review/SKILL.md` |
| Codex | [codex/.agents/skills/authentication-flow-review/SKILL.md](codex/.agents/skills/authentication-flow-review/SKILL.md) | `.agents/skills/authentication-flow-review/SKILL.md` |
| Cursor | [cursor/.cursor/skills/authentication-flow-review/SKILL.md](cursor/.cursor/skills/authentication-flow-review/SKILL.md) | `.cursor/skills/authentication-flow-review/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/authentication-flow-review/SKILL.md](gemini-cli/.gemini/skills/authentication-flow-review/SKILL.md) | `.gemini/skills/authentication-flow-review/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/authentication-flow-review/SKILL.md](copilot/.github/skills/authentication-flow-review/SKILL.md) | `.github/skills/authentication-flow-review/SKILL.md` |

## What it does

Authentication code fails in the corners: the reset link that never expires, the session that survives a password change, the MFA step that can be skipped by calling the next URL. This skill reads those corners on purpose.

It follows each flow as an attacker would, step by step, and reports only the breaks it can describe. The result is a ranked list you can fix in order, with the reasoning shown.

## Use it when

- You wrote or changed login, signup or reset code
- Before adding MFA or single sign-on to an existing app
- After a credential stuffing attempt or account takeover report
- When you replace a hand-rolled session with a library

## What it can access

- Reads source files and configuration in your project
- Does not run the app or contact any server

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/authentication-flow-review/
