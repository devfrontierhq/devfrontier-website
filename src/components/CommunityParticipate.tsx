import Button from "@mui/material/Button";
import { HandHeart, Users, type LucideIcon } from "lucide-react";

import { PARTICIPATE_OPTIONS, type ParticipateIcon } from "@/data/community";
import { withMuiProvider } from "@/lib/with-mui-provider";

const participateIcons: Record<ParticipateIcon, LucideIcon> = {
  handHeart: HandHeart,
  users: Users,
};

function CommunityParticipate() {
  return (
    <section className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:py-20">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="mb-3 text-2xl font-bold tracking-tight sm:text-3xl">參與社群</h2>
          <p className="text-muted-foreground">
            DevFrontier 由社群共同維運。你可以用不同方式支持我們，讓更多開發者受益。
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {PARTICIPATE_OPTIONS.map((option) => {
            const Icon = participateIcons[option.icon];
            return (
              <article
                key={option.title}
                className="flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm"
              >
                <Icon className="mb-4 size-8 text-primary" aria-hidden />
                <h3 className="mb-2 text-lg font-semibold">{option.title}</h3>
                <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {option.description}
                </p>
                <Button
                  component="a"
                  href={option.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outlined"
                  sx={{ width: { xs: "100%", sm: "auto" } }}
                >
                  {option.cta}
                </Button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default withMuiProvider(CommunityParticipate);
