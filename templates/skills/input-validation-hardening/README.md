# Input Validation Hardening

**Skill** · Security

Adds allowlist validation where data enters your code and context-correct encoding where it leaves, closing injection paths at every trust boundary.

## Install

```bash
npx workspacetemplates add input-validation-hardening
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/input-validation-hardening/SKILL.md](claude-code/.claude/skills/input-validation-hardening/SKILL.md) | `.claude/skills/input-validation-hardening/SKILL.md` |
| Codex | [codex/.agents/skills/input-validation-hardening/SKILL.md](codex/.agents/skills/input-validation-hardening/SKILL.md) | `.agents/skills/input-validation-hardening/SKILL.md` |
| Cursor | [cursor/.cursor/skills/input-validation-hardening/SKILL.md](cursor/.cursor/skills/input-validation-hardening/SKILL.md) | `.cursor/skills/input-validation-hardening/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/input-validation-hardening/SKILL.md](gemini-cli/.gemini/skills/input-validation-hardening/SKILL.md) | `.gemini/skills/input-validation-hardening/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/input-validation-hardening/SKILL.md](copilot/.github/skills/input-validation-hardening/SKILL.md) | `.github/skills/input-validation-hardening/SKILL.md` |

## What it does

Most injection bugs come from one habit: trusting data because it came from a form that looked safe. This skill finds each place where outside data crosses into your code and puts a strict check there, using your existing validation library.

It also covers the other direction. Data that is stored safely still needs encoding for the context it lands in, whether that is HTML, a URL, a shell argument or a log line.

## Use it when

- You are adding a new endpoint or form handler
- A pentest or scanner reported XSS or command injection
- Handlers read request fields directly with no schema
- You want one consistent validation style across a codebase

## What it can access

- Reads and edits source files and tests
- Runs your test suite

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/input-validation-hardening/
