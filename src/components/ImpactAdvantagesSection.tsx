import {
  BookOpen,
  Sparkles,
  TrendingUp,
  Users,
  type LucideIcon,
} from "lucide-react";
import LandingSectionHeader from "@/components/landing/LandingSectionHeader";
import {
  IMPACT_DIFFERENTIATORS,
  IMPACT_INSIGHTS,
  IMPACT_INTRO,
  type ImpactPillarIcon,
} from "@/data/impact";

const insightIcons: Record<ImpactPillarIcon, LucideIcon> = {
  book: BookOpen,
  users: Users,
  sparkles: Sparkles,
  trending: TrendingUp,
};

export default function ImpactAdvantagesSection() {
  return (
    <section id="impact" className="landing-section relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_50%_0%,oklch(0.62_0.22_330/0.06),transparent_60%)] dark:bg-[radial-gradient(ellipse_70%_45%_at_50%_0%,oklch(0.58_0.24_330/0.1),transparent_60%)]"
      />

      <div className="relative mx-auto max-w-6xl px-4">
        <LandingSectionHeader
          title={
            <>
              <span className="block">{IMPACT_INTRO.titleLine1}</span>
              <span className="hero-gradient-text">{IMPACT_INTRO.titleLine2}</span>
            </>
          }
          lead={IMPACT_INTRO.lead}
          className="mb-6 sm:mb-8"
        />

        <div className="mb-6 sm:mb-8">
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {IMPACT_INSIGHTS.map((insight, index) => {
              const Icon = insightIcons[insight.icon];
              return (
                <li
                  key={insight.title}
                  className={`landing-insight-card ${index === 0 ? "lg:col-span-2" : ""}`}
                >
                  <span className="landing-insight-icon" aria-hidden>
                    <Icon className="size-5" />
                  </span>
                  <h4 className="mb-2 text-base font-semibold tracking-tight sm:text-lg">
                    {insight.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-muted-foreground sm:text-[0.9375rem]">
                    {insight.body}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <h3 className="mb-6 text-center text-2xl font-bold tracking-tight sm:mb-8 sm:text-3xl">
            和其他研討會的差異
          </h3>

          <ul className="grid gap-4 md:grid-cols-2">
            {IMPACT_DIFFERENTIATORS.map((item, index) => (
              <li key={item.dimension} className="landing-diff-card">
                <span className="landing-diff-index" aria-hidden>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mb-2 text-xs font-medium uppercase tracking-wider text-primary">
                  {item.dimension}
                </p>
                <p className="mb-4 text-sm leading-relaxed sm:text-base">
                  {item.ours}
                </p>
                <p className="border-t border-border/70 pt-3 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  常見做法：{item.typical}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
