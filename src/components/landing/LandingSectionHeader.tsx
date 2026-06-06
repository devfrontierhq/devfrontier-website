import type { ReactNode } from "react";

interface LandingSectionHeaderProps {
  title: ReactNode;
  lead?: string;
  className?: string;
}

export default function LandingSectionHeader({
  title,
  lead,
  className = "",
}: LandingSectionHeaderProps) {
  return (
    <header className={`mx-auto max-w-3xl text-center ${className}`}>
      <h2 className="landing-section-title">{title}</h2>
      {lead ? (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          {lead}
        </p>
      ) : null}
    </header>
  );
}
