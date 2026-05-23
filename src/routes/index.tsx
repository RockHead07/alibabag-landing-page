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
