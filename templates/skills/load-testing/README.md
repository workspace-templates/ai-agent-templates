# Load Testing

**Skill** · Testing

Designs a k6 load test with realistic traffic, explicit thresholds and a clear pass or fail result, and reads the numbers back to you.

## Install

```bash
npx workspacetemplates add load-testing
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/load-testing/SKILL.md](claude-code/.claude/skills/load-testing/SKILL.md) | `.claude/skills/load-testing/SKILL.md` |
| Codex | [codex/.agents/skills/load-testing/SKILL.md](codex/.agents/skills/load-testing/SKILL.md) | `.agents/skills/load-testing/SKILL.md` |
| Cursor | [cursor/.cursor/skills/load-testing/SKILL.md](cursor/.cursor/skills/load-testing/SKILL.md) | `.cursor/skills/load-testing/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/load-testing/SKILL.md](gemini-cli/.gemini/skills/load-testing/SKILL.md) | `.gemini/skills/load-testing/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/load-testing/SKILL.md](copilot/.github/skills/load-testing/SKILL.md) | `.github/skills/load-testing/SKILL.md` |

## What it does

A load test that hammers one endpoint with a constant rate tells you little about production. This skill has the agent model a real traffic mix, ramp up in stages and fail the run when latency or errors cross limits you chose before the test.

The result is a k6 script that lives in the repository and a short report naming the first thing that broke and where the headroom ends.

## Use it when

- Before a launch, campaign or migration that will change traffic
- You need to know how many users one instance handles
- A service slowed down and you want a repeatable benchmark
- Setting service level targets and checking the system meets them

## What it can access

- Reads source files and access logs you point it to
- Writes a script under tests/load and runs k6 against the URL you give it

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/load-testing/
