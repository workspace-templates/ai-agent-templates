# Dockerize

**Command** · DevOps and cloud · docker

Writes a Dockerfile and .dockerignore for your project with layer caching, a slim final image and a non-root user.

## Install

```bash
npx workspacetemplates add dockerize
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/commands/dockerize.md](claude-code/.claude/commands/dockerize.md) | `.claude/commands/dockerize.md` |
| Codex | [codex/home/.codex/prompts/dockerize.md](codex/home/.codex/prompts/dockerize.md) | `~/.codex/prompts/dockerize.md` |
| Cursor | [cursor/.cursor/skills/dockerize/SKILL.md](cursor/.cursor/skills/dockerize/SKILL.md) | `.cursor/skills/dockerize/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/commands/dockerize.toml](gemini-cli/.gemini/commands/dockerize.toml) | `.gemini/commands/dockerize.toml` |
| GitHub Copilot | [copilot/.github/skills/dockerize/SKILL.md](copilot/.github/skills/dockerize/SKILL.md) | `.github/skills/dockerize/SKILL.md` |

## What it does

Most first Dockerfiles run as root, copy the whole repository and rebuild every dependency on each change. This command inspects the project, picks the right base image and writes a build that avoids those habits.

It uses a multi-stage layout when the language needs a compiler, drops privileges before the app starts and builds the image once to prove the result runs. Existing Docker files are never overwritten without your answer.

## Use it when

- A service has no container setup yet
- Your image is over a gigabyte and builds take minutes
- A security scan complains the container runs as root
- You are moving a project from a VM deploy to containers

## What it can access

- Reads manifests and source files
- Runs docker build in the project folder
- Writes files only after you agree

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/dockerize/
