# Claim Registry

## Purpose

Track what the project says, what supports each claim, and whether the claim is safe to use in investor-facing materials.

## Confidence Rule

Accept externally only when confidence is 85% or higher.

Below 85%:
- Keep internal.
- Mark as hypothesis.
- Define next validation step.

## Claims

| ID | Claim | Category | Evidence | Evidence Strength | Confidence | Status | Investor-Safe Wording | Open Question | Next Validation |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| C001 | The first MVP should be a Local-Language Explainer and Study Assistant. | Product | Project brief, GhanaNLP scan, Sprint 1 plan | Secondary + inferred | 91% | Accepted | We are starting with a local-language explainer and study-support assistant because explanation, translation, summarization, and quiz flows are useful across several everyday Ghanaian contexts. | Which user segment will show strongest repeat use? | Test with 10-20 users. |
| C002 | Twi/Akan should be the first language lane. | Language | GhanaNLP resource scan shows stronger Twi/Akan resource visibility than most Ghanaian languages. | Secondary | 88% | Accepted | The first language lane will focus on Twi/Akan because available open resources and tools appear strongest there. | Which dialect expectations matter most for testers? | Native-speaker review. |
| C003 | Ewe or Dagbani should be the second test lane. | Language | GhanaNLP and community resources show meaningful Ewe and Dagbani activity; project goal avoids Twi-only framing. | Secondary + inferred | 86% | Accepted | We plan a second-language test lane, likely Ewe or Dagbani, depending on reviewer access and resource quality. | Which reviewers are available first? | Identify native reviewers. |
| C004 | Web prototype should come before WhatsApp deployment. | Product/Technical | Web is faster to build, test, and instrument; WhatsApp adds platform and cost constraints. | Inferred | 89% | Accepted | We will validate the core user flow on web first, then move the strongest flow to WhatsApp. | Will users strongly prefer WhatsApp even for early testing? | Ask testers channel preference. |
| C005 | Khaya API may be useful as an early bridge for translation, ASR, and TTS. | Technical | GhanaNLP/Khaya resources and public API presence. | Secondary | 84% | Hypothesis | Khaya may be evaluated as a potential bridge for translation and speech features if terms, cost, and reliability fit. | API terms, pricing, rate limits, quality. | Review API docs/terms and run tests. |
| C006 | Investor materials require a claim registry and evidence gates. | Documentation | Project involves market, technical, safety, language, and commercial claims that need evidence. | Inferred | 92% | Accepted | Investor-facing materials will use a claim registry and evidence gates to separate proven facts from assumptions. | Which claims will investors challenge first? | Update registry after market research. |
| C007 | Health navigation should not be part of the first public prototype. | Safety/Product | Health advice has higher harm risk and needs stronger sourcing and escalation rules. | Inferred | 90% | Accepted | Health navigation is a future lane; the first prototype will avoid medical advice and use safety-bounded responses. | Which health explanation tasks are safe enough later? | Build health safety brief. |
| C008 | Financial advice should be limited to literacy and scam-safety explanations in the first prototype. | Safety/Product | Bank of Ghana and Cyber Security Authority provide literacy/fraud sources; regulated advice risk is higher. | Secondary + inferred | 89% | Accepted | The first prototype may explain financial-literacy and scam-safety information, but will not provide regulated financial advice. | How users phrase money questions in reality. | Test scam-message explanation tasks. |
| C009 | Sprint 1 should narrow to curriculum-grounded school explanation rather than broad everyday explanation. | Product | Ghana Context Researcher recommendation; Documentation agent critique; PRD Sprint 1. | Secondary + inferred | 93% | Accepted | Sprint 1 will focus on curriculum-grounded school explanation in English and Twi before expanding to broader everyday assistance. | Whether non-school tasks show stronger demand in early interviews. | Run 10-20 user tests and compare task demand. |
| C010 | Ewe should be the second test lane before Dagbani unless reviewer access changes. | Language | Ghana Context Researcher recommendation citing Ewe resource visibility and evaluation practicality. | Secondary + inferred | 88% | Accepted | Ewe is the preferred second-language test lane for Sprint 1, while Dagbani remains a strong future lane if reviewers and partners are available. | Reviewer availability. | Identify native reviewers for Ewe and Dagbani. |
| C011 | Investor narrative and pitch deck should stay as skeletons until prototype evidence exists. | Documentation | Documentation agent critique; investor documentation plan. | Inferred | 91% | Accepted | Investor-facing materials will remain evidence-led drafts until user testing, language review, and cost/latency results are available. | Whether an investor meeting appears within two weeks. | Create skeleton only after PRD/rubric/source pack are stable. |

## Next Claims To Research

1. Ghana smartphone, WhatsApp, and mobile internet access patterns.
2. Willingness to pay or likely sponsor model.
3. Education-sector buyer or partner pathways.
4. Local-language output quality using native reviewers.
5. Cost per interaction for candidate model/API stack.
