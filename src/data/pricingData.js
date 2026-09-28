export const pricingTiers = [
  {
    id: "landing-page",
    name: "Landing Page",
    tagline: "Perfect for single campaigns, product launches, or quick leads",
    startingPriceINR: 8000,
    priceDisplayINR: "₹8,000",
    startingPriceUSD: 120,
    priceDisplayUSD: "$120",
    billingSuffix: "starting price",
    turnaround: "4 to 7 business days",
    popular: false,
    badge: "Fast Launch",
    features: [
      "1 High-converting single page with up to 6 content sections",
      "Tailored mobile-responsive layout and typography",
      "Interactive lead capture form + WhatsApp direct chat",
      "Fast Core Web Vitals optimization (<1.5s load time)",
      "Basic on-page SEO meta tags & social share card",
      "Deployment to Vercel/Netlify with custom domain connect",
      "2 rounds of structured revisions included",
      "14 days post-launch technical warranty"
    ],
    servicePreset: "Landing Page Development",
    ctaText: "Choose Landing Page"
  },
  {
    id: "business-website",
    name: "Business Website",
    tagline: "The complete web foundation for modern businesses and startups",
    startingPriceINR: 15000,
    priceDisplayINR: "₹15,000",
    startingPriceUSD: 220,
    priceDisplayUSD: "$220",
    billingSuffix: "starting price",
    turnaround: "2 to 3 weeks",
    popular: true,
    badge: "Most Popular",
    features: [
      "Up to 5 custom responsive pages (Home, About, Services, Portfolio, Contact)",
      "Modern React & Tailwind CSS component architecture",
      "Engaging interactive elements, gallery, and testimonial showcases",
      "Contact form with email notification & spam protection",
      "Full technical SEO setup (Schema JSON-LD, Sitemap, Robots.txt)",
      "Full source code ownership on private/public GitHub repository",
      "3 rounds of structured revisions included",
      "30 days post-launch technical warranty & handover session"
    ],
    servicePreset: "Business Website Development",
    ctaText: "Choose Business Website"
  },
  {
    id: "custom-webapp",
    name: "Custom Web App / Redesign",
    tagline: "Tailored web applications, portals, and complex platform builds",
    startingPriceINR: 30000,
    priceDisplayINR: "Custom Quote",
    priceSubINR: "Starting from ₹30,000",
    startingPriceUSD: 400,
    priceDisplayUSD: "Custom Quote",
    priceSubUSD: "Starting from $400",
    billingSuffix: "scoped to requirements",
    turnaround: "3 to 6 weeks",
    popular: false,
    badge: "Tailored Architecture",
    features: [
      "Custom page counts, dynamic routing, and complex layouts",
      "Advanced filtering, search, catalog, or interactive dashboards",
      "REST API integration, backend database connectors, or CMS",
      "Payment gateway integration (Razorpay, Stripe, Cashfree)",
      "Authentication flows or interactive client portals",
      "Comprehensive performance and accessibility audits",
      "Milestone-based development with weekly preview demos",
      "45 days extended post-launch support warranty"
    ],
    servicePreset: "Website Redesign & Modernization",
    ctaText: "Request Custom Quote"
  },
  {
    id: "monthly-maintenance",
    name: "Care & Support Retainer",
    tagline: "Proactive maintenance and direct technical help every month",
    startingPriceINR: 4000,
    priceDisplayINR: "₹4,000",
    startingPriceUSD: 60,
    priceDisplayUSD: "$60",
    billingSuffix: "/ month",
    turnaround: "Priority 24-48h turnaround",
    popular: false,
    badge: "Peace of Mind",
    features: [
      "Up to 3 hours of content updates, banners, and text changes per month",
      "Security monitoring, SSL checks, and dependency updates",
      "Speed checks and broken link monitoring",
      "Priority bug resolution with direct founder WhatsApp access",
      "Monthly health report and traffic insights summary",
      "No long-term lock-in (cancel anytime with 15 days notice)"
    ],
    servicePreset: "Website Maintenance & Support",
    ctaText: "Discuss Support Plan"
  }
];

export const pricingTerms = [
  "Final pricing is transparently quoted based on exact page count, feature complexity, and third-party integrations.",
  "Domain registration, web hosting plans, and paid third-party APIs (e.g., SMS gateways, custom email suites) are charged separately at actual vendor costs.",
  "A clear milestone schedule is provided: typically 40% advance deposit to commence architecture, 40% on staging delivery, and 20% upon final launch & handover.",
  "Projects include defined revision rounds (2 to 3 depending on scope) to ensure prompt delivery and disciplined progress."
];
