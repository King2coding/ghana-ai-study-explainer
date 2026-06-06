# Ideal Next Step

## Recommendation

Start Sprint 1: define the wedge before writing production code.

Confidence: 91%

Evidence:
- The resource scan shows enough Twi/Akan assets to support a first prototype.
- The operating model identifies Local-Language Explainer and Study Assistant as the lowest-risk foundation.
- User testing will be much stronger if we first define real tasks, personas, and evaluation criteria.
- Building immediately without task definitions risks producing a generic chatbot.

Main uncertainty:
- We do not yet know which second language is easiest to evaluate with real native speakers.

What would change the recommendation:
- If you already have 5-10 ready testers from one specific group, such as teachers, nurses, traders, or students, we should bias Sprint 1 toward that group immediately.

## Sprint 1 Goal

By the end of Sprint 1, we should know exactly what the first prototype must do, who it helps, how we will judge quality, and what examples to test.

## Sprint 1 Outputs

1. User personas
   - Student.
   - Parent helping a student.
   - Teacher.
   - Informal worker or trader.
   - Civic/public-service information seeker.

2. Top 20 real tasks
   - Explain a school concept.
   - Translate a confusing message.
   - Summarize a public notice.
   - Explain what to do next from a form or instruction.
   - Create quiz questions from a lesson.

3. Language decision
   - Twi/Akan as first lane.
   - Ewe or Dagbani as second test lane, based on reviewer access.

4. Evaluation rubric
   - Helpfulness.
   - Correctness.
   - Local-language naturalness.
   - Ghanaian-context fit.
   - Safety.
   - Latency.
   - Cost.
   - Repeat-use intent.

5. Prototype acceptance criteria
   - User can paste text or ask a question.
   - User can choose explain, translate, summarize, or quiz.
   - Assistant answers in simple Ghanaian English and optionally local language.
   - Assistant admits uncertainty.
   - Assistant avoids professional medical, financial, legal, or civic overclaiming.

## Immediate Work Items

1. Create `PERSONAS.md`.
2. Create `TOP_20_TASKS.md`.
3. Create `EVALUATION_RUBRIC.md`.
4. Create `SOURCE_PACK_PLAN.md`.
5. Then build the first web prototype.

## App/Connector Recommendation

Connect these first:

1. GitHub
   - Best for source control, issues, branches, PRs, and prototype collaboration.

2. Google Drive and Google Sheets
   - Best for user research, native-speaker review, field-test notes, task scoring, and evaluation dashboards.

3. Vercel
   - Best when the first web prototype is ready to deploy for testers.

Nice later:
- Google Calendar for scheduling reviewers and test sessions.
- Gmail for outreach and coordination.
- Chrome if authenticated web testing becomes necessary.

