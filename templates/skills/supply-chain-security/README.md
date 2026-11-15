# Supply Chain Security

**Skill** · Security

Pins dependencies and CI actions, checks package provenance and trims workflow permissions to reduce the damage a poisoned package could do.

## Install

```bash
npx workspacetemplates add supply-chain-security
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/supply-chain-security/SKILL.md](claude-code/.claude/skills/supply-chain-security/SKILL.md) | `.claude/skills/supply-chain-security/SKILL.md` |
| Codex | [codex/.agents/skills/supply-chain-security/SKILL.md](codex/.agents/skills/supply-chain-security/SKILL.md) | `.agents/skills/supply-chain-security/SKILL.md` |
| Cursor | [cursor/.cursor/skills/supply-chain-security/SKILL.md](cursor/.cursor/skills/supply-chain-security/SKILL.md) | `.cursor/skills/supply-chain-security/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/supply-chain-security/SKILL.md](gemini-cli/.gemini/skills/supply-chain-security/SKILL.md) | `.gemini/skills/supply-chain-security/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/supply-chain-security/SKILL.md](copilot/.github/skills/supply-chain-security/SKILL.md) | `.github/skills/supply-chain-security/SKILL.md` |

## What it does

Your code is a fraction of what runs in your build. A hijacked package, a typosquatted name or a moved action tag can run attacker code with your tokens. This skill shrinks that exposure with a few specific, boring controls.

It works on three layers: what you install, how you install it, and what your pipeline is allowed to do once it runs. Each change is small and reversible, and the report says which risks remain.

## Use it when

- You want to harden CI before a security review
- A popular package was compromised and you need to check your exposure
- Workflows use third-party actions by floating tag
- Builds run install scripts with deploy credentials in the environment

## What it can access

- Reads manifests, lockfiles, Dockerfiles and workflow files
- Edits those files and runs install and build commands

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/supply-chain-security/
