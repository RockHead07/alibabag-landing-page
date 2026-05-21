import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, scaleIn, vp } from "@/lib/animations";

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
  const [direction, setDirection] = useState(1);

  function goTo(index: number) {
    setDirection(index > active ? 1 : -1);
    setActive(index);
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
      style={{ backgroundColor: "#FAFAFA", padding: "96px 32px" }}
    >
      <div style={{ maxWidth: 1152, margin: "0 auto" }}>

        {/* ── Heading ── */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={vp}
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
        </motion.h2>

        {/* ── Main card ── */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="show"
          viewport={vp}
          className="testimonial-card"
          style={{
            backgroundColor: "#C0C9EE",
            borderRadius: 24,
            overflow: "hidden",
            width: "100%",
            minHeight: 320,
            boxShadow: "0 8px 40px rgba(0,0,0,0.12)",
          }}
        >
          <div
            className="testimonial-grid"
            style={{ height: "100%" }}
          >
            {/* Left photo */}
            <div
              className="testimonial-photo testimonial-photo--left"
              style={{ position: "relative", overflow: "hidden" }}
            >
              <AnimatePresence initial={false}>
                <motion.img
                  key={`left-${active}`}
                  src={slide.leftImage}
                  alt=""
                  aria-hidden="true"
                  initial={{ opacity: 0, scale: 1.12 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.06 }}
                  transition={{
                    duration: 0.65,
                    ease: [0.22, 1, 0.36, 1],
                    delay: direction > 0 ? 0 : 0.06,
                  }}
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </AnimatePresence>
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
              <AnimatePresence mode="wait">
                <motion.p
                  key={`quote-${active}`}
                  className="testimonial-quote"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  style={{
                    fontWeight: 600,
                    color: "#1A1A1A",
                    lineHeight: 1.6,
                    maxWidth: 340,
                    marginBottom: 16,
                  }}
                >
                  {slide.quote}
                </motion.p>
              </AnimatePresence>

              {/* Name + role */}
              <AnimatePresence mode="wait">
                <motion.p
                  key={`name-${active}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  style={{
                    fontSize: 14,
                    marginBottom: 20,
                  }}
                >
                  <span style={{ fontWeight: 700, color: "#1A1A1A" }}>
                    {slide.name}
                  </span>
                  <span style={{ color: "#A2AADB", margin: "0 8px" }}>|</span>
                  <span style={{ color: "#898AC4" }}>{slide.role}</span>
                </motion.p>
              </AnimatePresence>

              {/* Navigation arrows */}
              <div style={{ display: "flex", gap: 8 }}>
                <motion.button
                  onClick={prev}
                  aria-label="Previous testimonial"
                  className="testimonial-arrow"
                  whileHover={{ scale: 1.1, backgroundColor: "#6B21D6" }}
                  whileTap={{ scale: 0.92 }}
                >
                  <ChevronLeft size={18} />
                </motion.button>
                <motion.button
                  onClick={next}
                  aria-label="Next testimonial"
                  className="testimonial-arrow"
                  whileHover={{ scale: 1.1, backgroundColor: "#6B21D6" }}
                  whileTap={{ scale: 0.92 }}
                >
                  <ChevronRight size={18} />
                </motion.button>
              </div>
            </div>

            {/* Right photo */}
            <div
              className="testimonial-photo testimonial-photo--right"
              style={{ position: "relative", overflow: "hidden" }}
            >
              <AnimatePresence initial={false}>
                <motion.img
                  key={`right-${active}`}
                  src={slide.rightImage}
                  alt=""
                  aria-hidden="true"
                  initial={{ opacity: 0, scale: 1.12 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.06 }}
                  transition={{
                    duration: 0.65,
                    ease: [0.22, 1, 0.36, 1],
                    delay: direction > 0 ? 0.06 : 0,
                  }}
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

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
            <motion.button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`testimonial-dot ${i === active ? "testimonial-dot--active" : ""}`}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
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
          transition: background 0.2s ease;
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
