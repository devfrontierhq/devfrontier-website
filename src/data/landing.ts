import type { HeroStat } from "@/types/hero";
import { SITE_CTAS } from "@/data/site";

export const HERO_CONTENT = {
  tagline: "串連 JavaScript 與 AI 實戰的台灣開發者社群",
  lead: "專注於前沿技術、實戰分享、開源協作與職涯成長，打造屬於台灣開發者的技術聚落。",
  primaryCta: SITE_CTAS.primary,
  secondaryCta: SITE_CTAS.secondary,
  scrollLabel: "往下滾動探索",
} as const;

export const HERO_STATS: readonly HeroStat[] = [
  {
    label: "5 大主題",
    hint: "JavaScript · AI · 實戰 · 開源 · 職涯",
  },
  {
    label: "2 種參與形式",
    hint: "講座 · 小聚",
  },
  {
    label: "1 場小聚",
    hint: "目前已舉辦",
  },
] as const;
