# Kubernetes Rules

**Project rules** · DevOps and cloud · kubernetes

Project rules for Kubernetes manifests: standard labels, resource requests, probes, restricted security contexts, config handling and safe rollouts.

## Install

```bash
npx workspacetemplates add kubernetes-rules
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/CLAUDE.md](claude-code/CLAUDE.md) | `CLAUDE.md` (merge) |
| Codex | [codex/AGENTS.md](codex/AGENTS.md) | `AGENTS.md` (merge) |
| Cursor | [cursor/.cursor/rules/kubernetes-rules.mdc](cursor/.cursor/rules/kubernetes-rules.mdc) | `.cursor/rules/kubernetes-rules.mdc` |
| Gemini CLI | [gemini-cli/GEMINI.md](gemini-cli/GEMINI.md) | `GEMINI.md` (merge) |
| GitHub Copilot | [copilot/.github/copilot-instructions.md](copilot/.github/copilot-instructions.md) | `.github/copilot-instructions.md` (merge) |

## What it does

A manifest that applies cleanly can still be unsafe or fragile in a real cluster. These rules guide an agent toward workloads that can be scheduled fairly, restarted safely and locked down by default.

They also say how configuration, secrets and rollouts should be written, and which commands validate a change before it reaches a cluster.

## Use it when

- You are writing Deployments, Services or Helm and Kustomize overlays
- Pods get evicted or starve their neighbors
- A rollout caused downtime
- Containers run as root with writable file systems

## What it can access

- Instructions only; it does not read or run anything by itself

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/kubernetes-rules/
