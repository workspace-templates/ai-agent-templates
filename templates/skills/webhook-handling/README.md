# Webhook Handling

**Skill** · Backend and APIs

Builds a webhook receiver that verifies signatures on the raw body, rejects replays, deduplicates events and acknowledges fast before processing.

## Install

```bash
npx workspacetemplates add webhook-handling
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/webhook-handling/SKILL.md](claude-code/.claude/skills/webhook-handling/SKILL.md) | `.claude/skills/webhook-handling/SKILL.md` |
| Codex | [codex/.agents/skills/webhook-handling/SKILL.md](codex/.agents/skills/webhook-handling/SKILL.md) | `.agents/skills/webhook-handling/SKILL.md` |
| Cursor | [cursor/.cursor/skills/webhook-handling/SKILL.md](cursor/.cursor/skills/webhook-handling/SKILL.md) | `.cursor/skills/webhook-handling/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/webhook-handling/SKILL.md](gemini-cli/.gemini/skills/webhook-handling/SKILL.md) | `.gemini/skills/webhook-handling/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/webhook-handling/SKILL.md](copilot/.github/skills/webhook-handling/SKILL.md) | `.github/skills/webhook-handling/SKILL.md` |

## What it does

A webhook endpoint is a public URL that anyone can post to. Handlers written in a hurry parse the JSON before checking the signature, do the work inside the request and time out, so the sender retries and the work happens twice.

This skill has the agent build the receiver in the safe order: verify, record, acknowledge, process later. It covers the details that usually bite, such as raw body access, constant time comparison and out-of-order events.

## Use it when

- You are integrating Stripe, GitHub, Shopify or any provider that posts events
- Events are processed twice or arrive out of order
- The provider reports timeouts from your endpoint
- You must prove a request really came from the provider

## What it can access

- Reads source files and the provider integration code
- Edits routes, adds a table migration and tests when approved
- Runs your test command

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/webhook-handling/
