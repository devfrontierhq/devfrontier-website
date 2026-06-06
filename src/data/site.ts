import type { NavLink, SocialLink } from "@/types/site";

export const SITE = {
  name: "DevFrontier",
  tagline: "一起探索技術邊界",
  heroSubtitle: "專注於 JavaScript 與 AI 前沿技術，串連實戰經驗與開源精神，打造台灣開發者的技術聚落。",
  description: "軟體開發社群 — JavaScript、AI 技術分享與協作",
  intro: "DevFrontier 是一個以 JavaScript 開發者為核心的技術社群，致力於探索 AI 時代的軟體開發方式、工具與文化。",
  url: "https://devfrontier.dev",
} as const;

export const ABOUT_PARAGRAPHS = [
  "DevFrontier 是一個以 JavaScript 開發者為核心的技術社群，致力於探索 AI 時代的軟體開發方式、工具與文化。我們希望在快速變化的技術浪潮中，提供一個讓開發者交流、學習與共同成長的平台，讓台灣的 JavaScript 開發者能夠持續站在全球技術發展的前沿。",
  "近年來，隨著人工智慧與開發工具快速演進，軟體開發的方式正經歷前所未有的轉變。",
  "AI 不僅改變了產品形態，也正在重新定義開發者的工作流程、技術選擇與工程文化。",
  "在這樣的背景下，我們希望建立一個能夠聚焦於 「JavaScript 開發者如何在 AI 時代持續進化」 的社群，讓開發者能夠共同探索未來的軟體開發模式。",
] as const;

export const NAV_LINKS: NavLink[] = [
  { href: "/events", label: "活動" },
  { href: "/community", label: "參與社群" },
  { href: "/about", label: "關於我們" },
  { href: "/faq", label: "常見問題" },
];

export const SITE_CTAS = {
  primary: { href: "/events", label: "查看近期活動" },
  secondary: { href: "/community", label: "參與社群" },
} as const satisfies Record<"primary" | "secondary", NavLink>;

export const SITE_LINKS = {
  /** 表單系統（報名、志工、贊助等） */
  forms: "https://example.com/forms",
  sponsorship: "https://example.com/sponsor",
  volunteer: "https://example.com/volunteer",
} as const;

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "Facebook", href: "https://www.facebook.com/devfrontierhq", icon: "facebook" },
  { label: "Instagram", href: "https://www.instagram.com/devfrontierhq", icon: "instagram" },
  { label: "Threads", href: "https://www.threads.com/@devfrontierhq", icon: "threads" },
  { label: "Bluesky", href: "https://bsky.app/profile/devfrontier.bsky.social", icon: "bluesky" },
];
