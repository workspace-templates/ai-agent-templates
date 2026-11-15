# Model Evaluation

**Skill** · Data and AI · python

Chooses metrics, splits and baselines for a model, then reports results with uncertainty. Use it before claiming a model is good or better than another.

## Install

```bash
npx workspacetemplates add model-evaluation
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/model-evaluation/SKILL.md](claude-code/.claude/skills/model-evaluation/SKILL.md) | `.claude/skills/model-evaluation/SKILL.md` |
| Codex | [codex/.agents/skills/model-evaluation/SKILL.md](codex/.agents/skills/model-evaluation/SKILL.md) | `.agents/skills/model-evaluation/SKILL.md` |
| Cursor | [cursor/.cursor/skills/model-evaluation/SKILL.md](cursor/.cursor/skills/model-evaluation/SKILL.md) | `.cursor/skills/model-evaluation/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/model-evaluation/SKILL.md](gemini-cli/.gemini/skills/model-evaluation/SKILL.md) | `.gemini/skills/model-evaluation/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/model-evaluation/SKILL.md](copilot/.github/skills/model-evaluation/SKILL.md) | `.github/skills/model-evaluation/SKILL.md` |

## What it does

A model score means little without the right metric, a split that matches real use, and a baseline to beat. This skill sets those up before it computes a single number, and then reports the result with its uncertainty and its weak spots.

It also looks for the usual traps: leakage between train and test, tuning on the test set, and an average that hides a failing segment.

## Use it when

- You trained a model and need an honest account of how good it is
- Two candidates look similar and you must decide whether the gap is real
- A model scores very well and you suspect leakage
- You must present results to people who will act on them

## What it can access

- Reads your model code, predictions and datasets
- Writes an evaluation script and a results report
- Runs Python to compute metrics

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/model-evaluation/
