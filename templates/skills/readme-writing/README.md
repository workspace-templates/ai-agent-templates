# README Writing

**Skill** · Documentation

Writes or rewrites a README so a new developer goes from clone to a running app in minutes, with every command tested against the repo.

## Install

```bash
npx workspacetemplates add readme-writing
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/readme-writing/SKILL.md](claude-code/.claude/skills/readme-writing/SKILL.md) | `.claude/skills/readme-writing/SKILL.md` |
| Codex | [codex/.agents/skills/readme-writing/SKILL.md](codex/.agents/skills/readme-writing/SKILL.md) | `.agents/skills/readme-writing/SKILL.md` |
| Cursor | [cursor/.cursor/skills/readme-writing/SKILL.md](cursor/.cursor/skills/readme-writing/SKILL.md) | `.cursor/skills/readme-writing/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/readme-writing/SKILL.md](gemini-cli/.gemini/skills/readme-writing/SKILL.md) | `.gemini/skills/readme-writing/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/readme-writing/SKILL.md](copilot/.github/skills/readme-writing/SKILL.md) | `.github/skills/readme-writing/SKILL.md` |

## What it does

A README fails when its first screen is a logo and a paragraph of vision. This skill makes the agent start from what a stranger needs: what the project is, the exact commands to run it, and how to know it worked.

It reads the manifest, scripts, env examples and CI config to find the real setup, then runs the install and start commands where it can. Anything it cannot verify is marked, not guessed.

## Use it when

- A repository has no README or only the generated stub
- New teammates keep asking the same setup questions in chat
- The README mentions scripts or versions that no longer exist
- You are about to open source an internal project

## What it can access

- Reads project files and CI config
- Edits README.md
- Runs your install, start and test commands

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/readme-writing/
