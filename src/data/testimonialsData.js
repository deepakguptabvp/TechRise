/**
 * Testimonial data structure for TechRise.
 * 
 * NOTE ON CLIENT INTEGRITY:
 * We do not invent fake reviews, stock identities, or artificial 5-star ratings.
 * Real verified client testimonials from completed projects will be displayed here once approved.
 * 
 * To add a genuine review:
 * Add an object into verifiedTestimonials array below with:
 * {
 *   id: "1",
 *   clientName: "Client Name",
 *   role: "Founder / Marketing Head",
 *   businessName: "Business Name",
 *   location: "City, Country",
 *   projectDelivered: "Business Website Development",
 *   quote: "Their verified review text...",
 *   rating: 5,
 *   avatar: "url or null",
 *   projectLink: "optional url"
 * }
 */

export const verifiedTestimonials = [
  // Genuine reviews will be populated here as clients provide written consent.
];

export const clientCommitmentPoints = [
  {
    title: "100% Direct Developer Accountability",
    description: "No middle-tier account managers. You speak directly with the developer building your digital product."
  },
  {
    title: "Zero Artificial Bloatware",
    description: "Every line of code is purpose-built for speed, search visibility, and smooth conversion."
  },
  {
    title: "Post-Launch Warranty",
    description: "14 to 30 days of dedicated technical warranty and hands-on guidance after go-live."
  }
];
