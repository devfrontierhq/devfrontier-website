import { ChevronDown } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";
import type { FaqItem } from "@/types/faq";

interface FaqAccordionProps {
  items: FaqItem[];
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndexes, setOpenIndexes] = useState<Set<number>>(() => new Set());

  function toggle(index: number) {
    setOpenIndexes((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  }

  return (
    <ul className="space-y-3">
      {items.map((item, index) => {
        const open = openIndexes.has(index);
        const panelId = `faq-panel-${index}`;
        const triggerId = `faq-trigger-${index}`;

        return (
          <li key={item.question}>
            <div
              className={cn(
                "rounded-xl border border-border bg-card px-5 shadow-sm transition-[padding] duration-300 ease-in-out motion-reduce:transition-none",
                open && "pb-4",
              )}
            >
              <button
                id={triggerId}
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => toggle(index)}
                className="flex w-full cursor-pointer items-center justify-between gap-4 py-4 text-left font-medium outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
              >
                {item.question}
                <ChevronDown
                  className={cn(
                    "size-4 shrink-0 text-muted-foreground transition-transform duration-300 ease-in-out motion-reduce:transition-none",
                    open && "rotate-180",
                  )}
                  aria-hidden
                />
              </button>
              <div
                id={panelId}
                role="region"
                aria-labelledby={triggerId}
                className={cn(
                  "grid transition-[grid-template-rows] duration-300 ease-in-out motion-reduce:transition-none",
                  open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                )}
              >
                <div className="overflow-hidden">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
