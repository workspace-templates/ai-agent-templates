# LLM Tool Calling

**Skill** · Data and AI

Designs tool schemas and the call loop for LLM function calling, with argument validation, error feedback and a hard step limit.

## Install

```bash
npx workspacetemplates add llm-tool-calling
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/llm-tool-calling/SKILL.md](claude-code/.claude/skills/llm-tool-calling/SKILL.md) | `.claude/skills/llm-tool-calling/SKILL.md` |
| Codex | [codex/.agents/skills/llm-tool-calling/SKILL.md](codex/.agents/skills/llm-tool-calling/SKILL.md) | `.agents/skills/llm-tool-calling/SKILL.md` |
| Cursor | [cursor/.cursor/skills/llm-tool-calling/SKILL.md](cursor/.cursor/skills/llm-tool-calling/SKILL.md) | `.cursor/skills/llm-tool-calling/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/llm-tool-calling/SKILL.md](gemini-cli/.gemini/skills/llm-tool-calling/SKILL.md) | `.gemini/skills/llm-tool-calling/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/llm-tool-calling/SKILL.md](copilot/.github/skills/llm-tool-calling/SKILL.md) | `.github/skills/llm-tool-calling/SKILL.md` |

## What it does

Tool calling fails in boring ways: a vague tool name, a schema that allows nonsense, a loop that never ends. This skill has the agent design the tools first, then the loop around them, so the model gets fewer and clearer choices.

It covers schema wording, validating every argument before it runs, returning errors the model can act on, and capping steps and spend so a confused model stops instead of looping.

## Use it when

- You are adding function calling to a chatbot or agent
- The model keeps picking the wrong tool or inventing arguments
- A tool loop runs too long or repeats the same call
- You are reviewing someone else's tool definitions

## What it can access

- Reads and edits code in your project
- Does not call any model API itself

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/llm-tool-calling/
