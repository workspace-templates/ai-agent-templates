# PHP Reviewer

**Subagent** · Code quality · php

Read-only subagent that reviews PHP changes for missing types, injection risks, swallowed errors and framework misuse.

## Install

```bash
npx workspacetemplates add php-reviewer
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/agents/php-reviewer.md](claude-code/.claude/agents/php-reviewer.md) | `.claude/agents/php-reviewer.md` |
| Codex | [codex/.codex/agents/php-reviewer.toml](codex/.codex/agents/php-reviewer.toml) | `.codex/agents/php-reviewer.toml` |
| Cursor | [cursor/.cursor/agents/php-reviewer.md](cursor/.cursor/agents/php-reviewer.md) | `.cursor/agents/php-reviewer.md` |
| Gemini CLI | [gemini-cli/.gemini/agents/php-reviewer.md](gemini-cli/.gemini/agents/php-reviewer.md) | `.gemini/agents/php-reviewer.md` |
| GitHub Copilot | [copilot/.github/agents/php-reviewer.agent.md](copilot/.github/agents/php-reviewer.agent.md) | `.github/agents/php-reviewer.agent.md` |

## What it does

Legacy habits survive in modern PHP: untyped arrays passed three layers deep, SQL built with string concatenation, and errors silenced with the @ operator. This subagent reviews a change against those habits and the conventions of the framework it finds in the repository.

It reads only. You get a ranked list of concrete problems with file and line, and a short fix for each, so security-relevant ones are never buried under naming nitpicks.

## Use it when

- A pull request adds controllers, form handling or database access
- You inherited a PHP codebase and want a quick risk scan of one module
- A Laravel or Symfony upgrade needs a check for deprecated patterns
- Before merging code written by a contractor

## What it can access

- Reads PHP and config files in your project
- Runs git commands to see what changed

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/php-reviewer/
