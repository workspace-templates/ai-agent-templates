# Kubernetes Manifest Review

**Skill** · DevOps and cloud · kubernetes

Reviews Kubernetes manifests for missing limits, probes, security context and unsafe rollout settings, and returns fixes ranked by risk.

## Install

```bash
npx workspacetemplates add kubernetes-manifest-review
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/kubernetes-manifest-review/SKILL.md](claude-code/.claude/skills/kubernetes-manifest-review/SKILL.md) | `.claude/skills/kubernetes-manifest-review/SKILL.md` |
| Codex | [codex/.agents/skills/kubernetes-manifest-review/SKILL.md](codex/.agents/skills/kubernetes-manifest-review/SKILL.md) | `.agents/skills/kubernetes-manifest-review/SKILL.md` |
| Cursor | [cursor/.cursor/skills/kubernetes-manifest-review/SKILL.md](cursor/.cursor/skills/kubernetes-manifest-review/SKILL.md) | `.cursor/skills/kubernetes-manifest-review/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/kubernetes-manifest-review/SKILL.md](gemini-cli/.gemini/skills/kubernetes-manifest-review/SKILL.md) | `.gemini/skills/kubernetes-manifest-review/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/kubernetes-manifest-review/SKILL.md](copilot/.github/skills/kubernetes-manifest-review/SKILL.md) | `.github/skills/kubernetes-manifest-review/SKILL.md` |

## What it does

Manifests that apply cleanly can still take a cluster down: a pod with no memory limit, a readiness probe that checks nothing, a deployment that replaces every replica at once. This skill reads each manifest the way an on-call engineer would and flags what will hurt at 3 a.m.

Findings are tied to the exact resource and field, and each comes with the YAML to change. Style preferences are skipped.

## Use it when

- Before you apply manifests to a shared cluster
- A deployment caused downtime during a rollout
- You inherit a repository of YAML nobody has audited
- A security team asks for pod hardening evidence

## What it can access

- Reads Kubernetes YAML, Kustomize and Helm files
- Runs offline tools such as helm template and kubeconform

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/kubernetes-manifest-review/
