# Python Data Science Rules

**Project rules** · Data and AI · python, pandas

Project rules for Python data science repos: notebooks kept thin, logic in modules, fixed seeds, tidy pandas code and versioned data.

## Install

```bash
npx workspacetemplates add python-data-science-rules
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/CLAUDE.md](claude-code/CLAUDE.md) | `CLAUDE.md` (merge) |
| Codex | [codex/AGENTS.md](codex/AGENTS.md) | `AGENTS.md` (merge) |
| Cursor | [cursor/.cursor/rules/python-data-science-rules.mdc](cursor/.cursor/rules/python-data-science-rules.mdc) | `.cursor/rules/python-data-science-rules.mdc` |
| Gemini CLI | [gemini-cli/GEMINI.md](gemini-cli/GEMINI.md) | `GEMINI.md` (merge) |
| GitHub Copilot | [copilot/.github/copilot-instructions.md](copilot/.github/copilot-instructions.md) | `.github/copilot-instructions.md` (merge) |

## What it does

Data science repos drift into notebooks nobody can rerun. These rules push reusable logic into a package, keep notebooks for exploration and reporting, and make each result traceable to code, data and a seed.

They also say how to write pandas without hidden mutation, pin environments, and keep large data out of git.

## Use it when

- A notebook has grown past a few hundred lines
- Results change between runs and nobody knows why
- Pandas code relies on chained assignment and loops
- Data files are being committed to git

## What it can access

- Instructions only; it does not read or run anything by itself

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/python-data-science-rules/
