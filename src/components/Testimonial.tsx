import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "Tasnya unik banget, beda dari yang lain! Bahannya kuat dan anyamannya rapi. Udah banyak yang nanya beli di mana!",
    name: "Siti Rahayu",
    role: "Mahasiswi",
    leftImage: "https://i.pravatar.cc/400?img=47",
    rightImage: "https://i.pravatar.cc/400?img=48",
  },
  {
    quote:
      "Harganya terjangkau tapi kualitasnya premium. Suka banget sama konsep eco-friendly nya, bangga pakai produk lokal!",
    name: "Dewi Anggraini",
    role: "Ibu Rumah Tangga",
    leftImage: "https://i.pravatar.cc/400?img=49",
    rightImage: "https://i.pravatar.cc/400?img=50",
  },
  {
    quote:
      "Pertama lihat langsung jatuh cinta! Warnanya cantik, designnya unik. Cocok buat hangout sampai ke kampus!",
    name: "Rina Kusuma",
    role: "Content Creator",
    leftImage: "https://i.pravatar.cc/400?img=51",
    rightImage: "https://i.pravatar.cc/400?img=52",
  },
];

export function Testimonial() {
  const [active, setActive] = useState(0);
  const [fading, setFading] = useState(false);

  function goTo(index: number) {
    setFading(true);
    setTimeout(() => {
      setActive(index);
      setFading(false);
    }, 200);
  }

  function prev() {
    goTo((active - 1 + testimonials.length) % testimonials.length);
  }

  function next() {
    goTo((active + 1) % testimonials.length);
  }

  const slide = testimonials[active];

  return (
    <section
      style={{ backgroundColor: "#EEF0FB", padding: "112px 32px" }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* ── Heading ── */}
        <h2
          className="testimonial-heading"
          style={{
            fontWeight: 900,
            color: "#1A1A1A",
            textTransform: "uppercase",
            letterSpacing: "-1px",
            textAlign: "center",
            marginBottom: 40,
            lineHeight: 1.1,
          }}
        >
          WHAT OUR CUSTOMERS SAY
        </h2>

        {/* ── Main card ── */}
        <div
          className="testimonial-card"
          style={{
            backgroundColor: "#FFFFFF",
            borderRadius: 28,
            overflow: "hidden",
            width: "100%",
            minHeight: 340,
            boxShadow:
              "0 30px 60px -20px rgba(107,33,214,0.25), 0 12px 32px -8px rgba(17,17,17,0.12)",
            border: "1px solid rgba(255,255,255,0.6)",
          }}
        >
          <div
            className="testimonial-grid"
            style={{ height: "100%" }}
          >
            {/* Left photo */}
            <div className="testimonial-photo testimonial-photo--left">
              <img
                src={slide.leftImage}
                alt=""
                aria-hidden="true"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  opacity: fading ? 0 : 1,
                  transition: "opacity 0.2s ease",
                }}
              />
            </div>

            {/* Middle — quote */}
            <div
              style={{
                padding: "48px 40px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                gap: 0,
              }}
              className="testimonial-middle"
            >
              {/* Opening quote mark */}
              <span
                style={{
                  fontSize: 64,
                  lineHeight: 0.5,
                  color: "#6B21D6",
                  fontFamily: "Georgia, serif",
                  marginBottom: 16,
                  display: "block",
                }}
                aria-hidden="true"
              >
                &ldquo;
              </span>

              {/* Quote text */}
              <p
                className="testimonial-quote"
                style={{
                  fontWeight: 600,
                  color: "#1A1A1A",
                  lineHeight: 1.6,
                  maxWidth: 340,
                  marginBottom: 16,
                  opacity: fading ? 0 : 1,
                  transition: "opacity 0.2s ease",
                }}
              >
                {slide.quote}
              </p>

              {/* Name + role */}
              <p
                style={{
                  fontSize: 14,
                  marginBottom: 20,
                  opacity: fading ? 0 : 1,
                  transition: "opacity 0.2s ease",
                }}
              >
                <span style={{ fontWeight: 700, color: "#1A1A1A" }}>
                  {slide.name}
                </span>
                <span style={{ color: "#A2AADB", margin: "0 8px" }}>|</span>
                <span style={{ color: "#898AC4" }}>{slide.role}</span>
              </p>

              {/* Navigation arrows */}
              <div style={{ display: "flex", gap: 8 }}>
                <button
                  onClick={prev}
                  aria-label="Previous testimonial"
                  className="testimonial-arrow"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={next}
                  aria-label="Next testimonial"
                  className="testimonial-arrow"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>

            {/* Right photo */}
            <div className="testimonial-photo testimonial-photo--right">
              <img
                src={slide.rightImage}
                alt=""
                aria-hidden="true"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  opacity: fading ? 0 : 1,
                  transition: "opacity 0.2s ease",
                }}
              />
            </div>
          </div>
        </div>

        {/* ── Dot indicators ── */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 6,
            marginTop: 20,
          }}
        >
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`testimonial-dot ${i === active ? "testimonial-dot--active" : ""}`}
            />
          ))}
        </div>
      </div>

      {/* ── Scoped styles ── */}
      <style>{`
        .testimonial-heading {
          font-size: clamp(24px, 3.5vw, 38px);
        }

        .testimonial-grid {
          display: grid;
          grid-template-columns: 28% 44% 28%;
          min-height: 360px;
        }

        .testimonial-photo {
          min-height: 320px;
        }

        .testimonial-photo--left img {
          border-radius: 0;
        }

        .testimonial-photo--right img {
          border-radius: 0;
        }

        .testimonial-quote {
          font-size: clamp(15px, 2vw, 18px);
        }

        .testimonial-arrow {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #1A1A1A;
          color: white;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          padding: 0;
        }

        .testimonial-arrow:hover {
          background: #6B21D6;
        }

        .testimonial-dot {
          height: 8px;
          border-radius: 999px;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          background: #A2AADB;
          width: 8px;
          padding: 0;
        }

        .testimonial-dot--active {
          width: 24px;
          background: #6B21D6;
        }

        /* Tablet 768–1024px */
        @media (max-width: 1024px) and (min-width: 768px) {
          .testimonial-grid {
            grid-template-columns: 22% 56% 22%;
          }

          .testimonial-middle {
            padding: 36px 28px !important;
          }
        }

        /* Mobile < 768px */
        @media (max-width: 767px) {
          .testimonial-card {
            border-radius: 16px !important;
          }

          .testimonial-grid {
            grid-template-columns: 1fr;
          }

          .testimonial-photo {
            display: none;
          }

          .testimonial-middle {
            padding: 32px 24px !important;
          }

          .testimonial-quote {
            font-size: 15px !important;
          }
        }
      `}</style>
    </section>
  );
}
