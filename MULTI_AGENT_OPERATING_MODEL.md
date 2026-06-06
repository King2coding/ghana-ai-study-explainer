# Multi-Agent Operating Model

## Purpose

This project should run like a small AI product studio. Each agent has a clear specialty, but the work moves through shared evidence, critique, implementation, and real-world testing. The goal is to avoid building a shiny demo that misses Ghanaian everyday reality.

## Agent Team

### 1. Coordinator

Owns the full project direction and final decisions.

Responsibilities:
- Keep the product thesis coherent.
- Decide what to build first.
- Integrate research, engineering, user feedback, and critique.
- Keep scope small enough to prototype.
- Maintain project docs and decision logs.

Decision rights:
- Final MVP scope.
- Priority order.
- Release readiness.

### 2. Expert Programmer

Owns frontend, backend, integrations, architecture, and technical feasibility.

Responsibilities:
- Build prototypes.
- Choose practical tech stacks.
- Implement API, retrieval, model routing, and interface flows.
- Keep cost, latency, security, and maintainability visible.
- Run tests and browser verification.

First likely stack:
- Lightweight web app for prototype testing.
- Backend API for language tasks and retrieval.
- WhatsApp integration after web flow works.
- Retrieval source packs for grounded answers.

Decision rights:
- Technical implementation details.
- Testing setup.
- Integration architecture, with Coordinator approval for major tradeoffs.

### 3. Expert Project Manager

Owns planning, sequencing, risk management, and delivery rhythm.

Responsibilities:
- Maintain roadmap and sprint plans.
- Define acceptance criteria.
- Track assumptions and risks.
- Keep user testing organized.
- Convert broad ideas into executable tasks.

Decision rights:
- Sprint structure.
- Milestone definitions.
- Readiness criteria for user tests.

### 4. Expert Brainstormer and Ecosystem Researcher

Owns discovery, ecosystem scanning, market intelligence, and idea generation.

Responsibilities:
- Track GhanaNLP, local AI initiatives, Ghanaian language resources, policy shifts, product gaps, and market patterns.
- Identify useful open source models, datasets, and repos.
- Compare opportunities across education, health, finance, public information, and everyday use.
- Update strategy when the ecosystem changes.

Decision rights:
- Research agenda.
- Opportunity scoring inputs.
- Source recommendations.

### 5. Expert Editor and Critic

Owns clarity, correctness, tone, safety, and ruthless product critique.

Responsibilities:
- Review project docs, prompts, app copy, and system behavior.
- Challenge weak assumptions.
- Flag hallucination risk, cultural mismatch, unsafe advice, vague claims, and overpromising.
- Make outputs more understandable to Ghanaian everyday users.

Decision rights:
- Editorial quality gate.
- Safety and clarity objections that must be resolved before testing.

### 6. Documentation and Investor Narrative Agent

Owns the project's formal documentation, technical writeups, project story, and investor-ready materials.

Responsibilities:
- Maintain the project vision, mission, goals, aims, and theory of change.
- Turn market research, ecosystem scans, user testing, prototype results, and technical decisions into polished documents.
- Produce technical architecture writeups that are clear to engineers and credible to non-technical stakeholders.
- Create investor-facing narratives, pitch summaries, market opportunity sections, traction updates, risk analysis, and roadmap documentation.
- Keep claims evidence-backed and clearly mark assumptions.
- Work with the Brainstormer/Researcher to ingest market size, ecosystem gaps, competitors, funding landscape, and policy signals.
- Work with the Expert Programmer to keep technical architecture and feasibility sections accurate.
- Work with the Editor/Critic to polish tone, remove hype, and strengthen credibility.

Decision rights:
- Documentation structure and versioning.
- Investor document readiness recommendation, subject to Coordinator approval.
- Evidence quality objections for claims made in investor-facing materials.

## Decision Workflow

1. Brainstormer gathers evidence and product opportunities.
2. Project Manager turns opportunities into a ranked plan.
3. Programmer estimates feasibility and builds the smallest useful prototype.
4. Editor/Critic reviews the concept, copy, safety boundaries, and test outputs.
5. Documentation and Investor Narrative Agent converts validated work into durable project and investor documents.
6. Coordinator makes the final decision and logs it.
7. Real users test the prototype.
8. Feedback changes the roadmap and documentation.

## Review Gates

### Confidence Gate

Every agent recommendation must include a quantitative confidence score from 0-100%.

Rules:
- Accept a recommendation only when confidence is 85% or higher.
- If confidence is below 85%, the agent must explain what evidence is missing and what would raise confidence.
- For high-risk areas such as health, finance, safety, privacy, public information, language quality, or commercial reuse of datasets, require both confidence above 85% and explicit evidence.
- Confidence is not a vibe score. It should reflect source quality, technical feasibility, user evidence, uncertainty, and risk.
- When agents disagree, the Coordinator asks for a short decision memo comparing options, evidence, risks, and confidence scores.

### Gate 1: Concept

Pass criteria:
- Solves a real Ghanaian everyday task.
- Has a clear first audience.
- Can be tested with 10-20 people.
- Does not depend on perfect local-language AI from day one.
- Agent confidence is 85% or higher, or the decision is marked as a research hypothesis rather than accepted direction.

### Gate 2: Prototype

Pass criteria:
- User can complete the main task without explanation.
- Responses are understandable.
- The system says when it is unsure.
- The system avoids medical, financial, legal, or civic overclaiming.
- Latency and cost are plausible.

### Gate 3: Field Test

Pass criteria:
- Testers understand what the assistant is for.
- At least 60% of testers say they would use it again for the target task.
- Local-language output is reviewed by native speakers.
- Harmful or misleading answers are logged and fixed.

### Gate 4: Next MVP Decision

Pass criteria:
- We know whether to deepen the current use case or pivot.
- We have enough examples to improve prompts, retrieval, and evaluation.
- We can describe the next 2-week build cycle clearly.
- Continue/pivot decision has confidence of 85% or higher based on test evidence.

## First 4-Week Sprint Plan

### Week 1: Discovery and Scope

Outputs:
- Top 20 user tasks.
- 3-5 user personas.
- GhanaNLP resource map.
- Language priority decision.
- MVP acceptance criteria.

Recommended starting languages:
- Twi/Akan first because resources are strongest.
- Ewe or Dagbani second depending on reviewer access and available speech/text resources.

### Week 2: Web Prototype

Outputs:
- Lightweight web app with modes: explain, translate, summarize, quiz me.
- Basic backend route for model responses.
- Prompt templates for Ghanaian English and selected local language.
- Manual source pack for a small trusted domain.

### Week 3: Grounding and Evaluation

Outputs:
- Retrieval over a small source pack.
- Evaluation set of 50-100 test prompts.
- Native-speaker review rubric.
- Safety behavior for health, finance, and uncertainty.

### Week 4: Real-World Pilot Prep

Outputs:
- Usability script for testers.
- Feedback form.
- Cost and latency report.
- Revised prototype.
- Decision on WhatsApp integration.

## First Build Recommendation

Build the Local-Language Explainer and Study Assistant first.

Why:
- It is broadly useful but lower-risk than health or finance advice.
- It directly benefits from GhanaNLP language resources.
- It gives students, teachers, families, and everyday users a reason to test.
- It can later become the language layer for money, health, and civic assistants.

Initial user promise:
"Send a confusing text, topic, news item, lesson, or question. The assistant explains it simply in Ghanaian English or a supported Ghanaian language, then checks if you understood."

## Viability Testing

Test with:
- Students.
- Teachers.
- Market traders or informal workers.
- Parents helping children study.
- Local-language native speakers.

Measure:
- Did the answer help?
- Was the language natural?
- Was anything misleading?
- Would the user use it again?
- Would they prefer WhatsApp, voice, SMS, or web?
- How much delay is acceptable?
- What would they pay, or who should sponsor access?

## Standing Risks

1. Local-language quality may be uneven across dialects.
2. Users may treat outputs as professional advice.
3. Voice support may become expensive or technically fragile.
4. Generic LLMs may hallucinate Ghana-specific facts.
5. A web app may test well but fail in the real channel people prefer.
6. Open source models and datasets may have license constraints.
7. User testing may overrepresent urban, educated, smartphone users.

## Operating Rule

Every major product decision should answer four questions:

1. Who in Ghana is this helping?
2. What task are they trying to complete?
3. What local-language or local-context barrier are we removing?
4. How will we know the answer was useful and safe?

Every agent must also report:
- Recommendation.
- Confidence score from 0-100%.
- Evidence used.
- Main uncertainty.
- What would change the recommendation.

## Helpful Connected Apps

These apps/connectors would help if connected and used during the project:

1. GitHub
   - Use for tracking issues, creating branches, reviewing pull requests, and publishing prototypes.
   - Especially useful once we start building the web app and backend.

2. Google Drive
   - Use for storing user research notes, source packs, survey exports, native-speaker review sheets, and field-test artifacts.
   - Useful when collaborators share docs or datasets.

3. Google Sheets
   - Use for evaluation rubrics, language-review scoring, tester feedback, cost logs, and task-completion metrics.
   - This is likely the most useful research/evaluation connector.

4. Google Calendar
   - Use for coordinating field tests, reviewer sessions, sprint reviews, and weekly decision councils.

5. Gmail
   - Use for finding related research conversations, coordinating reviewers, and drafting outreach.

6. Browser or Chrome
   - Use for testing local prototypes and checking authenticated web flows.

7. Vercel
   - Use for deploying the web prototype quickly once the local version works.

Recommended first connections:
- GitHub.
- Google Drive/Sheets.
- Vercel when we start the prototype.

## Documentation System

The Documentation and Investor Narrative Agent should maintain these documents:

1. Project charter
   - Vision, mission, goals, aims, scope, principles, and success metrics.

2. Technical architecture brief
   - System architecture, model strategy, retrieval plan, language pipeline, safety layer, cost strategy, deployment plan, and risks.

3. Market and ecosystem report
   - Market need, user segments, Ghana AI/NLP ecosystem, competitors, substitutes, gaps, partner opportunities, and policy context.

4. Product requirements document
   - Personas, jobs to be done, MVP scope, user stories, acceptance criteria, and non-goals.

5. Evaluation and field-testing report
   - Test design, language-review rubric, user feedback, metrics, cost/latency, safety issues, and decisions.

6. Investor narrative
   - Problem, solution, why now, market, product, differentiation, traction, business model, roadmap, team/agent operating model, risks, and funding use.

7. Pitch deck outline
   - Concise slide structure for investor conversations once the written narrative is strong.

Investor-facing materials must not claim traction, partnerships, model quality, revenue, or regulatory readiness without evidence. If evidence is missing, mark the claim as an assumption or future validation target.
