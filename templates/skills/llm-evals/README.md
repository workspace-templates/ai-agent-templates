# LLM Evals

**Skill** · Data and AI

Builds an eval set and scorer for an LLM feature and tracks regressions with each change. Use it so prompt and model changes are measured, not guessed.

## Install

```bash
npx workspacetemplates add llm-evals
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/llm-evals/SKILL.md](claude-code/.claude/skills/llm-evals/SKILL.md) | `.claude/skills/llm-evals/SKILL.md` |
| Codex | [codex/.agents/skills/llm-evals/SKILL.md](codex/.agents/skills/llm-evals/SKILL.md) | `.agents/skills/llm-evals/SKILL.md` |
| Cursor | [cursor/.cursor/skills/llm-evals/SKILL.md](cursor/.cursor/skills/llm-evals/SKILL.md) | `.cursor/skills/llm-evals/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/llm-evals/SKILL.md](gemini-cli/.gemini/skills/llm-evals/SKILL.md) | `.gemini/skills/llm-evals/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/llm-evals/SKILL.md](copilot/.github/skills/llm-evals/SKILL.md) | `.github/skills/llm-evals/SKILL.md` |

## What it does

Changing a prompt without an eval is guessing with extra steps. This skill builds the smallest useful test harness for an LLM feature: a set of real cases, a scorer for each kind of answer, and a report that shows what got better and what got worse.

The agent prefers cheap code checks where an answer can be checked by code, and uses a model as a judge only for qualities that need reading, with the judge itself spot checked against human labels.

## Use it when

- You change a prompt or switch models and need to know if quality dropped
- Bug reports arrive from users and you want each one to become a permanent test
- Stakeholders ask how good the feature is and you have only anecdotes
- You want a gate in CI that fails when quality falls below a bar

## What it can access

- Reads your LLM feature code and example logs you point it at
- Writes eval cases and a scoring script
- Calls a model API from your environment when you run the evals

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/llm-evals/
