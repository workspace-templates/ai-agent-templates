# Dockerfile Reviewer

**Subagent** · DevOps and cloud · docker

Read-only subagent that reviews a Dockerfile for layer order, image size, cache misses and security, and lists fixes by impact.

## Install

```bash
npx workspacetemplates add dockerfile-reviewer
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/agents/dockerfile-reviewer.md](claude-code/.claude/agents/dockerfile-reviewer.md) | `.claude/agents/dockerfile-reviewer.md` |
| Codex | [codex/.codex/agents/dockerfile-reviewer.toml](codex/.codex/agents/dockerfile-reviewer.toml) | `.codex/agents/dockerfile-reviewer.toml` |
| Cursor | [cursor/.cursor/agents/dockerfile-reviewer.md](cursor/.cursor/agents/dockerfile-reviewer.md) | `.cursor/agents/dockerfile-reviewer.md` |
| Gemini CLI | [gemini-cli/.gemini/agents/dockerfile-reviewer.md](gemini-cli/.gemini/agents/dockerfile-reviewer.md) | `.gemini/agents/dockerfile-reviewer.md` |
| GitHub Copilot | [copilot/.github/agents/dockerfile-reviewer.agent.md](copilot/.github/agents/dockerfile-reviewer.agent.md) | `.github/agents/dockerfile-reviewer.agent.md` |

## What it does

A Dockerfile can build and still be slow, huge and risky. This subagent reads yours the way a build cache does, top to bottom, and finds the instruction that invalidates everything below it.

It checks base image choice, multi-stage use, the user the container runs as, and secrets left in layers. It reports findings ranked by how much build time or image size they cost, and never edits the file.

## Use it when

- Image builds take minutes even when only one source file changed
- The final image is far larger than the app it ships
- Before a Dockerfile goes into a shared base repository
- A scanner flagged the image and you need to know what to change first

## What it can access

- Reads the Dockerfile, .dockerignore and compose files
- Does not build or run containers and cannot change files

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/dockerfile-reviewer/
