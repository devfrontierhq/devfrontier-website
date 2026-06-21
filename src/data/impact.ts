export const IMPACT_INTRO = {
  titleLine1: "我們的",
  titleLine2: "影響力和優勢",
  lead: "不只是辦活動，而是持續累積開發者之間的知識、實作與工程文化。",
} as const;

export const IMPACT_INSIGHTS = [
  {
    icon: "book",
    title: "知識在前沿流動",
    body: "講座與分享把 JS、AI 與工具鏈的最新實務帶進社群，讓資訊不再只停在螢幕上。",
  },
  {
    icon: "users",
    title: "工程文化被看見",
    body: "討論協作、品質與團隊節奏，讓技術成長與職場實務接軌。",
  },
  {
    icon: "sparkles",
    title: "JS × AI 雙軸並行",
    body: "在 JavaScript 生態與 AI 應用之間建立橋梁，探索下一代開發方式。",
  },
  {
    icon: "trending",
    title: "職涯路徑更立體",
    body: "連結跨領域能力與職涯選擇，讓成長不只是在技術。",
  },
  {
    icon: "globe",
    title: "國際視野在台灣",
    body: "邀請國際講者分享經驗，讓台灣開發者也能接觸全球的技術趨勢與實踐。",
  }
] as const;

export type ImpactPillarIcon = (typeof IMPACT_INSIGHTS)[number]["icon"];

export const IMPACT_DIFFERENTIATORS = [
  {
    dimension: "活動形式",
    ours: "講座支援線上參與，小聚保留現場深度互動。",
    typical: "多數研討會仍以現場為主。",
  },
  {
    dimension: "學習重心",
    ours: "知識傳遞與實作並重，少一點單向、多一點共學。",
    typical: "偏重單向演講與投影片。",
  },
  {
    dimension: "主題範圍",
    ours: "JS × AI、工程師職涯、工程文化推動。",
    typical: "常聚焦單一框架或特定技術棧。",
  },
  {
    dimension: "講者陣容",
    ours: "台灣本土與國際講者並行，拓展視野。",
    typical: "以本土講者為主。",
  },
] as const;
