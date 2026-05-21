import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { OurStory } from "@/components/OurStory";
import { HowItsMade } from "@/components/HowItsMade";
import { Pricing } from "@/components/Pricing";
import { Testimonial } from "@/components/Testimonial";
import { ActDifferent } from "@/components/ActDifferent";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AlibaBag — Anyaman Lokal, Gaya Global" },
      {
        name: "description",
        content:
          "AlibaBag: tas tangan handmade dari anyaman tikar. Eco-friendly, unik, dan dibuat dengan bangga di Indonesia.",
      },
      { property: "og:title", content: "AlibaBag — Anyaman Lokal, Gaya Global" },
      {
        property: "og:description",
        content: "Handmade woven tikar handbags from Indonesia.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Navbar />
      <main>
      <Hero />
      <OurStory />
      <HowItsMade />
      <Pricing />
      <Testimonial />
      <ActDifferent />
      <Footer />
      </main>
    </>
  );
}
