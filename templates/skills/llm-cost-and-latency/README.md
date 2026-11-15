# LLM Cost and Latency

**Skill** · Data and AI

Finds where an app wastes LLM tokens and time, then cuts both with prompt caching, smaller models, batching and streaming.

## Install

```bash
npx workspacetemplates add llm-cost-and-latency
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/llm-cost-and-latency/SKILL.md](claude-code/.claude/skills/llm-cost-and-latency/SKILL.md) | `.claude/skills/llm-cost-and-latency/SKILL.md` |
| Codex | [codex/.agents/skills/llm-cost-and-latency/SKILL.md](codex/.agents/skills/llm-cost-and-latency/SKILL.md) | `.agents/skills/llm-cost-and-latency/SKILL.md` |
| Cursor | [cursor/.cursor/skills/llm-cost-and-latency/SKILL.md](cursor/.cursor/skills/llm-cost-and-latency/SKILL.md) | `.cursor/skills/llm-cost-and-latency/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/llm-cost-and-latency/SKILL.md](gemini-cli/.gemini/skills/llm-cost-and-latency/SKILL.md) | `.gemini/skills/llm-cost-and-latency/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/llm-cost-and-latency/SKILL.md](copilot/.github/skills/llm-cost-and-latency/SKILL.md) | `.github/skills/llm-cost-and-latency/SKILL.md` |

## What it does

A bill that doubled or a chat that feels slow usually traces back to a handful of calls. This skill makes the agent measure first, then change the biggest cost, instead of guessing at tweaks.

The fixes are ordered by payoff and risk: cache stable prompt prefixes, route easy work to a smaller model, batch what is not interactive, and trim what you send and ask for.

## Use it when

- Your monthly model bill is higher than planned
- Users wait too long for the first token
- A pipeline calls the model thousands of times a day
- You want to know if a cheaper model is good enough

## What it can access

- Reads code and logs in your project
- May add temporary counters or logging, which you review

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/llm-cost-and-latency/
