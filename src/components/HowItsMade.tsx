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
      style={{ backgroundColor: "#C0C9EE", position: "relative" }}
    >
      {/* PART A */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "55% 45%",
          alignItems: "center",
          gap: 0,
          padding: "60px 48px",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* LEFT column */}
        <div>
          <h2
            style={{
              fontSize: "clamp(48px, 7vw, 110px)",
              fontWeight: 900,
              color: "#FAFAFA",
              opacity: 0.5,
              lineHeight: 0.88,
              letterSpacing: "-3px",
              textTransform: "uppercase",
              width: "100%",
              margin: 0,
            }}
          >
            DARI TIKAR
            <br />
            KE TANGANMU
          </h2>
        </div>

        {/* RIGHT column */}
        <div
          style={{
            paddingLeft: "32px",
            position: "relative",
            zIndex: 10,
          }}
        >
          <h3
            style={{
              fontSize: "18px",
              fontWeight: 700,
              color: "#1A1A1A",
              marginBottom: "12px",
              textTransform: "uppercase",
            }}
          >
            KERAJINAN DI SETIAP LANGKAH
          </h3>
          <p
            style={{
              fontSize: "14px",
              color: "#1A1A1A",
              lineHeight: 1.7,
              maxWidth: "340px",
              margin: 0,
            }}
          >
            Dari pemilihan tikar berkualitas hingga proses anyaman yang teliti,
            setiap AlibaBag dibuat dengan penuh perhatian agar sampai ke
            tanganmu dalam kondisi terbaik.
          </p>
        </div>
      </div>

      {/* PART B */}
      <div
        style={{
          padding: "0 48px 60px 48px",
          backgroundColor: "#C0C9EE",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
          }}
        >
          {steps.map((s, i) => (
            <div key={s.label} style={{ position: "relative" }}>
              <article
                style={{
                  backgroundColor: "#FAFAFA",
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
                  width: "100%",
                }}
              >
                <img
                  src={s.img}
                  alt={s.label}
                  loading="lazy"
                  style={{
                    height: "200px",
                    width: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
                <div style={{ padding: "16px" }}>
                  <p
                    style={{
                      fontSize: "13px",
                      fontWeight: 700,
                      color: "#1A1A1A",
                      textTransform: "uppercase",
                      marginBottom: "6px",
                      margin: "0 0 6px 0",
                    }}
                  >
                    {s.label}
                  </p>
                  <p
                    style={{
                      fontSize: "12px",
                      color: "#898AC4",
                      lineHeight: 1.5,
                      margin: 0,
                    }}
                  >
                    {s.sub}
                  </p>
                </div>
              </article>

              {/* Floating badge on last card */}
              {i === steps.length - 1 && (
                <div
                  style={{
                    position: "absolute",
                    bottom: "12px",
                    right: "12px",
                    backgroundColor: "white",
                    borderRadius: "999px",
                    padding: "4px 10px",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
                    fontSize: "11px",
                    fontWeight: 600,
                    color: "#1A1A1A",
                    whiteSpace: "nowrap",
                  }}
                >
                  🇮🇩 Local Craft
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
