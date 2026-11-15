# Research Topic

**Command** · Workflow

Researches a technical question and returns a short sourced brief with options compared and one clear recommendation.

## Install

```bash
npx workspacetemplates add research-topic
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/commands/research-topic.md](claude-code/.claude/commands/research-topic.md) | `.claude/commands/research-topic.md` |
| Codex | [codex/home/.codex/prompts/research-topic.md](codex/home/.codex/prompts/research-topic.md) | `~/.codex/prompts/research-topic.md` |
| Cursor | [cursor/.cursor/skills/research-topic/SKILL.md](cursor/.cursor/skills/research-topic/SKILL.md) | `.cursor/skills/research-topic/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/commands/research-topic.toml](gemini-cli/.gemini/commands/research-topic.toml) | `.gemini/commands/research-topic.toml` |
| GitHub Copilot | [copilot/.github/skills/research-topic/SKILL.md](copilot/.github/skills/research-topic/SKILL.md) | `.github/skills/research-topic/SKILL.md` |

## What it does

Choosing a library or approach from memory is risky, because versions and advice go stale. This command checks the official docs, release notes and your own repository, then compares the realistic options.

Every claim in the brief points to a source, and the final recommendation says what would change the answer.

## Use it when

- You must pick between two libraries or services
- A new framework feature might replace homegrown code
- You need to know if a dependency is still maintained
- A teammate asks for a recommendation with evidence

## What it can access

- Reads the repository and public web pages
- Makes no changes

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/research-topic/
