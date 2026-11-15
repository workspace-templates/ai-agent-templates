# Security Scan

**Command** · Security

Scans the codebase for injection, broken auth, unsafe deserialization and similar flaws, then ranks each finding by severity.

## Install

```bash
npx workspacetemplates add security-scan
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/commands/security-scan.md](claude-code/.claude/commands/security-scan.md) | `.claude/commands/security-scan.md` |
| Codex | [codex/home/.codex/prompts/security-scan.md](codex/home/.codex/prompts/security-scan.md) | `~/.codex/prompts/security-scan.md` |
| Cursor | [cursor/.cursor/skills/security-scan/SKILL.md](cursor/.cursor/skills/security-scan/SKILL.md) | `.cursor/skills/security-scan/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/commands/security-scan.toml](gemini-cli/.gemini/commands/security-scan.toml) | `.gemini/commands/security-scan.toml` |
| GitHub Copilot | [copilot/.github/skills/security-scan/SKILL.md](copilot/.github/skills/security-scan/SKILL.md) | `.github/skills/security-scan/SKILL.md` |

## What it does

A quick review often misses the dull, common flaws: string-built queries, unescaped output, weak crypto and handlers that trust the client. This command walks the code looking for those patterns by name and records exactly where each one sits.

Findings come back ranked from critical to low, each with a file and line, a short exploit story and a concrete fix. It only reads code and never edits anything.

## Use it when

- Before a release or a penetration test
- After merging a large feature that handles user input
- When you inherit a codebase and need a first risk picture
- As a periodic check on a service that faces the internet

## What it can access

- Reads source and config files
- Runs installed scanners if present; edits nothing

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/security-scan/
