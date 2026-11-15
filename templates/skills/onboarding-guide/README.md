# Onboarding Guide

**Skill** · Documentation

Builds a developer onboarding doc from the repo's actual setup, scripts, conventions and CI, so day-one questions get answered in writing.

## Install

```bash
npx workspacetemplates add onboarding-guide
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/onboarding-guide/SKILL.md](claude-code/.claude/skills/onboarding-guide/SKILL.md) | `.claude/skills/onboarding-guide/SKILL.md` |
| Codex | [codex/.agents/skills/onboarding-guide/SKILL.md](codex/.agents/skills/onboarding-guide/SKILL.md) | `.agents/skills/onboarding-guide/SKILL.md` |
| Cursor | [cursor/.cursor/skills/onboarding-guide/SKILL.md](cursor/.cursor/skills/onboarding-guide/SKILL.md) | `.cursor/skills/onboarding-guide/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/onboarding-guide/SKILL.md](gemini-cli/.gemini/skills/onboarding-guide/SKILL.md) | `.gemini/skills/onboarding-guide/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/onboarding-guide/SKILL.md](copilot/.github/skills/onboarding-guide/SKILL.md) | `.github/skills/onboarding-guide/SKILL.md` |

## What it does

Onboarding docs go stale because they are written from memory. Here the agent derives the guide from evidence: package scripts, CI jobs, lint config, branch rules, the commit history and the folder structure.

The result covers a first-week path for a new engineer: set up, make a small change, get it reviewed and shipped. Parts nobody documented are listed as open questions for the team.

## Use it when

- A new engineer starts next week and the wiki is outdated
- Setup takes a day because steps live in people's heads
- A team inherits a repository with no handover notes
- You want conventions written down instead of enforced by review comments

## What it can access

- Reads the repository and its git history
- Writes one documentation file
- Runs setup and test commands to verify them

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/onboarding-guide/
