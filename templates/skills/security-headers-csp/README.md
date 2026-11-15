# Security Headers CSP

**Skill** · Security

Adds a Content Security Policy and the other protective HTTP headers, starting in report-only mode so nothing breaks before you tighten it.

## Install

```bash
npx workspacetemplates add security-headers-csp
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/security-headers-csp/SKILL.md](claude-code/.claude/skills/security-headers-csp/SKILL.md) | `.claude/skills/security-headers-csp/SKILL.md` |
| Codex | [codex/.agents/skills/security-headers-csp/SKILL.md](codex/.agents/skills/security-headers-csp/SKILL.md) | `.agents/skills/security-headers-csp/SKILL.md` |
| Cursor | [cursor/.cursor/skills/security-headers-csp/SKILL.md](cursor/.cursor/skills/security-headers-csp/SKILL.md) | `.cursor/skills/security-headers-csp/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/security-headers-csp/SKILL.md](gemini-cli/.gemini/skills/security-headers-csp/SKILL.md) | `.gemini/skills/security-headers-csp/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/security-headers-csp/SKILL.md](copilot/.github/skills/security-headers-csp/SKILL.md) | `.github/skills/security-headers-csp/SKILL.md` |

## What it does

A strict Content Security Policy is the best second line against cross-site scripting, and the one most often abandoned after a site breaks. This skill avoids that by shipping the policy in report-only mode first and tightening it from real violation data.

Alongside it, the skill sets the smaller headers that cost nothing, such as HSTS, frame protection and referrer rules, using your framework or server config rather than patches in each handler.

## Use it when

- A scanner gives your site a poor header grade
- You want XSS to be harder even if a template bug slips in
- Third-party scripts and inline code make a policy look impossible
- You are moving to HTTPS only and need HSTS

## What it can access

- Reads templates, build output and server configuration
- Edits header configuration or middleware

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/security-headers-csp/
