# Prompt Engineering

**Skill** · Data and AI

Writes and iterates production prompts with clear structure, examples and failure tests. Use it when a prompt behind a feature must work every time.

## Install

```bash
npx workspacetemplates add prompt-engineering
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/prompt-engineering/SKILL.md](claude-code/.claude/skills/prompt-engineering/SKILL.md) | `.claude/skills/prompt-engineering/SKILL.md` |
| Codex | [codex/.agents/skills/prompt-engineering/SKILL.md](codex/.agents/skills/prompt-engineering/SKILL.md) | `.agents/skills/prompt-engineering/SKILL.md` |
| Cursor | [cursor/.cursor/skills/prompt-engineering/SKILL.md](cursor/.cursor/skills/prompt-engineering/SKILL.md) | `.cursor/skills/prompt-engineering/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/prompt-engineering/SKILL.md](gemini-cli/.gemini/skills/prompt-engineering/SKILL.md) | `.gemini/skills/prompt-engineering/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/prompt-engineering/SKILL.md](copilot/.github/skills/prompt-engineering/SKILL.md) | `.github/skills/prompt-engineering/SKILL.md` |

## What it does

A prompt that works on three examples can still fail on the fourth hundred. This skill treats a production prompt as code: written with a clear structure, tested against a fixed set of inputs including awkward ones, and changed one thing at a time.

The agent separates instructions from data, specifies the output format precisely, and keeps a log of each revision with its test results so you know why the prompt reads the way it does.

## Use it when

- A feature depends on a model following a format every single time
- Outputs vary between runs and you cannot say which version of the prompt is better
- Users paste unexpected input and the model drifts or ignores instructions
- You are porting a prompt to a different model and need to keep behavior

## What it can access

- Reads and edits prompt files and test inputs
- Can run your prompt against a model if an API key is set in your environment

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/prompt-engineering/
