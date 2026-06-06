# Source Pack Plan

## Recommendation

Start with a small, curated education source pack focused on JHS/upper-primary study support. Keep public notices, MoMo safety, and health navigation out of the first prototype unless they are handled as safety refusals or future lanes.

Confidence: 93%

Evidence:
- The first prototype is a curriculum-grounded study explainer, not a general advice product.
- NaCCA/Ministry of Education curriculum resources and WAEC BECE structure are better aligned with the first wedge than public-service or finance content.
- A small source pack makes retrieval behavior easier to inspect and debug.

Main uncertainty:
- Some official sources may be incomplete, outdated, difficult to parse, or not written for everyday users.

What would change this:
- If testers mostly bring non-school tasks, log those as future product opportunities rather than expanding Sprint 1.

## Source Selection Rules

Use sources that are:
- Official or highly credible.
- Stable enough to cite.
- Relevant to real user tasks.
- Safe for summarization and explanation.
- Clear about dates where information may change.

Avoid sources that are:
- Unverified social media posts.
- Political commentary.
- Medical or financial advice without official backing.
- Paywalled or hard to cite.
- Legally restricted for reuse.

## First Source Categories

### 1. Education Curriculum Scope

Purpose:
Support school explanations, teacher prompts, and study tasks.

Candidate sources:
- Ghana Education Service resources: https://ges.gov.gh/resources.php?category=teacher_resource
- Ministry of Education curriculum resources: https://curriculumresources.edu.gh/
- NaCCA curriculum materials: https://nacca.gov.gh/

Use cases:
- Explain curriculum-aligned concepts.
- Create study questions.
- Summarize school notices.

Confidence: 93%

### 2. BECE And Exam-Style Structure

Purpose:
Align quiz/question generation with Ghanaian exam expectations without claiming to predict exams.

Candidate sources:
- WAEC Ghana BECE guidelines and structure: https://waecgh.org/bece-guidelines-scheme-and-structure/

Use cases:
- Generate revision questions.
- Explain question formats.
- Help students practice without promising exam success.

Confidence: 91%

### 3. Bilingual Glossary And Language Review

Purpose:
Prevent awkward or incorrect translations of school terms.

Candidate sources:
- GhanaNLP datasets/models: https://github.com/GhanaNLP/ghanaian-nlp-datasets-models
- Khaya AI language tools: https://www.khaya.ai/
- Native-speaker review notes collected during testing.

Use cases:
- Translate key vocabulary.
- Explain concepts in Twi.
- Flag uncertain translations.

Confidence: 89%

### 4. Ghanaian Examples Bank

Purpose:
Make explanations feel local, concrete, and memorable.

Candidate source types:
- Locally reviewed examples from teachers and students.
- Safe everyday examples from Ghanaian home, school, market, transport, farming, weather, and community life.

Use cases:
- Explain abstract science and social studies ideas.
- Create memory aids.
- Reduce foreign-feeling examples.

Confidence: 87%

### 5. Safety And Refusal Pack

Purpose:
Keep the study assistant from overreaching.

Candidate topics:
- Exam cheating.
- Medical advice.
- Financial advice.
- Legal/public-service advice.
- Abuse or self-harm disclosures.
- Misinformation.

Use cases:
- Refuse leaked exam requests.
- Redirect medical/financial/legal questions to appropriate support.
- Mark uncertainty and avoid overclaiming.

Confidence: 90%

## Future Source Categories

Keep these out of Sprint 1 retrieval unless explicitly needed for refusal/safety:
- Bank of Ghana financial literacy: https://www.bog.gov.gh/financial-literacy/
- Cyber Security Authority mobile money fraud guidance: https://csa.gov.gh/mobile_money_fraud.php
- Ghana Health Service or Ministry of Health patient-facing information.
- Public-service navigation pages such as NHIS, utilities, or local authority notices.

## Retrieval Pack Structure

Each source item should have:
- Title.
- URL.
- Publisher.
- Date accessed.
- Date published or updated if available.
- Category.
- Summary.
- Allowed use.
- Risk notes.
- Confidence score.

## First Prototype Retrieval Scope

Include:
- Education curriculum snippets.
- BECE/exam-structure snippets.
- Locally reviewed bilingual glossary entries.
- Ghanaian examples bank.
- Safety/refusal patterns.

Exclude:
- Medical triage.
- Investment advice.
- Legal advice.
- Live government deadlines unless source is cited and date-stamped.
- MoMo scam advice beyond future-lane refusal/safety notes.

## Source Pack Acceptance Criteria

Before using a source pack in prototype testing:
- At least 10 source items are reviewed.
- Each source has URL, publisher, and date accessed.
- High-risk content has safety notes.
- Retrieval outputs can show source title or URL.
- Editor/Critic approves wording for uncertainty and official-channel reminders.
