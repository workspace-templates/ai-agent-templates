# Clean Notebook

**Command** · Data and AI · python

Cleans a Jupyter notebook: removes dead cells, fixes run order, moves reusable code into modules and checks it runs top to bottom.

## Install

```bash
npx workspacetemplates add clean-notebook
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/commands/clean-notebook.md](claude-code/.claude/commands/clean-notebook.md) | `.claude/commands/clean-notebook.md` |
| Codex | [codex/home/.codex/prompts/clean-notebook.md](codex/home/.codex/prompts/clean-notebook.md) | `~/.codex/prompts/clean-notebook.md` |
| Cursor | [cursor/.cursor/skills/clean-notebook/SKILL.md](cursor/.cursor/skills/clean-notebook/SKILL.md) | `.cursor/skills/clean-notebook/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/commands/clean-notebook.toml](gemini-cli/.gemini/commands/clean-notebook.toml) | `.gemini/commands/clean-notebook.toml` |
| GitHub Copilot | [copilot/.github/skills/clean-notebook/SKILL.md](copilot/.github/skills/clean-notebook/SKILL.md) | `.github/skills/clean-notebook/SKILL.md` |

## What it does

Notebooks grow messy: cells run out of order, abandoned experiments, hidden state that only works on your machine. This command proves what the notebook really depends on and tidies it into something others can rerun.

Reusable functions move into a Python module with imports in the notebook, and outputs are cleared. The original is backed up first, so you can always return to it.

## Use it when

- When a notebook is about to go to a colleague for review
- The notebook only works if cells are run in a certain secret order
- A notebook has grown past 100 cells of experiments
- You want to commit it without huge output diffs

## What it can access

- Reads the notebook and creates a backup copy
- Edits the notebook and creates a Python module; executes cells in a test run

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/clean-notebook/
