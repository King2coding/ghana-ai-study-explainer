# PRD Sprint 1: Local-Language Study Explainer

## Product Slice

Build a lightweight web prototype that helps learners understand JHS/upper-primary school concepts in simple Ghanaian English and Asante Twi.

Working name:
Explain This

Core promise:
Paste a school paragraph, topic, question, or note. The assistant explains it simply, gives a Ghanaian example, optionally explains in Twi, and checks understanding with short questions.

Confidence: 93%

Evidence:
- Ghana Context Researcher recommended narrowing Sprint 1 to curriculum-grounded school explanations with 92% confidence.
- Documentation agent recommended one executable PRD before prototype with 94% confidence.
- GhanaNLP/Khaya resources make Twi the strongest first language lane.
- JHS/upper-primary users can test text-based explanation, translation, summarization, and quiz flows without requiring voice or WhatsApp first.

Main uncertainty:
- Native-speaker reviewers must confirm that Twi explanations are natural enough for classroom/home study use.

What would change this:
- If early testers are mostly teachers, prioritize teacher-prep workflows.
- If early testers refuse web but use WhatsApp readily, move WhatsApp earlier after the core flow is proven.

## Target Users

Primary:
- JHS 2-3 student preparing for BECE or class tests.

Secondary:
- Public-school teacher simplifying lesson explanations.
- Parent or older sibling helping a student study.
- SHS 1 student catching up on weak JHS foundations.

## Supported Language Lanes

First lane:
- Asante Twi plus simple Ghanaian English.

Confidence: 94%

Reason:
- Twi/Akan has the strongest visible resource base among Ghanaian languages in our current scan.
- The phrase "Explain this in Twi" is clear and testable.

Second lane:
- Ewe as a parallel test lane only after we identify reviewers.

Confidence: 88%

Reason:
- Ewe is a major Ghanaian language with visible GhanaNLP/Khaya support.
- It avoids a Twi-only Ghana framing.

Backlog:
- Dagbani, especially if we secure native reviewers or Northern Ghana school partners.
- Akuapem Twi and Fante variants.

## MVP Modes

### 1. Explain Simply

Input:
- Topic, question, paragraph, or pasted notes.

Output:
- Simple explanation in Ghanaian English.
- Key terms.
- One Ghanaian everyday example.
- Optional Twi explanation.

### 2. Translate Key Ideas

Input:
- Short English school sentence or key term.

Output:
- Twi translation or explanation.
- Warning if direct translation is uncertain.
- Alternative wording if needed.

### 3. Summarize Notes

Input:
- Lesson note or paragraph.

Output:
- 3-5 simple bullets.
- Key vocabulary.
- One thing to remember.

### 4. Quiz Me

Input:
- Topic or note.

Output:
- 3-5 short quiz questions.
- Answers hidden until requested.
- Simple explanation when user answers wrongly.

### 5. Check Understanding

Input:
- Any explanation session.

Output:
- Three short questions to test understanding.
- Encouraging correction if user struggles.

## Must-Have User Stories

1. As a student, I can paste a difficult school paragraph and get a simpler explanation.
2. As a student, I can ask for the explanation in Twi.
3. As a student, I can get a local example that makes the concept easier.
4. As a student, I can generate quiz questions from my notes.
5. As a teacher, I can simplify a lesson introduction for mixed-ability learners.
6. As a parent, I can understand a homework topic well enough to guide a child.

## First 10 Test Scenarios

1. Explain evaporation in simple English.
2. Explain evaporation in Twi.
3. Compare evaporation and condensation.
4. Summarize a social studies paragraph about citizenship.
5. Define photosynthesis with a Ghanaian example.
6. Generate five BECE-style questions about mixtures.
7. Explain why a wrong answer is wrong in simple language.
8. Translate key terms from a science lesson into Twi.
9. Create revision notes for a topic.
10. Ask follow-up questions to check understanding.

## Source Scope

Use:
- NaCCA curriculum materials for topic scope and grade expectations.
- WAEC BECE guidelines and structure for exam-style framing.
- GhanaNLP/Khaya resources for language support and evaluation references.
- Locally reviewed bilingual glossary as we build it.

Avoid in Sprint 1:
- Medical advice.
- Financial advice.
- Legal or official public-service instructions.
- Live news or politics.
- Exam cheating, leaked questions, or impersonation.

## Acceptance Criteria

Functional:
- User can choose a mode.
- User can enter a topic or paste text.
- Assistant produces a simple Ghanaian English answer.
- Assistant can include a Twi explanation when requested.
- Assistant can generate quiz questions.
- Assistant can ask follow-up questions.

Quality:
- Average task success score is 4/5 or higher on MVP-critical tasks.
- Twi naturalness average is at least 3/5 before internal testing and 4/5 before wider testing.
- No severe factual errors in reviewed examples.
- No severe safety failures.

Trust:
- Assistant states when it is unsure about translation.
- Assistant does not claim official curriculum authority unless grounded by sources.
- Assistant avoids saying it can guarantee BECE success.

Performance:
- Text-only prototype target: response under 10 seconds.
- Cost per interaction must be logged once model/API integration begins.

## Launch Blockers

Do not preview externally if:
- Twi outputs repeatedly score below acceptable with native reviewers.
- The system gives overconfident wrong educational content.
- The system answers exam-cheating requests.
- The system cannot distinguish source-grounded content from general explanation.
- The prototype has no way to capture tester feedback.

## Prototype Build Recommendation

Build a single-page web app with:
- Mode selector.
- Language selector.
- Input box.
- Output panel.
- Source/uncertainty note.
- Feedback buttons.
- Cost/latency logging in the backend.

Confidence: 90%

Reason:
- It is enough to test the core value without WhatsApp complexity.
- It creates measurable outputs for native-speaker and user review.

