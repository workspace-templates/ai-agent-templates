# Kubernetes Debugger

**Subagent** · DevOps and cloud · kubernetes

Read-only subagent that diagnoses pods stuck in CrashLoopBackOff, Pending or ImagePullBackOff from describe output, events and logs.

## Install

```bash
npx workspacetemplates add kubernetes-debugger
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/agents/kubernetes-debugger.md](claude-code/.claude/agents/kubernetes-debugger.md) | `.claude/agents/kubernetes-debugger.md` |
| Codex | [codex/.codex/agents/kubernetes-debugger.toml](codex/.codex/agents/kubernetes-debugger.toml) | `.codex/agents/kubernetes-debugger.toml` |
| Cursor | [cursor/.cursor/agents/kubernetes-debugger.md](cursor/.cursor/agents/kubernetes-debugger.md) | `.cursor/agents/kubernetes-debugger.md` |
| Gemini CLI | [gemini-cli/.gemini/agents/kubernetes-debugger.md](gemini-cli/.gemini/agents/kubernetes-debugger.md) | `.gemini/agents/kubernetes-debugger.md` |
| GitHub Copilot | [copilot/.github/agents/kubernetes-debugger.agent.md](copilot/.github/agents/kubernetes-debugger.agent.md) | `.github/agents/kubernetes-debugger.agent.md` |

## What it does

A failing pod usually explains itself in three places: its status, its events and its last logs. This subagent collects those, matches them against the known causes, and tells you which one fits your pod and why.

It uses only kubectl get, describe and logs, so it cannot restart, scale or delete anything. The output is a diagnosis and the manifest change that would fix it.

## Use it when

- A pod restarts every few seconds with CrashLoopBackOff
- A pod sits in Pending and nothing schedules it
- A new deployment never becomes ready
- You have a pile of describe output and no idea which line matters

## What it can access

- Runs read-only kubectl commands against your current context
- Reads manifests and Helm values in the project

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/kubernetes-debugger/
