import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const events = defineCollection({
  loader: glob({ base: "./src/content/events", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    description: z
      .union([z.string(), z.null()])
      .optional()
      .transform((val) => (typeof val === "string" && val.trim() ? val : undefined)),
    date: z.coerce.date(),
    location: z.string(),
    registrationUrl: z.string().url().optional(),
    /** 報名開放日；此日期之前顯示「報名尚未開始」 */
    registrationStartsAt: z.coerce.date().optional(),
    /** 設為 false 可手動關閉報名（顯示「報名已結束」） */
    registrationOpen: z.boolean().optional(),
  }),
});

export const collections = { events };
