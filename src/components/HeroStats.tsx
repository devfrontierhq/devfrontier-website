import { useEffect, useState, type ComponentType } from "react";
import CountUpImport, { type CountUpProps } from "react-countup";

import type { HeroStat } from "@/types/hero";

const CountUp = (
  (CountUpImport as { default?: ComponentType<CountUpProps> }).default ?? CountUpImport
) as ComponentType<CountUpProps>;

interface HeroStatsProps {
  stats: readonly HeroStat[];
  className?: string;
}

function parseHeroStat(label: string) {
  const match = /^(\d+)([+\-]?)\s+(.+)$/.exec(label.trim());
  if (!match) return null;
  return { end: Number(match[1]), suffix: match[2], text: match[3] };
}

export default function HeroStats({ stats, className = "" }: HeroStatsProps) {
  const [canAnimate, setCanAnimate] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setCanAnimate(!media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return (
    <dl className={`hero-stat-grid ${className}`}>
      {stats.map((stat, index) => {
        const parsed = parseHeroStat(stat.label);
        return (
          <div key={stat.label} className="hero-stat-card hero-fade-in" style={{ animationDelay: `${120 + index * 60}ms` }}>
            <dt className="sr-only">{stat.label}</dt>
            <dd className="m-0 flex flex-col gap-1">
              {parsed ? (
                <p className="hero-stat-label">
                  {canAnimate ? (
                    <CountUp end={parsed.end} suffix={parsed.suffix} duration={(500 + index * 50) / 1000} enableScrollSpy scrollSpyOnce className="hero-stat-value" />
                  ) : (
                    <span className="hero-stat-value">{parsed.end}{parsed.suffix}</span>
                  )}
                  {" "}<span>{parsed.text}</span>
                </p>
              ) : (
                <span className="hero-stat-label">{stat.label}</span>
              )}
              {stat.hint && <p className="hero-stat-hint">{stat.hint}</p>}
            </dd>
          </div>
        );
      })}
    </dl>
  );
}
