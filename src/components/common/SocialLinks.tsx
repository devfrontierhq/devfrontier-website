import { cn } from "@/lib/utils";
import { SOCIAL_LINKS } from "@/data/site";

export default function SocialLinks() {
  return (
    <div className="sm:self-end sm:text-right">
      <ul className="flex flex-wrap gap-2 sm:justify-end">
        {SOCIAL_LINKS.map((link) => (
          <li key={link.href || link.label}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              title={link.label}
              className={cn(
                "inline-flex size-9 items-center justify-center rounded-lg border border-border bg-background p-0 transition-colors hover:bg-muted",
                !link.href && "pointer-events-none opacity-50",
              )}
            >
              <img
                src={`/icons/social/${link.icon}.svg`}
                alt=""
                width={16}
                height={16}
                className="size-4 shrink-0 dark:invert"
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
