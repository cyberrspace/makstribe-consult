export const site = {
  name: "Makstribe Consult Ltd",
  shortName: "Makstribe",
  suffix: "Consult Ltd",
  domain: "makstribeconsult.com",
  url: "https://makstribeconsult.com",
  email: "makstribebusiness@gmail.com",
  hours: "Mon – Fri, async-friendly",
  coverage: "Clients worldwide",
  description:
    "Makstribe Consult Ltd is a multi-service digital agency for founders, authors and small businesses. Digital marketing, web development, grant applications, resume optimization and book publishing — scoped, priced and delivered as projects.",
} as const;

export const nav = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export type Service = {
  id: string;
  number: string;
  title: string;
  blurb: string;
  points: string[];
};

export const services: Service[] = [
  {
    id: "digital-marketing",
    number: "01",
    title: "Digital Marketing",
    blurb:
      "End-to-end campaigns that move the needle. We plan, run and optimize across the channels that actually bring revenue into your business.",
    points: [
      "Email marketing & automation",
      "Social media management",
      "Amazon PPC campaigns",
    ],
  },
  {
    id: "web-development",
    number: "02",
    title: "Web Development",
    blurb:
      "Fast, modern websites that look the part and hold up under load. From single-page sites to multi-page business platforms — built to convert, easy to maintain.",
    points: [
      "Marketing sites & landing pages",
      "Custom builds & redesigns",
      "Performance & SEO foundations",
    ],
  },
  {
    id: "grant-applications",
    number: "03",
    title: "Grant Application Support",
    blurb:
      "Well-structured applications that give you a real shot at funding. We help you tell the right story to the right reviewers.",
    points: [
      "Proposal writing & editing",
      "Narrative & budget alignment",
      "Eligibility & fit review",
    ],
  },
  {
    id: "resume-optimization",
    number: "04",
    title: "Resume Optimization",
    blurb:
      "Resumes that get past automated screens and earn human attention. ATS-aware formatting, sharp positioning and copy tuned for the role you actually want.",
    points: [
      "ATS-optimized formatting",
      "Role-specific positioning",
      "LinkedIn alignment",
    ],
  },
  {
    id: "book-publishing",
    number: "05",
    title: "Book Publishing Services",
    blurb:
      "End-to-end support for authors — from manuscript to market. Cover design, interior layout and content optimization that helps your book actually sell.",
    points: [
      "Cover & interior design",
      "Content & blurb optimization",
      "Publishing-ready files",
    ],
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Discovery",
    body: "We learn your goals, your constraints, and what success actually looks like for this project.",
  },
  {
    number: "02",
    title: "Proposal",
    body: "You get a written scope, a timeline and a single invoice. No retainer hooks, no surprises.",
  },
  {
    number: "03",
    title: "Delivery",
    body: "We do the work, with checkpoints along the way. You always know where things stand.",
  },
  {
    number: "04",
    title: "Handover",
    body: "You get the final deliverables, plus everything you need to keep momentum after we are done.",
  },
] as const;

export const principles = [
  {
    title: "Project-based, always",
    body: "Defined scope. Defined price. Defined outcome. You know what you are getting before you sign off.",
  },
  {
    title: "Multidisciplinary by design",
    body: "Marketing, development, writing and design under one roof. No vendor juggling, no context lost between teams.",
  },
  {
    title: "Global, asynchronous",
    body: "We work across time zones with clients on multiple continents. Clear written communication is a feature, not a workaround.",
  },
  {
    title: "Honest about fit",
    body: "If we are not the right team for your project, we say so — and point you somewhere better.",
  },
] as const;

export const serviceOptions = [
  ...services.map((s) => s.title),
  "Not sure yet — help me choose",
];
