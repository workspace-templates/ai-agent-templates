# Container Security Reviewer

**Subagent** · Security · docker

Read-only subagent that reviews Dockerfiles and compose files for root users, baked-in secrets, unpinned bases and bloated images.

## Install

```bash
npx workspacetemplates add container-security-reviewer
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/agents/container-security-reviewer.md](claude-code/.claude/agents/container-security-reviewer.md) | `.claude/agents/container-security-reviewer.md` |
| Codex | [codex/.codex/agents/container-security-reviewer.toml](codex/.codex/agents/container-security-reviewer.toml) | `.codex/agents/container-security-reviewer.toml` |
| Cursor | [cursor/.cursor/agents/container-security-reviewer.md](cursor/.cursor/agents/container-security-reviewer.md) | `.cursor/agents/container-security-reviewer.md` |
| Gemini CLI | [gemini-cli/.gemini/agents/container-security-reviewer.md](gemini-cli/.gemini/agents/container-security-reviewer.md) | `.gemini/agents/container-security-reviewer.md` |
| GitHub Copilot | [copilot/.github/agents/container-security-reviewer.agent.md](copilot/.github/agents/container-security-reviewer.agent.md) | `.github/agents/container-security-reviewer.agent.md` |

## What it does

A container image ships everything in it to every environment. This subagent reads your Dockerfiles, compose files and ignore files and points out what makes the image riskier or heavier than it has to be.

Each finding comes with the exact line and a replacement, so the fix is a small diff and not a lecture on container theory.

## Use it when

- You are adding a Dockerfile to a service for the first time
- An image scan reports hundreds of CVEs
- Images take minutes to pull in CI
- A secret may have been copied into a build layer

## What it can access

- Reads Dockerfiles, compose files and scripts in your project
- Runs read-only docker inspection commands

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/container-security-reviewer/
