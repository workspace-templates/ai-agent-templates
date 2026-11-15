# LLM App Rules

**Project rules** · Data and AI · python, typescript

Project rules for LLM applications: prompts stored as files, validated structured output, bounded retries, evals, redacted logs and cost caps.

## Install

```bash
npx workspacetemplates add llm-app-rules
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/CLAUDE.md](claude-code/CLAUDE.md) | `CLAUDE.md` (merge) |
| Codex | [codex/AGENTS.md](codex/AGENTS.md) | `AGENTS.md` (merge) |
| Cursor | [cursor/.cursor/rules/llm-app-rules.mdc](cursor/.cursor/rules/llm-app-rules.mdc) | `.cursor/rules/llm-app-rules.mdc` |
| Gemini CLI | [gemini-cli/GEMINI.md](gemini-cli/GEMINI.md) | `GEMINI.md` (merge) |
| GitHub Copilot | [copilot/.github/copilot-instructions.md](copilot/.github/copilot-instructions.md) | `.github/copilot-instructions.md` (merge) |

## What it does

An LLM call is an unreliable network service with a variable price. These rules make an agent treat it that way: prompts live in versioned files, outputs are validated, and every call has limits.

They add evals and logging so quality changes are measured instead of guessed, whether the app is written in Python or TypeScript.

## Use it when

- You are adding a feature that calls a language model API
- Prompts are long strings buried inside functions
- Model output is parsed with regular expressions
- There is no way to tell whether a prompt change made things better

## What it can access

- Instructions only; it does not read or run anything by itself

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/llm-app-rules/
