# Codebase Onboarding

**Skill** · Workflow

Builds a written map of an unfamiliar repository: entry points, layers, conventions, the commands that work, plus the areas most likely to break.

## Install

```bash
npx workspacetemplates add codebase-onboarding
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/codebase-onboarding/SKILL.md](claude-code/.claude/skills/codebase-onboarding/SKILL.md) | `.claude/skills/codebase-onboarding/SKILL.md` |
| Codex | [codex/.agents/skills/codebase-onboarding/SKILL.md](codex/.agents/skills/codebase-onboarding/SKILL.md) | `.agents/skills/codebase-onboarding/SKILL.md` |
| Cursor | [cursor/.cursor/skills/codebase-onboarding/SKILL.md](cursor/.cursor/skills/codebase-onboarding/SKILL.md) | `.cursor/skills/codebase-onboarding/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/codebase-onboarding/SKILL.md](gemini-cli/.gemini/skills/codebase-onboarding/SKILL.md) | `.gemini/skills/codebase-onboarding/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/codebase-onboarding/SKILL.md](copilot/.github/skills/codebase-onboarding/SKILL.md) | `.github/skills/codebase-onboarding/SKILL.md` |

## What it does

The first day in a new repository is mostly spent guessing where things live. This skill has the agent explore it in a fixed order and write down what it finds, with file paths you can check, so you start from a map instead of a blank page.

The map separates facts it confirmed from guesses, and it points at the places most likely to hurt: tangled modules, thin test coverage and files that change in every incident.

## Use it when

- You just joined a team or inherited a repository
- You must fix a bug in a service you have never opened
- You are preparing to review a large pull request in unfamiliar code
- A project has no README that matches reality

## What it can access

- Reads files and git history in your project
- Runs install, build and test commands locally
- Writes one map file only when you name it

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/codebase-onboarding/
