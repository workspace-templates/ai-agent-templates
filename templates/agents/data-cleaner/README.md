# Data Cleaner

**Subagent** · Data and AI · python

Subagent that cleans a messy dataset with a repeatable pandas script and logs every row it changes, drops or flags.

## Install

```bash
npx workspacetemplates add data-cleaner
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/agents/data-cleaner.md](claude-code/.claude/agents/data-cleaner.md) | `.claude/agents/data-cleaner.md` |
| Codex | [codex/.codex/agents/data-cleaner.toml](codex/.codex/agents/data-cleaner.toml) | `.codex/agents/data-cleaner.toml` |
| Cursor | [cursor/.cursor/agents/data-cleaner.md](cursor/.cursor/agents/data-cleaner.md) | `.cursor/agents/data-cleaner.md` |
| Gemini CLI | [gemini-cli/.gemini/agents/data-cleaner.md](gemini-cli/.gemini/agents/data-cleaner.md) | `.gemini/agents/data-cleaner.md` |
| GitHub Copilot | [copilot/.github/agents/data-cleaner.agent.md](copilot/.github/agents/data-cleaner.agent.md) | `.github/agents/data-cleaner.agent.md` |

## What it does

Hand-edited spreadsheets and one-off notebook cells make cleaning impossible to repeat. This subagent profiles the file first, then writes one script that turns the raw input into a clean output, so the next export goes through the same steps.

Nothing changes silently. The script writes a change log and the agent reports counts for every rule: values fixed, rows dropped, cells left blank on purpose. The raw file is never overwritten.

## Use it when

- A CSV export has mixed date formats, stray whitespace and duplicate rows
- You get a new vendor file every week and need the same cleanup each time
- A dataset is going into analysis and you need to know what was altered
- Merging two sources whose keys do not quite match

## What it can access

- Reads the dataset you point it at
- Writes a cleaning script, a clean output file and a change log
- Runs Python locally; no data leaves your machine

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/data-cleaner/
