# Analyze CSV

**Command** · Data and AI · python

Loads a CSV, profiles every column and its quality problems, and summarizes the data with a few plots saved to disk.

## Install

```bash
npx workspacetemplates add analyze-csv
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/commands/analyze-csv.md](claude-code/.claude/commands/analyze-csv.md) | `.claude/commands/analyze-csv.md` |
| Codex | [codex/home/.codex/prompts/analyze-csv.md](codex/home/.codex/prompts/analyze-csv.md) | `~/.codex/prompts/analyze-csv.md` |
| Cursor | [cursor/.cursor/skills/analyze-csv/SKILL.md](cursor/.cursor/skills/analyze-csv/SKILL.md) | `.cursor/skills/analyze-csv/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/commands/analyze-csv.toml](gemini-cli/.gemini/commands/analyze-csv.toml) | `.gemini/commands/analyze-csv.toml` |
| GitHub Copilot | [copilot/.github/skills/analyze-csv/SKILL.md](copilot/.github/skills/analyze-csv/SKILL.md) | `.github/skills/analyze-csv/SKILL.md` |

## What it does

A new data file deserves a quick honest look before anyone builds on it. This command loads the CSV, guesses types, counts missing values and duplicates, and flags columns that look wrong.

It then writes a short summary of what the file contains and saves a handful of plots next to it. Your original file is never modified.

## Use it when

- You just received a data export and know nothing about it
- Before loading a file into a database or model
- You need a quick summary for a teammate
- A report built on a CSV gives odd numbers

## What it can access

- Reads the CSV file
- Runs Python and writes plot images to a csv-analysis folder

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/analyze-csv/
