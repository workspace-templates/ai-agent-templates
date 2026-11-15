# Block Secrets in Prompts

**Hook** · Security

A Claude Code hook that blocks a prompt before it is sent when it holds an AWS, GitHub, Anthropic, OpenAI, Stripe or Slack key, or a private key block.

## Install

```bash
npx workspacetemplates add block-secrets-in-prompts
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/settings.json](claude-code/.claude/settings.json) | `.claude/settings.json` (merge) |
| Codex | [codex/.codex/hooks.json](codex/.codex/hooks.json) | `.codex/hooks.json` (merge) |

## What it does

Pasting a stack trace often drags a live token along with it. This UserPromptSubmit hook scans your message for well-known key shapes and stops it before the model sees anything.

The warning names the kind of secret and never repeats the value. Remove the key, mention it by variable name, and send the prompt again. Everything is checked locally with regular expressions.

## Use it when

- Paste logs and configs into the chat often
- Share a screen or session with other people
- Work with cloud keys that cannot be rotated quickly
- Add a safety net for a whole team

## What it can access

- Reads the text of each prompt you submit
- Matches it against a fixed list of key patterns
- Blocks the prompt on a match; stores and sends nothing

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **No network calls.** The hook command works offline and sends nothing anywhere.
- ℹ️ **Runs a command.** Runs one Node.js command on UserPromptSubmit. Read it above before installing.

More: https://workspacetemplates.com/ai/block-secrets-in-prompts/
