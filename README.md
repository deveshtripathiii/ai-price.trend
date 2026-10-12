# AI Price Trends — Foundation Model Token Economics & Price Index

> **Live intelligence tracking of input, output, prompt caching, and reasoning token costs across 32+ industry-standard foundation models.**

Normalized per 1,000,000 tokens in USD.

---

## Overview

**AI Price Trends** is a comprehensive, production-grade tracking and analytics platform for foundation model API pricing. It indexes real-time rates across OpenAI, Anthropic, Google DeepMind, DeepSeek, Meta, Mistral, xAI, and Alibaba Qwen.

### Key Capabilities

- **Normalized Token Economics**: Standardized pricing comparison across diverse tokenizer encodings (cl100k, o200k, Byte-Pair).
- **Multi-Metric Views**:
  - Output Generation Pricing ($/1M)
  - Input Prompt Ingestion Pricing ($/1M)
  - Standard Blended 3:1 Input-to-Output Enterprise Ratio
  - Context Caching & KV Cache Read Rates ($/1M)
- **Workload TCO Estimator**: Interactive calculator that models monthly and annual token expenditure across multiple configurations, factoring in prompt caching hit ratios.
- **Dynamic Filtering & Visualizations**:
  - Filter by architectural class: *Frontier & Flagship*, *Fast & Budget*, *Reasoning Engines*, *Open-Weights*, *Coding Specialists*.
  - Live horizontal relative distribution chart.
  - Sort by price, throughput (tokens/second), context window size, or name.
- **Exporting**: One-click export to CSV and JSON feeds.
- **Responsive Dark/Light UI**: Adaptive interface with system preference detection and manual toggle.

---

## Foundation Models Covered

| Provider | Models Included |
| :--- | :--- |
| **OpenAI** | GPT-5 nano, GPT-5.4 Turbo, GPT-5.4, GPT-5.4 Pro, o3-mini (Reasoning), o3 |
| **Anthropic** | Claude 3.5 Haiku, Claude 3.7 Sonnet (Hybrid), Claude Sonnet 4.6, Claude Opus 4.6 |
| **Google** | Gemini 2.5 Flash (1M), Gemini 3.1 Pro (2M), Gemini 3.5 Flash |
| **DeepSeek** | DeepSeek V3, DeepSeek R1 (Reasoning), DeepSeek V4 Flash |
| **Meta** | Llama 3.3 70B, Llama 3.1 405B, Llama 3.1 8B Instant |
| **Mistral** | Mistral Large 3, Codestral 25.01, Mistral Small 3 |
| **xAI** | Grok 4.6, Grok 3 Mini |
| **Alibaba Qwen** | Qwen 2.5 Max, Qwen 2.5 Coder 32B, QwQ 32B (Reasoning) |
| **Zhipu / Moonshot** | GLM-5.3 Flash, Kimi K3 |

---

## Getting Started

No build step or dependencies required. Open `index.html` in any modern web browser or serve via any static file server:

```bash
# Python static server
python3 -m http.server 8080

# Or open directly
open index.html
```

---

## Project Structure

```text
├── index.html        # Semantic dashboard markup & layouts
├── style.css         # Modern design tokens, responsive CSS & dark/light theme
├── app.js            # Reactive data store, analytics engine & TCO calculator
└── README.md         # Documentation & specifications
```

---

## Data Methodology

All pricing telemetry is normalized to **USD per 1,000,000 tokens**. Figures reflect standard commercial pay-as-you-go tiers excluding custom enterprise commits or batch queue discounts.
