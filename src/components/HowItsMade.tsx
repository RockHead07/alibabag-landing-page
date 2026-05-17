import processMaterial from "@/assets/process-material.jpg";
import processWeaving from "@/assets/process-weaving.jpg";
import processPacked from "@/assets/process-packed.jpg";

const steps = [
  {
    img: processMaterial,
    label: "Dipilih dengan Teliti",
    sub: "Bahan tikar dipilih satu per satu untuk memastikan kualitas dan ketahanan terbaik.",
  },
  {
    img: processWeaving,
    label: "Dianyam dengan Tangan",
    sub: "Setiap tas dianyam secara manual oleh pengrajin lokal, menjadikannya benar-benar unik.",
  },
  {
    img: processPacked,
    label: "Siap untuk Kamu",
    sub: "AlibaBag dikemas dengan rapi dan siap dikirimkan langsung ke tanganmu.",
  },
];

export function HowItsMade() {
  return (
    <section
      id="proses"
      className="bg-secondary px-8 py-16"
      style={{ backgroundColor: "#C0C9EE" }}
    >
      <div className="mx-auto max-w-7xl">
        {/* PART A */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <h2
            className="font-black uppercase leading-[0.95] tracking-tight text-[#FAFAFA]/60"
            style={{ fontSize: "clamp(60px, 10vw, 140px)" }}
          >
            Dari
            <br />
            Tikar
            <br />
            Ke Tangan
          </h2>

          <div className="lg:pl-10">
            <h3 className="text-lg font-bold uppercase tracking-wide text-foreground">
              Kerajinan di Setiap Langkah
            </h3>
            <p className="mt-4 max-w-[380px] text-sm leading-relaxed text-foreground">
              Dari pemilihan tikar berkualitas hingga proses anyaman yang
              teliti, setiap AlibaBag dibuat dengan penuh perhatian agar sampai
              ke tanganmu dalam kondisi terbaik.
            </p>
          </div>
        </div>

        {/* PART B */}
        <div className="relative mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <article
              key={s.label}
              className="relative overflow-hidden rounded-2xl bg-background shadow-sm"
            >
              <img
                src={s.img}
                alt={s.label}
                loading="lazy"
                width={768}
                height={768}
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="p-4">
                <p className="text-sm font-bold uppercase tracking-wide text-foreground">
                  {s.label}
                </p>
                <p className="mt-2 text-sm text-foreground/80">{s.sub}</p>
              </div>

              {/* Floating badge on last card */}
              {i === steps.length - 1 && (
                <div className="absolute -right-2 top-6 flex items-center gap-2 rounded-full bg-background py-1.5 pl-1.5 pr-4 shadow-sm">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                    🧵
                  </span>
                  <span className="text-xs font-semibold text-foreground">
                    Local Craft 🇮🇩
                  </span>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
