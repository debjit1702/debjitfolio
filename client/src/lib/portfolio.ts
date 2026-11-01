export const profile = {
  name: "Debjit Biswas",
  role: "Fullstack Software Engineer",
  city: "Kolkata, West Bengal",
  email: "debjitbiswas529@gmail.com",
  avatar: "https://avatars.githubusercontent.com/u/124700378?v=4",
};

export const socials = [
  { label: "GitHub", href: "https://github.com/debjit1702", detail: "Code, experiments & open source", kind: "github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/debjit-biswas-350783215", detail: "Professional corner of the internet", kind: "linkedin" },
  { label: "Email", href: "mailto:debjitbiswas529@gmail.com", detail: "debjitbiswas529@gmail.com", kind: "email" },
  { label: "Instagram", href: "https://www.instagram.com/debjit_1702/", detail: "Small slices of life", kind: "instagram" },
  { label: "Resume", href: "https://drive.google.com/file/d/1gd03anrsgcOZcKerIK90nzBw8xt1qlIL/view?usp=sharing", detail: "Open the Google Drive copy", kind: "resume" },
] as const;

export const platforms = [
  { label: "LeetCode", handle: "@_debjit", href: "https://leetcode.com/u/_debjit/", icon: "LC", color: "leetcode", solved: "6 public solves" },
  { label: "Codeforces", handle: "debjitbiswas529", href: "https://codeforces.com/profile/debjitbiswas529", icon: "CF", color: "codeforces", solved: "0 public solves" },
  { label: "HackerRank", handle: "@debjitb689", href: "https://www.hackerrank.com/profile/debjitb689", icon: "HR", color: "hackerrank", solved: "Count not listed" },
  { label: "HackerEarth", handle: "@debjitbiswas529", href: "https://www.hackerearth.com/@debjitbiswas529/", icon: "HE", color: "hackerearth", solved: "Count not listed" },
] as const;

export type Project = {
  number: string;
  name: string;
  status: "live" | "reserved";
  description: string;
  technologies: string[];
  date: string;
  href?: string;
  image?: string;
  color: string;
};

export const projects: Project[] = [
  {
    number: "01",
    name: "Autojobs",
    status: "live",
    description: "A job-search copilot that checks a résumé against a role, then helps shape the application around the gaps.",
    technologies: ["Next.js 14", "TypeScript", "Gemini 2.5 Flash", "Prisma"],
    date: "03 May 2026 · repo start",
    href: "https://autojobs-mu.vercel.app/",
    image: "/cover-autojobs.webp",
    color: "lavender",
  },
  {
    number: "02",
    name: "Resumind",
    status: "live",
    description: "An AI-assisted résumé analyser for making the next edit a little more intentional.",
    technologies: ["JavaScript", "React", "Vite"],
    date: "19 Jul 2025 · repo start",
    href: "https://resumind-beige.vercel.app/auth?next=/",
    image: "/cover-resumind.webp",
    color: "tomato",
  },
  {
    number: "03",
    name: "Research Relay",
    status: "live",
    description: "A multi-agent research workflow that searches, reads, drafts and critiques a report from one question.",
    technologies: ["Python", "Streamlit", "LangGraph", "Tavily"],
    date: "12 Aug 2026 · repo start",
    href: "https://researchrelay.streamlit.app/",
    image: "/cover-researchrelay.webp",
    color: "chartreuse",
  },
  { number: "04", name: "A little room to build", status: "reserved", description: "This space is being saved for the next thing worth shipping.", technologies: ["Open slot"], date: "When it’s ready", color: "soft-lavender" },
  { number: "05", name: "Next idea, loading", status: "reserved", description: "No filler project here. Just a clean canvas for what comes next.", technologies: ["Open slot"], date: "When it’s ready", color: "soft-tomato" },
  { number: "06", name: "More soon", status: "reserved", description: "A placeholder with a purpose: something real will go here later.", technologies: ["Open slot"], date: "When it’s ready", color: "soft-chartreuse" },
];

export const resumeUrl = "https://drive.google.com/file/d/1gd03anrsgcOZcKerIK90nzBw8xt1qlIL/view?usp=sharing";
