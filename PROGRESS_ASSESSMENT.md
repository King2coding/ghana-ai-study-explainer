# Progress Assessment

Date: June 6, 2026

## Current Grade

Overall progress: 74/100

Confidence: 88%

Why:
- The project has a clear wedge: curriculum-grounded Local-Language Study Explainer.
- Sprint 1 documents are in place.
- A previewable web prototype exists and has been browser-verified.
- The agent operating model, confidence gate, claim registry, and investor documentation system are established.
- The current prototype is still template-driven, not yet AI-backed, source-grounded, or native-speaker validated.

## Strongest Progress

1. Product focus is clear.
2. Prototype workflow is tangible.
3. Safety boundaries are already visible.
4. Documentation discipline is unusually strong for this stage.
5. We have a practical path from web preview to AI-backed prototype.

## Main Gaps

1. No real AI backend yet.
2. No retrieval over NaCCA/GES/WAEC source pack yet.
3. No native-speaker review of Twi outputs yet.
4. No real cost or latency logging yet.
5. No user testing with Ghanaian students, teachers, parents, or reviewers yet.
6. No bilingual glossary for school terms yet.
7. No database or feedback capture yet.
8. No deployment for external testers yet.
9. No license review for datasets/models yet.
10. No investor-grade market sizing or unit economics yet.

## Recommended Model Stack

Start with OpenAI API for the first AI-backed prototype.

Recommended stack:
- Main explanation model: `gpt-5-mini` for cost-effective student explanations.
- Quality/escalation model: `gpt-5.1` or `gpt-5.2` for harder explanations, evaluation, and reviewer workflows.
- Cheap routing/classification: `gpt-5-nano`.
- Retrieval: OpenAI Responses API with file search/vector stores, or custom embeddings using `text-embedding-3-small`.
- Speech later: `gpt-4o-transcribe` or `gpt-4o-mini-transcribe` for audio input; `gpt-4o-mini-tts` for voice output.

Possible second provider:
- Google Gemini API for comparison, especially if we want cheap multimodal experiments or long-context document handling.

Do not start with:
- Fine-tuning.
- Training local models.
- Mobile voice assistant.
- Multiple LLM providers in production.

## Subscription/API Needs

Immediate:
1. OpenAI API account with billing.
2. GitHub connected for code/project workflow.
3. Vercel account for deployment.

Soon:
4. Google Drive/Sheets for review rubrics and field-test data.
5. Khaya API access if terms, cost, and reliability fit local-language translation/ASR/TTS experiments.

Later:
6. Google Gemini API for benchmark comparisons.
7. WhatsApp Business/Twilio/Meta integration after the web prototype proves value.

## Web App Vs Mobile App

Recommendation:
Start with web app first. Do not build a native mobile app yet.

Confidence: 92%

Why:
- Web is faster to build, deploy, test, and revise.
- A responsive web app works on mobile browsers.
- It is easier to instrument cost, latency, feedback, and source grounding.
- It can later become a Progressive Web App.
- WhatsApp is more important than native mobile for Ghanaian everyday distribution, but should come after the core flow is validated.

Path:
1. Responsive web app.
2. Deploy web prototype.
3. Add AI backend and retrieval.
4. Test with users.
5. Add WhatsApp text flow.
6. Add voice notes/audio.
7. Consider native mobile only if schools/institutions need offline features or app-store distribution.

## Next Milestone

Move from template prototype to AI-backed prototype.

Required work:
1. Create backend API.
2. Add prompt templates for each mode.
3. Build education source pack.
4. Add retrieval/file search.
5. Add cost and latency logging.
6. Add feedback capture.
7. Create native-speaker review sheet.
8. Deploy to Vercel.

Target next grade after this milestone:
84/100.

To cross 90/100:
- Native-speaker Twi review passes.
- 10-20 real users test it.
- Retrieval works reliably.
- Cost/latency are measured.
- Safety failures are low or fixed.

