# RAG Pipeline Design

**Skill** · Data and AI

Designs retrieval-augmented generation with sensible chunking, embeddings, reranking and cited answers. Use it when an LLM must answer from your documents.

## Install

```bash
npx workspacetemplates add rag-pipeline-design
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/rag-pipeline-design/SKILL.md](claude-code/.claude/skills/rag-pipeline-design/SKILL.md) | `.claude/skills/rag-pipeline-design/SKILL.md` |
| Codex | [codex/.agents/skills/rag-pipeline-design/SKILL.md](codex/.agents/skills/rag-pipeline-design/SKILL.md) | `.agents/skills/rag-pipeline-design/SKILL.md` |
| Cursor | [cursor/.cursor/skills/rag-pipeline-design/SKILL.md](cursor/.cursor/skills/rag-pipeline-design/SKILL.md) | `.cursor/skills/rag-pipeline-design/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/rag-pipeline-design/SKILL.md](gemini-cli/.gemini/skills/rag-pipeline-design/SKILL.md) | `.gemini/skills/rag-pipeline-design/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/rag-pipeline-design/SKILL.md](copilot/.github/skills/rag-pipeline-design/SKILL.md) | `.github/skills/rag-pipeline-design/SKILL.md` |

## What it does

Most disappointing RAG systems fail at retrieval, not generation. This skill designs the pipeline from the documents up: how to split them, what to embed, how to search, when to rerank, and how to make the answer cite what it used.

Before building anything, the agent writes a small set of real questions with known source passages, so every choice can be measured against retrieval hit rate instead of opinion.

## Use it when

- You want an assistant that answers from internal docs or a knowledge base
- Your prototype gives plausible answers that are not in the documents
- Retrieval returns the right page only half the time
- Answers need citations a user can click and verify

## What it can access

- Reads the documents and code you point it at
- Writes design notes, an evaluation set and pipeline code on request

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/rag-pipeline-design/
