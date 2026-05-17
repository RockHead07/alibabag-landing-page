import processMaterial from "@/assets/process-material.jpg";
import processWeaving from "@/assets/process-weaving.jpg";
import processPacked from "@/assets/process-packed.jpg";

const steps = [
  {
    img: processMaterial,
    label: "DIPILIH DENGAN TELITI",
    sub: "Bahan tikar dipilih satu per satu untuk memastikan kualitas dan ketahanan terbaik.",
  },
  {
    img: processWeaving,
    label: "DIANYAM DENGAN TANGAN",
    sub: "Setiap tas dianyam secara manual oleh pengrajin lokal, menjadikannya benar-benar unik.",
  },
  {
    img: processPacked,
    label: "SIAP UNTUK KAMU",
    sub: "AlibaBag dikemas dengan rapi dan siap dikirimkan langsung ke tanganmu.",
  },
];

export function HowItsMade() {
  return (
    <section
      id="proses"
      className="relative"
      style={{ backgroundColor: "#C0C9EE" }}
    >
      {/* PART A */}
      <div
        className="px-12 py-16"
        style={{
          display: "grid",
          gridTemplateColumns: "60% 40%",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        {/* Left column — giant decorative text overflows visually */}
        <div style={{ overflow: "visible" }}>
          <h2
            className="uppercase text-[#FAFAFA] whitespace-nowrap"
            style={{
              fontSize: "clamp(80px, 12vw, 160px)",
              fontWeight: 900,
              opacity: 0.55,
              lineHeight: 0.9,
              letterSpacing: "-2px",
            }}
          >
            DARI TIKAR
            <br />
            KE TANGANMU
          </h2>
        </div>

        {/* Right column — 40%, vertically centered */}
        <div className="flex flex-col justify-center">
          <h3
            className="uppercase mb-3"
            style={{ fontSize: "1.25rem", fontWeight: 700, color: "#1A1A1A" }}
          >
            KERAJINAN DI SETIAP LANGKAH
          </h3>
          <p
            className="leading-relaxed"
            style={{ fontSize: "0.875rem", color: "#1A1A1A", maxWidth: "360px" }}
          >
            Dari pemilihan tikar berkualitas hingga proses anyaman yang teliti,
            setiap AlibaBag dibuat dengan penuh perhatian agar sampai ke
            tanganmu dalam kondisi terbaik.
          </p>
        </div>
      </div>

      {/* PART B */}
      <div className="relative px-12 pb-16">
        <div className="grid grid-cols-3 gap-6 items-start">
          {steps.map((s, i) => (
            <div key={s.label} className="relative">
              <article
                className="rounded-2xl overflow-hidden shadow-md"
                style={{ backgroundColor: "#FAFAFA" }}
              >
                <img
                  src={s.img}
                  alt={s.label}
                  loading="lazy"
                  className="w-full object-cover"
                  style={{ height: "220px" }}
                />
                <div className="p-4">
                  <p
                    className="uppercase mt-2"
                    style={{ fontSize: "0.875rem", fontWeight: 700, color: "#1A1A1A" }}
                  >
                    {s.label}
                  </p>
                  <p
                    className="mt-1"
                    style={{ fontSize: "0.75rem", color: "#898AC4" }}
                  >
                    {s.sub}
                  </p>
                </div>
              </article>

              {/* Floating badge on last card */}
              {i === steps.length - 1 && (
                <div
                  className="absolute rounded-full shadow-md flex items-center"
                  style={{
                    backgroundColor: "white",
                    bottom: "-12px",
                    right: "16px",
                    padding: "4px 12px",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                  }}
                >
                  Local Craft 🇮🇩
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
