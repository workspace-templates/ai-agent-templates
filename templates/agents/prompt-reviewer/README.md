# Prompt Reviewer

**Subagent** · Data and AI

Read-only subagent that reviews prompts and LLM API calls for ambiguity, injection exposure, brittle parsing and missing evals.

## Install

```bash
npx workspacetemplates add prompt-reviewer
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/agents/prompt-reviewer.md](claude-code/.claude/agents/prompt-reviewer.md) | `.claude/agents/prompt-reviewer.md` |
| Codex | [codex/.codex/agents/prompt-reviewer.toml](codex/.codex/agents/prompt-reviewer.toml) | `.codex/agents/prompt-reviewer.toml` |
| Cursor | [cursor/.cursor/agents/prompt-reviewer.md](cursor/.cursor/agents/prompt-reviewer.md) | `.cursor/agents/prompt-reviewer.md` |
| Gemini CLI | [gemini-cli/.gemini/agents/prompt-reviewer.md](gemini-cli/.gemini/agents/prompt-reviewer.md) | `.gemini/agents/prompt-reviewer.md` |
| GitHub Copilot | [copilot/.github/agents/prompt-reviewer.agent.md](copilot/.github/agents/prompt-reviewer.agent.md) | `.github/agents/prompt-reviewer.agent.md` |

## What it does

Prompts live inside application code, where nobody reviews them like code. This subagent finds them, reads each one as the model would, and checks the surrounding call for the failures that show up in production: untrusted text mixed with instructions, outputs parsed with a regex, and no test that notices a regression.

It changes nothing. The report ranks problems, shows a tightened wording where that helps, and lists the evals you would need before trusting a change.

## Use it when

- You are about to ship a feature built on an LLM call
- A prompt works on your examples but fails for real users
- User-supplied text flows into a system prompt or tool arguments
- You need to know which prompts have no tests at all

## What it can access

- Reads source files and prompt templates in your project
- Makes no API calls and edits nothing

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/prompt-reviewer/
