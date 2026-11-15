# Helm Chart Authoring

**Skill** · DevOps and cloud · kubernetes

Builds Helm charts with a small, documented values file, clean templates and a tested install, upgrade and rollback path.

## Install

```bash
npx workspacetemplates add helm-chart-authoring
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/helm-chart-authoring/SKILL.md](claude-code/.claude/skills/helm-chart-authoring/SKILL.md) | `.claude/skills/helm-chart-authoring/SKILL.md` |
| Codex | [codex/.agents/skills/helm-chart-authoring/SKILL.md](codex/.agents/skills/helm-chart-authoring/SKILL.md) | `.agents/skills/helm-chart-authoring/SKILL.md` |
| Cursor | [cursor/.cursor/skills/helm-chart-authoring/SKILL.md](cursor/.cursor/skills/helm-chart-authoring/SKILL.md) | `.cursor/skills/helm-chart-authoring/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/helm-chart-authoring/SKILL.md](gemini-cli/.gemini/skills/helm-chart-authoring/SKILL.md) | `.gemini/skills/helm-chart-authoring/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/helm-chart-authoring/SKILL.md](copilot/.github/skills/helm-chart-authoring/SKILL.md) | `.github/skills/helm-chart-authoring/SKILL.md` |

## What it does

Many charts fail the same way: a values file with sixty options nobody understands, templates full of nested conditionals, and an upgrade that was never tried. This skill authors a chart from the other end. It starts with the few settings a user must change, and builds templates that follow from them.

Before it finishes, the agent lints the chart, renders it with several value sets, and runs an install followed by an upgrade on a local cluster when one is available.

## Use it when

- You are packaging an application for Kubernetes for the first time
- A chart's values.yaml has grown past what anyone can explain
- An upgrade changed a StatefulSet and broke it
- You need a chart that other teams can install without reading the templates

## What it can access

- Reads and writes files under the chart directory
- Runs helm and kubeconform; installs only to a local test cluster you already have

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/helm-chart-authoring/
