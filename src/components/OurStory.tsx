import { Play, Hand, Leaf, Sparkles } from "lucide-react";
import storyBag from "@/assets/story-bag.jpg";
import heroBag from "@/assets/hero-bag.png";

const features = [
  {
    Icon: Hand,
    label: "100% Handmade",
    sub: "Dibuat tangan, satu per satu",
  },
  {
    Icon: Leaf,
    label: "Eco-Friendly",
    sub: "Material tikar alami & ramah lingkungan",
  },
  {
    Icon: Sparkles,
    label: "Unik & Langka",
    sub: "Jarang ada di pasaran, tiap tas beda",
  },
];

export function OurStory() {
  return (
    <section
      id="about"
      className="py-20 px-8 lg:px-12"
      style={{ backgroundColor: "#FAFAFA" }}
    >
      <div className="mx-auto max-w-7xl">
        {/* ROW 1 — 3-column grid */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-3">
          {/* COLUMN 1 — promo image with play button */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <img
              src={storyBag}
              alt="AlibaBag woven handbag front view"
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <button
              type="button"
              aria-label="Play video"
              className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full transition hover:scale-105"
              style={{
                backgroundColor: "white",
                boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
              }}
            >
              <Play
                className="h-6 w-6"
                style={{ color: "#6B21D6", fill: "#6B21D6" }}
              />
            </button>
          </div>

          {/* COLUMN 2 — floating side-angle image */}
          <div className="flex justify-center">
            <img
              src={heroBag}
              alt="AlibaBag side angle"
              loading="lazy"
              className="h-auto w-3/4 object-contain"
              style={{
                filter: "drop-shadow(0 16px 40px rgba(107,33,214,0.12))",
              }}
            />
          </div>

          {/* COLUMN 3 — text */}
          <div>
            <p
              className="text-xs font-semibold uppercase"
              style={{
                letterSpacing: "0.25em",
                color: "#898AC4",
              }}
            >
              Tentang Kami
            </p>
            <h2
              className="mt-4 text-xl font-extrabold uppercase leading-tight tracking-tight md:text-2xl"
              style={{ color: "#6B21D6" }}
            >
              Crafted with Pride
            </h2>
            <p
              className="mt-6 text-sm leading-relaxed"
              style={{ color: "#1A1A1A" }}
            >
              Dari helai tikar yang sederhana, lahirlah AlibaBag — tas tangan
              unik yang menggabungkan warisan lokal dengan gaya hidup modern.
              Setiap anyaman adalah karya tangan, setiap tas adalah cerita.
            </p>
          </div>
        </div>

        {/* ROW 2 — Why choose AlibaBag */}
        <div className="mt-16 text-center">
          <h3
            className="text-2xl font-extrabold uppercase tracking-tight md:text-3xl"
            style={{ color: "#1A1A1A" }}
          >
            Mengapa Memilih AlibaBag?
          </h3>
          <p
            className="mx-auto mt-3 max-w-xl text-sm"
            style={{ color: "#898AC4" }}
          >
            Setiap tas dibuat dengan hati, untuk kamu yang menghargai keunikan
            dan kualitas lokal.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-3">
            {features.map(({ Icon, label, sub }) => (
              <div key={label} className="flex flex-col items-center px-4">
                <Icon
                  className="h-12 w-12"
                  strokeWidth={1.5}
                  style={{ color: "#A2AADB" }}
                />
                <p
                  className="mt-5 text-sm font-bold uppercase tracking-wide"
                  style={{ color: "#1A1A1A" }}
                >
                  {label}
                </p>
                <p
                  className="mt-2 max-w-[14rem] text-xs"
                  style={{ color: "#898AC4" }}
                >
                  {sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
