# Payment Integration Safety

**Skill** · Backend and APIs

Builds or reviews payment code so amounts are set on the server, webhooks are verified and idempotent, and every charge can be reconciled with the provider.

## Install

```bash
npx workspacetemplates add payment-integration-safety
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/payment-integration-safety/SKILL.md](claude-code/.claude/skills/payment-integration-safety/SKILL.md) | `.claude/skills/payment-integration-safety/SKILL.md` |
| Codex | [codex/.agents/skills/payment-integration-safety/SKILL.md](codex/.agents/skills/payment-integration-safety/SKILL.md) | `.agents/skills/payment-integration-safety/SKILL.md` |
| Cursor | [cursor/.cursor/skills/payment-integration-safety/SKILL.md](cursor/.cursor/skills/payment-integration-safety/SKILL.md) | `.cursor/skills/payment-integration-safety/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/payment-integration-safety/SKILL.md](gemini-cli/.gemini/skills/payment-integration-safety/SKILL.md) | `.gemini/skills/payment-integration-safety/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/payment-integration-safety/SKILL.md](copilot/.github/skills/payment-integration-safety/SKILL.md) | `.github/skills/payment-integration-safety/SKILL.md` |

## What it does

Payment bugs cost money, and most of them come from the same few shortcuts: trusting a price sent by the browser, treating the redirect after checkout as proof of payment, and handling a webhook twice. This skill looks for those first.

It works with any provider, such as Stripe, Adyen or PayPal, and uses the provider test mode for checks. It never touches live keys and never prints secrets.

## Use it when

- You are adding checkout or subscriptions to an app
- You are reviewing a payment pull request before it ships
- Customers report double charges or orders stuck as unpaid
- A webhook endpoint exists but nobody has tested replay or bad signatures

## What it can access

- Reads checkout, order and webhook code
- Edits source files and adds tests
- Runs your test command, never against live payment APIs

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/payment-integration-safety/
