# Profile DataFrame

**Command** · Data and AI · python, pandas

Profiles a pandas DataFrame for dtypes, nulls, outliers and duplicates, then suggests exact pandas fixes for each issue.

## Install

```bash
npx workspacetemplates add profile-dataframe
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/commands/profile-dataframe.md](claude-code/.claude/commands/profile-dataframe.md) | `.claude/commands/profile-dataframe.md` |
| Codex | [codex/home/.codex/prompts/profile-dataframe.md](codex/home/.codex/prompts/profile-dataframe.md) | `~/.codex/prompts/profile-dataframe.md` |
| Cursor | [cursor/.cursor/skills/profile-dataframe/SKILL.md](cursor/.cursor/skills/profile-dataframe/SKILL.md) | `.cursor/skills/profile-dataframe/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/commands/profile-dataframe.toml](gemini-cli/.gemini/commands/profile-dataframe.toml) | `.gemini/commands/profile-dataframe.toml` |
| GitHub Copilot | [copilot/.github/skills/profile-dataframe/SKILL.md](copilot/.github/skills/profile-dataframe/SKILL.md) | `.github/skills/profile-dataframe/SKILL.md` |

## What it does

Bad dtypes and hidden duplicates cause quiet errors in joins and averages. This command inspects a DataFrame already in your code or notebook and tells you what is wrong with each column.

Every finding comes with a one-line pandas fix you can paste. It only reads the data, so the original frame stays unchanged until you decide.

## Use it when

- A groupby or merge returns surprising row counts
- You loaded data and want to check it before modeling
- Memory use of a DataFrame is higher than expected
- You inherited a pipeline with no data checks

## What it can access

- Reads the code that builds the DataFrame and runs it
- Edits files only after you approve a cleaning function

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/profile-dataframe/
