import storyBag from "@/assets/story-bag.jpg";
import storyTexture from "@/assets/story-texture.jpg";

const stats = [
  { icon: "✋", label: "100% Handmade", sub: "Dijahit tangan, satu per satu" },
  { icon: "🌿", label: "Eco-Friendly", sub: "Material tikar alami" },
  { icon: "💜", label: "Unik & Langka", sub: "Tiap tas satu-satunya" },
];

export function OurStory() {
  return (
    <section id="about" className="bg-background py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-2 lg:px-10">
        {/* LEFT — image collage */}
        <div className="relative">
          <img
            src={storyBag}
            alt="Side angle of AlibaBag woven handbag"
            loading="lazy"
            width={1024}
            height={1024}
            className="w-[90%] rounded-2xl object-cover shadow-md"
          />
          <img
            src={storyTexture}
            alt="Close-up of woven tikar texture"
            loading="lazy"
            width={768}
            height={768}
            className="absolute -bottom-8 right-0 h-48 w-48 rounded-xl border-4 border-background object-cover shadow-lg sm:h-56 sm:w-56"
          />
        </div>

        {/* RIGHT */}
        <div className="flex flex-col justify-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Tentang Kami
          </p>
          <h2 className="mt-4 text-3xl font-extrabold uppercase leading-tight tracking-tight text-primary md:text-5xl">
            Crafted with Pride
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/80">
            Dari helai tikar yang sederhana, lahirlah AlibaBag — tas tangan unik
            yang menggabungkan warisan lokal dengan gaya hidup modern. Setiap
            anyaman adalah karya tangan, setiap tas adalah cerita.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl border border-border bg-card p-5">
                <span className="text-2xl">{s.icon}</span>
                <p className="mt-3 text-sm font-bold text-foreground">{s.label}</p>
                <p className="mt-1 text-xs text-muted-foreground">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
