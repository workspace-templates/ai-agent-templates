# Debug Container

**Command** · DevOps and cloud · docker

Finds why a Docker container exits, restarts or misbehaves by reading its logs, exit code, config and Dockerfile together.

## Install

```bash
npx workspacetemplates add debug-container
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/commands/debug-container.md](claude-code/.claude/commands/debug-container.md) | `.claude/commands/debug-container.md` |
| Codex | [codex/home/.codex/prompts/debug-container.md](codex/home/.codex/prompts/debug-container.md) | `~/.codex/prompts/debug-container.md` |
| Cursor | [cursor/.cursor/skills/debug-container/SKILL.md](cursor/.cursor/skills/debug-container/SKILL.md) | `.cursor/skills/debug-container/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/commands/debug-container.toml](gemini-cli/.gemini/commands/debug-container.toml) | `.gemini/commands/debug-container.toml` |
| GitHub Copilot | [copilot/.github/skills/debug-container/SKILL.md](copilot/.github/skills/debug-container/SKILL.md) | `.github/skills/debug-container/SKILL.md` |

## What it does

A container that dies seconds after start rarely says why. The clue is spread across the exit code, the last log lines, the entrypoint, the environment and the file layout inside the image.

This command gathers those clues with read-only Docker commands, matches them against the Dockerfile and compose file, and names the likely cause with the evidence. It does not stop, remove or rebuild anything without your answer.

## Use it when

- A container exits immediately after docker run
- A service restarts in a loop under compose
- The app works on your machine but not in the image
- A container is up but the port gives no answer

## What it can access

- Runs read-only docker inspect, logs and ps
- May run docker exec to list files
- Edits the Dockerfile only after you approve

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/debug-container/
