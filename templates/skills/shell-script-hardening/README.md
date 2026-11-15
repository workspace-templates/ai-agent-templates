# Shell Script Hardening

**Skill** · DevOps and cloud · bash

Hardens bash scripts with strict mode, safe quoting, cleanup traps and clean shellcheck results, without changing what the script does.

## Install

```bash
npx workspacetemplates add shell-script-hardening
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/shell-script-hardening/SKILL.md](claude-code/.claude/skills/shell-script-hardening/SKILL.md) | `.claude/skills/shell-script-hardening/SKILL.md` |
| Codex | [codex/.agents/skills/shell-script-hardening/SKILL.md](codex/.agents/skills/shell-script-hardening/SKILL.md) | `.agents/skills/shell-script-hardening/SKILL.md` |
| Cursor | [cursor/.cursor/skills/shell-script-hardening/SKILL.md](cursor/.cursor/skills/shell-script-hardening/SKILL.md) | `.cursor/skills/shell-script-hardening/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/shell-script-hardening/SKILL.md](gemini-cli/.gemini/skills/shell-script-hardening/SKILL.md) | `.gemini/skills/shell-script-hardening/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/shell-script-hardening/SKILL.md](copilot/.github/skills/shell-script-hardening/SKILL.md) | `.github/skills/shell-script-hardening/SKILL.md` |

## What it does

Shell scripts fail in quiet ways: an unquoted variable splits on a space, a failed command in a pipe is ignored, a temp file is left behind. This skill goes through a script the way shellcheck and a careful reviewer would, and fixes the causes while keeping its behavior.

It adds strict mode, argument checks, a cleanup trap and a usage message, then runs shellcheck until it is clean and tests the script with awkward input such as spaces in file names.

## Use it when

- A deploy or backup script has run unattended for years without review
- A script broke because a file name contained a space
- You are asked to make a script safe to run in CI
- Shellcheck prints a wall of warnings on code you inherited

## What it can access

- Reads and edits shell scripts
- Runs shellcheck and the script itself with test input, in a temporary directory

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/shell-script-hardening/
