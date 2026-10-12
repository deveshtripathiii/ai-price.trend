# SmartCompare AI — Universal Product Price Comparison & Predictive Engine

A universal, real-time multi-store e-commerce price aggregation, historical trend analysis, and AI purchase forecasting platform.

Commercially conceptualized as **SmartCompare (PPC Engine)**.

---

## 🌟 Key Features

1. **Universal Product Search & Normalization**:
   - Search **any** commercial product or gadget (Smartphones, Laptops, Audio, Smartwatches, Appliances).
   - Real-time specification extraction and normalization (Display, Processor, Storage, Camera, Battery, Warranty).
   - Fast autocomplete suggestions with instant pricing previews.

2. **Cross-Platform Price Comparison (Har Platform me kya price hai)**:
   - Aggregates and normalizes live prices across India's top retail platforms:
     - 🟠 **Amazon India**
     - 🔵 **Flipkart**
     - 🟢 **Croma**
     - 🔴 **Reliance Digital**
     - 🟣 **Vijay Sales**
   - Highlights 🏆 **BEST PRICE** with accurate savings calculations.
   - Displays real-time bank discounts, instant card cashback, delivery speed, and direct "Go to Store" links.

3. **Interactive Historical Price Trend Graph**:
   - Multi-store price fluctuation lines plotted on a responsive Canvas chart.
   - Switch between **30 Days**, **60 Days**, and **90 Days** historical views.
   - Real-time stat badges:
     - **All-Time Lowest Recorded Price**
     - **All-Time Highest Price**
     - **Median Retail Baseline Average**
     - **Current Best Price**

4. **AI Price Prediction Engine (Sasta Hoga ya Mehnga Hoga)**:
   - **Verdict Advisory**: 🟢 **BUY NOW** vs 🟡 **WAIT & WATCH** vs 🔴 **PRICE HIKE RISK**.
   - **Confidence Score**: Algorithmic confidence percentage based on time-series analysis and festival discount cycles.
   - **14-Day Lowest Price Forecast**: Predicts upcoming price floors during flash sales.
   - **Key Market Signals**: Detects retailer price undercutting wars, inventory depletion, and promotional validity.

5. **Automated Price Drop Alert System**:
   - Set a custom target threshold price.
   - Triggers automated notifications via Email or WhatsApp when the price hits the target.

---

## 🚀 Getting Started

Simply open `index.html` in any modern web browser:

```bash
# Direct launch
open index.html

# Or serve via Python
python3 -m http.server 8080
```

---

## 📂 Project Architecture

```text
├── index.html        # SmartCompare UI layout & semantic DOM structure
├── style.css         # Modern glassmorphism dark theme, cards & responsive grids
├── app.js            # Store adapters, search normalizer, Canvas chart & AI predictor
└── README.md         # Architecture documentation & guide
```

---

## 🛠️ Technology Stack

- **Frontend**: HTML5, Modern CSS3 (Glassmorphism, Flexbox & Grid), Vanilla JavaScript (ES6+)
- **Visualization**: High-performance HTML5 Canvas API (Multi-curve bezier interpolation)
- **Data Engine**: Multi-Store Mock & Live Normalized Aggregation Layer
