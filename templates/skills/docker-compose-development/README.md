# Docker Compose Development

**Skill** · DevOps and cloud · docker

Sets up a Docker Compose dev environment with health checks, ordered startup, sane volumes and seed data so a new teammate runs one command.

## Install

```bash
npx workspacetemplates add docker-compose-development
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/docker-compose-development/SKILL.md](claude-code/.claude/skills/docker-compose-development/SKILL.md) | `.claude/skills/docker-compose-development/SKILL.md` |
| Codex | [codex/.agents/skills/docker-compose-development/SKILL.md](codex/.agents/skills/docker-compose-development/SKILL.md) | `.agents/skills/docker-compose-development/SKILL.md` |
| Cursor | [cursor/.cursor/skills/docker-compose-development/SKILL.md](cursor/.cursor/skills/docker-compose-development/SKILL.md) | `.cursor/skills/docker-compose-development/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/docker-compose-development/SKILL.md](gemini-cli/.gemini/skills/docker-compose-development/SKILL.md) | `.gemini/skills/docker-compose-development/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/docker-compose-development/SKILL.md](copilot/.github/skills/docker-compose-development/SKILL.md) | `.github/skills/docker-compose-development/SKILL.md` |

## What it does

A good compose file means a new developer clones the repository, runs one command and has a working app with data. A bad one starts the app before the database accepts connections and loses data every time a container restarts.

This skill builds the file around those failure points: health checks that gate startup, named volumes for state, bind mounts for code, and a seed step you can repeat safely.

## Use it when

- Onboarding takes a day because of local setup steps
- The app crashes on start because the database is not ready
- Hot reload is slow or does not work inside the container
- You need the same services locally that you run in production

## What it can access

- Reads and edits compose.yaml, Dockerfile and env example files
- Runs docker compose to build and start the stack locally

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/docker-compose-development/
