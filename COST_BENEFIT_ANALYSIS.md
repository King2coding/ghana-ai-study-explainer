# Cost Benefit Analysis

Date: June 6, 2026

## Purpose

Estimate the cost to build and run the basic AI-backed version of the Local-Language Study Explainer, including the relevant AI models, Ghanaian language APIs, hosting, source retrieval, testing, and early deployment needs.

This document is designed to be shareable with partners or investors as an early financial model. It separates known public pricing from assumptions that need validation.

## Executive Summary

Recommendation:
Build the first AI-backed MVP as a responsive web app using OpenAI for explanation/reasoning, Vercel for deployment, a small education source pack for retrieval, and optional Khaya API access for Ghanaian language translation/speech experiments.

Confidence: 89%

Why:
- The current prototype proves the product flow but is not AI-backed.
- The next useful milestone is a real web MVP with source-grounded explanations and feedback capture.
- Web-first keeps costs low and makes testing easier before WhatsApp or native mobile.
- OpenAI and Vercel have clear published pricing; Khaya provides Ghana-specific language capabilities but needs terms/quality validation.

Main uncertainty:
- Real per-user cost depends on average prompt length, number of retrieval calls, Twi translation strategy, usage volume, and whether voice is included.

Investor framing:
This is a capital-light validation product. The AI usage cost is not the main early cost driver. The main cost drivers are product build quality, Ghanaian language QA, source-pack quality, safety, user testing, and distribution.

## Cost Model Assumptions

### Interaction Definition

One interaction means:
- User submits one school topic/question/note.
- App classifies/routs request.
- App retrieves source context when needed.
- AI generates one explanation, summary, quiz, or check-understanding response.
- Optional Twi support is included in the same response.

### Average Token Assumption

For a basic study explanation:
- Routing/safety call: 500 input tokens, 50 output tokens.
- Main response call: 2,500 input tokens, 800 output tokens.
- Retrieval/file-search call: 1 call when source grounding is needed.

This is an estimate, not a measured value. The real MVP must log actual usage.

Confidence: 82%

Status:
Below the 85% acceptance threshold. Treat this as a working estimate until the backend logs real usage.

## Known Pricing Inputs

### OpenAI

Current official OpenAI pricing page lists:
- `gpt-5.4-mini`: $0.75 per 1M input tokens, $0.075 per 1M cached input tokens, $4.50 per 1M output tokens.
- `gpt-5.4-nano`: $0.20 per 1M input tokens, $0.02 per 1M cached input tokens, $1.25 per 1M output tokens.
- File search: $0.10 per GB per day, with 1 GB free; $2.50 per 1,000 tool calls.
- `gpt-4o-mini-transcribe`: estimated $0.003 per minute.
- `gpt-4o-transcribe`: estimated $0.006 per minute.

Source:
https://developers.openai.com/api/docs/pricing

Confidence: 95%

Model note:
Older or alternate models such as `gpt-4.1-mini` may be cheaper for some text workflows if available in the API account, but the current primary recommendation is to use the current small/mini OpenAI models exposed in the pricing page and benchmark quality before committing.

### Vercel

Vercel pricing currently lists:
- Hobby: free forever, intended for personal projects.
- Pro: $20/month plus additional usage, with $20 included usage credit.

Source:
https://vercel.com/pricing

Confidence: 95%

### Khaya API

Khaya developer portal search results list:
- Standard tier: $89.95/month.
- Includes Text-to-Speech API, ASR v2, and translation API.

Source:
https://translation.ghananlp.org/products

Confidence: 86%

Uncertainty:
- Need direct review of limits, rate caps, commercial terms, supported languages, and quality for school content.

### WhatsApp

Twilio states WhatsApp pricing includes Twilio's per-message fee plus Meta's template/message fees. Meta/WhatsApp pricing and policy have changed recently, and AI chatbot use through WhatsApp can carry platform-policy risk.

Sources:
- https://www.twilio.com/en-us/whatsapp/pricing
- https://developers.facebook.com/docs/whatsapp/pricing/

Confidence: 78%

Status:
Below acceptance threshold. Do not include WhatsApp as a first-MVP cost dependency. Treat it as a later channel requiring policy and pricing verification.

## Estimated AI Cost Per Interaction

### Text-Only, Source-Grounded Interaction

Using:
- `gpt-5.4-nano` for routing/safety.
- `gpt-5.4-mini` for the main answer.
- One OpenAI file-search call.

Estimated cost:
- Routing: about $0.00016.
- Main answer: about $0.00548.
- File search tool call: $0.00250.
- Total: about $0.00814 per interaction.

Rounded estimate:
About $0.008-$0.01 per source-grounded text interaction.

Confidence: 86%

### Text-Only, No Retrieval Call

Using:
- `gpt-5.4-nano` routing.
- `gpt-5.4-mini` main answer.

Estimated cost:
- Total: about $0.00564 per interaction.

Rounded estimate:
About $0.006 per text interaction.

Confidence: 86%

### Voice Input Add-On

Using:
- `gpt-4o-mini-transcribe` at about $0.003 per minute.

Estimated additional cost:
- 30-second voice note: about $0.0015.
- 1-minute voice note: about $0.003.

Confidence: 90%

## Monthly Operating Cost Scenarios

### Scenario A: Private Prototype

Use case:
Founder testing, internal review, small demos.

Volume:
- 1,000 interactions/month.

Estimated monthly costs:
- OpenAI text + retrieval: $8-$10.
- Vercel Hobby: $0 if within limits and non-commercial.
- Domain: about $2/month equivalent if using a paid domain.
- Khaya: $0 if not used, or $89.95/month if Standard tier is active.

Estimated total:
- Without Khaya: $10-$30/month.
- With Khaya: $100-$130/month.

Confidence: 87%

### Scenario B: Pilot With 20-50 Testers

Use case:
Students, teachers, parents, native-speaker reviewers.

Volume:
- 10,000 interactions/month.

Estimated monthly costs:
- OpenAI text + retrieval: $80-$100.
- Vercel Pro: $20/month.
- Basic database/feedback tooling: $0-$25/month.
- Khaya optional: $89.95/month.
- Miscellaneous monitoring/domain: $10-$30/month.

Estimated total:
- Without Khaya: $110-$175/month.
- With Khaya: $200-$265/month.

Confidence: 86%

### Scenario C: School/NGO Pilot

Use case:
Several classrooms or structured partner pilot.

Volume:
- 100,000 interactions/month.

Estimated monthly costs:
- OpenAI text + retrieval: $800-$1,000.
- Vercel Pro + usage: $20-$100+.
- Database/logging/analytics: $25-$100.
- Khaya optional: $89.95/month or higher if tier limits require upgrade.
- Human language review and support: $300-$2,000 depending on scope.

Estimated total:
- Without human review: $950-$1,300/month.
- With review/support: $1,250-$3,300/month.

Confidence: 80%

Status:
Below acceptance threshold because real usage patterns and review workload are unknown.

## One-Time Build Cost Estimate

### Lean Founder-Led MVP

Scope:
- AI backend.
- Prompt templates.
- Retrieval/source pack.
- Feedback capture.
- Cost/latency logging.
- Vercel deployment.
- Basic admin/review view.

Cash cost:
- $100-$500 in API/hosting/testing spend.

Labor:
- Mostly founder/agent time.
- If hiring help, estimate separately.

Confidence: 88%

### Very Lean Contracted Prototype

Scope:
- Basic web app.
- Simple backend.
- One AI model path.
- Limited source grounding.
- Basic feedback form.
- Light review.

Estimated total:
$15,000-$30,000.

Confidence: 78%

Status:
Below acceptance threshold for investor-grade quality. This may be enough to demo, but likely weak on evaluation and credibility.

### Partner-Ready MVP Build

If hiring external help:
- Product scoping and UX: $3,000-$8,000.
- Web app frontend: $6,000-$14,000.
- Backend and API routing: $8,000-$18,000.
- Prompting/RAG/source pack: $5,000-$12,000.
- Local-language QA setup: $4,000-$10,000.
- Pilot testing and iteration: $4,000-$10,000.
- Security/privacy basics: $2,000-$6,000.

Estimated total:
$35,000-$60,000.

Confidence: 86%

Status:
Accepted as the better investor-facing build budget, but still assumption-based rather than a vendor quote.

### Polished School/NGO Pilot

Scope:
- More robust web app.
- Better admin/reviewer workflows.
- Structured language QA.
- Source-pack review.
- Partner onboarding.
- Deployment hardening.

Estimated total:
$60,000-$100,000+.

Confidence: 80%

Status:
Below acceptance threshold until scope and partners are defined.

## Cost Benefit Analysis

### Benefits

1. Education access
   - Students get low-cost explanations outside class.
   - Parents and siblings can support homework.
   - Teachers can simplify lesson material faster.

2. Local-language inclusion
   - Twi support lowers language barriers.
   - Later Ewe/Dagbani lanes broaden equity.
   - Human review creates a reusable bilingual glossary.

3. Scalable support
   - One teacher or tutor cannot answer unlimited questions.
   - A source-grounded AI assistant can support many learners at low marginal cost.

4. Partner appeal
   - Schools, NGOs, telcos, publishers, and education programs may see value in a low-cost localized learning tool.

5. Future platform value
   - The language/retrieval/safety layer can later support public-service, financial literacy, health navigation, and everyday assistant modules.

### Approximate Unit Economics

At $0.01 per text interaction:
- 100 interactions cost about $1 in AI usage.
- 1,000 interactions cost about $10.
- 10,000 interactions cost about $100.

If a student uses 100 interactions/month:
- AI cost is roughly $0.60-$1.00 per student/month for text-only use.
- Platform/support/review costs still need to be added.

Potential institutional pricing:
- School/NGO sponsor pays $1-$3 per active student/month.
- If AI cost is under $1 per active student/month, gross margin could support hosting, review, support, and product improvement.

Confidence: 82%

Status:
Below acceptance threshold until we measure actual student usage and willingness to pay/sponsor.

## Recommended Cost-Control Strategy

1. Use `gpt-5.4-mini` for main responses, not flagship/pro models.
2. Use `gpt-5.4-nano` for routing, safety, mode detection, and cheap classification.
3. Use retrieval only when needed, because file-search calls add cost.
4. Cache repeated explanations for common topics.
5. Keep responses concise by default.
6. Track every request: model, tokens, retrieval calls, latency, and estimated cost.
7. Delay voice until text flow proves value.
8. Evaluate Khaya API as an optional Ghana-language layer, not a mandatory dependency at first.

Confidence: 91%

## Recommended MVP Budget

### Local Reasoning Upgrade Budget

Purpose:
Add real AI reasoning to the current local prototype for private testing.

Recommended budget:
$5-$25 in API credits is enough for early local testing if we keep usage controlled.

What this covers:
- Connect one model API.
- Test explain, summarize, quiz, and check-understanding modes.
- Run dozens to hundreds of prompt experiments.
- Log estimated cost and latency.

What it does not cover:
- Large user testing.
- WhatsApp.
- Voice.
- Khaya Standard tier.
- Paid reviewer compensation.
- Production deployment at meaningful volume.

Confidence: 90%

Reason:
The text-only per-interaction cost is low. Most of the $100-$250 month-one estimate is a safe buffer for hosted testing, source-pack iteration, and unexpected usage, not a requirement for simply adding reasoning locally.

### Free-Tier Testing Options

Possible free or near-free options:

1. Google Gemini API free tier
   - Good for early reasoning experiments.
   - Official pricing page says developers can start free with limited model access and free input/output tokens.
   - Caveat: free-tier content may be used to improve Google's products, so avoid sensitive student data.

2. OpenRouter free models
   - Useful for experimenting with open or free hosted models.
   - Caveat: quality, rate limits, reliability, and data policies vary by model/provider.

3. Local open-source models through Ollama
   - No API usage cost after setup.
   - Caveat: quality may be weaker, especially for Ghanaian language support, and depends on laptop hardware.

4. OpenAI API trial credits
   - Check your OpenAI Platform billing page.
   - Some accounts may have credits, but ChatGPT Plus itself does not include API usage.

Recommendation:
Use free tiers only for internal experiments. For the serious prototype, use a paid API key with a small hard budget cap so quality, privacy, and reliability are easier to manage.

Confidence: 87%

### Minimum Practical Budget

For the next AI-backed MVP:
- OpenAI API: $50-$150 initial credit.
- Vercel: $0-$20/month.
- Domain: $15-$25/year.
- Khaya API: defer unless testing translation/voice immediately.
- Google Sheets/Drive: free or existing account.

Recommended starting budget:
$100-$250 for month one.

Confidence: 88%

### More Serious Partner-Ready Pilot Budget

For a 1-2 month structured pilot:
- OpenAI API: $200-$500.
- Vercel: $20-$50.
- Khaya API: $89.95/month if used.
- Reviewer compensation: $300-$1,000.
- Miscellaneous/domain/testing/admin: $50-$200.

Recommended pilot budget:
$750-$2,000.

Confidence: 85%

### Investor/Partner Budget Ask Framing

For a credible partner-facing pilot, frame the ask around:
- $35,000-$60,000 to build the MVP properly.
- $750-$2,000/month to operate a structured early pilot.
- Extra budget for language reviewers and field testing if the pilot expands.

Confidence: 86%

Important:
Do not pitch only the $100-$250 technical spend. That number is useful for our internal next step, but it underrepresents the cost of building something credible enough for schools, NGOs, or investors.

## Investor-Friendly Framing

Short version:
The MVP can be built and piloted cheaply because the expensive pieces are usage-based. The biggest risk is not infrastructure cost; it is proving that students and teachers find the explanations useful, accurate, and natural in Ghanaian language contexts.

What investors/partners should like:
- Low initial build cost.
- Clear first wedge.
- Measurable usage and learning-support signals.
- Strong expansion path into additional languages and everyday assistant categories.
- Local-language data/review loop can become a defensible asset.

What they will challenge:
- Actual user demand.
- Language quality.
- Willingness to pay or sponsor.
- Dataset/API licensing.
- Unit economics at scale.
- Safety and educational correctness.

## Next Steps

1. Add real backend and cost logging.
2. Run 100-500 internal test interactions to measure actual token usage.
3. Decide whether to activate Khaya Standard tier.
4. Build the education source pack.
5. Run 10-20 real user tests.
6. Update this document with real costs and user evidence.
