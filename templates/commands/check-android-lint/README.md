# Check Android Lint

**Command** · Mobile · kotlin

Runs Android lint, groups the findings by impact and fixes the ones that affect users, crashes or Play Store releases.

## Install

```bash
npx workspacetemplates add check-android-lint
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/commands/check-android-lint.md](claude-code/.claude/commands/check-android-lint.md) | `.claude/commands/check-android-lint.md` |
| Codex | [codex/home/.codex/prompts/check-android-lint.md](codex/home/.codex/prompts/check-android-lint.md) | `~/.codex/prompts/check-android-lint.md` |
| Cursor | [cursor/.cursor/skills/check-android-lint/SKILL.md](cursor/.cursor/skills/check-android-lint/SKILL.md) | `.cursor/skills/check-android-lint/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/commands/check-android-lint.toml](gemini-cli/.gemini/commands/check-android-lint.toml) | `.gemini/commands/check-android-lint.toml` |
| GitHub Copilot | [copilot/.github/skills/check-android-lint/SKILL.md](copilot/.github/skills/check-android-lint/SKILL.md) | `.github/skills/check-android-lint/SKILL.md` |

## What it does

A raw lint report can hold hundreds of warnings, most of them noise. This command runs lint through Gradle, reads the report and sorts findings into what breaks users, what blocks a release and what can wait.

It fixes the first two groups when the change is local and clear, and lists the rest with a short reason so the baseline can be updated deliberately.

## Use it when

- Before building a release bundle for the Play Store
- Lint fails the CI job and the report is overwhelming
- You raised targetSdk and want to see what it breaks
- A new module needs a first lint pass

## What it can access

- Runs Gradle lint tasks and reads the reports
- Edits Kotlin, XML and manifest files for approved fixes

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/check-android-lint/
