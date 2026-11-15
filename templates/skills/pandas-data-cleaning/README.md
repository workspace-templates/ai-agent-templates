# Pandas Data Cleaning

**Skill** · Data and AI · python, pandas

Cleans messy DataFrames with typed columns, explicit null handling and assertions. Use it when raw CSV or Excel data needs to become trustworthy.

## Install

```bash
npx workspacetemplates add pandas-data-cleaning
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/pandas-data-cleaning/SKILL.md](claude-code/.claude/skills/pandas-data-cleaning/SKILL.md) | `.claude/skills/pandas-data-cleaning/SKILL.md` |
| Codex | [codex/.agents/skills/pandas-data-cleaning/SKILL.md](codex/.agents/skills/pandas-data-cleaning/SKILL.md) | `.agents/skills/pandas-data-cleaning/SKILL.md` |
| Cursor | [cursor/.cursor/skills/pandas-data-cleaning/SKILL.md](cursor/.cursor/skills/pandas-data-cleaning/SKILL.md) | `.cursor/skills/pandas-data-cleaning/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/pandas-data-cleaning/SKILL.md](gemini-cli/.gemini/skills/pandas-data-cleaning/SKILL.md) | `.gemini/skills/pandas-data-cleaning/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/pandas-data-cleaning/SKILL.md](copilot/.github/skills/pandas-data-cleaning/SKILL.md) | `.github/skills/pandas-data-cleaning/SKILL.md` |

## What it does

Quiet pandas defaults are where bad data hides: strings that look like numbers, NaN that turns an integer column into floats, duplicates nobody counted. This skill writes cleaning code that states every decision and fails loudly when the data breaks an assumption.

The result is a short, readable function per dataset, a log of rows dropped or changed, and assertions you can keep running on the next file.

## Use it when

- A CSV from another team arrives with mixed date formats and stray whitespace
- Counts differ between two reports and you suspect duplicates or nulls
- You are turning a notebook of ad hoc fixes into a repeatable cleaning step
- A column that should be an integer keeps becoming a float or object

## What it can access

- Reads data files such as CSV and Excel in the project
- Writes a cleaning script and cleaned output files
- Runs Python to check the result

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/pandas-data-cleaning/
