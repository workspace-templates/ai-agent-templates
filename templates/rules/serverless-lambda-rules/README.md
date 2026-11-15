# Serverless Lambda Rules

**Project rules** · DevOps and cloud · aws

Project rules for AWS Lambda functions: thin handlers, cold start care, validated environment config, structured logs and idempotent processing.

## Install

```bash
npx workspacetemplates add serverless-lambda-rules
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/CLAUDE.md](claude-code/CLAUDE.md) | `CLAUDE.md` (merge) |
| Codex | [codex/AGENTS.md](codex/AGENTS.md) | `AGENTS.md` (merge) |
| Cursor | [cursor/.cursor/rules/serverless-lambda-rules.mdc](cursor/.cursor/rules/serverless-lambda-rules.mdc) | `.cursor/rules/serverless-lambda-rules.mdc` |
| Gemini CLI | [gemini-cli/GEMINI.md](gemini-cli/GEMINI.md) | `GEMINI.md` (merge) |
| GitHub Copilot | [copilot/.github/copilot-instructions.md](copilot/.github/copilot-instructions.md) | `.github/copilot-instructions.md` (merge) |

## What it does

These rules guide an agent writing AWS Lambda functions that stay small, fast to start and safe to retry. They separate the handler from business logic so most code can be tested without AWS.

They also cover the operational habits that matter in production: structured logs, timeouts, partial batch failures and duplicate event handling.

## Use it when

- You add a new Lambda function with an agent
- Cold starts or timeouts hurt latency
- Events get processed twice and cause duplicates
- Logs are plain strings that are hard to query

## What it can access

- Guidance text only; it does not call AWS or change any files by itself

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/serverless-lambda-rules/
