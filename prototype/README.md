# Explain This Prototype

## Purpose

This is the Sprint 1 web preview for the curriculum-grounded Local-Language Study Explainer.

It tests the product flow before real model integration:
- Explain simply.
- Translate key ideas.
- Summarize notes.
- Quiz me.
- Check understanding.

The first language lane is simple Ghanaian English plus draft Asante Twi support. Twi wording is intentionally marked as needing native-speaker review.

## Current Status

This is a local AI-ready prototype. It can run in template mode without API keys, or connect to a reasoning provider through the Node backend.

It is useful for:
- Previewing the interface.
- Testing the mode structure.
- Collecting reactions from early collaborators.
- Checking whether the school-explainer wedge feels right.
- Testing Gemini free tier, OpenRouter free models, local Ollama, or OpenAI with your own key.

It is not yet useful for:
- Final factual evaluation.
- Real local-language quality scoring.
- Retrieval/source-grounded answers.
- Production cost measurements.

## Run Locally

From this folder:

```bash
cd ..
node prototype/server.js
```

Then open:

```text
http://127.0.0.1:4173
```

## Verification

Verified on June 6, 2026:
- Desktop page loads.
- Mobile page loads.
- All five modes produce output.
- Twi support renders.
- Source-scope note renders.
- Leaked-exam request is blocked.
- No browser console errors were found in automated verification.
- Template fallback works without API keys.
- Missing provider keys show setup guidance rather than breaking the app.

Screenshots:
- `preview-desktop.png`
- `preview-mobile.png`

## Next Build Step

Next:
1. Add a real API key for Gemini, OpenRouter, Ollama, or OpenAI.
2. Test reasoning quality across the five modes.
3. Add retrieval over the education source pack.
4. Add cost and latency logging.
5. Add feedback capture.
6. Add native-speaker review workflow.
