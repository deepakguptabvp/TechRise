export const portfolioCategories = [
  { id: "all", label: "All Projects" },
  { id: "business", label: "Business Websites" },
  { id: "landing", label: "Landing Pages" },
  { id: "webapp", label: "Web Applications" }
];

export const portfolioProjects = [
  {
    id: "cafe-dos-agra",
    title: "Cafe DOS Agra",
    category: "business",
    tagline: "Atmospheric Single-Page Café & Dining Web Experience",
    summary: "A warm, high-converting digital storefront for an artisanal café featuring interactive digital menus, chef specials, ambience gallery, customer testimonials, and instant table reservation enquiries.",
    clientType: "Artisanal Café & Hospitality",
    duration: "10 Days",
    servicesDelivered: [
      "Custom UI/UX Design & Brand Styling",
      "Interactive Digital Categorized Menu",
      "Ambience & Food Gallery Showcase",
      "WhatsApp Instant Table Reservation Form",
      "Google Maps & Local SEO Schema Integration"
    ],
    techStack: ["React.js", "Tailwind CSS", "Lucide Icons", "Vite"],
    features: [
      "Categorized Menu tabs (Coffee, Beverages, Starters, Main Course)",
      "Chef Favourites spotlight with visual tags and dietary labels",
      "Dynamic photo gallery highlighting ambience and seating options",
      "Mobile-friendly direct WhatsApp reservation button",
      "Smooth scroll navigation and one-tap calling integration"
    ],
    demoUrl: "https://urbanstayz-gray.vercel.app/", // Replaceable live URL
    demoStatus: "Client Showcase Demo",
    colorAccent: "#F59E0B",
    badge: "Hospitality & Dining",
    accentGradient: "from-amber-500/20 via-orange-500/10 to-transparent",
    previewType: "cafe"
  },
  {
    id: "urbanstayz",
    title: "UrbanStayz Discovery Platform",
    category: "webapp",
    tagline: "Modern PG & Student Accommodation Finding Platform",
    summary: "A sleek, responsive discovery web application that simplifies searching for vetted paying guest (PG) accommodations, co-living spaces, and student rooms with real-time amenity filters and inquiry routing.",
    clientType: "PropTech & Student Housing Startup",
    duration: "3 Weeks",
    servicesDelivered: [
      "Full Frontend Architecture & Component System",
      "Search & Dynamic Filter Engineering (Location, Rent, Gender, Amenities)",
      "Interactive Property Detail Pages & Photo Sliders",
      "Booking & Visit Scheduling Modal Workflows",
      "Performance Optimization for 4G Mobile Devices"
    ],
    techStack: ["React.js", "Tailwind CSS", "JavaScript", "Vite", "Vercel"],
    features: [
      "Live search with location and budget filter sliders",
      "Detailed property cards with verified badges and amenity icons",
      "Interactive schedule-a-visit booking enquiry flow",
      "Clean responsive card grid with zero layout shift",
      "Fast page transitions and lightweight bundle architecture"
    ],
    demoUrl: "https://urbanstayz-gray.vercel.app/",
    demoStatus: "Live Public Application",
    colorAccent: "#06B6D4",
    badge: "PropTech Web App",
    accentGradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
    previewType: "property"
  },
  {
    id: "platinum-voyage-travels",
    title: "PlatinumVoyage Travels",
    category: "business",
    tagline: "Luxury Holiday & Tour Curation Web Portal",
    summary: "An elegant travel curation website designed for a boutique travel agency. Showcases curated international destination packages, seasonal holiday itineraries, customer reviews, and custom itinerary quotation requests.",
    clientType: "Boutique Travel Agency",
    duration: "2 Weeks",
    servicesDelivered: [
      "Luxury Editorial Travel Design & Typography",
      "Destination Package Catalog with Day-by-Day Itineraries",
      "Custom Travel Quote & Consultation Request Engine",
      "WhatsApp & Direct Call Quick-Enquiry Links",
      "SEO-friendly Destination Guides Foundation"
    ],
    techStack: ["React.js", "Tailwind CSS", "Lucide Icons", "Vite"],
    features: [
      "Featured destination cards with duration, pricing, and key inclusions",
      "Interactive day-by-day tour itinerary accordion view",
      "Custom package inquiry modal with pre-selected travel dates and destination",
      "High-resolution visual showcase with optimized WebP asset loading",
      "Fast mobile navigation optimized for travelers on the go"
    ],
    demoUrl: "https://tune-masters-academy.vercel.app/", // Replaceable live URL
    demoStatus: "Client Showcase Demo",
    colorAccent: "#3B82F6",
    badge: "Travel & Leisure",
    accentGradient: "from-blue-500/20 via-indigo-500/10 to-transparent",
    previewType: "travel"
  },
  {
    id: "tunemasters-academy",
    title: "TuneMasters Creative Academy",
    category: "landing",
    tagline: "Interactive Music Academy & Masterclass Landing Page",
    summary: "A high-conversion educational landing page built for a contemporary music academy, designed to drive trial class bookings, showcase mentor credentials, and present course curriculums.",
    clientType: "Creative Academy & E-Learning",
    duration: "1 Week",
    servicesDelivered: [
      "High-energy Modern Dark UI Design",
      "Interactive Course Curriculum Explorer",
      "Free Trial Class Registration Lead Funnel",
      "Mentor Showcase & Student Success Audio/Video Previews",
      "Conversion Rate Optimization Structure"
    ],
    techStack: ["React.js", "TypeScript", "Tailwind CSS", "Vite"],
    features: [
      "Course selector with pricing tiers and module breakdowns",
      "Interactive instructor cards with instrument specializations",
      "One-click free trial session booking modal",
      "Fast loading animations and responsive mobile layout"
    ],
    demoUrl: "https://tune-masters-academy.vercel.app/",
    demoStatus: "Live Public Application",
    colorAccent: "#8B5CF6",
    badge: "Education & Academy",
    accentGradient: "from-purple-500/20 via-pink-500/10 to-transparent",
    previewType: "music"
  },
  {
    id: "taskflow-pro",
    title: "TaskFlow Productivity App",
    category: "webapp",
    tagline: "Agile Task Management & Team Workflow Tool",
    summary: "A modern web application for managing daily deliverables, sprint milestones, and project deadlines with an intuitive kanban-inspired interface and status tracking.",
    clientType: "Productivity SaaS & Teams",
    duration: "2 Weeks",
    servicesDelivered: [
      "Component-Driven Frontend Architecture",
      "Interactive Task Status Filtering & Category Tagging",
      "Clean Dashboard Analytics & Progress Indicators",
      "Accessible Keyboard Shortcuts & Dark Mode Optimization"
    ],
    techStack: ["React.js", "Tailwind CSS", "JavaScript", "Vite"],
    features: [
      "Dynamic task status toggling and priority filtering",
      "Clean card-based board view with instant UI updates",
      "Zero page reloads with client-side state management",
      "Responsive layout from mobile screens to ultrawide monitors"
    ],
    demoUrl: "https://task-management-deepak.vercel.app/",
    demoStatus: "Live Public Application",
    colorAccent: "#10B981",
    badge: "Productivity SaaS",
    accentGradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    previewType: "app"
  }
];
