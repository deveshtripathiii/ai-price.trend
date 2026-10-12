/**
 * AI Price Trends & Token Economics Platform
 * Production Data Layer & Interactive State Engine
 */

const MODEL_DATA = [
  // OpenAI
  {
    id: "gpt-5-nano",
    name: "GPT-5 nano",
    provider: "OpenAI",
    category: "budget",
    categoryLabel: "Fast & Budget",
    inputPrice: 0.05,
    outputPrice: 0.40,
    cachePrice: 0.0125,
    contextWindow: "128k",
    contextTokens: 128000,
    speed: 165,
    latency: 180,
    badgeColor: "#10a37f",
    description: "Ultra-compact multimodal model optimized for real-time edge processing and classification.",
    status: "Active"
  },
  {
    id: "gpt-5-4-turbo",
    name: "GPT-5.4 Turbo",
    provider: "OpenAI",
    category: "frontier",
    categoryLabel: "Frontier",
    inputPrice: 1.80,
    outputPrice: 7.20,
    cachePrice: 0.45,
    contextWindow: "256k",
    contextTokens: 256000,
    speed: 98,
    latency: 240,
    badgeColor: "#10a37f",
    description: "High-throughput frontier engine with balanced reasoning and low cost-per-call profile.",
    status: "Active"
  },
  {
    id: "gpt-5-4",
    name: "GPT-5.4",
    provider: "OpenAI",
    category: "frontier",
    categoryLabel: "Frontier",
    inputPrice: 2.50,
    outputPrice: 15.00,
    cachePrice: 0.625,
    contextWindow: "256k",
    contextTokens: 256000,
    speed: 72,
    latency: 310,
    badgeColor: "#10a37f",
    description: "Industry flagship standard for complex cross-domain instruction following and coding.",
    status: "Active"
  },
  {
    id: "gpt-5-4-pro",
    name: "GPT-5.4 Pro",
    provider: "OpenAI",
    category: "frontier",
    categoryLabel: "Frontier",
    inputPrice: 30.00,
    outputPrice: 180.00,
    cachePrice: 7.50,
    contextWindow: "512k",
    contextTokens: 512000,
    speed: 42,
    latency: 680,
    badgeColor: "#10a37f",
    description: "Massive scale reasoning cluster model designed for mission-critical enterprise synthesis.",
    status: "Active"
  },
  {
    id: "o3-mini",
    name: "o3-mini (High Reasoning)",
    provider: "OpenAI",
    category: "reasoning",
    categoryLabel: "Reasoning",
    inputPrice: 1.10,
    outputPrice: 4.40,
    cachePrice: 0.275,
    contextWindow: "200k",
    contextTokens: 200000,
    speed: 110,
    latency: 520,
    badgeColor: "#10a37f",
    description: "Compact inference-time reasoning model specialized in STEM, competitive math, and architecture.",
    status: "Active"
  },
  {
    id: "o3",
    name: "o3",
    provider: "OpenAI",
    category: "reasoning",
    categoryLabel: "Reasoning",
    inputPrice: 5.00,
    outputPrice: 20.00,
    cachePrice: 1.25,
    contextWindow: "200k",
    contextTokens: 200000,
    speed: 55,
    latency: 890,
    badgeColor: "#10a37f",
    description: "Full-scale Chain-of-Thought deliberation engine for multi-step algorithmic generation.",
    status: "Active"
  },

  // Anthropic
  {
    id: "claude-3-5-haiku",
    name: "Claude 3.5 Haiku",
    provider: "Anthropic",
    category: "budget",
    categoryLabel: "Fast & Budget",
    inputPrice: 0.80,
    outputPrice: 4.00,
    cachePrice: 0.08,
    contextWindow: "200k",
    contextTokens: 200000,
    speed: 145,
    latency: 195,
    badgeColor: "#d97706",
    description: "Rapid latency model with near Sonnet-3-level accuracy for lightweight parsing and chat.",
    status: "Active"
  },
  {
    id: "claude-3-7-sonnet",
    name: "Claude 3.7 Sonnet (Hybrid)",
    provider: "Anthropic",
    category: "reasoning",
    categoryLabel: "Reasoning",
    inputPrice: 3.00,
    outputPrice: 15.00,
    cachePrice: 0.30,
    contextWindow: "200k",
    contextTokens: 200000,
    speed: 84,
    latency: 310,
    badgeColor: "#d97706",
    description: "Hybrid reasoning architecture offering dynamic thinking budget alongside instant outputs.",
    status: "Active"
  },
  {
    id: "claude-sonnet-4-6",
    name: "Claude Sonnet 4.6",
    provider: "Anthropic",
    category: "frontier",
    categoryLabel: "Frontier",
    inputPrice: 3.00,
    outputPrice: 15.00,
    cachePrice: 0.30,
    contextWindow: "500k",
    contextTokens: 500000,
    speed: 78,
    latency: 280,
    badgeColor: "#d97706",
    description: "The premier developer standard for autonomous coding agents, system design, and tool invocation.",
    status: "Active"
  },
  {
    id: "claude-opus-4-6",
    name: "Claude Opus 4.6",
    provider: "Anthropic",
    category: "frontier",
    categoryLabel: "Frontier",
    inputPrice: 5.00,
    outputPrice: 25.00,
    cachePrice: 0.50,
    contextWindow: "500k",
    contextTokens: 500000,
    speed: 46,
    latency: 480,
    badgeColor: "#d97706",
    description: "Unmatched depth in prose nuance, legal scrutiny, and mathematical formal verification.",
    status: "Active"
  },

  // Google
  {
    id: "gemini-2-5-flash",
    name: "Gemini 2.5 Flash",
    provider: "Google",
    category: "budget",
    categoryLabel: "Fast & Budget",
    inputPrice: 0.35,
    outputPrice: 1.05,
    cachePrice: 0.0875,
    contextWindow: "1M",
    contextTokens: 1000000,
    speed: 190,
    latency: 160,
    badgeColor: "#3b82f6",
    description: "1M-context sub-second execution engine with native multimodal visual/audio ingestion.",
    status: "Active"
  },
  {
    id: "gemini-3-1-pro",
    name: "Gemini 3.1 Pro",
    provider: "Google",
    category: "frontier",
    categoryLabel: "Frontier",
    inputPrice: 1.25,
    outputPrice: 5.00,
    cachePrice: 0.3125,
    contextWindow: "2M",
    contextTokens: 2000000,
    speed: 82,
    latency: 290,
    badgeColor: "#3b82f6",
    description: "Ultra-long 2M token context window champion for massive repository analysis and document search.",
    status: "Active"
  },
  {
    id: "gemini-3-5-flash",
    name: "Gemini 3.5 Flash",
    provider: "Google",
    category: "frontier",
    categoryLabel: "Frontier",
    inputPrice: 1.50,
    outputPrice: 9.00,
    cachePrice: 0.375,
    contextWindow: "2M",
    contextTokens: 2000000,
    speed: 120,
    latency: 210,
    badgeColor: "#3b82f6",
    description: "High-reasoning speed variant bridging flash efficiency with Pro-level multi-hop comprehension.",
    status: "Active"
  },

  // DeepSeek
  {
    id: "deepseek-v3",
    name: "DeepSeek V3",
    provider: "DeepSeek",
    category: "openweight",
    categoryLabel: "Open-Weight",
    inputPrice: 0.27,
    outputPrice: 1.10,
    cachePrice: 0.07,
    contextWindow: "128k",
    contextTokens: 128000,
    speed: 88,
    latency: 320,
    badgeColor: "#6366f1",
    description: "671B MoE architecture with ultra-efficient multi-head latent attention (MLA).",
    status: "Active"
  },
  {
    id: "deepseek-r1",
    name: "DeepSeek R1 (Reasoning)",
    provider: "DeepSeek",
    category: "reasoning",
    categoryLabel: "Reasoning",
    inputPrice: 0.55,
    outputPrice: 2.19,
    cachePrice: 0.14,
    contextWindow: "128k",
    contextTokens: 128000,
    speed: 64,
    latency: 610,
    badgeColor: "#6366f1",
    description: "Reinforcement-learning driven reasoning model rivaling closed frontier CoT at 1/10th the price.",
    status: "Active"
  },
  {
    id: "deepseek-v4-flash",
    name: "DeepSeek V4 Flash",
    provider: "DeepSeek",
    category: "budget",
    categoryLabel: "Fast & Budget",
    inputPrice: 0.14,
    outputPrice: 0.66,
    cachePrice: 0.035,
    contextWindow: "128k",
    contextTokens: 128000,
    speed: 175,
    latency: 170,
    badgeColor: "#6366f1",
    description: "Next-gen MoE sparse activation model yielding rock-bottom commodity token rates.",
    status: "Active"
  },

  // Meta (Hosted via Providers / Groq / Together)
  {
    id: "llama-3-3-70b",
    name: "Llama 3.3 70B",
    provider: "Meta",
    category: "openweight",
    categoryLabel: "Open-Weight",
    inputPrice: 0.59,
    outputPrice: 0.79,
    cachePrice: 0.15,
    contextWindow: "128k",
    contextTokens: 128000,
    speed: 240,
    latency: 140,
    badgeColor: "#0284c7",
    description: "Workhorse open-weights baseline matching older 405B capabilities on optimized inference engines.",
    status: "Active"
  },
  {
    id: "llama-3-1-405b",
    name: "Llama 3.1 405B",
    provider: "Meta",
    category: "openweight",
    categoryLabel: "Open-Weight",
    inputPrice: 1.79,
    outputPrice: 1.79,
    cachePrice: 0.45,
    contextWindow: "128k",
    contextTokens: 128000,
    speed: 45,
    latency: 410,
    badgeColor: "#0284c7",
    description: "Dense open foundation weights model for synthetic data creation and model distillation.",
    status: "Active"
  },
  {
    id: "llama-3-1-8b",
    name: "Llama 3.1 8B Instant",
    provider: "Meta",
    category: "budget",
    categoryLabel: "Fast & Budget",
    inputPrice: 0.05,
    outputPrice: 0.08,
    cachePrice: 0.02,
    contextWindow: "128k",
    contextTokens: 128000,
    speed: 380,
    latency: 90,
    badgeColor: "#0284c7",
    description: "Ultra-fast low-parameter model delivering extreme throughput for entity extraction and routers.",
    status: "Active"
  },

  // Mistral
  {
    id: "mistral-large-3",
    name: "Mistral Large 3",
    provider: "Mistral",
    category: "frontier",
    categoryLabel: "Frontier",
    inputPrice: 0.80,
    outputPrice: 2.40,
    cachePrice: 0.20,
    contextWindow: "128k",
    contextTokens: 128000,
    speed: 92,
    latency: 220,
    badgeColor: "#f97316",
    description: "Top-tier multilingual European frontier model with robust function-calling and strict JSON output.",
    status: "Active"
  },
  {
    id: "codestral-2501",
    name: "Codestral 25.01",
    provider: "Mistral",
    category: "code",
    categoryLabel: "Coding",
    inputPrice: 0.30,
    outputPrice: 0.90,
    cachePrice: 0.075,
    contextWindow: "256k",
    contextTokens: 256000,
    speed: 130,
    latency: 180,
    badgeColor: "#f97316",
    description: "Explicitly tuned for code completion, fill-in-the-middle (FIM), and test generation across 80+ languages.",
    status: "Active"
  },
  {
    id: "mistral-small-3",
    name: "Mistral Small 3",
    provider: "Mistral",
    category: "budget",
    categoryLabel: "Fast & Budget",
    inputPrice: 0.10,
    outputPrice: 0.30,
    cachePrice: 0.025,
    contextWindow: "128k",
    contextTokens: 128000,
    speed: 195,
    latency: 150,
    badgeColor: "#f97316",
    description: "Latency-first model with enterprise safety guarantees for high-volume conversational flows.",
    status: "Active"
  },

  // xAI
  {
    id: "grok-4-6",
    name: "Grok 4.6",
    provider: "xAI",
    category: "frontier",
    categoryLabel: "Frontier",
    inputPrice: 2.00,
    outputPrice: 6.00,
    cachePrice: 0.50,
    contextWindow: "131k",
    contextTokens: 131072,
    speed: 95,
    latency: 260,
    badgeColor: "#64748b",
    description: "Frontier intelligence engine with real-time web telemetry integration and mathematical reasoning.",
    status: "Active"
  },
  {
    id: "grok-3-mini",
    name: "Grok 3 Mini",
    provider: "xAI",
    category: "budget",
    categoryLabel: "Fast & Budget",
    inputPrice: 0.20,
    outputPrice: 1.00,
    cachePrice: 0.05,
    contextWindow: "131k",
    contextTokens: 131072,
    speed: 210,
    latency: 130,
    badgeColor: "#64748b",
    description: "Streamlined reasoning variant optimized for code synthesis and low-latency interaction.",
    status: "Active"
  },

  // Alibaba Qwen
  {
    id: "qwen-2-5-max",
    name: "Qwen 2.5 Max",
    provider: "Alibaba Qwen",
    category: "frontier",
    categoryLabel: "Frontier",
    inputPrice: 1.60,
    outputPrice: 4.80,
    cachePrice: 0.40,
    contextWindow: "128k",
    contextTokens: 128000,
    speed: 76,
    latency: 290,
    badgeColor: "#8b5cf6",
    description: "Massive scale dense flagship with industry-leading multilingual and math performance.",
    status: "Active"
  },
  {
    id: "qwen-2-5-coder-32b",
    name: "Qwen 2.5 Coder 32B",
    provider: "Alibaba Qwen",
    category: "code",
    categoryLabel: "Coding",
    inputPrice: 0.18,
    outputPrice: 0.54,
    cachePrice: 0.045,
    contextWindow: "128k",
    contextTokens: 128000,
    speed: 155,
    latency: 160,
    badgeColor: "#8b5cf6",
    description: "State-of-the-art open code intelligence matching Claude 3.5 Sonnet on HumanEval and SWE-bench.",
    status: "Active"
  },
  {
    id: "qwq-32b-preview",
    name: "QwQ 32B (Reasoning)",
    provider: "Alibaba Qwen",
    category: "reasoning",
    categoryLabel: "Reasoning",
    inputPrice: 0.35,
    outputPrice: 1.40,
    cachePrice: 0.09,
    contextWindow: "128k",
    contextTokens: 128000,
    speed: 70,
    latency: 540,
    badgeColor: "#8b5cf6",
    description: "High-density open reasoning weights model with autonomous verification capabilities.",
    status: "Active"
  },

  // Zhipu & Moonshot
  {
    id: "glm-5-3-flash",
    name: "GLM-5.3 Flash",
    provider: "Zhipu AI",
    category: "budget",
    categoryLabel: "Fast & Budget",
    inputPrice: 0.10,
    outputPrice: 0.50,
    cachePrice: 0.025,
    contextWindow: "128k",
    contextTokens: 128000,
    speed: 190,
    latency: 140,
    badgeColor: "#059669",
    description: "Ultra-low fee API designed for high-density transactional APIs and microservices.",
    status: "Active"
  },
  {
    id: "kimi-k3",
    name: "Kimi K3",
    provider: "Moonshot",
    category: "frontier",
    categoryLabel: "Frontier",
    inputPrice: 2.20,
    outputPrice: 15.00,
    cachePrice: 0.55,
    contextWindow: "1M",
    contextTokens: 1000000,
    speed: 68,
    latency: 340,
    badgeColor: "#ec4899",
    description: "Native long-context multi-agent processor specialized in complex multi-document summarization.",
    status: "Active"
  }
];

// State Management
const state = {
  searchQuery: "",
  selectedCategory: "all",
  selectedProvider: "all",
  priceMetric: "outputPrice", // 'outputPrice' | 'inputPrice' | 'blended' | 'cachePrice'
  sortBy: "priceAsc",
  calcInputTokens: 25, // Millions
  calcOutputTokens: 5,  // Millions
  calcCachePercent: 30, // %
  calcModel1: "gpt-5-4",
  calcModel2: "claude-3-7-sonnet",
  calcModel3: "deepseek-r1"
};

// Helpers
function formatCurrency(val) {
  if (val === 0) return "$0.00";
  if (val < 0.01) return "$" + val.toFixed(4);
  if (val < 0.1) return "$" + val.toFixed(3);
  if (val < 1) return "$" + val.toFixed(2);
  if (val >= 1000) return "$" + Number(val.toFixed(0)).toLocaleString();
  return "$" + val.toFixed(2);
}

function getBlendedPrice(model) {
  // 3 input tokens to 1 output token standard enterprise blend
  return (model.inputPrice * 0.75) + (model.outputPrice * 0.25);
}

function getMetricValue(model, metric) {
  switch (metric) {
    case "inputPrice": return model.inputPrice;
    case "outputPrice": return model.outputPrice;
    case "cachePrice": return model.cachePrice;
    case "blended": return getBlendedPrice(model);
    default: return model.outputPrice;
  }
}

// Compute Dynamic Summary Statistics
function updateKPIs() {
  const inputPrices = MODEL_DATA.map(m => m.inputPrice).sort((a,b) => a - b);
  const outputPrices = MODEL_DATA.map(m => m.outputPrice).sort((a,b) => a - b);
  const midIndex = Math.floor(inputPrices.length / 2);
  
  const medianInput = inputPrices[midIndex];
  const medianOutput = outputPrices[midIndex];

  // Open-weight vs Proprietary
  const openWeight = MODEL_DATA.filter(m => m.category === 'openweight');
  const proprietary = MODEL_DATA.filter(m => m.category !== 'openweight');
  
  const avgOpenOutput = openWeight.reduce((acc, m) => acc + m.outputPrice, 0) / (openWeight.length || 1);
  const avgPropOutput = proprietary.reduce((acc, m) => acc + m.outputPrice, 0) / (proprietary.length || 1);
  const discountPct = Math.round(((avgPropOutput - avgOpenOutput) / avgPropOutput) * 100);

  // Spread (Highest output vs lowest output)
  const minOutput = outputPrices[0];
  const maxOutput = outputPrices[outputPrices.length - 1];
  const ratioSpread = Math.round(maxOutput / (minOutput || 0.01));

  const medianInputEl = document.getElementById("kpi-median-input");
  if (medianInputEl) medianInputEl.textContent = formatCurrency(medianInput);

  const medianOutputEl = document.getElementById("kpi-median-output");
  if (medianOutputEl) medianOutputEl.textContent = formatCurrency(medianOutput);

  const discountEl = document.getElementById("kpi-open-discount");
  if (discountEl) discountEl.textContent = `${discountPct}%`;

  const spreadEl = document.getElementById("kpi-gap-ratio");
  if (spreadEl) spreadEl.textContent = `${ratioSpread.toLocaleString()}x`;
}

// Filter and Sort Data
function getFilteredModels() {
  return MODEL_DATA.filter(model => {
    // Search filter
    if (state.searchQuery) {
      const q = state.searchQuery.toLowerCase();
      const matchName = model.name.toLowerCase().includes(q);
      const matchProv = model.provider.toLowerCase().includes(q);
      const matchDesc = model.description.toLowerCase().includes(q);
      const matchCat = model.categoryLabel.toLowerCase().includes(q);
      if (!matchName && !matchProv && !matchDesc && !matchCat) return false;
    }

    // Category filter
    if (state.selectedCategory !== "all") {
      if (model.category !== state.selectedCategory) return false;
    }

    // Provider filter
    if (state.selectedProvider !== "all") {
      if (model.provider !== state.selectedProvider) return false;
    }

    return true;
  }).sort((a, b) => {
    const valA = getMetricValue(a, state.priceMetric);
    const valB = getMetricValue(b, state.priceMetric);

    if (state.sortBy === "priceAsc") return valA - valB;
    if (state.sortBy === "priceDesc") return valB - valA;
    if (state.sortBy === "speedDesc") return b.speed - a.speed;
    if (state.sortBy === "contextDesc") return b.contextTokens - a.contextTokens;
    if (state.sortBy === "nameAsc") return a.name.localeCompare(b.name);
    return 0;
  });
}

// Render Bars Chart
function renderBarsChart(models) {
  const container = document.getElementById("bars-chart");
  if (!container) return;

  if (models.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
        <p>No models match your current filters. Try resetting search or category.</p>
      </div>
    `;
    return;
  }

  // Get max value for current metric to scale bars correctly
  const values = models.map(m => getMetricValue(m, state.priceMetric));
  const maxVal = Math.max(...values, 0.5);

  let metricLabel = "Output Token Cost";
  if (state.priceMetric === "inputPrice") metricLabel = "Input Token Cost";
  if (state.priceMetric === "blended") metricLabel = "Blended (3:1) Cost";
  if (state.priceMetric === "cachePrice") metricLabel = "Cached Input Cost";

  const chartTitleEl = document.getElementById("chart-metric-title");
  if (chartTitleEl) chartTitleEl.textContent = metricLabel;

  const html = models.map(model => {
    const val = getMetricValue(model, state.priceMetric);
    const pct = Math.max((val / maxVal) * 100, 1.8);

    return `
      <div class="bar-row" data-id="${model.id}">
        <div class="bar-meta">
          <span class="provider-pill" style="border-left-color: ${model.badgeColor}">${model.provider}</span>
          <strong class="model-name" title="${model.description}">${model.name}</strong>
          <span class="context-tag">${model.contextWindow}</span>
        </div>
        <div class="bar-track-wrap">
          <div class="bar-track">
            <div class="bar-fill" style="width: ${pct}%; background: linear-gradient(90deg, #4f46e5, ${model.badgeColor});">
              <span class="bar-inner-label">${formatCurrency(val)}</span>
            </div>
          </div>
        </div>
        <div class="bar-val">
          <strong>${formatCurrency(val)}</strong>
          <small>/1M</small>
        </div>
      </div>
    `;
  }).join("");

  container.innerHTML = html;
}

// Render Table View
function renderTable(models) {
  const tbody = document.getElementById("models-table-body");
  const countBadge = document.getElementById("table-count-badge");
  if (countBadge) countBadge.textContent = `${models.length} Models`;
  if (!tbody) return;

  if (models.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="8" class="empty-cell">
          No matching foundation models found.
        </td>
      </tr>
    `;
    return;
  }

  const rowsHtml = models.map(m => {
    return `
      <tr class="table-row-item" data-id="${m.id}">
        <td>
          <div class="table-model-info">
            <div class="status-indicator"></div>
            <div>
              <div class="name-line">
                <strong>${m.name}</strong>
                <span class="provider-tag">${m.provider}</span>
              </div>
              <p class="model-desc">${m.description}</p>
            </div>
          </div>
        </td>
        <td>
          <span class="badge badge-${m.category}">${m.categoryLabel}</span>
        </td>
        <td class="num-cell">
          <span class="price-input">${formatCurrency(m.inputPrice)}</span>
        </td>
        <td class="num-cell">
          <strong class="price-output">${formatCurrency(m.outputPrice)}</strong>
        </td>
        <td class="num-cell">
          <span class="price-cache">${formatCurrency(m.cachePrice)}</span>
        </td>
        <td class="num-cell">
          <span class="ctx-badge">${m.contextWindow}</span>
        </td>
        <td class="num-cell">
          <span class="speed-badge">${m.speed} tok/s</span>
        </td>
        <td class="actions-cell">
          <button class="btn-calc-use" onclick="setCalculatorModel('${m.id}')" title="Test in cost estimator">
            Estimate
          </button>
        </td>
      </tr>
    `;
  }).join("");

  tbody.innerHTML = rowsHtml;
}

// Calculator Logic
function calculateWorkload() {
  const inM = parseFloat(state.calcInputTokens) || 0;
  const outM = parseFloat(state.calcOutputTokens) || 0;
  const cachePct = (parseFloat(state.calcCachePercent) || 0) / 100;

  const modelIds = [state.calcModel1, state.calcModel2, state.calcModel3];
  
  modelIds.forEach((id, idx) => {
    const cardEl = document.getElementById(`calc-card-${idx + 1}`);
    const model = MODEL_DATA.find(m => m.id === id);
    if (!cardEl || !model) return;

    // Tokens split
    const cachedTokens = inM * cachePct;
    const freshInputTokens = inM * (1 - cachePct);

    const inputCost = freshInputTokens * model.inputPrice;
    const cacheCost = cachedTokens * model.cachePrice;
    const outputCost = outM * model.outputPrice;

    const totalMonthly = inputCost + cacheCost + outputCost;
    const totalAnnual = totalMonthly * 12;

    // Without cache cost
    const unoptimizedTotal = (inM * model.inputPrice) + outputCost;
    const savings = Math.max(0, unoptimizedTotal - totalMonthly);

    cardEl.querySelector(".calc-model-name").textContent = model.name;
    cardEl.querySelector(".calc-provider-name").textContent = model.provider;
    cardEl.querySelector(".calc-monthly-cost").textContent = formatCurrency(totalMonthly);
    cardEl.querySelector(".calc-annual-cost").textContent = formatCurrency(totalAnnual);
    cardEl.querySelector(".calc-input-split").textContent = formatCurrency(inputCost + cacheCost);
    cardEl.querySelector(".calc-output-split").textContent = formatCurrency(outputCost);
    cardEl.querySelector(".calc-savings-badge").textContent = `Saves ${formatCurrency(savings)}/mo with caching`;
  });
}

// Set model in calculator directly
window.setCalculatorModel = function(modelId) {
  state.calcModel1 = modelId;
  const sel = document.getElementById("calc-select-1");
  if (sel) sel.value = modelId;
  calculateWorkload();
  document.getElementById("workload-calculator")?.scrollIntoView({ behavior: "smooth" });
};

// Populate Calculator Dropdowns
function initCalculatorDropdowns() {
  const selects = [
    document.getElementById("calc-select-1"),
    document.getElementById("calc-select-2"),
    document.getElementById("calc-select-3")
  ];

  selects.forEach((sel, idx) => {
    if (!sel) return;
    sel.innerHTML = MODEL_DATA.map(m => `
      <option value="${m.id}">${m.provider} - ${m.name}</option>
    `).join("");

    if (idx === 0) sel.value = state.calcModel1;
    if (idx === 1) sel.value = state.calcModel2;
    if (idx === 2) sel.value = state.calcModel3;

    sel.addEventListener("change", (e) => {
      if (idx === 0) state.calcModel1 = e.target.value;
      if (idx === 1) state.calcModel2 = e.target.value;
      if (idx === 2) state.calcModel3 = e.target.value;
      calculateWorkload();
    });
  });

  // Calculator Inputs
  const inRange = document.getElementById("calc-in-range");
  const inNum = document.getElementById("calc-in-num");
  const inDisplay = document.getElementById("calc-in-num-display");
  const outRange = document.getElementById("calc-out-range");
  const outNum = document.getElementById("calc-out-num");
  const outDisplay = document.getElementById("calc-out-num-display");
  const cacheRange = document.getElementById("calc-cache-range");
  const cacheVal = document.getElementById("calc-cache-val");

  const syncInDisplay = (val) => {
    if (inDisplay) inDisplay.textContent = val;
  };
  const syncOutDisplay = (val) => {
    if (outDisplay) outDisplay.textContent = val;
  };

  syncInDisplay(state.calcInputTokens);
  syncOutDisplay(state.calcOutputTokens);

  if (inRange && inNum) {
    inRange.addEventListener("input", (e) => {
      inNum.value = e.target.value;
      state.calcInputTokens = parseFloat(e.target.value);
      syncInDisplay(e.target.value);
      calculateWorkload();
    });
    inNum.addEventListener("input", (e) => {
      inRange.value = e.target.value;
      state.calcInputTokens = parseFloat(e.target.value);
      syncInDisplay(e.target.value);
      calculateWorkload();
    });
  }

  if (outRange && outNum) {
    outRange.addEventListener("input", (e) => {
      outNum.value = e.target.value;
      state.calcOutputTokens = parseFloat(e.target.value);
      syncOutDisplay(e.target.value);
      calculateWorkload();
    });
    outNum.addEventListener("input", (e) => {
      outRange.value = e.target.value;
      state.calcOutputTokens = parseFloat(e.target.value);
      syncOutDisplay(e.target.value);
      calculateWorkload();
    });
  }

  if (cacheRange && cacheVal) {
    cacheRange.addEventListener("input", (e) => {
      cacheVal.textContent = `${e.target.value}%`;
      state.calcCachePercent = parseFloat(e.target.value);
      calculateWorkload();
    });
  }
}

// Export functions
function exportCSV() {
  const models = getFilteredModels();
  const headers = ["Model", "Provider", "Category", "Input Price ($/1M)", "Output Price ($/1M)", "Cached Read ($/1M)", "Context Window", "Throughput (tok/s)", "Status"];
  const rows = models.map(m => [
    `"${m.name}"`,
    `"${m.provider}"`,
    `"${m.categoryLabel}"`,
    m.inputPrice,
    m.outputPrice,
    m.cachePrice,
    `"${m.contextWindow}"`,
    m.speed,
    `"${m.status}"`
  ]);

  const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map(e => e.join(","))].join("\n");
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", `ai_pricing_index_${new Date().toISOString().slice(0,10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function exportJSON() {
  const models = getFilteredModels();
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(models, null, 2));
  const link = document.createElement("a");
  link.setAttribute("href", dataStr);
  link.setAttribute("download", `ai_pricing_index_${new Date().toISOString().slice(0,10)}.json`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Setup Event Listeners
function setupEvents() {
  // Search
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      state.searchQuery = e.target.value.trim();
      renderAll();
    });
  }

  // Clear search
  const clearBtn = document.getElementById("clear-search-btn");
  if (clearBtn && searchInput) {
    clearBtn.addEventListener("click", () => {
      searchInput.value = "";
      state.searchQuery = "";
      renderAll();
    });
  }

  // Category buttons
  const catButtons = document.querySelectorAll(".cat-filter-btn");
  catButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      catButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      state.selectedCategory = btn.dataset.category;
      renderAll();
    });
  });

  // Provider filter
  const provSelect = document.getElementById("provider-filter-select");
  if (provSelect) {
    provSelect.addEventListener("change", (e) => {
      state.selectedProvider = e.target.value;
      renderAll();
    });
  }

  // Metric selector buttons (Output, Input, Blended, Cache)
  const metricButtons = document.querySelectorAll(".metric-toggle-btn");
  metricButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      metricButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      state.priceMetric = btn.dataset.metric;
      renderAll();
    });
  });

  // Sort selector
  const sortSelect = document.getElementById("sort-select");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      state.sortBy = e.target.value;
      renderAll();
    });
  }

  // Theme toggle
  const themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
    const isDark = localStorage.getItem("theme") !== "light";
    document.documentElement.classList.toggle("light-mode", !isDark);
    updateThemeIcon(!isDark);

    themeToggle.addEventListener("click", () => {
      const currentlyLight = document.documentElement.classList.contains("light-mode");
      document.documentElement.classList.toggle("light-mode", !currentlyLight);
      localStorage.setItem("theme", currentlyLight ? "dark" : "light");
      updateThemeIcon(!currentlyLight);
    });
  }

  // Export buttons
  document.getElementById("btn-export-csv")?.addEventListener("click", exportCSV);
  document.getElementById("btn-export-json")?.addEventListener("click", exportJSON);
}

function updateThemeIcon(isLight) {
  const icon = document.getElementById("theme-icon");
  if (!icon) return;
  if (isLight) {
    icon.innerHTML = `<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>`;
  } else {
    icon.innerHTML = `<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>`;
  }
}

function renderAll() {
  const filtered = getFilteredModels();
  renderBarsChart(filtered);
  renderTable(filtered);
}

// Initialization
document.addEventListener("DOMContentLoaded", () => {
  updateKPIs();
  initCalculatorDropdowns();
  setupEvents();
  renderAll();
  calculateWorkload();
});
