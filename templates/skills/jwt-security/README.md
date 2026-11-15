# JWT Security

**Skill** · Security

Audits how an app signs, verifies, stores and expires JSON Web Tokens, and fixes algorithm confusion, weak secrets and unsafe browser storage.

## Install

```bash
npx workspacetemplates add jwt-security
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/jwt-security/SKILL.md](claude-code/.claude/skills/jwt-security/SKILL.md) | `.claude/skills/jwt-security/SKILL.md` |
| Codex | [codex/.agents/skills/jwt-security/SKILL.md](codex/.agents/skills/jwt-security/SKILL.md) | `.agents/skills/jwt-security/SKILL.md` |
| Cursor | [cursor/.cursor/skills/jwt-security/SKILL.md](cursor/.cursor/skills/jwt-security/SKILL.md) | `.cursor/skills/jwt-security/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/jwt-security/SKILL.md](gemini-cli/.gemini/skills/jwt-security/SKILL.md) | `.gemini/skills/jwt-security/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/jwt-security/SKILL.md](copilot/.github/skills/jwt-security/SKILL.md) | `.github/skills/jwt-security/SKILL.md` |

## What it does

JWTs are easy to issue and easy to get subtly wrong. A verifier that trusts the algorithm named in the token header, a secret that is a short word, or a token kept in localStorage can each hand an attacker the whole system.

This skill finds every place tokens are created and checked, compares them against a short list of known failure modes, and proposes concrete changes with the library calls to use.

## Use it when

- Your API authenticates with bearer tokens
- You use a JWT library but never read its verification options
- Tokens live in localStorage and you worry about XSS
- You need to add logout or revocation to a stateless setup

## What it can access

- Reads source files and configuration
- Edits only token-handling code, and only when you ask for the fixes

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/jwt-security/
