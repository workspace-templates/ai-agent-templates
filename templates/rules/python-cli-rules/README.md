# Python CLI Rules

**Project rules** · Workflow · python

Project rules for Python command line tools: argparse or Typer, clear exit codes, pyproject packaging, stderr logging and pytest.

## Install

```bash
npx workspacetemplates add python-cli-rules
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/CLAUDE.md](claude-code/CLAUDE.md) | `CLAUDE.md` (merge) |
| Codex | [codex/AGENTS.md](codex/AGENTS.md) | `AGENTS.md` (merge) |
| Cursor | [cursor/.cursor/rules/python-cli-rules.mdc](cursor/.cursor/rules/python-cli-rules.mdc) | `.cursor/rules/python-cli-rules.mdc` |
| Gemini CLI | [gemini-cli/GEMINI.md](gemini-cli/GEMINI.md) | `GEMINI.md` (merge) |
| GitHub Copilot | [copilot/.github/copilot-instructions.md](copilot/.github/copilot-instructions.md) | `.github/copilot-instructions.md` (merge) |

## What it does

These rules turn a Python script into a command line tool people can install and trust. They define how arguments are parsed, where output goes and which exit codes mean what.

They suit tools that run in shells and CI pipelines, where predictable streams and codes matter more than clever features.

## Use it when

- You turn a script into an installable tool
- Output mixes data and log messages on stdout
- Every failure exits with the same code
- You need tests that run the command end to end

## What it can access

- Instructions only; it does not read or run anything by itself

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/python-cli-rules/
