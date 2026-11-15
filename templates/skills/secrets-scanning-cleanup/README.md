# Secrets Scanning Cleanup

**Skill** · Security

Finds API keys and passwords committed to a repository, plans their rotation, removes them from history and adds a check against repeats.

## Install

```bash
npx workspacetemplates add secrets-scanning-cleanup
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/secrets-scanning-cleanup/SKILL.md](claude-code/.claude/skills/secrets-scanning-cleanup/SKILL.md) | `.claude/skills/secrets-scanning-cleanup/SKILL.md` |
| Codex | [codex/.agents/skills/secrets-scanning-cleanup/SKILL.md](codex/.agents/skills/secrets-scanning-cleanup/SKILL.md) | `.agents/skills/secrets-scanning-cleanup/SKILL.md` |
| Cursor | [cursor/.cursor/skills/secrets-scanning-cleanup/SKILL.md](cursor/.cursor/skills/secrets-scanning-cleanup/SKILL.md) | `.cursor/skills/secrets-scanning-cleanup/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/secrets-scanning-cleanup/SKILL.md](gemini-cli/.gemini/skills/secrets-scanning-cleanup/SKILL.md) | `.gemini/skills/secrets-scanning-cleanup/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/secrets-scanning-cleanup/SKILL.md](copilot/.github/skills/secrets-scanning-cleanup/SKILL.md) | `.github/skills/secrets-scanning-cleanup/SKILL.md` |

## What it does

A leaked key is only fixed when it is revoked. Deleting the line in a new commit leaves the secret in history, in forks and in every clone. This skill puts the steps in the right order: find, rotate, then clean history, then prevent.

It never prints a full secret in its output, and it asks before any rewrite of shared history. The last step adds a pre-commit and CI scan so the same mistake is caught next time.

## Use it when

- A key or token showed up in a pull request or a public repo
- You are about to open source a private repository
- A scanner alert says a credential was found in history
- You want a guard so nobody commits .env files again

## What it can access

- Reads files and git history in your repository
- Runs scanners such as gitleaks if installed
- Edits files and git config only to move secrets out and add the guard

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/secrets-scanning-cleanup/
