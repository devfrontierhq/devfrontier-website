import AnimatedStatValue from "@/components/landing/AnimatedStatValue";
import type { HeroStat } from "@/types/hero";

interface HeroStatsProps {
  stats: readonly HeroStat[];
  className?: string;
}

export default function HeroStats({ stats, className = "" }: HeroStatsProps) {
  return (
    <dl className={`hero-stat-grid ${className}`}>
      {stats.map((stat, index) => (
        <div key={stat.label} className="hero-stat-card hero-fade-in" style={{ animationDelay: `${120 + index * 60}ms` }}>
          <dt className="sr-only">{stat.label}</dt>
          <dd className="m-0 flex flex-col gap-1">
            <p className="hero-stat-label">
              <AnimatedStatValue
                as="span"
                value={stat.value}
                durationMs={500 + index * 50}
                className="hero-stat-value"
              />
              <span>{stat.label}</span>
            </p>
            {stat.hint ? <p className="hero-stat-hint">{stat.hint}</p> : null}
          </dd>
        </div>
      ))}
    </dl>
  );
}
