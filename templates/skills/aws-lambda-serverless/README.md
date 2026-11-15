# AWS Lambda Serverless

**Skill** · DevOps and cloud · aws

Builds AWS Lambda functions that handle cold starts, timeouts, memory sizing and retries, with idempotent handlers and clear failure paths.

## Install

```bash
npx workspacetemplates add aws-lambda-serverless
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/aws-lambda-serverless/SKILL.md](claude-code/.claude/skills/aws-lambda-serverless/SKILL.md) | `.claude/skills/aws-lambda-serverless/SKILL.md` |
| Codex | [codex/.agents/skills/aws-lambda-serverless/SKILL.md](codex/.agents/skills/aws-lambda-serverless/SKILL.md) | `.agents/skills/aws-lambda-serverless/SKILL.md` |
| Cursor | [cursor/.cursor/skills/aws-lambda-serverless/SKILL.md](cursor/.cursor/skills/aws-lambda-serverless/SKILL.md) | `.cursor/skills/aws-lambda-serverless/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/aws-lambda-serverless/SKILL.md](gemini-cli/.gemini/skills/aws-lambda-serverless/SKILL.md) | `.gemini/skills/aws-lambda-serverless/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/aws-lambda-serverless/SKILL.md](copilot/.github/skills/aws-lambda-serverless/SKILL.md) | `.github/skills/aws-lambda-serverless/SKILL.md` |

## What it does

Lambda looks simple until a retry charges a customer twice or a timeout kills a job halfway. This skill has the agent design the function around how Lambda really runs: initialization outside the handler, a timeout shorter than the caller's, and handlers that can safely run twice.

It also covers the settings that decide cost and speed, such as memory size and package weight, and wires a dead-letter queue so failures are kept for inspection instead of vanishing.

## Use it when

- You are writing a new function triggered by SQS, S3, API Gateway or a schedule
- A function times out or is billed far more than expected
- Duplicate events cause duplicate side effects
- Cold starts make an API endpoint feel slow

## What it can access

- Reads and edits function code and infrastructure files
- Runs your build and test commands; no AWS calls unless you ask

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/aws-lambda-serverless/
