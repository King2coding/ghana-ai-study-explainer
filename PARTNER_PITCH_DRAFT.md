# Partner Pitch Draft

Status: living draft
Last updated: June 6, 2026

## One-Line Summary

We are building a local-language AI study explainer for Ghanaian learners, starting with JHS/upper-primary concepts explained in simple Ghanaian English with draft Asante Twi support.

Confidence: 90%

Evidence:
- Working web prototype exists.
- Gemini reasoning path has been connected and tested locally.
- Sprint 1 PRD, evaluation rubric, source-pack plan, and claim registry are in place.

Main uncertainty:
- We still need native-speaker Twi review and real student/teacher testing.

## The Problem

Many Ghanaian learners encounter school material in English that is difficult to understand, especially when concepts are abstract, explanations are rushed, or help after school is limited. Parents and older siblings may want to help but may not know how to explain the material simply. Teachers also need faster ways to simplify concepts for mixed-ability classrooms.

Confidence: 84%

Status:
Promising but just below the 85% investor-safe threshold until we collect interviews or field-test notes.

Next validation:
Interview or test with 10-20 students, teachers, parents, or native-language reviewers.

## The Solution

The first product is **Explain This**, a web-based AI study explainer. A learner pastes a school topic, paragraph, note, or revision question. The assistant explains it simply, gives a Ghanaian everyday example, optionally adds short Asante Twi support, and asks questions to check understanding.

Current modes:
- Explain simply.
- Translate key ideas.
- Summarize notes.
- Quiz me.
- Check understanding.

Confidence: 92%

Evidence:
- Local prototype implements these modes.
- Gemini provider path works.
- Safety boundary blocks leaked-exam requests.

## Why Ghana, Why Now

Ghana has an active local-language NLP ecosystem, including GhanaNLP, Khaya, open-source datasets, translation work, speech work, and community interest in Ghanaian language AI. At the same time, students, teachers, parents, schools, NGOs, and education programs need affordable learning support that fits Ghanaian language realities.

Confidence: 86%

Evidence:
- GhanaNLP and Khaya resources have been scanned and documented.
- Project source scan includes GhanaNLP GitHub, GhanaNLP Community Hugging Face, Khaya API, and GhanaNLP parallel corpora.

## Initial Wedge

Start narrow:
- JHS/upper-primary study support.
- Simple Ghanaian English first.
- Draft Asante Twi support.
- Ewe as a second test lane after reviewer access is confirmed.
- Web app first, WhatsApp/voice later.

Confidence: 93%

Evidence:
- Ghana Context Researcher recommended this narrower wedge.
- PRD Sprint 1 was created around this scope.
- Web-first prototype has been verified.

## Current Progress

Built:
- Working responsive web prototype.
- Node backend with provider support.
- Gemini free-tier integration tested.
- Template fallback.
- OpenRouter, Ollama, and OpenAI provider paths prepared.
- GitHub repository created and pushed.
- Safety boundary for leaked exams and high-risk advice.
- Project plugin/skill created for consistent Codex workflow.

Repository:
https://github.com/King2coding/ghana-ai-study-explainer

Confidence: 95%

## What Is Not Proven Yet

The project has not yet proven:
- Native-speaker Twi quality.
- Student task-success rate.
- Teacher usefulness.
- Parent usefulness.
- Willingness to pay.
- School/NGO sponsor interest.
- Cost per completed study task at real usage volume.
- Curriculum-source retrieval quality.

Confidence: 96%

## Early Cost View

Local testing can be done cheaply using Gemini free tier or small paid API credits.

Partner-ready MVP estimate:
- Build: $35,000-$60,000.
- Early structured pilot operation: $750-$2,000/month.

Internal local reasoning tests:
- $0 using Gemini free tier, subject to limits and data-policy caveats.
- $5-$25 if using a small paid API budget.

Confidence: 86%

Evidence:
- Cost-benefit analysis document created.
- OpenAI, Vercel, Gemini, Khaya, and WhatsApp pricing/risks reviewed at a high level.

## Why Partners May Care

Potential partner benefits:
- Low-cost learning support outside class.
- Local-language inclusion.
- Support for teachers and parents.
- Measurable pilots with clear evaluation rubrics.
- Potential expansion into other Ghanaian languages and education workflows.
- Evidence-backed development rather than broad chatbot hype.

Confidence: 84%

Status:
Strong hypothesis; needs field-test evidence before investor-safe use.

## Ideal Early Partners

Potential partner types:
- Schools.
- Teachers and headteachers.
- Education NGOs.
- Ghanaian language educators.
- Parent/student communities.
- Telcos or connectivity programs.
- Ghana AI/NLP researchers.
- Curriculum or textbook stakeholders.

Confidence: 82%

Status:
Needs partner mapping and outreach validation.

## Pilot Proposal

Pilot goal:
Test whether learners and educators find the tool useful, understandable, safe, and worth using again.

Pilot size:
10-20 early testers first, then 50-100 users if the first test passes.

Metrics:
- Task completion.
- Explanation clarity.
- Correctness.
- Twi naturalness.
- Ghanaian-context fit.
- Safety failures.
- Latency.
- Repeat-use intent.
- Cost per interaction.

Minimum viability bar:
- 70%+ complete a task successfully.
- 60%+ say they would reuse it.
- Native speakers rate language acceptable or better.
- No severe safety failures.

Confidence: 90%

## Partner Ask

Early non-financial ask:
- Help recruit students, teachers, parents, or native-language reviewers.
- Provide sample school topics or lesson notes.
- Review Twi phrasing.
- Advise on classroom fit.

Possible funded pilot ask:
- Support a structured pilot covering language review, source-pack development, testing, infrastructure, and iteration.

Confidence: 85%

## Suggested Pitch Framing

Use this careful version:

> We are validating a Ghana-focused AI study explainer that helps learners understand school concepts in simple English and local-language support, starting with Asante Twi. The current prototype already runs with AI reasoning, and the next step is to test whether students, teachers, and native-language reviewers find the explanations accurate, natural, and useful enough to reuse.

Avoid this for now:

> We have solved AI tutoring for Ghana.

Reason:
That would overclaim before user testing and language review.

