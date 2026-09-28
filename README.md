# TechRise — Elevate Your Digital Presence
> Production-ready, modern business website for **TechRise** (Founded by **Deepak Gupta**).

[![Built with Vite](https://img.shields.io/badge/Vite-7.3-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

---

## 🌟 Business Overview

- **Brand:** TechRise
- **Tagline:** Elevate Your Digital Presence
- **Founder:** Deepak Gupta (Lead Frontend Architect)
- **Domain:** [techrise.in](https://techrise.in)
- **Email:** `techrise.digitalservices@gmail.com`
- **Phone / WhatsApp:** `+91-9643080715`
- **Target Audience:** Small businesses, startups, cafes & restaurants, travel agencies, local businesses, and international clients seeking fast, high-converting web applications.

---

## 🚀 Key Features & Architecture

1. **Sticky Navigation:**
   - TechRise brand logo with ascending geometric growth symbol.
   - Smooth navigation with active section indicator, "Get a Free Consultation" CTA, and accessible mobile slide-over drawer with focus management.
2. **Hero Section:**
   - Compelling headline: *"Websites That Help Your Business Grow."*
   - Interactive Live Device Preview Switcher (Desktop / Tablet / Mobile).
   - Core Web Vitals performance badge and honest trust statement.
3. **4 Core Services:**
   - *Business Website Development* (Starting ₹15,000 / $220)
   - *Landing Page Development* (Starting ₹8,000 / $120)
   - *Website Redesign & Modernization* (Starting ₹12,000 / $180)
   - *Website Maintenance & Support* (Starting ₹4,000/mo / $60/mo)
   - Dynamic `"Discuss This Service"` CTA that scrolls to contact and pre-selects the service in the enquiry form.
4. **Why Choose TechRise & Comparison Matrix:**
   - 6 honest value pillars (Direct Founder Access, Blazing Speed, Pixel-Perfect Mobile UI, Transparent Pricing, Clean Code, Post-Launch Support).
   - Side-by-side comparison matrix against traditional bloated agencies and low-cost freelance marketplaces.
5. **Curated Portfolio with Case Studies:**
   - Filterable by *All Projects*, *Business Websites*, *Landing Pages*, and *Web Applications*.
   - Includes real showcases: **Cafe DOS Agra**, **UrbanStayz**, **PlatinumVoyage Travels**, **TuneMasters Academy**, and **TaskFlow Pro**.
   - Interactive **ProjectModal** for in-depth architecture breakdowns and live demo access.
6. **5-Step Development Roadmap:**
   - *Discovery* → *Proposal* → *Design & Development* → *Testing & Review* → *Launch & Handover* with explicit client expectation callouts.
7. **Transparent Pricing & Interactive Cost Estimator:**
   - Multi-currency toggle (**INR ₹** and **USD $** for global clients).
   - Interactive ballpark estimator slider allowing clients to customize pages, features, and send custom scope directly to the founder.
8. **Testimonials & Integrity Standard:**
   - High-integrity section with founder commitments and dynamic array ready to display verified client feedback.
9. **Lead Generation & Contact Section:**
   - Comprehensive form with client-side validation, error handling, loading states, and success notifications.
   - Instant WhatsApp prefilled chat integration (`+91-9643080715`).
   - Web3Forms / Formspree API compatibility with mailto fallback.
10. **Interactive FAQ Accordion:**
    - Categorized Q&A covering timelines, hosting, payments, CMS, and post-launch support.
11. **Technical SEO & Production Optimization:**
    - Full Open Graph, Twitter Cards, Schema.org `ProfessionalService` JSON-LD in `index.html`.
    - `robots.txt`, `sitemap.xml`, and `vercel.json` with security headers and asset caching.

---

## 📁 Project Directory Structure

```
F:\Vite\techrise\
├── index.html                  # Main HTML with SEO meta tags & Schema JSON-LD
├── package.json                # Project dependencies & scripts
├── vite.config.js              # Vite + Tailwind v4 config
├── vercel.json                 # Security headers & SPA rewrites
├── .env.example                # Sample environment variables
├── .gitignore                  # Git ignore rules
├── public/
│   ├── favicon.svg             # TechRise brand mark favicon
│   ├── robots.txt              # Search crawler rules
│   └── sitemap.xml             # XML Sitemap for search engines
└── src/
    ├── main.jsx                # Application root entrypoint
    ├── App.jsx                 # Main layout & section orchestrator
    ├── index.css               # Design system & Tailwind v4 theme
    ├── components/
    │   ├── Navbar.jsx          # Header & mobile drawer
    │   ├── Hero.jsx            # Hero section with interactive preview
    │   ├── Services.jsx        # 4 Core services & capabilities
    │   ├── WhyChooseUs.jsx     # Value pillars & comparison table
    │   ├── Portfolio.jsx       # Project gallery & category filter
    │   ├── ProjectModal.jsx    # Case study detail modal
    │   ├── Process.jsx         # 5-Step execution roadmap
    │   ├── Pricing.jsx         # Transparent pricing & currency toggle
    │   ├── CostEstimator.jsx   # Interactive scope calculator
    │   ├── AboutFounder.jsx    # Deepak Gupta founder profile & toolkit
    │   ├── Testimonials.jsx    # Verified review commitments
    │   ├── ContactSection.jsx  # Lead generation form & WhatsApp
    │   ├── FAQ.jsx             # Categorized accordion
    │   ├── QuickConsultModal.jsx # 15-min consultation booking
    │   ├── WhatsAppFloatingBtn.jsx # Floating WhatsApp action button
    │   ├── LegalModals.jsx     # Privacy Policy & Terms modals
    │   ├── BrandIcons.jsx      # SVG brand icons
    │   └── Footer.jsx          # Footer with live IST clock
    └── data/
        ├── siteConfig.js       # Business metadata & contact details
        ├── servicesData.js     # Services & capabilities
        ├── portfolioData.js    # Projects & case studies
        ├── whyChooseData.js    # Value points & comparison matrix
        ├── processData.js      # 5-step development process
        ├── pricingData.js      # Pricing tiers & commercial terms
        ├── faqData.js          # Frequently asked questions
        └── testimonialsData.js # Verified client reviews data
```

---

## 💻 Local Development Setup

### 1. Install Dependencies
```bash
cd F:\Vite\techrise
npm install
```

### 2. Start Dev Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build & Test
```bash
npm run build
npm run preview
```

---

## 🌐 Deploying to Vercel & Connecting techrise.in

### Step 1: Push Code to GitHub
1. Create a new repository on GitHub (e.g. `https://github.com/deepakguptabvp/techrise`).
2. In PowerShell, run:
```bash
cd F:\Vite\techrise
git init
git add .
git commit -m "feat: complete production TechRise website"
git branch -M main
git remote add origin https://github.com/deepakguptabvp/techrise.git
git push -u origin main
```

### Step 2: Import to Vercel
1. Go to [vercel.com](https://vercel.com) and log in.
2. Click **"Add New Project"** → Import the `techrise` repository.
3. Framework preset will automatically detect **Vite**.
4. Click **Deploy**.

### Step 3: Connect Custom Domain `techrise.in`
1. In your Vercel project dashboard, go to **Settings** → **Domains**.
2. Enter `techrise.in` and click **Add**.
3. In your domain registrar DNS settings (e.g. GoDaddy, Namecheap, Hostinger), add the following records:

| Type | Name | Value | TTL |
|---|---|---|---|
| **A** | `@` | `76.76.21.21` | Automatic / 300 |
| **CNAME** | `www` | `cname.vercel-dns.com.` | Automatic / 300 |

4. Vercel will automatically verify DNS and issue a free SSL certificate within a few minutes.

---

## 🛠️ How to Customize Content

### 1. Update Pricing Tiers
Open [`src/data/pricingData.js`](file:///F:/Vite/techrise/src/data/pricingData.js) and modify prices, feature bullet points, or turnaround times.

### 2. Add Real Project Screenshots
1. Save your project screenshot in `src/assets/` (e.g. `cafe-dos-preview.webp`).
2. Open [`src/data/portfolioData.js`](file:///F:/Vite/techrise/src/data/portfolioData.js) and update the `demoUrl` or visual parameters.

### 3. Add Verified Client Reviews
Open [`src/data/testimonialsData.js`](file:///F:/Vite/techrise/src/data/testimonialsData.js) and add objects to the `verifiedTestimonials` array:
```javascript
export const verifiedTestimonials = [
  {
    id: "1",
    clientName: "Rohan Verma",
    role: "Founder",
    businessName: "Cafe DOS Agra",
    quote: "Deepak delivered an outstanding, ultra-fast website for our cafe. Our online reservations increased significantly.",
    rating: 5,
    projectDelivered: "Business Website Development"
  }
];
```

### 4. Enable Backend Form Submissions (Web3Forms)
1. Sign up for a free access key at [web3forms.com](https://web3forms.com) (no backend required).
2. Create a file `.env.local` in `F:\Vite\techrise\` with:
```env
VITE_WEB3FORMS_ACCESS_KEY="your-access-key-here"
```
3. All form submissions will be delivered directly to `techrise.digitalservices@gmail.com`.

---

## 📄 License
Created for **TechRise** & **Deepak Gupta**. All rights reserved.
