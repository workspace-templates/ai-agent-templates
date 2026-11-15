# OWASP Top 10 Review

**Skill** · Security

Walks a codebase category by category through the OWASP Top 10 and reports each confirmed weakness with file, line and a concrete fix.

## Install

```bash
npx workspacetemplates add owasp-top-10-review
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/owasp-top-10-review/SKILL.md](claude-code/.claude/skills/owasp-top-10-review/SKILL.md) | `.claude/skills/owasp-top-10-review/SKILL.md` |
| Codex | [codex/.agents/skills/owasp-top-10-review/SKILL.md](codex/.agents/skills/owasp-top-10-review/SKILL.md) | `.agents/skills/owasp-top-10-review/SKILL.md` |
| Cursor | [cursor/.cursor/skills/owasp-top-10-review/SKILL.md](cursor/.cursor/skills/owasp-top-10-review/SKILL.md) | `.cursor/skills/owasp-top-10-review/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/owasp-top-10-review/SKILL.md](gemini-cli/.gemini/skills/owasp-top-10-review/SKILL.md) | `.gemini/skills/owasp-top-10-review/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/owasp-top-10-review/SKILL.md](copilot/.github/skills/owasp-top-10-review/SKILL.md) | `.github/skills/owasp-top-10-review/SKILL.md` |

## What it does

A generic "find security bugs" prompt skims the surface and misses whole classes of problems. This skill makes the agent take the ten OWASP categories one at a time, search for the code patterns each one produces, and open every hit before calling it a finding.

You get a short report grouped by category, with the file and line, how an attacker would use the flaw, and the smallest patch. Categories with nothing found are listed as checked, so you know what was covered.

## Use it when

- Before a launch or a customer security questionnaire
- When you inherit a service and need a fast risk picture
- After adding a new endpoint family or an admin area
- When an audit asks for evidence that the code was reviewed against OWASP

## What it can access

- Reads source and config files in your project
- Runs read-only searches; changes nothing

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/owasp-top-10-review/
