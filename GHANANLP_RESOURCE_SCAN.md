# GhanaNLP Resource Scan

Last scanned: June 3, 2026

## Why This Matters

GhanaNLP is one of the strongest starting points for this project because it already focuses on Ghanaian languages, translation, speech recognition, speech synthesis, language identification, data collection, and evaluation. The best path is to reuse and learn from these resources instead of trying to invent a Ghanaian language layer from scratch.

## Most Relevant GhanaNLP Resources

| Resource | What It Offers | MVP Relevance |
| --- | --- | --- |
| [ghanaian-nlp-datasets-models](https://github.com/GhanaNLP/ghanaian-nlp-datasets-models) | Curated datasets and models for Ghanaian languages | First stop for language support and reuse checks |
| [kasa](https://github.com/GhanaNLP/kasa) | English to Twi translation system | Useful reference for Twi translation experiments |
| [ABENA](https://github.com/GhanaNLP/ABENA) | BERT/mBERT/DistilBERT training scripts for Akan/Twi | Useful for classification, embeddings, and language experiments |
| [nsanku](https://github.com/GhanaNLP/nsanku) | Evaluation of zero-shot translation performance of LLMs for Ghanaian languages | Useful for choosing model strategy and eval prompts |
| [nsanku-mt](https://github.com/GhanaNLP/nsanku-mt) | Evaluates LLM and traditional MT for Twi, Ewe, and Ga | Directly relevant for translation quality decisions |
| [GhanaLLM](https://github.com/GhanaNLP/GhanaLLM) | Experiments with LLMs for Ghanaian languages | Strategic reference for local-language LLM direction |
| [nkrane](https://github.com/GhanaNLP/nkrane) | Terminology-controlled MT for Ghanaian languages | Useful for reliable domain terms in health, finance, education |
| [tiny-lang-detector](https://github.com/GhanaNLP/tiny-lang-detector) | Detects 40 Ghanaian languages using bigram patterns | Useful for routing user input by language |
| [bigram-language-id](https://github.com/GhanaNLP/bigram-language-id) | Bigram language identification | Useful for lightweight language detection |
| [twi-lang-id](https://github.com/GhanaNLP/twi-lang-id) | FastText model for Twi detection | Useful for Twi-specific routing |
| [recorder](https://github.com/GhanaNLP/recorder) | Utility for recording audio for speech data collection | Useful for future voice/data collection |
| [transcriber](https://github.com/GhanaNLP/transcriber) | Lightweight app for human audio transcription with Gemini | Useful for speech dataset workflows |
| [text-collector](https://github.com/GhanaNLP/text-collector) | App for collecting local-language text | Useful for building our own review/test data |
| [GhanaTTS](https://github.com/GhanaNLP/GhanaTTS) | Offline-friendly TTS models for Ghanaian languages | Future voice output path |
| [TTS-data-preparation](https://github.com/GhanaNLP/TTS-data-preparation) | Scripts for preparing TTS data | Future TTS training support |
| [twi-g2p](https://github.com/GhanaNLP/twi-g2p) | Twi grapheme-to-phoneme conversion | Useful for TTS and pronunciation |
| [twi-aligner](https://github.com/GhanaNLP/twi-aligner) | CPU-friendly MFA acoustic aligner for Twi | Useful for speech data alignment |
| [Ghana-QA](https://github.com/GhanaNLP/Ghana-QA) | Ghanaian question-answer pairs from Ghanaian content | Highly relevant for grounded Q&A |
| [GhanaTopics](https://github.com/GhanaNLP/GhanaTopics) | Frequently appearing topics in Ghanaian news | Useful for source-pack and task selection |
| [GhanaNouns](https://github.com/GhanaNLP/GhanaNouns) | Ghanaian noun phrases from news and academic research | Useful for local entity/context vocabulary |
| [Ghana-Named-Entities](https://github.com/GhanaNLP/Ghana-Named-Entities) | Named entities in Ghana | Useful for retrieval and entity-aware answers |
| [kasakoa](https://github.com/GhanaNLP/kasakoa) | Tests LLM comprehension of Ghanaian idioms | Useful for cultural tone and idiom evaluation |
| [ghana-chat-data-generation](https://github.com/GhanaNLP/ghana-chat-data-generation) | Generating LLM data for Ghana | Useful for instruction/chat data strategy |
| [archives2data](https://github.com/GhanaNLP/archives2data) | Extracts content from documents containing local languages | Useful for building source packs from PDFs/docs |
| [ghana-lesson-planner](https://github.com/GhanaNLP/ghana-lesson-planner) | Lesson planning support for Ghanaian teachers | Suggests an education wedge |
| [senti-check](https://github.com/GhanaNLP/senti-check) | Sentiment evaluation using fine-tuned ASR and LLM | Useful pattern for speech-to-LLM pipelines |
| [wca-nlp-landscape](https://github.com/GhanaNLP/wca-nlp-landscape) | NLP resource mapping for West and Central Africa | Useful for broader ecosystem tracking |
| [akiti-translator](https://github.com/GhanaNLP/akiti-translator) | Fast CPU rule-based translator for short English sentences | Possible low-cost fallback or baseline |
| [nokore](https://github.com/GhanaNLP/nokore) | Detecting spammy, fake, or dangerous communications | Relevant to fraud/scam safety features |

## External and Adjacent Resources

| Resource | What It Offers | MVP Relevance |
| --- | --- | --- |
| [Khaya AI](https://www.khaya.ai/) | Translation, speech recognition, and speech synthesis for African languages | Strong buy/build bridge for early prototypes |
| [Khaya API](https://translation.ghananlp.org/) | API access to GhanaNLP/Khaya translation services | Useful if API terms and cost fit the prototype |
| [GhanaNLP Community on Hugging Face](https://huggingface.co/ghananlpcommunity) | Active datasets and models for Twi, Ewe, Dagbani, ASR, TTS, translation, QA, and chat data | Useful for evaluation sets, experiments, and future fine-tuning |
| [Ghana-QA dataset](https://huggingface.co/datasets/ghananlpcommunity/ghana-qa) | Ghanaian Q&A data across languages such as Twi, Ewe, and Ga | Strong fit for testing local-language assistant behavior |
| [WaxalNLP](https://huggingface.co/datasets/google/WaxalNLP) | African-language ASR/TTS resources; includes Ghana-linked language data | Useful for future voice work, subject to license review |
| [UGSpeechData](https://hci-lab-ugspeechdata.github.io/speech_data_ghana_ug/) | Large Ghanaian speech dataset across Akan, Ewe, Dagbani, Dagaare, and Ikposo | Valuable for research; commercial reuse may be constrained by license |
| [AfriSenti](https://arxiv.org/abs/2302.08956) | Sentiment benchmark including Twi | Useful for feedback classification and moderation experiments |

## Language Coverage Notes

The curated GhanaNLP dataset/model list currently highlights data for Akan, Dagbani, and Ga, while many other Ghanaian languages are listed as awaiting contributions. Search results and the GhanaNLP community Hugging Face page also show newer resources around Twi, Ewe, Dagbani, Akan ASR, TTS, translation, and smaller language models.

Practical implication:
- Start with Twi/Akan because the resource base is strongest.
- Choose the second language based on native-reviewer access and available datasets/models. Ewe or Dagbani are strong candidates.
- Avoid building a product that feels like "Twi only means Ghana"; keep second-language testing in scope early.
- Treat every added language as its own product-quality effort, not a checkbox.

## MVP Reuse Strategy

### Immediate

Use these for the first prototype:
- `ghanaian-nlp-datasets-models` for model and dataset inventory.
- `tiny-lang-detector`, `bigram-language-id`, or `twi-lang-id` for language detection experiments.
- `nsanku` and `nsanku-mt` for translation evaluation approach.
- `Ghana-QA`, `GhanaTopics`, `GhanaNouns`, and `Ghana-Named-Entities` for local source packs and evaluation content.
- `kasakoa` for cultural/idiom stress tests.
- Khaya API as a possible early translation/ASR/TTS bridge if terms, reliability, and cost are acceptable.
- GhanaNLP Community Hugging Face datasets for test prompts and regression examples.

### Soon

Use these after the first web prototype works:
- `recorder`, `transcriber`, and `text-collector` for creating user-test data.
- `nkrane` for terminology control in education, health, finance, and civic information.
- `akiti-translator` as a low-cost translation baseline.

### Later

Use these for voice-first experiences:
- `GhanaTTS`
- `TTS-data-preparation`
- `twi-g2p`
- `twi-aligner`
- GhanaNLP community Hugging Face ASR/TTS models.

## Gaps and Risks

1. Licenses vary by dataset/model and must be checked before reuse.
2. Some repos are experiments, not production-ready libraries.
3. Twi/Akan support is stronger than many other languages.
4. Speech resources may be promising but harder to deploy cheaply.
5. Translation quality must be tested with native speakers, especially across dialects.
6. Local-language outputs can be understandable but culturally awkward; idiom tests matter.
7. A strong demo in English may hide weak performance in Ghanaian languages.
8. Code-switching between English, Twi, Ga, Ewe, Pidgin, and Ghanaian English may break simple language routing.
9. Market, clinic, and school environments may expose speech models to noisy audio and low-end phone constraints.

## Product Experiments Suggested by Resource Scan

### 1. Explain This in Twi

User pastes a confusing English paragraph. Assistant explains it simply in Ghanaian English and optionally Twi.

Why first:
- Low implementation friction.
- Uses translation/evaluation resources.
- Easy to test with students and families.

### 2. Teacher Lesson Helper

Teacher enters a topic and grade level. Assistant creates a Ghana-aware lesson outline, examples, questions, and local-language explanation snippets.

Why promising:
- GhanaNLP already has a lesson-planner signal.
- Teachers can give structured feedback.

### 3. Public Notice Simplifier

User pastes a government, school, bank, clinic, or utility notice. Assistant summarizes what it means, what to do next, and what to watch out for.

Why promising:
- Everyday value.
- Strong fit for retrieval and source checking.

### 4. MoMo Scam and Fee Explainer

User shares a suspicious message or asks about a money decision. Assistant explains risks, flags scam patterns, and avoids regulated financial advice.

Why promising:
- GhanaNLP's `nokore` points toward dangerous communication detection.
- Useful but must be safety-bounded.

### 5. Voice Data Collection Companion

A tool for collecting, transcribing, and reviewing local-language speech examples from volunteers.

Why promising:
- Supports the long-term moat.
- Not the first user-facing product, but important infrastructure.

### 6. Civic and Public Services Assistant

User asks how to complete a practical public-service task, such as renewing NHIS, preparing documents, understanding a public notice, or finding next steps.

Why promising:
- Strong everyday utility.
- Good fit for retrieval over trusted public sources.
- Safer than open-ended health or financial advice if scoped carefully.

## Recommendation

Start with `Explain This in Twi`, with a second-language test lane for Ewe or Dagbani, as the first slice of the Local-Language Explainer and Study Assistant.

Build it as a web prototype first. Use it to test:
- Can users get a useful explanation?
- Is the Twi understandable enough?
- Does the second-language lane expose architecture or evaluation gaps early?
- Which mode matters most: explain, translate, summarize, or quiz?
- What examples and sources improve trust?
- What should move to WhatsApp first?
