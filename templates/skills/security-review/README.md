# Security Review

**Skill** · Security

Reviews a code change for injection, broken authorization, secrets, SSRF and unsafe input handling, and reports only exploitable findings with a fix.

## Install

```bash
npx workspacetemplates add security-review
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/security-review/SKILL.md](claude-code/.claude/skills/security-review/SKILL.md) | `.claude/skills/security-review/SKILL.md` |
| Codex | [codex/.agents/skills/security-review/SKILL.md](codex/.agents/skills/security-review/SKILL.md) | `.agents/skills/security-review/SKILL.md` |
| Cursor | [cursor/.cursor/skills/security-review/SKILL.md](cursor/.cursor/skills/security-review/SKILL.md) | `.cursor/skills/security-review/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/security-review/SKILL.md](gemini-cli/.gemini/skills/security-review/SKILL.md) | `.gemini/skills/security-review/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/security-review/SKILL.md](copilot/.github/skills/security-review/SKILL.md) | `.github/skills/security-review/SKILL.md` |

## What it does

General code review misses security bugs because they look like working code. This skill walks the diff the way an attacker would: where does input come in, where does it end up, and who is allowed to do this.

Each finding names the vulnerable line, a concrete request that exploits it and the smallest fix. Theoretical issues without a path from input to impact are left out.

## Use it when

- Before merging code that handles user input, files or URLs
- When adding an endpoint, login flow or admin feature
- After pulling in a new dependency or integration
- When you want a quick OWASP-style pass over a pull request

## What it can access

- Reads files in your project
- Runs read-only git commands

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/security-review/
