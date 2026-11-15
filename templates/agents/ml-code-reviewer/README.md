# ML Code Reviewer

**Subagent** · Data and AI · python, pytorch

Read-only subagent that reviews PyTorch and ML code for data leakage, seed handling, evaluation mistakes and silent shape bugs.

## Install

```bash
npx workspacetemplates add ml-code-reviewer
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/agents/ml-code-reviewer.md](claude-code/.claude/agents/ml-code-reviewer.md) | `.claude/agents/ml-code-reviewer.md` |
| Codex | [codex/.codex/agents/ml-code-reviewer.toml](codex/.codex/agents/ml-code-reviewer.toml) | `.codex/agents/ml-code-reviewer.toml` |
| Cursor | [cursor/.cursor/agents/ml-code-reviewer.md](cursor/.cursor/agents/ml-code-reviewer.md) | `.cursor/agents/ml-code-reviewer.md` |
| Gemini CLI | [gemini-cli/.gemini/agents/ml-code-reviewer.md](gemini-cli/.gemini/agents/ml-code-reviewer.md) | `.gemini/agents/ml-code-reviewer.md` |
| GitHub Copilot | [copilot/.github/agents/ml-code-reviewer.agent.md](copilot/.github/agents/ml-code-reviewer.agent.md) | `.github/agents/ml-code-reviewer.agent.md` |

## What it does

Machine learning code can run end to end and still be wrong. A mean over the wrong axis, a model left in train mode during evaluation, or a validation set that overlaps training will all produce a plausible number. This subagent hunts for exactly those faults.

It reads training and evaluation code without running it, and reports each issue with the line, the effect on the metric, and the fix. It does not edit files.

## Use it when

- A model scores far better than the literature suggests
- Before launching a long, expensive training run
- You ported a paper and the numbers do not match
- Reviewing a teammate's training loop or data pipeline

## What it can access

- Reads source files, configs and notebooks in your project
- Cannot run training or edit files

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/ml-code-reviewer/
