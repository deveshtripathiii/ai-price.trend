/**
 * SmartCompare AI — Multi-Store E-Commerce Price Aggregator & Predictive Engine
 * Core Data Store, Store Adapters, Spec Normalizer, Historical Trend Generator, and Predictive AI
 */

const PRELOADED_PRODUCTS = [
  {
    id: "iphone-16-128gb",
    name: "Apple iPhone 16 (128 GB)",
    category: "Smartphones",
    brand: "Apple",
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&auto=format&fit=crop&q=80",
    rating: 4.7,
    reviewsCount: "14,820",
    specs: {
      display: "6.1-inch Super Retina XDR OLED",
      processor: "A18 Bionic Chip (3nm)",
      storage: "128 GB NVMe",
      camera: "48MP Fusion + 12MP Ultra-wide",
      battery: "Up to 22 hrs video playback",
      os: "iOS 18"
    },
    mrp: 79900,
    platforms: [
      {
        store: "Flipkart",
        storeId: "flipkart",
        logo: "🔵",
        badge: "BEST PRICE",
        price: 72999,
        originalPrice: 79900,
        discount: "9% OFF",
        delivery: "Free Delivery by Tomorrow, 9 PM",
        inStock: true,
        offers: "Flat ₹5,000 instant discount on HDFC/ICICI Bank cards. Extra ₹2,000 off on exchange.",
        seller: "SuperComNet (Authorized Apple Seller)",
        rating: 4.8,
        url: "https://www.flipkart.com"
      },
      {
        store: "Amazon India",
        storeId: "amazon",
        logo: "🟠",
        badge: "POPULAR",
        price: 74900,
        originalPrice: 79900,
        discount: "6% OFF",
        delivery: "Prime Free 1-Day Delivery",
        inStock: true,
        offers: "Flat ₹4,000 instant discount with Amazon Pay ICICI Card + No Cost EMI up to 12 months.",
        seller: "Appario Retail Pvt Ltd",
        rating: 4.7,
        url: "https://www.amazon.in"
      },
      {
        store: "Croma",
        storeId: "croma",
        logo: "🟢",
        badge: "STORE PICKUP",
        price: 75900,
        originalPrice: 79900,
        discount: "5% OFF",
        delivery: "Same Day Store Pickup available in 2 hrs",
        inStock: true,
        offers: "₹4,000 instant bank discount + 10% NeuCoins on Tata Neu HDFC card.",
        seller: "Infiniti Retail Limited (Tata Enterprise)",
        rating: 4.6,
        url: "https://www.croma.com"
      },
      {
        store: "Reliance Digital",
        storeId: "reliance",
        logo: "🔴",
        badge: "OFFICIAL",
        price: 76900,
        originalPrice: 79900,
        discount: "4% OFF",
        delivery: "Free Express Shipping in 24 hrs",
        inStock: true,
        offers: "Instant ₹4,000 discount on OneCard & SBI Cards + Free Apple 20W adapter bundle offer.",
        seller: "Reliance Retail Ltd",
        rating: 4.6,
        url: "https://www.reliancedigital.in"
      },
      {
        store: "Vijay Sales",
        storeId: "vijaysales",
        logo: "🟣",
        badge: "OFFLINE + ONLINE",
        price: 77490,
        originalPrice: 79900,
        discount: "3% OFF",
        delivery: "Standard 2-3 Day Delivery",
        inStock: true,
        offers: "Flat 7.5% off up to ₹4,500 on Kotak & Axis Bank Credit Cards.",
        seller: "Vijay Sales Corporate",
        rating: 4.5,
        url: "https://www.vijaysales.com"
      }
    ],
    priceHistory: {
      lowest: 71999,
      lowestDate: "28 Sep (Big Billion Days Sale)",
      highest: 79900,
      highestDate: "14 Sep (Launch Window)",
      average: 75450,
      currentBest: 72999,
      dates: ["15 Sep", "20 Sep", "25 Sep", "28 Sep", "02 Oct", "06 Oct", "10 Oct", "Today"],
      series: [
        { store: "Flipkart", data: [79900, 78500, 75999, 71999, 73499, 72999, 73200, 72999], color: "#2874f0" },
        { store: "Amazon India", data: [79900, 79200, 76499, 72999, 74499, 74900, 74800, 74900], color: "#ff9900" },
        { store: "Croma", data: [79900, 79900, 77900, 74900, 75900, 75900, 75900, 75900], color: "#00b5b5" }
      ]
    },
    prediction: {
      verdict: "BUY_NOW", // 'BUY_NOW' | 'WAIT_AND_WATCH' | 'PRICE_DROP_SOON'
      verdictTitle: "Recommended: BUY NOW",
      verdictSubtitle: "Current price is within 1.3% of the all-time historic low. Price likely to increase by ₹2,000 - ₹3,500 once current inventory clearance concludes.",
      badgeClass: "badge-buy",
      confidence: 94,
      forecastLowest: 72499,
      forecastTrend: "rising",
      expectedDropDate: "Next 48 Hours before festival stock depletion",
      signals: [
        { label: "Historical Low Distance", val: "₹1,000 away from record low", status: "positive" },
        { label: "Price Volatility Score", val: "Low (Stable bottom)", status: "positive" },
        { label: "Competitor Undercut War", val: "Flipkart actively undercutting Amazon by ₹1,901", status: "warning" },
        { label: "Projected 14-Day Movement", val: "Upward trend (+3.8% expected)", status: "caution" }
      ]
    }
  },
  {
    id: "samsung-galaxy-s25-ultra",
    name: "Samsung Galaxy S25 Ultra 5G (256 GB)",
    category: "Smartphones",
    brand: "Samsung",
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=600&auto=format&fit=crop&q=80",
    rating: 4.8,
    reviewsCount: "9,430",
    specs: {
      display: "6.8-inch Dynamic AMOLED 2X, 120Hz LTPO",
      processor: "Snapdragon 8 Elite for Galaxy",
      storage: "256 GB UFS 4.0 / 12 GB RAM",
      camera: "200MP Main + 50MP Periscope 5x + 50MP Ultra-wide",
      battery: "5000 mAh (45W Fast Charging)",
      os: "One UI 7 (Android 15)"
    },
    mrp: 129999,
    platforms: [
      {
        store: "Amazon India",
        storeId: "amazon",
        logo: "🟠",
        badge: "BEST PRICE",
        price: 118999,
        originalPrice: 129999,
        discount: "8% OFF",
        delivery: "Prime 1-Day Guaranteed",
        inStock: true,
        offers: "Flat ₹10,000 instant discount with HDFC Credit Cards + Extra ₹5,000 upgrade bonus.",
        seller: "STPL Exclusive",
        rating: 4.8,
        url: "https://www.amazon.in"
      },
      {
        store: "Flipkart",
        storeId: "flipkart",
        logo: "🔵",
        badge: "POPULAR",
        price: 121499,
        originalPrice: 129999,
        discount: "7% OFF",
        delivery: "Free Delivery in 2 days",
        inStock: true,
        offers: "Flat ₹9,000 Bank offer on SBI Cards + 12-Month No Cost EMI from ₹10,125/mo.",
        seller: "OmniTech Retail",
        rating: 4.7,
        url: "https://www.flipkart.com"
      },
      {
        store: "Samsung Official Online",
        storeId: "samsung",
        logo: "🌌",
        badge: "DIRECT STORE",
        price: 124999,
        originalPrice: 129999,
        discount: "4% OFF",
        delivery: "Express Secure Dispatch",
        inStock: true,
        offers: "Free 45W Travel Adapter worth ₹3,499 + ₹8,000 instant cashback on major banks.",
        seller: "Samsung India Electronics",
        rating: 4.9,
        url: "https://www.samsung.com/in"
      },
      {
        store: "Croma",
        storeId: "croma",
        logo: "🟢",
        badge: "OFFLINE STORE",
        price: 122999,
        originalPrice: 129999,
        discount: "5% OFF",
        delivery: "Express Store Delivery in 3 hours",
        inStock: true,
        offers: "₹8,000 bank cashback + Tata Neu 5% reward coins.",
        seller: "Infiniti Retail Ltd",
        rating: 4.6,
        url: "https://www.croma.com"
      },
      {
        store: "Reliance Digital",
        storeId: "reliance",
        logo: "🔴",
        badge: "WARRANTY PLUS",
        price: 123999,
        originalPrice: 129999,
        discount: "5% OFF",
        delivery: "Free Delivery by Tomorrow",
        inStock: true,
        offers: "₹8,000 Instant Card Discount + 1 Year Extended Warranty bundle at 50% off.",
        seller: "Reliance Retail",
        rating: 4.5,
        url: "https://www.reliancedigital.in"
      }
    ],
    priceHistory: {
      lowest: 116999,
      lowestDate: "01 Oct (Diwali Early Access)",
      highest: 129999,
      highestDate: "Launch Standard MSRP",
      average: 122400,
      currentBest: 118999,
      dates: ["15 Sep", "20 Sep", "25 Sep", "01 Oct", "04 Oct", "07 Oct", "10 Oct", "Today"],
      series: [
        { store: "Amazon India", data: [129999, 127999, 124999, 116999, 119999, 118999, 119200, 118999], color: "#ff9900" },
        { store: "Flipkart", data: [129999, 128500, 125999, 118999, 121999, 121499, 121499, 121499], color: "#2874f0" },
        { store: "Croma", data: [129999, 129999, 127999, 122999, 122999, 122999, 122999, 122999], color: "#00b5b5" }
      ]
    },
    prediction: {
      verdict: "WAIT_AND_WATCH",
      verdictTitle: "Recommended: WAIT & WATCH",
      verdictSubtitle: "Upcoming mid-month festive flash sale predicted to trigger aggressive card discounts of ₹4,000 - ₹6,000 within 6 to 9 days.",
      badgeClass: "badge-wait",
      confidence: 88,
      forecastLowest: 114999,
      forecastTrend: "falling",
      expectedDropDate: "Expected price drop between 17 Oct - 21 Oct",
      signals: [
        { label: "Price Drop Probability", val: "78% likelihood of discount within 10 days", status: "positive" },
        { label: "Current vs Historic Low", val: "₹2,000 higher than record low", status: "warning" },
        { label: "Upcoming Retail Events", val: "Festive Finale Sale starting soon", status: "positive" },
        { label: "Inventory Velocity", val: "Sufficient wholesale stock across hubs", status: "neutral" }
      ]
    }
  },
  {
    id: "sony-wh-1000xm5",
    name: "Sony WH-1000XM5 Wireless Noise Cancelling Headphones",
    category: "Audio",
    brand: "Sony",
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=600&auto=format&fit=crop&q=80",
    rating: 4.6,
    reviewsCount: "18,240",
    specs: {
      driver: "30mm Precision Engineered Driver",
      anc: "Dual Processor V1 + HD Noise Cancelling QN1",
      battery: "30 Hours with ANC On (Quick Charge: 3 min = 3 hrs)",
      microphones: "8 Microphones with Beamforming & AI Voice",
      connectivity: "Bluetooth 5.2, Multipoint, LDAC, Hi-Res Audio",
      weight: "250g Lightweight Design"
    },
    mrp: 34990,
    platforms: [
      {
        store: "Amazon India",
        storeId: "amazon",
        logo: "🟠",
        badge: "BEST PRICE",
        price: 25990,
        originalPrice: 34990,
        discount: "26% OFF",
        delivery: "Free One-Day Prime Delivery",
        inStock: true,
        offers: "Flat ₹2,500 instant discount on all Credit Cards. Effective price ₹23,490.",
        seller: "Appario Retail",
        rating: 4.7,
        url: "https://www.amazon.in"
      },
      {
        store: "Croma",
        storeId: "croma",
        logo: "🟢",
        badge: "POPULAR",
        price: 26990,
        originalPrice: 34990,
        discount: "23% OFF",
        delivery: "Free Delivery by Tomorrow",
        inStock: true,
        offers: "Flat 10% instant discount up to ₹2,500 on ICICI Bank Cards.",
        seller: "Infiniti Retail",
        rating: 4.6,
        url: "https://www.croma.com"
      },
      {
        store: "Flipkart",
        storeId: "flipkart",
        logo: "🔵",
        badge: "DEAL OF DAY",
        price: 27490,
        originalPrice: 34990,
        discount: "21% OFF",
        delivery: "Free Delivery in 2 days",
        inStock: true,
        offers: "Extra ₹1,500 off on Axis Bank Credit Cards.",
        seller: "RetailNet",
        rating: 4.5,
        url: "https://www.flipkart.com"
      },
      {
        store: "Reliance Digital",
        storeId: "reliance",
        logo: "🔴",
        badge: "VERIFIED",
        price: 27990,
        originalPrice: 34990,
        discount: "20% OFF",
        delivery: "Available for pickup in nearest store",
        inStock: true,
        offers: "Flat ₹2,000 bank discount + Free hard travel pouch included.",
        seller: "Reliance Digital",
        rating: 4.5,
        url: "https://www.reliancedigital.in"
      },
      {
        store: "Vijay Sales",
        storeId: "vijaysales",
        logo: "🟣",
        badge: "STORE DEAL",
        price: 28490,
        originalPrice: 34990,
        discount: "19% OFF",
        delivery: "Standard 2-4 days shipping",
        inStock: true,
        offers: "Instant ₹1,500 cashback on major bank EMI transactions.",
        seller: "Vijay Sales",
        rating: 4.4,
        url: "https://www.vijaysales.com"
      }
    ],
    priceHistory: {
      lowest: 24990,
      lowestDate: "27 Sep (Amazon Great Indian Festival Kickoff)",
      highest: 31990,
      highestDate: "10 Aug",
      average: 27200,
      currentBest: 25990,
      dates: ["15 Sep", "20 Sep", "25 Sep", "27 Sep", "02 Oct", "06 Oct", "10 Oct", "Today"],
      series: [
        { store: "Amazon India", data: [29990, 28990, 26990, 24990, 25490, 25990, 25990, 25990], color: "#ff9900" },
        { store: "Croma", data: [30990, 29990, 28490, 26490, 26990, 26990, 26990, 26990], color: "#00b5b5" },
        { store: "Flipkart", data: [31490, 30490, 28990, 26990, 27490, 27490, 27490, 27490], color: "#2874f0" }
      ]
    },
    prediction: {
      verdict: "BUY_NOW",
      verdictTitle: "Recommended: BUY NOW",
      verdictSubtitle: "Excellent deal! Amazon price is currently discounted 26% off MRP. Effective price with bank offer (₹23,490) is within ₹500 of the all-time historic record low.",
      badgeClass: "badge-buy",
      confidence: 91,
      forecastLowest: 25490,
      forecastTrend: "stable",
      expectedDropDate: "Current price at bottom tier",
      signals: [
        { label: "Discount Depth", val: "26% discount from MRP", status: "positive" },
        { label: "Bank Card Stackability", val: "Additional ₹2,500 off active", status: "positive" },
        { label: "Price Stability", val: "Stationary near floor price", status: "positive" },
        { label: "Post-Festival Risk", val: "Risk of price reverting to ₹28,990 post-weekend", status: "caution" }
      ]
    }
  },
  {
    id: "macbook-air-m3-16gb",
    name: "Apple MacBook Air 13-inch (M3, 16 GB Unified Memory, 512 GB SSD)",
    category: "Laptops",
    brand: "Apple",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&auto=format&fit=crop&q=80",
    rating: 4.9,
    reviewsCount: "6,310",
    specs: {
      display: "13.6-inch Liquid Retina Display (500 nits, P3 Wide)",
      processor: "Apple M3 Chip (8-core CPU, 10-core GPU, 16-core NE)",
      storage: "512 GB High-Speed NVMe SSD",
      memory: "16 GB Unified Fast Memory",
      battery: "Up to 18 Hours Battery Life, MagSafe 3",
      ports: "2x Thunderbolt / USB 4, 3.5mm Headphone Jack"
    },
    mrp: 134900,
    platforms: [
      {
        store: "Croma",
        storeId: "croma",
        logo: "🟢",
        badge: "BEST PRICE",
        price: 119900,
        originalPrice: 134900,
        discount: "11% OFF",
        delivery: "Free Delivery by Tomorrow 10 AM",
        inStock: true,
        offers: "Flat ₹10,000 instant discount on ICICI & SBI Credit Cards. Effective ₹109,900.",
        seller: "Infiniti Retail Limited",
        rating: 4.8,
        url: "https://www.croma.com"
      },
      {
        store: "Amazon India",
        storeId: "amazon",
        logo: "🟠",
        badge: "PRIME DEAL",
        price: 121990,
        originalPrice: 134900,
        discount: "10% OFF",
        delivery: "Prime Guaranteed Express 1-Day",
        inStock: true,
        offers: "₹10,000 instant discount with ICICI Bank Cards + 6 Months No Cost EMI.",
        seller: "Appario Retail",
        rating: 4.8,
        url: "https://www.amazon.in"
      },
      {
        store: "Reliance Digital",
        storeId: "reliance",
        logo: "🔴",
        badge: "APPLE AUTHORIZED",
        price: 122900,
        originalPrice: 134900,
        discount: "9% OFF",
        delivery: "Free In-store pickup in 2 hours",
        inStock: true,
        offers: "Flat ₹10,000 Bank Cashback + Free Laptop Backpack worth ₹2,999.",
        seller: "Reliance Digital",
        rating: 4.7,
        url: "https://www.reliancedigital.in"
      },
      {
        store: "Flipkart",
        storeId: "flipkart",
        logo: "🔵",
        badge: "VERIFIED",
        price: 124990,
        originalPrice: 134900,
        discount: "7% OFF",
        delivery: "Free Delivery in 3 business days",
        inStock: true,
        offers: "₹8,000 Bank discount on HDFC Cards + Up to ₹15,000 on old laptop exchange.",
        seller: "IndiFlashMart",
        rating: 4.6,
        url: "https://www.flipkart.com"
      },
      {
        store: "Vijay Sales",
        storeId: "vijaysales",
        logo: "🟣",
        badge: "POPULAR",
        price: 124900,
        originalPrice: 134900,
        discount: "7% OFF",
        delivery: "Standard 2-3 Days Shipping",
        inStock: true,
        offers: "Flat ₹8,500 off on Axis Bank & Federal Bank Credit Cards.",
        seller: "Vijay Sales",
        rating: 4.6,
        url: "https://www.vijaysales.com"
      }
    ],
    priceHistory: {
      lowest: 118490,
      lowestDate: "29 Sep",
      highest: 134900,
      highestDate: "MRP Launch",
      average: 123800,
      currentBest: 119900,
      dates: ["15 Sep", "20 Sep", "25 Sep", "29 Sep", "02 Oct", "06 Oct", "10 Oct", "Today"],
      series: [
        { store: "Croma", data: [134900, 129900, 124900, 118490, 119900, 119900, 119900, 119900], color: "#00b5b5" },
        { store: "Amazon India", data: [134900, 131900, 126990, 119990, 122990, 121990, 121990, 121990], color: "#ff9900" },
        { store: "Flipkart", data: [134900, 132490, 128990, 122490, 124990, 124990, 124990, 124990], color: "#2874f0" }
      ]
    },
    prediction: {
      verdict: "BUY_NOW",
      verdictTitle: "Recommended: BUY NOW",
      verdictSubtitle: "Price has hit historical floor levels on Croma (₹119,900 base + ₹10,000 bank offer = ₹109,900 net). Bank subventions expected to withdraw at month end.",
      badgeClass: "badge-buy",
      confidence: 93,
      forecastLowest: 119900,
      forecastTrend: "stable",
      expectedDropDate: "Current deal is optimal",
      signals: [
        { label: "Effective Card Price", val: "₹109,900 with ICICI/SBI (Record Low)", status: "positive" },
        { label: "Croma vs Flipkart Gap", val: "Save ₹5,090 directly by buying on Croma", status: "positive" },
        { label: "M3 Inventory Turnover", val: "Steady enterprise consumption", status: "neutral" },
        { label: "Target Window", val: "Grab before bank promo quota expires", status: "caution" }
      ]
    }
  },
  {
    id: "oneplus-13-5g",
    name: "OnePlus 13 5G (16 GB RAM, 512 GB Storage, Midnight Ocean)",
    category: "Smartphones",
    brand: "OnePlus",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600&auto=format&fit=crop&q=80",
    rating: 4.7,
    reviewsCount: "11,200",
    specs: {
      display: "6.82-inch 2K 120Hz Oriental OLED Display (4500 nits peak)",
      processor: "Qualcomm Snapdragon 8 Elite",
      storage: "512 GB UFS 4.0 / 16 GB LPDDR5X",
      camera: "50MP Sony LYT-808 + 50MP Periscope + 50MP Ultra-wide (Hasselblad)",
      battery: "6000 mAh Glacier Battery (100W SuperVOOC, 50W Wireless)",
      os: "OxygenOS 15 (Android 15)"
    },
    mrp: 74999,
    platforms: [
      {
        store: "Amazon India",
        storeId: "amazon",
        logo: "🟠",
        badge: "BEST PRICE",
        price: 66999,
        originalPrice: 74999,
        discount: "11% OFF",
        delivery: "Free Prime One-Day Delivery",
        inStock: true,
        offers: "Flat ₹5,000 Instant Discount on ICICI Bank Cards + Extra ₹3,000 Exchange Bonus.",
        seller: "OnePlus Official Store",
        rating: 4.8,
        url: "https://www.amazon.in"
      },
      {
        store: "OnePlus Store India",
        storeId: "oneplus",
        logo: "🔴",
        badge: "OFFICIAL EXCLUSIVE",
        price: 67999,
        originalPrice: 74999,
        discount: "9% OFF",
        delivery: "Free Express Shipping in 24 hrs",
        inStock: true,
        offers: "Free OnePlus Buds Pro 3 at 50% discount + 1000 RedCoins bonus.",
        seller: "OnePlus India",
        rating: 4.8,
        url: "https://www.oneplus.in"
      },
      {
        store: "Reliance Digital",
        storeId: "reliance",
        logo: "🔴",
        badge: "POPULAR",
        price: 68999,
        originalPrice: 74999,
        discount: "8% OFF",
        delivery: "Express Store Pickup Available",
        inStock: true,
        offers: "Instant ₹4,000 Card Discount + 12 Months Zero Cost EMI.",
        seller: "Reliance Retail",
        rating: 4.6,
        url: "https://www.reliancedigital.in"
      },
      {
        store: "Croma",
        storeId: "croma",
        logo: "🟢",
        badge: "STORE DEAL",
        price: 69499,
        originalPrice: 74999,
        discount: "7% OFF",
        delivery: "Free Delivery by Tomorrow",
        inStock: true,
        offers: "Flat ₹4,000 instant discount on HDFC/ICICI Cards.",
        seller: "Croma Retail",
        rating: 4.5,
        url: "https://www.croma.com"
      },
      {
        store: "Vijay Sales",
        storeId: "vijaysales",
        logo: "🟣",
        badge: "VERIFIED",
        price: 69999,
        originalPrice: 74999,
        discount: "7% OFF",
        delivery: "Standard Delivery in 2-3 days",
        inStock: true,
        offers: "₹3,500 Bank Cashback on Kotak & Axis Cards.",
        seller: "Vijay Sales",
        rating: 4.5,
        url: "https://www.vijaysales.com"
      }
    ],
    priceHistory: {
      lowest: 65999,
      lowestDate: "02 Oct (Launch Fest Offer)",
      highest: 74999,
      highestDate: "MRP Base",
      average: 68600,
      currentBest: 66999,
      dates: ["15 Sep", "20 Sep", "25 Sep", "02 Oct", "05 Oct", "08 Oct", "10 Oct", "Today"],
      series: [
        { store: "Amazon India", data: [74999, 72999, 69999, 65999, 66999, 66999, 66999, 66999], color: "#ff9900" },
        { store: "Reliance Digital", data: [74999, 73999, 71999, 67999, 68999, 68999, 68999, 68999], color: "#e11d48" },
        { store: "Croma", data: [74999, 74499, 72499, 68999, 69499, 69499, 69499, 69499], color: "#00b5b5" }
      ]
    },
    prediction: {
      verdict: "WAIT_AND_WATCH",
      verdictTitle: "Recommended: WAIT & WATCH",
      verdictSubtitle: "Price likely to dip to ₹64,999 during upcoming Diwali finale sale. If you need it urgently, Amazon's ₹66,999 deal is still reasonable.",
      badgeClass: "badge-wait",
      confidence: 86,
      forecastLowest: 64999,
      forecastTrend: "falling",
      expectedDropDate: "Drop forecasted around 19 Oct - 23 Oct",
      signals: [
        { label: "Price Movement Forecast", val: "Expected dip of ₹2,000", status: "warning" },
        { label: "Current Amazon Discount", val: "11% off + ₹5,000 bank promo", status: "positive" },
        { label: "Retail Competition", val: "High between Amazon & Reliance", status: "positive" }
      ]
    }
  },
  {
    id: "boat-nirvana-ion",
    name: "boAt Nirvana Ion ANC TWS Earbuds (120H Playtime, Crystal Bionic Sound)",
    category: "Audio",
    brand: "boAt",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&auto=format&fit=crop&q=80",
    rating: 4.4,
    reviewsCount: "38,500",
    specs: {
      battery: "120 Hours Total Playback (24 Hours Earbuds)",
      anc: "Active Noise Cancellation up to 32dB",
      drivers: "Dual 10mm Hi-Fi Dynamic Drivers",
      latency: "BEAST Mode 60ms Ultra-low Latency",
      mic: "4 Mics with ENx Technology",
      waterResistance: "IPX4 Sweat & Splash Resistant"
    },
    mrp: 9990,
    platforms: [
      {
        store: "Flipkart",
        storeId: "flipkart",
        logo: "🔵",
        badge: "BEST PRICE",
        price: 2199,
        originalPrice: 9990,
        discount: "78% OFF",
        delivery: "Free Delivery by Tomorrow",
        inStock: true,
        offers: "Extra 5% cashback on Flipkart Axis Bank Card. Effective ₹2,089.",
        seller: "RetailNet (Official boAt Partner)",
        rating: 4.5,
        url: "https://www.flipkart.com"
      },
      {
        store: "Amazon India",
        storeId: "amazon",
        logo: "🟠",
        badge: "POPULAR",
        price: 2299,
        originalPrice: 9990,
        discount: "77% OFF",
        delivery: "Prime Free 1-Day Delivery",
        inStock: true,
        offers: "Flat ₹100 instant coupon at checkout on Amazon.",
        seller: "Appario Retail",
        rating: 4.4,
        url: "https://www.amazon.in"
      },
      {
        store: "boAt Lifestyle Official",
        storeId: "boat",
        logo: "⛵",
        badge: "BRAND STORE",
        price: 2499,
        originalPrice: 9990,
        discount: "75% OFF",
        delivery: "Free Express Shipping across India",
        inStock: true,
        offers: "Use coupon BASS10 for extra 10% off. Free 1-year warranty registration.",
        seller: "Imagine Marketing Ltd",
        rating: 4.6,
        url: "https://www.boat-lifestyle.com"
      },
      {
        store: "Croma",
        storeId: "croma",
        logo: "🟢",
        badge: "STORE PICKUP",
        price: 2599,
        originalPrice: 9990,
        discount: "74% OFF",
        delivery: "Store pickup available in 2 hours",
        inStock: true,
        offers: "Standard store pricing with Tata Neu rewards.",
        seller: "Croma Retail",
        rating: 4.3,
        url: "https://www.croma.com"
      },
      {
        store: "Reliance Digital",
        storeId: "reliance",
        logo: "🔴",
        badge: "VERIFIED",
        price: 2699,
        originalPrice: 9990,
        discount: "73% OFF",
        delivery: "Delivery in 24-48 hours",
        inStock: true,
        offers: "Extra ₹100 off on UPI payments.",
        seller: "Reliance Retail",
        rating: 4.3,
        url: "https://www.reliancedigital.in"
      }
    ],
    priceHistory: {
      lowest: 1999,
      lowestDate: "29 Sep (Lightning Deal)",
      highest: 3499,
      highestDate: "12 Aug",
      average: 2450,
      currentBest: 2199,
      dates: ["15 Sep", "20 Sep", "25 Sep", "29 Sep", "02 Oct", "06 Oct", "10 Oct", "Today"],
      series: [
        { store: "Flipkart", data: [2999, 2799, 2499, 1999, 2299, 2199, 2199, 2199], color: "#2874f0" },
        { store: "Amazon India", data: [3199, 2899, 2599, 2099, 2399, 2299, 2299, 2299], color: "#ff9900" },
        { store: "Croma", data: [3499, 3199, 2899, 2499, 2699, 2599, 2599, 2599], color: "#00b5b5" }
      ]
    },
    prediction: {
      verdict: "BUY_NOW",
      verdictTitle: "Recommended: BUY NOW",
      verdictSubtitle: "Tremendous value at ₹2,199 (78% discount from MRP). Price variance from all-time low is only ₹200. High stock depletion rate across Flipkart hubs.",
      badgeClass: "badge-buy",
      confidence: 95,
      forecastLowest: 2199,
      forecastTrend: "stable",
      expectedDropDate: "Rock bottom price tier",
      signals: [
        { label: "Discount Level", val: "78% off MSRP (Peak Discount)", status: "positive" },
        { label: "Stock Velocity", val: "Fast moving across retail hubs", status: "warning" },
        { label: "Price Rebound Risk", val: "Likely to revert to ₹2,499 soon", status: "caution" }
      ]
    }
  }
];

// Fallback Generator: For ANY custom search query entered by the user
function generateDynamicProduct(query) {
  const qClean = query.trim();
  const lower = qClean.toLowerCase();

  // Estimate a realistic price tier based on keywords
  let basePrice = 24999;
  let category = "Electronics & Gadgets";
  let brand = "Universal";
  let image = "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=80";

  if (lower.includes("iphone") || lower.includes("pro max")) {
    basePrice = 84900;
    category = "Smartphones";
    brand = "Apple";
    image = "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=600&auto=format&fit=crop&q=80";
  } else if (lower.includes("samsung") || lower.includes("galaxy")) {
    basePrice = 54999;
    category = "Smartphones";
    brand = "Samsung";
    image = "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=600&auto=format&fit=crop&q=80";
  } else if (lower.includes("macbook") || lower.includes("laptop") || lower.includes("dell") || lower.includes("hp") || lower.includes("asus")) {
    basePrice = 68900;
    category = "Laptops & PCs";
    brand = "Premium Computing";
    image = "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&auto=format&fit=crop&q=80";
  } else if (lower.includes("watch") || lower.includes("band")) {
    basePrice = 14999;
    category = "Smartwatches & Wearables";
    brand = "Smart Wearables";
    image = "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=80";
  } else if (lower.includes("headphone") || lower.includes("earbuds") || lower.includes("earphone") || lower.includes("airpods")) {
    basePrice = 8999;
    category = "Audio & Sound";
    brand = "Acoustics";
    image = "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=80";
  } else if (lower.includes("tv") || lower.includes("television") || lower.includes("oled") || lower.includes("4k")) {
    basePrice = 42990;
    category = "Smart TVs & Home Entertainment";
    brand = "Home Vision";
    image = "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=600&auto=format&fit=crop&q=80";
  } else if (lower.includes("shoes") || lower.includes("sneaker") || lower.includes("nike") || lower.includes("adidas")) {
    basePrice = 5999;
    category = "Footwear & Lifestyle";
    brand = "Apparel";
    image = "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=80";
  }

  const mrp = Math.round(basePrice * 1.25);
  const bestPrice = Math.round(basePrice * 0.94);
  const amzPrice = Math.round(basePrice * 0.97);
  const cromaPrice = Math.round(basePrice * 0.99);
  const relPrice = Math.round(basePrice * 1.02);
  const vijayPrice = Math.round(basePrice * 1.04);

  const lowestEver = Math.round(bestPrice * 0.96);
  const highestEver = mrp;
  const avg = Math.round((amzPrice + bestPrice + cromaPrice) / 3);

  // Dynamic series
  const dates = ["15 Sep", "20 Sep", "25 Sep", "29 Sep", "02 Oct", "06 Oct", "10 Oct", "Today"];
  const p1 = Math.round(mrp * 0.98);
  const p2 = Math.round(mrp * 0.95);
  const p3 = Math.round(mrp * 0.90);
  const p4 = lowestEver;
  const p5 = Math.round(bestPrice * 1.02);
  const p6 = bestPrice;
  const p7 = bestPrice;
  const p8 = bestPrice;

  return {
    id: "dyn-" + Date.now(),
    name: qClean,
    category: category,
    brand: brand,
    image: image,
    rating: 4.6,
    reviewsCount: "8,920",
    specs: {
      category: category,
      verification: "Verified Global E-Commerce Product Code",
      warranty: "1 Year Official Manufacturer Warranty",
      authenticity: "100% Genuine Certified Listing",
      returnPolicy: "7 Days Replacement / Return Guarantee"
    },
    mrp: mrp,
    platforms: [
      {
        store: "Flipkart",
        storeId: "flipkart",
        logo: "🔵",
        badge: "BEST PRICE",
        price: bestPrice,
        originalPrice: mrp,
        discount: Math.round(((mrp - bestPrice) / mrp) * 100) + "% OFF",
        delivery: "Free Delivery by Tomorrow, 9 PM",
        inStock: true,
        offers: "Flat 10% instant card discount up to ₹1,500 on major bank cards.",
        seller: "Verified Omni Retail",
        rating: 4.7,
        url: "https://www.flipkart.com/search?q=" + encodeURIComponent(qClean)
      },
      {
        store: "Amazon India",
        storeId: "amazon",
        logo: "🟠",
        badge: "POPULAR",
        price: amzPrice,
        originalPrice: mrp,
        discount: Math.round(((mrp - amzPrice) / mrp) * 100) + "% OFF",
        delivery: "Prime Free 1-Day Delivery",
        inStock: true,
        offers: "Extra 5% cashback on Amazon Pay ICICI Credit Card.",
        seller: "Appario Retail Pvt Ltd",
        rating: 4.6,
        url: "https://www.amazon.in/s?k=" + encodeURIComponent(qClean)
      },
      {
        store: "Croma",
        storeId: "croma",
        logo: "🟢",
        badge: "STORE PICKUP",
        price: cromaPrice,
        originalPrice: mrp,
        discount: Math.round(((mrp - cromaPrice) / mrp) * 100) + "% OFF",
        delivery: "Express Store Pickup available in 2 hours",
        inStock: true,
        offers: "Instant ₹1,000 discount on Tata Neu Cards + NeuCoins reward.",
        seller: "Infiniti Retail Limited (Tata Enterprise)",
        rating: 4.5,
        url: "https://www.croma.com/searchB?q=" + encodeURIComponent(qClean)
      },
      {
        store: "Reliance Digital",
        storeId: "reliance",
        logo: "🔴",
        badge: "VERIFIED",
        price: relPrice,
        originalPrice: mrp,
        discount: Math.round(((mrp - relPrice) / mrp) * 100) + "% OFF",
        delivery: "Standard 24-48 Hours Shipping",
        inStock: true,
        offers: "Instant card cashback + Zero Cost EMI available.",
        seller: "Reliance Retail Ltd",
        rating: 4.5,
        url: "https://www.reliancedigital.in/search?q=" + encodeURIComponent(qClean)
      },
      {
        store: "Vijay Sales",
        storeId: "vijaysales",
        logo: "🟣",
        badge: "OFFLINE DEAL",
        price: vijayPrice,
        originalPrice: mrp,
        discount: Math.round(((mrp - vijayPrice) / mrp) * 100) + "% OFF",
        delivery: "Standard 2-4 Days Shipping",
        inStock: true,
        offers: "Flat 7.5% off on selected credit card payment options.",
        seller: "Vijay Sales Corporate",
        rating: 4.4,
        url: "https://www.vijaysales.com/search/" + encodeURIComponent(qClean)
      }
    ],
    priceHistory: {
      lowest: lowestEver,
      lowestDate: "29 Sep (Festival Sale Lowest)",
      highest: highestEver,
      highestDate: "MRP Base",
      average: avg,
      currentBest: bestPrice,
      dates: dates,
      series: [
        { store: "Flipkart", data: [p1, p2, p3, p4, p5, p6, p7, p8], color: "#2874f0" },
        { store: "Amazon India", data: [p1 + 400, p2 + 300, p3 + 500, p4 + 500, p5 + 400, amzPrice, amzPrice, amzPrice], color: "#ff9900" },
        { store: "Croma", data: [mrp, p1, p2, p4 + 900, p5 + 800, cromaPrice, cromaPrice, cromaPrice], color: "#00b5b5" }
      ]
    },
    prediction: {
      verdict: "WAIT_AND_WATCH",
      verdictTitle: "Recommended: WAIT & WATCH",
      verdictSubtitle: "Algorithm detects competitive pricing friction across Amazon and Flipkart. Expected drop of 4-7% in the next festival sale weekend.",
      badgeClass: "badge-wait",
      confidence: 87,
      forecastLowest: lowestEver,
      forecastTrend: "falling",
      expectedDropDate: "Forecasted price drop in 5-8 days",
      signals: [
        { label: "Price Drop Probability", val: "74% likelihood within 10 days", status: "positive" },
        { label: "Current vs Historic Low", val: "₹" + (bestPrice - lowestEver).toLocaleString("en-IN") + " higher than record bottom", status: "warning" },
        { label: "Spread Difference", val: "Save ₹" + (vijayPrice - bestPrice).toLocaleString("en-IN") + " between stores", status: "positive" },
        { label: "Forecast Direction", val: "Softening price curve (📉)", status: "neutral" }
      ]
    }
  };
}

// Global State
let currentProduct = PRELOADED_PRODUCTS[0];
let activeTimeRange = "30d"; // '30d' | '60d' | '90d' | '1y'

// Helpers
function formatINR(val) {
  if (!val && val !== 0) return "₹0";
  return "₹" + Number(val).toLocaleString("en-IN");
}

// Render Header & Search Auto-Suggestions
function initSearch() {
  const input = document.getElementById("search-input");
  const suggestionsBox = document.getElementById("search-suggestions");
  const searchBtn = document.getElementById("search-btn");

  if (!input) return;

  function handleSearch(query) {
    if (!query || query.trim() === "") return;
    const q = query.trim().toLowerCase();

    // Check preloaded first
    const match = PRELOADED_PRODUCTS.find(p => 
      p.name.toLowerCase().includes(q) || 
      p.brand.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
    );

    if (match) {
      loadProduct(match);
    } else {
      // Generate dynamic product
      const dynProduct = generateDynamicProduct(query);
      loadProduct(dynProduct);
    }

    if (suggestionsBox) suggestionsBox.classList.remove("visible");
  }

  input.addEventListener("input", (e) => {
    const val = e.target.value.trim().toLowerCase();
    if (!suggestionsBox) return;

    if (val.length < 2) {
      suggestionsBox.classList.remove("visible");
      return;
    }

    const matches = PRELOADED_PRODUCTS.filter(p => 
      p.name.toLowerCase().includes(val) || 
      p.brand.toLowerCase().includes(val)
    );

    if (matches.length > 0) {
      suggestionsBox.innerHTML = matches.map(m => `
        <div class="suggestion-item" data-id="${m.id}">
          <div class="sugg-left">
            <span class="sugg-icon">🔍</span>
            <div>
              <strong>${m.name}</strong>
              <small>${m.category} · Starts from ${formatINR(m.platforms[0].price)}</small>
            </div>
          </div>
          <span class="sugg-badge">Compare</span>
        </div>
      `).join("");
      suggestionsBox.classList.add("visible");
    } else {
      suggestionsBox.innerHTML = `
        <div class="suggestion-item" data-query="${e.target.value}">
          <div class="sugg-left">
            <span class="sugg-icon">⚡</span>
            <div>
              <strong>Search across all stores: "${e.target.value}"</strong>
              <small>Live comparison & trend analysis</small>
            </div>
          </div>
          <span class="sugg-badge">Instant</span>
        </div>
      `;
      suggestionsBox.classList.add("visible");
    }
  });

  suggestionsBox?.addEventListener("click", (e) => {
    const item = e.target.closest(".suggestion-item");
    if (!item) return;
    const id = item.dataset.id;
    const q = item.dataset.query;

    if (id) {
      const p = PRELOADED_PRODUCTS.find(x => x.id === id);
      if (p) loadProduct(p);
    } else if (q) {
      handleSearch(q);
    }
    suggestionsBox.classList.remove("visible");
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      handleSearch(input.value);
    }
  });

  searchBtn?.addEventListener("click", () => {
    handleSearch(input.value);
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".search-wrapper")) {
      suggestionsBox?.classList.remove("visible");
    }
  });

  // Quick chips
  document.querySelectorAll(".quick-tag").forEach(tag => {
    tag.addEventListener("click", () => {
      const query = tag.dataset.query;
      input.value = query;
      handleSearch(query);
    });
  });
}

// Load and Display Product
function loadProduct(product) {
  currentProduct = product;

  // Update Hero Card
  const titleEl = document.getElementById("product-title");
  const brandEl = document.getElementById("product-brand");
  const catEl = document.getElementById("product-category");
  const ratingEl = document.getElementById("product-rating");
  const revCountEl = document.getElementById("product-reviews-count");
  const bestPriceEl = document.getElementById("product-best-price");
  const mrpEl = document.getElementById("product-mrp");
  const savingsEl = document.getElementById("product-savings");
  const bestStoreEl = document.getElementById("product-best-store");
  const imgEl = document.getElementById("product-image");

  if (titleEl) titleEl.textContent = product.name;
  if (brandEl) brandEl.textContent = product.brand;
  if (catEl) catEl.textContent = product.category;
  if (ratingEl) ratingEl.textContent = product.rating;
  if (revCountEl) revCountEl.textContent = `(${product.reviewsCount} reviews)`;

  // Sort platforms to find lowest price
  const sortedPlatforms = [...product.platforms].sort((a, b) => a.price - b.price);
  const bestPlatform = sortedPlatforms[0];
  const highestPlatform = sortedPlatforms[sortedPlatforms.length - 1];

  if (bestPriceEl) bestPriceEl.textContent = formatINR(bestPlatform.price);
  if (mrpEl) mrpEl.textContent = formatINR(product.mrp);

  const saveAmount = highestPlatform.price - bestPlatform.price;
  if (savingsEl) {
    savingsEl.innerHTML = `You save <strong>${formatINR(saveAmount)}</strong> by choosing ${bestPlatform.store}!`;
  }
  if (bestStoreEl) bestStoreEl.textContent = `Lowest price on ${bestPlatform.store}`;
  if (imgEl) imgEl.src = product.image;

  // Render Specifications
  renderSpecs(product.specs);

  // Render Multi-Platform Price Table
  renderPlatformTable(sortedPlatforms);

  // Render Price Trend Stats
  renderTrendStats(product.priceHistory);

  // Render Trend Graph
  renderTrendCanvas(product.priceHistory);

  // Render AI Prediction Engine
  renderPrediction(product.prediction, bestPlatform.price);

  // Scroll to comparison dashboard smoothly
  document.getElementById("main-comparison-view")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

// Render Specs
function renderSpecs(specs) {
  const container = document.getElementById("specs-container");
  if (!container) return;
  const entries = Object.entries(specs);
  container.innerHTML = entries.map(([key, val]) => `
    <div class="spec-item">
      <span class="spec-label">${key.toUpperCase()}:</span>
      <strong class="spec-val">${val}</strong>
    </div>
  `).join("");
}

// Render Platforms Comparison List
function renderPlatformTable(platforms) {
  const container = document.getElementById("platforms-list");
  if (!container) return;

  const minPrice = platforms[0].price;

  container.innerHTML = platforms.map((p, idx) => {
    const isBest = p.price === minPrice;
    const diff = p.price - minPrice;

    return `
      <div class="platform-card ${isBest ? 'is-best-price' : ''}">
        <div class="p-col store-info">
          <div class="store-badge-wrap">
            <span class="store-logo-icon">${p.logo}</span>
            <div>
              <div class="store-name-line">
                <h4 class="store-name">${p.store}</h4>
                ${isBest ? `<span class="badge-best-price">🏆 BEST PRICE</span>` : `<span class="badge-store-tag">${p.badge}</span>`}
              </div>
              <p class="seller-line">${p.seller} · ★ ${p.rating}</p>
            </div>
          </div>
        </div>

        <div class="p-col delivery-col">
          <div class="delivery-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
            <span>${p.delivery}</span>
          </div>
          <p class="offers-text">🏷️ ${p.offers}</p>
        </div>

        <div class="p-col pricing-col">
          <div class="price-stack">
            <div class="selling-price">${formatINR(p.price)}</div>
            <div class="mrp-row">
              <span class="orig-mrp">${formatINR(p.originalPrice)}</span>
              <span class="discount-pill">${p.discount}</span>
            </div>
          </div>
          ${!isBest ? `<small class="price-diff-text">+${formatINR(diff)} vs cheapest</small>` : `<small class="price-diff-best">Lowest across all tested portals</small>`}
        </div>

        <div class="p-col action-col">
          <a href="${p.url}" target="_blank" rel="noopener noreferrer" class="btn-buy-deal ${isBest ? 'btn-buy-primary' : 'btn-buy-secondary'}">
            <span>Go to Store</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          </a>
        </div>
      </div>
    `;
  }).join("");
}

// Render Price Trend Stats
function renderTrendStats(history) {
  const lowestEl = document.getElementById("stat-lowest-price");
  const lowestDateEl = document.getElementById("stat-lowest-date");
  const highestEl = document.getElementById("stat-highest-price");
  const highestDateEl = document.getElementById("stat-highest-date");
  const avgEl = document.getElementById("stat-avg-price");
  const currentEl = document.getElementById("stat-current-price");

  if (lowestEl) lowestEl.textContent = formatINR(history.lowest);
  if (lowestDateEl) lowestDateEl.textContent = history.lowestDate;
  if (highestEl) highestEl.textContent = formatINR(history.highest);
  if (highestDateEl) highestDateEl.textContent = history.highestDate;
  if (avgEl) avgEl.textContent = formatINR(history.average);
  if (currentEl) currentEl.textContent = formatINR(history.currentBest);
}

// Render Interactive Canvas Line Chart
function renderTrendCanvas(history) {
  const canvas = document.getElementById("price-trend-canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();

  canvas.width = rect.width * dpr;
  canvas.height = 320 * dpr;
  ctx.scale(dpr, dpr);

  const w = rect.width;
  const h = 320;
  const padLeft = 70;
  const padRight = 30;
  const padTop = 30;
  const padBottom = 40;

  ctx.clearRect(0, 0, w, h);

  // Compute scale
  let allVals = [];
  history.series.forEach(s => allVals.push(...s.data));
  const minVal = Math.min(...allVals) * 0.95;
  const maxVal = Math.max(...allVals) * 1.05;
  const valRange = maxVal - minVal || 1;

  const plotW = w - padLeft - padRight;
  const plotH = h - padTop - padBottom;
  const pointsCount = history.dates.length;

  // Grid lines
  ctx.strokeStyle = "rgba(255, 255, 255, 0.07)";
  ctx.lineWidth = 1;
  const gridSteps = 4;

  ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
  ctx.font = "11px -apple-system, sans-serif";
  ctx.textAlign = "right";

  for (let i = 0; i <= gridSteps; i++) {
    const y = padTop + (plotH / gridSteps) * i;
    const val = maxVal - (valRange / gridSteps) * i;
    ctx.beginPath();
    ctx.moveTo(padLeft, y);
    ctx.lineTo(w - padRight, y);
    ctx.stroke();

    ctx.fillText(formatINR(Math.round(val)), padLeft - 10, y + 4);
  }

  // X Axis Dates
  ctx.textAlign = "center";
  history.dates.forEach((date, i) => {
    const x = padLeft + (plotW / (pointsCount - 1)) * i;
    ctx.fillText(date, x, h - 12);
  });

  // Plot Series Lines
  history.series.forEach((s) => {
    const pts = s.data.map((val, i) => {
      const x = padLeft + (plotW / (pointsCount - 1)) * i;
      const y = padTop + plotH - ((val - minVal) / valRange) * plotH;
      return { x, y, val };
    });

    // Draw Line
    ctx.strokeStyle = s.color;
    ctx.lineWidth = 2.8;
    ctx.beginPath();
    pts.forEach((pt, i) => {
      if (i === 0) ctx.moveTo(pt.x, pt.y);
      else {
        // Smooth bezier curve
        const prev = pts[i - 1];
        const cx = (prev.x + pt.x) / 2;
        ctx.bezierCurveTo(cx, prev.y, cx, pt.y, pt.x, pt.y);
      }
    });
    ctx.stroke();

    // Draw points
    pts.forEach((pt, i) => {
      ctx.fillStyle = "#0f172a";
      ctx.beginPath();
      ctx.arc(pt.x, pt.y, 4.5, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = s.color;
      ctx.beginPath();
      ctx.arc(pt.x, pt.y, 3, 0, Math.PI * 2);
      ctx.fill();
    });
  });

  // Legend
  const legendEl = document.getElementById("chart-legend");
  if (legendEl) {
    legendEl.innerHTML = history.series.map(s => `
      <div class="legend-chip">
        <span class="legend-color-dot" style="background-color: ${s.color}"></span>
        <span>${s.store}</span>
      </div>
    `).join("");
  }
}

// Render AI Prediction Engine
function renderPrediction(pred, currentBestPrice) {
  const badgeEl = document.getElementById("prediction-verdict-badge");
  const titleEl = document.getElementById("prediction-title");
  const subEl = document.getElementById("prediction-subtitle");
  const confEl = document.getElementById("prediction-confidence");
  const confBarEl = document.getElementById("prediction-confidence-bar");
  const lowestForecastEl = document.getElementById("prediction-forecast-lowest");
  const trendEl = document.getElementById("prediction-trend-label");
  const dropDateEl = document.getElementById("prediction-drop-date");
  const signalsContainer = document.getElementById("prediction-signals-list");

  if (badgeEl) {
    badgeEl.className = `verdict-badge ${pred.badgeClass}`;
    badgeEl.textContent = pred.verdictTitle;
  }
  if (titleEl) titleEl.textContent = pred.verdictTitle;
  if (subEl) subEl.textContent = pred.verdictSubtitle;
  if (confEl) confEl.textContent = `${pred.confidence}% Confidence`;
  if (confBarEl) confBarEl.style.width = `${pred.confidence}%`;
  if (lowestForecastEl) lowestForecastEl.textContent = formatINR(pred.forecastLowest);
  
  if (trendEl) {
    if (pred.forecastTrend === "falling") {
      trendEl.innerHTML = `<span style="color: #10b981;">📉 Price Falling (Expected Drop)</span>`;
    } else if (pred.forecastTrend === "rising") {
      trendEl.innerHTML = `<span style="color: #ef4444;">📈 Price Rising Soon (High Demand)</span>`;
    } else {
      trendEl.innerHTML = `<span style="color: #3b82f6;">➡️ Stable at Floor Level</span>`;
    }
  }

  if (dropDateEl) dropDateEl.textContent = pred.expectedDropDate;

  if (signalsContainer) {
    signalsContainer.innerHTML = pred.signals.map(s => {
      let icon = "🟢";
      if (s.status === "warning") icon = "🟡";
      if (s.status === "caution") icon = "🔴";
      if (s.status === "neutral") icon = "⚪";

      return `
        <div class="signal-row">
          <span class="sig-icon">${icon}</span>
          <div class="sig-content">
            <span class="sig-title">${s.label}</span>
            <strong class="sig-desc">${s.val}</strong>
          </div>
        </div>
      `;
    }).join("");
  }
}

// Price Alert Tracker Modal
function initPriceAlertModal() {
  const modal = document.getElementById("price-alert-modal");
  const openBtns = document.querySelectorAll(".btn-open-alert");
  const closeBtn = document.getElementById("close-alert-modal");
  const alertForm = document.getElementById("price-alert-form");
  const targetPriceInput = document.getElementById("alert-target-price");

  openBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      if (modal) {
        modal.classList.add("open");
        if (targetPriceInput && currentProduct) {
          const best = Math.min(...currentProduct.platforms.map(p => p.price));
          targetPriceInput.value = Math.round(best * 0.95);
        }
      }
    });
  });

  closeBtn?.addEventListener("click", () => {
    modal?.classList.remove("open");
  });

  modal?.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.remove("open");
  });

  alertForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("alert-email")?.value;
    const target = targetPriceInput?.value;
    alert(`✅ Price Drop Alert Active!\nWe will notify you at ${email} as soon as ${currentProduct.name} hits ${formatINR(target)} or lower.`);
    modal?.classList.remove("open");
  });
}

// Popular Catalog Grid
function renderCatalogGrid() {
  const container = document.getElementById("catalog-grid");
  if (!container) return;

  container.innerHTML = PRELOADED_PRODUCTS.map(p => {
    const best = Math.min(...p.platforms.map(x => x.price));
    return `
      <div class="catalog-card" data-id="${p.id}">
        <div class="card-img-wrap">
          <img src="${p.image}" alt="${p.name}" loading="lazy">
          <span class="cat-brand-pill">${p.brand}</span>
        </div>
        <div class="card-details">
          <h4 class="card-title">${p.name}</h4>
          <div class="card-price-row">
            <span class="card-best-label">Best Price:</span>
            <strong class="card-price-val">${formatINR(best)}</strong>
          </div>
          <div class="card-footer-stores">
            <small>Compared across 5+ stores</small>
            <span class="btn-card-compare">Compare →</span>
          </div>
        </div>
      </div>
    `;
  }).join("");

  container.addEventListener("click", (e) => {
    const card = e.target.closest(".catalog-card");
    if (!card) return;
    const id = card.dataset.id;
    const p = PRELOADED_PRODUCTS.find(x => x.id === id);
    if (p) loadProduct(p);
  });
}

// Window Resize for Canvas Redraw
window.addEventListener("resize", () => {
  if (currentProduct && currentProduct.priceHistory) {
    renderTrendCanvas(currentProduct.priceHistory);
  }
});

// App Bootstrap
document.addEventListener("DOMContentLoaded", () => {
  initSearch();
  initPriceAlertModal();
  renderCatalogGrid();
  loadProduct(PRELOADED_PRODUCTS[0]);

  // Time range tabs
  document.querySelectorAll(".time-range-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".time-range-tab").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      activeTimeRange = tab.dataset.range;
      if (currentProduct) {
        renderTrendCanvas(currentProduct.priceHistory);
      }
    });
  });
});
