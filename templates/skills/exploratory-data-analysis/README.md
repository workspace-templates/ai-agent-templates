# Exploratory Data Analysis

**Skill** · Data and AI · python

Profiles a new dataset, finds quality problems and summarizes findings with plots. Use it before modeling or reporting on data you have not seen yet.

## Install

```bash
npx workspacetemplates add exploratory-data-analysis
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/exploratory-data-analysis/SKILL.md](claude-code/.claude/skills/exploratory-data-analysis/SKILL.md) | `.claude/skills/exploratory-data-analysis/SKILL.md` |
| Codex | [codex/.agents/skills/exploratory-data-analysis/SKILL.md](codex/.agents/skills/exploratory-data-analysis/SKILL.md) | `.agents/skills/exploratory-data-analysis/SKILL.md` |
| Cursor | [cursor/.cursor/skills/exploratory-data-analysis/SKILL.md](cursor/.cursor/skills/exploratory-data-analysis/SKILL.md) | `.cursor/skills/exploratory-data-analysis/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/exploratory-data-analysis/SKILL.md](gemini-cli/.gemini/skills/exploratory-data-analysis/SKILL.md) | `.gemini/skills/exploratory-data-analysis/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/exploratory-data-analysis/SKILL.md](copilot/.github/skills/exploratory-data-analysis/SKILL.md) | `.github/skills/exploratory-data-analysis/SKILL.md` |

## What it does

Jumping straight into a model or dashboard on unfamiliar data is how wrong conclusions ship. This skill walks the agent through a fixed pass: shape, types, missing values, distributions, relationships and oddities, with a plot where a plot says more than a number.

The output is a short written summary with the three or four things that matter, the problems that must be fixed first, and the questions the data can and cannot answer.

## Use it when

- You received a new dataset and know nothing about its quality
- A stakeholder asks what the data says and you need a defensible first answer
- Before choosing features or a model, to learn what is actually in the table
- A metric looks off and you want to find out whether the data is the reason

## What it can access

- Reads the dataset files you point it at
- Writes plot images and a summary into an eda folder
- Runs Python for analysis

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/exploratory-data-analysis/
