import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { AboutHero } from "@/components/site/AboutHero";
import { AboutOurStory } from "@/components/site/AboutOurStory";
import { AboutJourney } from "@/components/site/AboutJourney";
import { AboutChapters } from "@/components/site/AboutChapters";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Neelikon — Four decades of colour expertise" },
      { name: "description", content: "From dyes and pigments to speciality chemicals, we create colour solutions that add value to industries and improve everyday life." },
      { property: "og:title", content: "About Neelikon — Four decades of colour expertise. A future of possibilities." },
      { property: "og:description", content: "From dyes and pigments to speciality chemicals, we create colour solutions that add value to industries and improve everyday life." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

function About() {
  return (
    <main>
      <AboutHero />

      <AboutOurStory />

      <AboutJourney />

      <AboutChapters />

      <section className="navy-field section-y text-paper">
        <div className="container-x flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <h2 className="display max-w-3xl fs-section">Let's create what's next in colour.</h2>
          <a href="/#contact" className="inline-flex items-center gap-2 rounded-full bg-flame btn text-ink">Discuss Your Requirements <ArrowRight className="h-4 w-4" /></a>
        </div>
      </section>
    </main>
  );
}
