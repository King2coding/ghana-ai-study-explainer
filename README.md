# Ghana AI Study Explainer

An early web prototype for a curriculum-grounded Local-Language Study Explainer for Ghanaian learners.

The first product wedge is:

> Explain JHS/upper-primary school concepts in simple Ghanaian English, with draft Asante Twi support, Ghanaian examples, summaries, quizzes, and checks for understanding.

## Current Status

This is a prototype, not a finished product.

It currently includes:
- A responsive web interface.
- Five modes: explain, translate, summarize, quiz, check understanding.
- Safety boundaries for leaked exams and high-risk advice.
- A Node backend with provider support for local testing.
- Free/near-free model paths: Gemini free tier, OpenRouter free models, local Ollama.
- Paid/credit path: OpenAI API.
- Template fallback when no provider key is configured.

## Run Locally

```bash
node prototype/server.js
```

Then open:

```text
http://127.0.0.1:4173
```

## Configure AI Provider

Copy `.env.example` to `.env` and choose a provider.

For Gemini free-tier testing:

```bash
AI_PROVIDER=gemini
GEMINI_API_KEY=your_key_here
GEMINI_MODEL=gemini-2.5-flash-lite
```

For OpenRouter free-model testing:

```bash
AI_PROVIDER=openrouter
OPENROUTER_API_KEY=your_key_here
OPENROUTER_MODEL=meta-llama/llama-3.3-8b-instruct:free
```

For local Ollama:

```bash
AI_PROVIDER=ollama
OLLAMA_MODEL=llama3.2
```

For OpenAI:

```bash
AI_PROVIDER=openai
OPENAI_API_KEY=your_key_here
OPENAI_MODEL=gpt-5.4-mini
```

## Professional Roadmap

1. Add real source-pack retrieval from NaCCA/GES/WAEC materials.
2. Add feedback persistence and reviewer dashboards.
3. Add native-speaker Twi review workflow.
4. Deploy a private web pilot.
5. Test with 10-20 students, teachers, parents, and reviewers.
6. Update cost-benefit and investor documentation with real usage data.
