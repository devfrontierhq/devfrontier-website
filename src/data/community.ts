import { SITE_LINKS } from "@/data/site";

export const PARTICIPATE_OPTIONS = [
  {
    icon: "handHeart",
    title: "贊助支持",
    description: "協助場地、餐點或錄影設備，讓每場小聚都能穩定舉辦。我們提供多元曝光與社群感謝方案。",
    cta: "了解贊助方案",
    href: SITE_LINKS.sponsorship,
  },
  {
    icon: "users",
    title: "志工招募",
    description: "協助活動接待、議程控場、社群經營或技術分享。無論你是新手或資深開發者都歡迎加入。",
    cta: "加入志工",
    href: SITE_LINKS.volunteer,
  },
] as const;

export type ParticipateIcon = (typeof PARTICIPATE_OPTIONS)[number]["icon"];
