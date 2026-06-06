const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

loadEnv(path.join(__dirname, "..", ".env"));

const rootDir = __dirname;
const port = Number(process.env.PORT || 4173);

const contentTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".md": "text/markdown; charset=utf-8"
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

function loadEnv(filePath) {
  if (!fs.existsSync(filePath)) return;

  const lines = fs.readFileSync(filePath, "utf8").split(/\r?\n/);
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const index = trimmed.indexOf("=");
    if (index === -1) continue;
    const key = trimmed.slice(0, index).trim();
    const value = trimmed.slice(index + 1).trim().replace(/^['"]|['"]$/g, "");
    if (!process.env[key]) process.env[key] = value;
  }
}

function sendJson(res, status, data) {
  const body = JSON.stringify(data);
  res.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Content-Length": Buffer.byteLength(body)
  });
  res.end(body);
}

async function readBody(req) {
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  return Buffer.concat(chunks).toString("utf8");
}

function isSafetyBlocked(prompt) {
  const lowered = prompt.toLowerCase();
  return safetyTerms.some((term) => lowered.includes(term));
}

function buildSystemPrompt({ mode, language, level }) {
  return `
You are Explain This, a Ghana-focused study explainer for JHS and upper-primary learners.

Product scope:
- Explain school concepts in simple Ghanaian English.
- Add Asante Twi support only when requested, and keep it short.
- Use Ghanaian everyday examples from home, school, market, weather, farming, transport, or community life.
- Help with summaries, quizzes, and checks for understanding.

Safety boundaries:
- Do not provide leaked exam answers, exam cheating, medical advice, financial advice, legal advice, or official public-service instructions.
- Do not promise BECE success.
- If unsure about Twi wording, say it needs native-speaker review instead of inventing long phrasing.
- Keep answers concise and useful.
- Do not output repeated filler characters or long strings.

Requested mode: ${mode}
Requested language: ${language}
Learner level: ${level}

Response structure:
Always use this structure:
1. Simple English explanation or task result.
2. Ghanaian example when useful.
3. Key terms or quiz/check questions when useful.
4. "Twi support draft" only if requested: 1-3 short lines maximum.
5. Short uncertainty/source note.

Important language rule:
Even when Twi is requested, start with English first. Twi is support, not the whole answer.
`.trim();
}

function buildUserPrompt({ prompt }) {
  return `Learner input:\n${prompt}`;
}

async function callGemini(messages) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) throw new Error("Missing GEMINI_API_KEY");

  const model = process.env.GEMINI_MODEL || "gemini-3.1-flash-lite";
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent?key=${encodeURIComponent(apiKey)}`;
  const text = messages.map((message) => `${message.role.toUpperCase()}:\n${message.content}`).join("\n\n");

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ role: "user", parts: [{ text }] }],
      generationConfig: { temperature: 0.4, maxOutputTokens: 900 }
    })
  });

  if (!response.ok) throw new Error(`Gemini error ${response.status}: ${await response.text()}`);
  const data = await response.json();
  return data.candidates?.[0]?.content?.parts?.map((part) => part.text).join("\n").trim() || "";
}

async function callOpenRouter(messages) {
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) throw new Error("Missing OPENROUTER_API_KEY");

  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
      "HTTP-Referer": "http://127.0.0.1:4173",
      "X-Title": "Ghana AI Study Explainer"
    },
    body: JSON.stringify({
      model: process.env.OPENROUTER_MODEL || "meta-llama/llama-3.3-8b-instruct:free",
      messages,
      temperature: 0.4,
      max_tokens: 900
    })
  });

  if (!response.ok) throw new Error(`OpenRouter error ${response.status}: ${await response.text()}`);
  const data = await response.json();
  return data.choices?.[0]?.message?.content?.trim() || "";
}

async function callOpenAI(messages) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) throw new Error("Missing OPENAI_API_KEY");

  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: process.env.OPENAI_MODEL || "gpt-5.4-mini",
      input: messages.map((message) => ({
        role: message.role === "assistant" ? "assistant" : "user",
        content: [{ type: "input_text", text: message.content }]
      })),
      max_output_tokens: 900
    })
  });

  if (!response.ok) throw new Error(`OpenAI error ${response.status}: ${await response.text()}`);
  const data = await response.json();
  return data.output_text || "";
}

async function callOllama(messages) {
  const baseUrl = process.env.OLLAMA_BASE_URL || "http://127.0.0.1:11434";
  const response = await fetch(`${baseUrl}/api/chat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: process.env.OLLAMA_MODEL || "llama3.2",
      messages,
      stream: false,
      options: { temperature: 0.4 }
    })
  });

  if (!response.ok) throw new Error(`Ollama error ${response.status}: ${await response.text()}`);
  const data = await response.json();
  return data.message?.content?.trim() || "";
}

function templateResponse({ mode, language, prompt }) {
  const includeTwi = language === "twi";
  const topic = prompt.replace(/\s+/g, " ").trim().replace(/[.?!]+$/, "") || "this topic";

  const twi = includeTwi
    ? "\n\nTwi support draft: Saa asɛm yi kyerɛ sɛ yɛrebɔ asɛm no mu nketenkete na yɛde nhwɛsoɔ a ɛbɛn yɛn da biara asetena rekyerɛ mu. Twi wording needs native-speaker review."
    : "";

  if (mode === "quiz") {
    return `Practice questions:\n1. Define the main idea in ${topic}.\n2. Give one example from daily life in Ghana.\n3. Compare this topic with a related idea.\n4. Explain one common mistake students make.\n5. Answer in two sentences: why is this topic important?${twi}\n\nNote: Template fallback. Configure Gemini, OpenRouter, Ollama, or OpenAI for real reasoning.`;
  }

  if (mode === "summarize") {
    return `Five-point summary:\n- Main idea: ${topic}.\n- Break the topic into simple parts.\n- Learn the key words.\n- Connect it to a Ghanaian everyday example.\n- Test yourself with one question.${twi}\n\nNote: Template fallback. Configure an AI provider for real reasoning.`;
  }

  return `Simple explanation:\n${topic} can be understood by breaking it into small parts: what is happening, why it happens, and where we see it in real life.\n\nGhanaian example:\nThink of a familiar situation from home, school, market, weather, farming, or transport. A good explanation should connect the school idea to something the learner already knows.\n\nCheck yourself:\n1. Can you explain it in one sentence?\n2. Can you give a Ghanaian example?\n3. Which part is still confusing?${twi}\n\nNote: Template fallback. Configure Gemini, OpenRouter, Ollama, or OpenAI for real reasoning.`;
}

async function handleExplain(req, res) {
  try {
    const raw = await readBody(req);
    const body = JSON.parse(raw || "{}");
    const mode = body.mode || "explain";
    const language = body.language || "english";
    const level = body.level || "jhs";
    const prompt = String(body.prompt || "").trim();

    if (!prompt) return sendJson(res, 400, { error: "Prompt is required." });

    if (isSafetyBlocked(prompt)) {
      return sendJson(res, 200, {
        provider: "safety",
        text:
          "I cannot help with leaked exam answers, medical advice, financial advice, legal advice, or official instructions. I can help you study the topic honestly, explain concepts, create practice questions, or check your understanding.",
        latencyMs: 0
      });
    }

    const provider = (body.provider || process.env.AI_PROVIDER || "template").toLowerCase();
    const messages = [
      { role: "system", content: buildSystemPrompt({ mode, language, level }) },
      { role: "user", content: buildUserPrompt({ prompt }) }
    ];

    const started = Date.now();
    let text;
    if (provider === "gemini") text = await callGemini(messages);
    else if (provider === "openrouter") text = await callOpenRouter(messages);
    else if (provider === "ollama") text = await callOllama(messages);
    else if (provider === "openai") text = await callOpenAI(messages);
    else text = templateResponse({ mode, language, prompt });

    return sendJson(res, 200, {
      provider,
      text: text || templateResponse({ mode, language, prompt }),
      latencyMs: Date.now() - started
    });
  } catch (error) {
    return sendJson(res, 200, {
      setupNeeded: true,
      error: error.message,
      fallback:
        "Provider call failed. Check your API key/model settings, or switch AI Provider to Template fallback."
    });
  }
}

function serveStatic(req, res) {
  const urlPath = decodeURIComponent(new URL(req.url, `http://${req.headers.host}`).pathname);
  const requestedPath = urlPath === "/" ? "/index.html" : urlPath;
  const filePath = path.normalize(path.join(rootDir, requestedPath));

  if (!filePath.startsWith(rootDir)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  fs.readFile(filePath, (error, data) => {
    if (error) {
      res.writeHead(404);
      res.end("Not found");
      return;
    }
    const ext = path.extname(filePath);
    res.writeHead(200, { "Content-Type": contentTypes[ext] || "application/octet-stream" });
    res.end(data);
  });
}

const server = http.createServer((req, res) => {
  if (req.method === "POST" && req.url === "/api/explain") {
    handleExplain(req, res);
    return;
  }

  if (req.method === "GET") {
    serveStatic(req, res);
    return;
  }

  res.writeHead(405);
  res.end("Method not allowed");
});

server.listen(port, () => {
  console.log(`Explain This prototype running at http://127.0.0.1:${port}`);
});
