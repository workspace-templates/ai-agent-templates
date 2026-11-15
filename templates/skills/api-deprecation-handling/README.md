# API Deprecation Handling

**Skill** · Code quality

Deprecates a public function or endpoint the careful way: replacement first, runtime warnings, docs, a migration note and a dated removal plan.

## Install

```bash
npx workspacetemplates add api-deprecation-handling
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/api-deprecation-handling/SKILL.md](claude-code/.claude/skills/api-deprecation-handling/SKILL.md) | `.claude/skills/api-deprecation-handling/SKILL.md` |
| Codex | [codex/.agents/skills/api-deprecation-handling/SKILL.md](codex/.agents/skills/api-deprecation-handling/SKILL.md) | `.agents/skills/api-deprecation-handling/SKILL.md` |
| Cursor | [cursor/.cursor/skills/api-deprecation-handling/SKILL.md](cursor/.cursor/skills/api-deprecation-handling/SKILL.md) | `.cursor/skills/api-deprecation-handling/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/api-deprecation-handling/SKILL.md](gemini-cli/.gemini/skills/api-deprecation-handling/SKILL.md) | `.gemini/skills/api-deprecation-handling/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/api-deprecation-handling/SKILL.md](copilot/.github/skills/api-deprecation-handling/SKILL.md) | `.github/skills/api-deprecation-handling/SKILL.md` |

## What it does

Removing something people depend on is easy; doing it without surprising them takes a sequence. This skill follows it: ship the replacement, mark the old one, tell users where to go, measure who still uses it and only then delete.

It applies to library functions, REST endpoints and config options alike, and leaves a short paper trail so the removal date is in writing before anyone hits it.

## Use it when

- You are replacing a function that other teams or customers call
- An endpoint will change shape and v1 must live for a while
- You want a clear removal date announced in code, docs and changelog
- You are cleaning up an old option no one is supposed to use anymore

## What it can access

- Reads source, docs and changelog
- Edits code, docs and tests
- Runs your test command

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/api-deprecation-handling/
