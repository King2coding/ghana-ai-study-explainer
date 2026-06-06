const samples = {
  explain:
    "Explain evaporation and condensation with examples from everyday life in Ghana.",
  translate:
    "Translate these key science ideas into Twi: evaporation, condensation, water vapour, temperature.",
  summarize:
    "Citizenship means being a recognized member of a country. Citizens have rights, but they also have responsibilities such as obeying laws, paying taxes, respecting others, and helping their community.",
  quiz:
    "Create BECE-style revision questions about mixtures and separation methods.",
  check:
    "I just learned evaporation and condensation. Ask me questions to check whether I understand."
};

const safetyTerms = [
  "leaked exam",
  "leaked bece",
  "answers for bece",
  "exam answers",
  "diagnose",
  "investment",
  "betting",
  "loan advice",
  "legal advice"
];

const twiGlossary = {
  evaporation: "nsuo dane huruhuru kɔ mframa mu",
  condensation: "nsuo huruhuru dane nsuo nsensanee",
  "water vapour": "nsuo huruhuru",
  temperature: "ɔhyew dodow",
  citizenship: "ɔman ba tebea",
  mixture: "nneɛma a wɔde afrafra",
  photosynthesis: "sɛnea afifide de owia hann yɛ aduan"
};

const modeEl = document.querySelector("#mode");
const providerEl = document.querySelector("#provider");
const languageEl = document.querySelector("#language");
const levelEl = document.querySelector("#level");
const promptEl = document.querySelector("#prompt");
const runButton = document.querySelector("#runButton");
const sampleButton = document.querySelector("#sampleButton");
const responseEl = document.querySelector("#response");
const confidenceEl = document.querySelector("#confidence");
const feedbackNote = document.querySelector("#feedbackNote");

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function containsSafetyIssue(text) {
  const lowered = text.toLowerCase();
  return safetyTerms.some((term) => lowered.includes(term));
}

function sentenceFromInput(text) {
  return text
    .replace(/\s+/g, " ")
    .trim()
    .replace(/[.?!]+$/, "");
}

function glossaryItems(text) {
  const lowered = text.toLowerCase();
  return Object.entries(twiGlossary)
    .filter(([term]) => lowered.includes(term))
    .map(([term, twi]) => `<li><strong>${term}</strong>: ${twi}</li>`)
    .join("");
}

function twiSupport(text) {
  const terms = glossaryItems(text);
  const fallback = terms || "<li><strong>Note</strong>: Twi wording should be checked by a native speaker before public use.</li>";

  return `
    <h3>Twi support</h3>
    <p><strong>Simple Twi-style explanation:</strong> Saa asɛm yi kyerɛ sɛ adeɛ bi resesa anaa ɛreyɛ adwuma wɔ ɔkwan a ɛnyɛ den sɛ yɛbɛte ase.</p>
    <ul>${fallback}</ul>
    <div class="notice">Twi confidence: review needed. This prototype labels Twi as draft wording until native-speaker review confirms it.</div>
  `;
}

function sourceNote() {
  return `
    <div class="notice">
      Source scope: Sprint 1 should ground school topics with NaCCA/GES curriculum materials,
      WAEC BECE structure, and locally reviewed bilingual glossary entries. This preview uses
      template responses until retrieval is connected.
    </div>
  `;
}

function safetyResponse() {
  return `
    <h3>I cannot help with that request</h3>
    <p>This study assistant does not provide leaked exam answers, medical advice, financial advice, legal advice, or official instructions.</p>
    <p>I can help you study the topic honestly, explain the concept, create practice questions, or show safe next steps for learning.</p>
  `;
}

function explainResponse(text, includeTwi) {
  const topic = escapeHtml(sentenceFromInput(text) || "this topic");
  return `
    <h3>Simple explanation</h3>
    <p>${topic} can be understood by breaking it into small parts: what is changing, why it changes, and where we see it in real life.</p>
    <h3>Ghanaian example</h3>
    <p>Think about clothes drying outside after washing. Heat from the sun helps water leave the cloth and enter the air. When warm moist air touches a cooler surface, tiny drops can form again.</p>
    <h3>Key idea</h3>
    <ul>
      <li>Look for the main process.</li>
      <li>Connect it to something the learner already knows.</li>
      <li>Use one example, then ask a check question.</li>
    </ul>
    ${includeTwi ? twiSupport(text) : ""}
    <h3>Check yourself</h3>
    <ol>
      <li>What is the main idea in your own words?</li>
      <li>Where can you see this in daily life?</li>
      <li>What part still feels confusing?</li>
    </ol>
    ${sourceNote()}
  `;
}

function translateResponse(text, includeTwi) {
  const terms = glossaryItems(text);
  return `
    <h3>Key idea translation</h3>
    <p>This mode should translate school vocabulary carefully, then explain the idea when a direct translation may confuse learners.</p>
    <ul>${terms || "<li>No known glossary terms found yet. Add this to the bilingual glossary review list.</li>"}</ul>
    ${includeTwi ? twiSupport(text) : ""}
    <h3>Reviewer note</h3>
    <p>Any technical Twi term should be reviewed by a native speaker and, ideally, a teacher before wider testing.</p>
  `;
}

function summarizeResponse(text, includeTwi) {
  const clean = escapeHtml(sentenceFromInput(text) || "The note");
  return `
    <h3>Five-point summary</h3>
    <ul>
      <li>${clean.slice(0, 120)}${clean.length > 120 ? "..." : ""}</li>
      <li>Find the main idea before memorizing details.</li>
      <li>Write key terms in your own words.</li>
      <li>Connect the lesson to a Ghanaian everyday example.</li>
      <li>End with one practice question.</li>
    </ul>
    ${includeTwi ? twiSupport(text) : ""}
    <h3>One thing to remember</h3>
    <p>A good summary should help you explain the lesson to another student without reading the full note again.</p>
  `;
}

function quizResponse(text, includeTwi) {
  const topic = escapeHtml(sentenceFromInput(text) || "the topic");
  return `
    <h3>Practice questions</h3>
    <ol>
      <li>Define the main idea in ${topic}.</li>
      <li>Give one example from daily life in Ghana.</li>
      <li>Explain the difference between two related terms.</li>
      <li>State one mistake students often make on this topic.</li>
      <li>Answer this in two sentences: why is this topic important?</li>
    </ol>
    <h3>Marking guide</h3>
    <p>A strong answer should be clear, accurate, and supported by an example. It should not only repeat memorized words.</p>
    ${includeTwi ? twiSupport(text) : ""}
    <div class="notice">Exam safety: this prototype creates practice questions only. It will not provide leaked questions or guaranteed exam predictions.</div>
  `;
}

function checkResponse(text, includeTwi) {
  return `
    <h3>Understanding check</h3>
    <ol>
      <li>Can you explain the topic in one simple sentence?</li>
      <li>Can you give an example from home, school, market, farming, or weather?</li>
      <li>Can you tell me one part that is still confusing?</li>
    </ol>
    <h3>Next step</h3>
    <p>Answer the three questions. If one is difficult, the assistant should explain that part again with a simpler example.</p>
    ${includeTwi ? twiSupport(text) : ""}
  `;
}

function buildResponse() {
  return buildAiResponse();
}

function renderPlainText(text) {
  const escaped = escapeHtml(text);
  return escaped
    .split(/\n{2,}/)
    .map((block) => {
      const lines = block.split("\n");
      if (lines.length > 1) {
        return `<p>${lines.join("<br>")}</p>`;
      }
      return `<p>${block}</p>`;
    })
    .join("");
}

async function buildAiResponse() {
  const mode = modeEl.value;
  const includeTwi = languageEl.value === "twi";
  const text = promptEl.value.trim();

  if (!text) {
    responseEl.className = "response empty";
    responseEl.textContent = "Enter a school topic, note, or question first.";
    confidenceEl.textContent = "Needs input";
    return;
  }

  responseEl.className = "response";

  if (containsSafetyIssue(text)) {
    responseEl.innerHTML = safetyResponse();
    confidenceEl.textContent = "Safety boundary";
    return;
  }

  const started = performance.now();
  responseEl.innerHTML = "<p>Thinking through the explanation...</p>";
  confidenceEl.textContent = "Reasoning";

  try {
    const result = await fetch("/api/explain", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        provider: providerEl.value,
        mode,
        language: languageEl.value,
        level: levelEl.value,
        prompt: text
      })
    });

    const data = await result.json();
    if (!result.ok || data.error) {
      throw new Error(data.error || "Provider request failed.");
    }

    const rendered = renderPlainText(data.text);
    const source = providerEl.value === "template" ? sourceNote() : `<div class="notice">Provider: ${escapeHtml(data.provider)} · ${data.latencyMs} ms. Source retrieval is not connected yet.</div>`;
    responseEl.innerHTML = `${rendered}${source}`;
    const elapsed = Math.max(1, Math.round(performance.now() - started));
    confidenceEl.textContent = `${data.provider} · ${elapsed} ms`;
  } catch (error) {
    responseEl.innerHTML = `
      <h3>Provider setup needed</h3>
      <p>${escapeHtml(error.message)}</p>
      <div class="notice">Switch AI Provider to Template fallback, or add the selected provider key to <code>.env</code> and restart the server.</div>
    `;
    confidenceEl.textContent = "Setup needed";
  }
}

sampleButton.addEventListener("click", () => {
  promptEl.value = samples[modeEl.value];
  promptEl.focus();
});

runButton.addEventListener("click", buildResponse);

modeEl.addEventListener("change", () => {
  runButton.textContent = {
    explain: "Explain",
    translate: "Translate",
    summarize: "Summarize",
    quiz: "Create quiz",
    check: "Check"
  }[modeEl.value];
});

document.querySelectorAll("[data-feedback]").forEach((button) => {
  button.addEventListener("click", () => {
    const label = button.dataset.feedback;
    feedbackNote.textContent = `Marked "${label}" for this preview session. In the real prototype this will be stored with task, language, latency, and reviewer notes.`;
  });
});
