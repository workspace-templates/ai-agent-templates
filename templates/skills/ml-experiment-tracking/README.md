# ML Experiment Tracking

**Skill** · Data and AI · python

Logs params, metrics, code version and artifacts so ML experiments can be reproduced and compared. Use it when results are hard to trace back to a run.

## Install

```bash
npx workspacetemplates add ml-experiment-tracking
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/ml-experiment-tracking/SKILL.md](claude-code/.claude/skills/ml-experiment-tracking/SKILL.md) | `.claude/skills/ml-experiment-tracking/SKILL.md` |
| Codex | [codex/.agents/skills/ml-experiment-tracking/SKILL.md](codex/.agents/skills/ml-experiment-tracking/SKILL.md) | `.agents/skills/ml-experiment-tracking/SKILL.md` |
| Cursor | [cursor/.cursor/skills/ml-experiment-tracking/SKILL.md](cursor/.cursor/skills/ml-experiment-tracking/SKILL.md) | `.cursor/skills/ml-experiment-tracking/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/ml-experiment-tracking/SKILL.md](gemini-cli/.gemini/skills/ml-experiment-tracking/SKILL.md) | `.gemini/skills/ml-experiment-tracking/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/ml-experiment-tracking/SKILL.md](copilot/.github/skills/ml-experiment-tracking/SKILL.md) | `.github/skills/ml-experiment-tracking/SKILL.md` |

## What it does

If you cannot say which code, data and settings produced a number, you cannot trust it or beat it. This skill adds tracking to an existing training script so every run records what it was, what it scored and what it produced.

The agent works with the tracker you already use, such as MLflow or Weights and Biases, or with plain files when you have none, and keeps the setup small.

## Use it when

- Last month's best model cannot be reproduced and nobody remembers the settings
- Several people train variants and the comparisons live in chat messages
- You need to compare ten runs by one metric and see what differed
- A model is being promoted and you want its full lineage written down

## What it can access

- Reads and edits your training scripts
- Writes run records and artifacts to a local folder
- Runs git status and git rev-parse to capture the code version

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/ml-experiment-tracking/
