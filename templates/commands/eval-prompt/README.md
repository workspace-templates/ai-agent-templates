# Eval Prompt

**Command** · Data and AI

Runs a prompt against several test inputs and reports which outputs fail your stated criteria, with the evidence for each failure.

## Install

```bash
npx workspacetemplates add eval-prompt
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/commands/eval-prompt.md](claude-code/.claude/commands/eval-prompt.md) | `.claude/commands/eval-prompt.md` |
| Codex | [codex/home/.codex/prompts/eval-prompt.md](codex/home/.codex/prompts/eval-prompt.md) | `~/.codex/prompts/eval-prompt.md` |
| Cursor | [cursor/.cursor/skills/eval-prompt/SKILL.md](cursor/.cursor/skills/eval-prompt/SKILL.md) | `.cursor/skills/eval-prompt/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/commands/eval-prompt.toml](gemini-cli/.gemini/commands/eval-prompt.toml) | `.gemini/commands/eval-prompt.toml` |
| GitHub Copilot | [copilot/.github/skills/eval-prompt/SKILL.md](copilot/.github/skills/eval-prompt/SKILL.md) | `.github/skills/eval-prompt/SKILL.md` |

## What it does

Changing a prompt without testing it is guesswork. This command takes the prompt and your pass criteria, builds a small set of test inputs including awkward ones, and checks each output against the criteria one by one.

The report shows what passed, what failed and the exact text that broke the rule, so you can fix the prompt instead of just rewording it again.

## Use it when

- You changed a system prompt and want to know what got worse
- A prompt works on your example and fails on real data
- You need pass or fail criteria before shipping an AI feature
- Comparing two prompt versions

## What it can access

- Reads the prompt and any example data
- Runs the prompt through the project's own model setup for each test input

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/eval-prompt/
