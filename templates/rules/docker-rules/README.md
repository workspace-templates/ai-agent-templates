# Docker Rules

**Project rules** · DevOps and cloud · docker

Project rules for Dockerfiles and Compose: multi-stage builds, pinned base images, non-root users, layer caching and health checks.

## Install

```bash
npx workspacetemplates add docker-rules
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/CLAUDE.md](claude-code/CLAUDE.md) | `CLAUDE.md` (merge) |
| Codex | [codex/AGENTS.md](codex/AGENTS.md) | `AGENTS.md` (merge) |
| Cursor | [cursor/.cursor/rules/docker-rules.mdc](cursor/.cursor/rules/docker-rules.mdc) | `.cursor/rules/docker-rules.mdc` |
| Gemini CLI | [gemini-cli/GEMINI.md](gemini-cli/GEMINI.md) | `GEMINI.md` (merge) |
| GitHub Copilot | [copilot/.github/copilot-instructions.md](copilot/.github/copilot-instructions.md) | `.github/copilot-instructions.md` (merge) |

## What it does

Container images pick up bad habits quickly: huge layers, root processes and tags that change under you. These rules give an agent a checklist for every Dockerfile it writes or edits.

They aim at small, repeatable and safer images, and they name the commands to run before an image is called ready.

## Use it when

- You are writing or reviewing a Dockerfile
- Images are very large or slow to build
- The app runs as root inside the container
- Builds give different results on different days

## What it can access

- Instructions only; it does not read or run anything by itself

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/docker-rules/
