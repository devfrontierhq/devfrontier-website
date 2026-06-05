import { ABOUT_PARAGRAPHS } from "@/data/site";

export default function AboutSection() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-8 text-center text-3xl font-bold tracking-tight sm:text-4xl">
          關於我們
        </h1>
        <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
          {ABOUT_PARAGRAPHS.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
