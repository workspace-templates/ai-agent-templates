# Dockerfile Optimization

**Skill** · DevOps and cloud · docker

Rewrites Dockerfiles for small images, fast cached builds, a non-root user and reproducible builds, then proves the image still starts and runs.

## Install

```bash
npx workspacetemplates add dockerfile-optimization
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/dockerfile-optimization/SKILL.md](claude-code/.claude/skills/dockerfile-optimization/SKILL.md) | `.claude/skills/dockerfile-optimization/SKILL.md` |
| Codex | [codex/.agents/skills/dockerfile-optimization/SKILL.md](codex/.agents/skills/dockerfile-optimization/SKILL.md) | `.agents/skills/dockerfile-optimization/SKILL.md` |
| Cursor | [cursor/.cursor/skills/dockerfile-optimization/SKILL.md](cursor/.cursor/skills/dockerfile-optimization/SKILL.md) | `.cursor/skills/dockerfile-optimization/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/dockerfile-optimization/SKILL.md](gemini-cli/.gemini/skills/dockerfile-optimization/SKILL.md) | `.gemini/skills/dockerfile-optimization/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/dockerfile-optimization/SKILL.md](copilot/.github/skills/dockerfile-optimization/SKILL.md) | `.github/skills/dockerfile-optimization/SKILL.md` |

## What it does

Most Dockerfiles work and still waste minutes per build, ship compilers to production and run as root. This skill reads yours, measures the image, and changes the file in small steps that you can compare by size and build time.

It does not change what the application does. After each edit it builds and starts the container to confirm the result still works.

## Use it when

- Builds take minutes because nothing is cached
- The image is over a few hundred megabytes for a small service
- A security scan flags root or old base images
- You want identical images from the same commit

## What it can access

- Reads files in your project
- Edits the Dockerfile and .dockerignore, and runs docker build and run locally

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/dockerfile-optimization/
