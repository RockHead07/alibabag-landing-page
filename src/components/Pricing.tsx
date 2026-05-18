import { CheckCircle2 } from "lucide-react";
import heroBag from "../assets/hero-bag.png";

const checklist = [
  "Handcrafted dari bahan tikar asli",
  "Eco-friendly & ramah lingkungan",
  "Unik, jarang ada di pasaran",
  "Free ongkir area tertentu",
];

const statBoxes = [
  { stat: "Rp 20rb", sub: "Mulai Dari" },
  { stat: "1-2 Hari", sub: "Proses Order" },
  { stat: "100%", sub: "Handmade" },
];

export function Pricing() {
  return (
    <section
      id="harga"
      style={{ backgroundColor: "#FAFAFA", padding: "96px 64px" }}
    >
      <div className="pricing-grid">

        {/* ── LEFT COLUMN ── */}
        <div style={{ display: "flex", flexDirection: "column" }}>

          {/* Label */}
          <p
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.3em",
              color: "#898AC4",
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            HARGA
          </p>

          {/* Heading */}
          <h2
            className="pricing-heading"
            style={{
              fontWeight: 900,
              color: "#1A1A1A",
              textTransform: "uppercase",
              lineHeight: 1.1,
              marginBottom: 16,
            }}
          >
            HARGA RAMAH, KUALITAS PREMIUM
          </h2>

          {/* Description */}
          <p
            style={{
              fontSize: 14,
              color: "#898AC4",
              lineHeight: 1.7,
              maxWidth: 420,
              marginBottom: 24,
            }}
          >
            Kami tidak hanya membuat tas — kami menghadirkan karya tangan lokal
            berkualitas yang bisa kamu miliki dengan harga yang sangat terjangkau.
          </p>

          {/* Checklist */}
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: "0 0 32px 0",
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            {checklist.map((item) => (
              <li
                key={item}
                style={{ display: "flex", alignItems: "center", gap: 10 }}
              >
                <CheckCircle2
                  style={{ color: "#6B21D6", width: 18, height: 18, flexShrink: 0 }}
                />
                <span style={{ fontSize: 14, color: "#1A1A1A" }}>{item}</span>
              </li>
            ))}
          </ul>

          {/* Stats row */}
          <div
            className="pricing-stats"
            style={{ marginBottom: 32 }}
          >
            {statBoxes.map((box) => (
              <div
                key={box.stat}
                style={{
                  border: "1px solid #A2AADB",
                  borderRadius: 10,
                  padding: "16px 20px",
                  textAlign: "center",
                  flex: 1,
                }}
              >
                <p
                  style={{
                    fontSize: 18,
                    fontWeight: 800,
                    color: "#1A1A1A",
                    margin: 0,
                    lineHeight: 1.2,
                  }}
                >
                  {box.stat}
                </p>
                <p
                  style={{
                    fontSize: 11,
                    color: "#898AC4",
                    margin: "4px 0 0 0",
                  }}
                >
                  {box.sub}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="pricing-cta"
            >
              Pesan Sekarang
            </a>
          </div>
        </div>

        {/* ── RIGHT COLUMN ── */}
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Floating product image */}
          <img
            src={heroBag}
            alt="AlibaBag product"
            className="pricing-bag-img"
          />

          {/* Badge 1 — top right */}
          <span
            className="pricing-badge pricing-badge--1"
            style={{ top: "8%", right: "0%" }}
          >
            🌿 Eco-Friendly
          </span>

          {/* Badge 2 — middle left */}
          <span
            className="pricing-badge pricing-badge--2"
            style={{ top: "48%", left: "0%" }}
          >
            ✋ Handmade
          </span>

          {/* Badge 3 — bottom right */}
          <span
            className="pricing-badge pricing-badge--3"
            style={{ bottom: "10%", right: "4%" }}
          >
            🇮🇩 Local Pride
          </span>
        </div>
      </div>

      {/* ── Scoped styles ── */}
      <style>{`
        .pricing-grid {
          max-width: 1152px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 55fr 45fr;
          gap: 64px;
          align-items: center;
        }

        .pricing-heading {
          font-size: clamp(26px, 3.5vw, 40px);
        }

        .pricing-stats {
          display: flex;
          gap: 12px;
        }

        .pricing-bag-img {
          width: 100%;
          max-width: 420px;
          transform: rotate(-8deg);
          filter: drop-shadow(0 24px 60px rgba(107,33,214,0.18));
          display: block;
        }

        .pricing-badge {
          position: absolute;
          background: white;
          border-radius: 9999px;
          box-shadow: 0 4px 16px rgba(0,0,0,0.12);
          padding: 8px 16px;
          font-size: 12px;
          font-weight: 600;
          color: #1A1A1A;
          white-space: nowrap;
          pointer-events: none;
        }

        .pricing-cta {
          display: inline-block;
          background: #1A1A1A;
          color: white;
          font-weight: 700;
          font-size: 14px;
          padding: 12px 32px;
          border-radius: 9999px;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .pricing-cta:hover {
          background: #6B21D6;
        }

        /* ── Mobile (< 768px) ── */
        @media (max-width: 767px) {
          .pricing-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }

          .pricing-heading {
            font-size: clamp(22px, 6vw, 32px);
          }

          .pricing-bag-img {
            transform: none;
            max-width: 320px;
          }

          .pricing-badge {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
