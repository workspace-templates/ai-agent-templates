# Write Kubernetes Manifest

**Command** · DevOps and cloud · kubernetes

Writes Deployment, Service and config manifests for a service with probes, resource limits and a rollout that can be undone.

## Install

```bash
npx workspacetemplates add write-k8s-manifest
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/commands/write-k8s-manifest.md](claude-code/.claude/commands/write-k8s-manifest.md) | `.claude/commands/write-k8s-manifest.md` |
| Codex | [codex/home/.codex/prompts/write-k8s-manifest.md](codex/home/.codex/prompts/write-k8s-manifest.md) | `~/.codex/prompts/write-k8s-manifest.md` |
| Cursor | [cursor/.cursor/skills/write-k8s-manifest/SKILL.md](cursor/.cursor/skills/write-k8s-manifest/SKILL.md) | `.cursor/skills/write-k8s-manifest/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/commands/write-k8s-manifest.toml](gemini-cli/.gemini/commands/write-k8s-manifest.toml) | `.gemini/commands/write-k8s-manifest.toml` |
| GitHub Copilot | [copilot/.github/skills/write-k8s-manifest/SKILL.md](copilot/.github/skills/write-k8s-manifest/SKILL.md) | `.github/skills/write-k8s-manifest/SKILL.md` |

## What it does

A manifest that applies cleanly can still take a service down: no readiness probe, no limits, and a rollout that kills every pod at once. This command writes the set of files with those decisions made on purpose.

It reads the code for ports and health routes, follows the folder layout your repository already uses and validates the YAML with a dry run before it asks to save anything.

## Use it when

- A new service needs its first Kubernetes deployment
- Pods restart in a loop and you suspect missing probes or limits
- You want a rollout strategy that never drops capacity
- Your manifests are copy-pasted and drifted apart

## What it can access

- Reads source, Dockerfiles and existing manifests
- Runs kubectl dry runs only
- Writes manifest files after you approve

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/write-k8s-manifest/
