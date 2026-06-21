# DevFrontier Official Website

[DevFrontier](https://www.devfrontier.org/) is a developer community centered on JavaScript developers, dedicated to exploring software development practices, tools, and culture in the AI era. This project is the community's official website, providing event information, community participation channels, team introductions, and frequently asked questions.

## Explore DevFrontier Website

- **活動資訊** — Browse events that are open, upcoming, or closed.
- **參與社群** — Volunteer recruitment and sponsorship partnerships
- **關於我們** — Who we are, our vision, and core goals.
- **常見問題** — Quick answers to common question.

## Technical Overview

| Category | Tech |
|------|------|
| Framework | [Astro 6](https://astro.build) + [React 19](https://react.dev)（islands） |
| Style | [Tailwind CSS v4](https://tailwindcss.com) |
| UI Library | [MUI](https://mui.com) |
| Font | [Geist Variable](https://vercel.com/font) |
| Icon | [Lucide React](https://lucide.dev) + 自訂社群 SVG |
| Animation | GSAP、AOS、react-countup |
| Deploy | [Cloudflare Pages](https://pages.cloudflare.com)（Wrangler） |

## Quick Start

### Environment Requirement

- **Node.js** `>= 22.12.0`
- **pnpm** `10.12.1`

### Installation & run

```bash
pnpm install

# 啟動開發伺服器（預設 http://localhost:4321）
pnpm dev
```


## Repository Structure

```
src/
├─ components/       # UI components (.astro static / .tsx React islands)
│  ├─ landing/       # Home page section components
├─ content/          # Content collections
│  └─ events/        # Event posts (Markdown)
├─ data/             # Static copy & data (site, team, FAQ, partners…)
├─ layouts/          # Page layouts
├─ lib/              # Utility functions (event status, mobile nav…)
├─ pages/            # Routes (home, events, community, about, FAQ)
├─ styles/           # Global styles, animations & scoped CSS
├─ theme/            # MUI theme & color palette
├─ types/            # Shared types
└─ content.config.ts # Content collection schema (Zod)
```

## Design System

Design tokens, theming, and UI conventions, see [`DESIGN.md`](./DESIGN.md).

## Social Links

- Facebook · [@devfrontierhq](https://www.facebook.com/devfrontierhq)
- Instagram · [@devfrontierhq](https://www.instagram.com/devfrontierhq)
- Threads · [@devfrontierhq](https://www.threads.com/@devfrontierhq)
- Bluesky · [devfrontier.bsky.social](https://bsky.app/profile/devfrontier.bsky.social)
- GitHub · [devfrontierhq](https://github.com/devfrontierhq)

## License

This project is licensed under the MIT License - see the [MIT License](./LICENSE) file for details.

© 2026 DevFrontier. All rights reserved.
