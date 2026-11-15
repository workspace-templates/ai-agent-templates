# AWS CDK Rules

**Project rules** · DevOps and cloud · aws, typescript

Project rules for AWS CDK in TypeScript: construct layers, stable naming, removal policies, assertion tests and a mandatory cdk diff review.

## Install

```bash
npx workspacetemplates add aws-cdk-rules
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/CLAUDE.md](claude-code/CLAUDE.md) | `CLAUDE.md` (merge) |
| Codex | [codex/AGENTS.md](codex/AGENTS.md) | `AGENTS.md` (merge) |
| Cursor | [cursor/.cursor/rules/aws-cdk-rules.mdc](cursor/.cursor/rules/aws-cdk-rules.mdc) | `.cursor/rules/aws-cdk-rules.mdc` |
| Gemini CLI | [gemini-cli/GEMINI.md](gemini-cli/GEMINI.md) | `GEMINI.md` (merge) |
| GitHub Copilot | [copilot/.github/copilot-instructions.md](copilot/.github/copilot-instructions.md) | `.github/copilot-instructions.md` (merge) |

## What it does

This file tells an agent how to organize an AWS CDK app written in TypeScript. It separates reusable constructs from stacks and keeps environment choices out of the construct code.

It also treats infrastructure changes with care: stateful resources are protected, tests assert on the synthesized template, and every deploy starts with a reviewed diff.

## Use it when

- You start a new CDK app with an agent
- A change risks replacing a database or bucket
- Stacks hard-code account IDs and regions
- You want tests for infrastructure code

## What it can access

- Guidance only; the agent runs cdk synth and diff locally if you allow it, and never deploys by itself

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/aws-cdk-rules/
