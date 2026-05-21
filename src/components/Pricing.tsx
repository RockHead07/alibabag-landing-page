// eslint-disable-next-line
import { CheckCircle2, Instagram } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, slideRight, stagger, vp } from "@/lib/animations";
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

const leftStagger = stagger(0.1, 0);
const checkStagger = stagger(0.08, 0.1);

export function Pricing() {
  return (
    <section
      id="harga"
      style={{ backgroundColor: "#FAFAFA", padding: "96px 64px" }}
    >
      <div className="pricing-grid">

        {/* ── LEFT COLUMN ── */}
        <motion.div
          variants={leftStagger}
          initial="hidden"
          whileInView="show"
          viewport={vp}
          style={{ display: "flex", flexDirection: "column" }}
        >
          {/* Label */}
          <motion.p
            variants={fadeUp}
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
          </motion.p>

          {/* Heading */}
          <motion.h2
            variants={fadeUp}
            className="pricing-heading"
            style={{
              fontWeight: 900,
              color: "#1A1A1A",
              textTransform: "uppercase",
              lineHeight: 1.1,
              marginBottom: 16,
            }}
          >
            DARI TIKAR KE TANGANMU, DENGAN HARGA YANG RAMAH
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={fadeUp}
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
          </motion.p>

          {/* Checklist */}
          <motion.ul
            variants={checkStagger}
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
              <motion.li
                key={item}
                variants={fadeUp}
                style={{ display: "flex", alignItems: "center", gap: 10 }}
              >
                <CheckCircle2
                  style={{ color: "#6B21D6", width: 18, height: 18, flexShrink: 0 }}
                />
                <span style={{ fontSize: 14, color: "#1A1A1A" }}>{item}</span>
              </motion.li>
            ))}
          </motion.ul>

          {/* Stats row */}
          <motion.div
            variants={fadeUp}
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
          </motion.div>

          {/* CTA */}
          <motion.div variants={fadeUp} style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="pushable"
            >
              <span className="p-shadow"></span>
              <span className="p-edge p-edge--dark"></span>
              <span className="p-front p-front--dark">Pesan Sekarang</span>
            </a>
            <a
              href="https://instagram.com/alibabag"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="pushable"
            >
              <span className="p-shadow"></span>
              <span className="p-edge p-edge--ig"></span>
              <span className="p-front p-front--ig">
                <Instagram size={18} />
                <span>Instagram</span>
              </span>
            </a>
          </motion.div>
        </motion.div>

        {/* ── RIGHT COLUMN ── */}
        <motion.div
          variants={slideRight}
          initial="hidden"
          whileInView="show"
          viewport={vp}
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Floating product image + badges share the same float motion */}
          <motion.div
            className="pricing-bag-wrap"
            animate={{ y: [0, -14, 0], rotate: [-8, -6, -8] }}
            transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
          >
            <img
              src={heroBag}
              alt="AlibaBag product"
              className="pricing-bag-img"
            />

            {/* Badge 1 — top left */}
            <motion.span
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={vp}
              transition={{ delay: 0.4, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="pricing-badge pricing-badge--1"
              style={{ top: "10%", left: "8%" }}
            >
              Eco-Friendly
            </motion.span>

            {/* Badge 2 — right middle */}
            <motion.span
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={vp}
              transition={{ delay: 0.55, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="pricing-badge pricing-badge--2"
              style={{ top: "45%", right: "6%" }}
            >
              Handmade ✋
            </motion.span>

            {/* Badge 3 — bottom left */}
            <motion.span
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={vp}
              transition={{ delay: 0.7, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="pricing-badge pricing-badge--3"
              style={{ bottom: "14%", left: "10%" }}
            >
              🇮🇩 Local Pride
            </motion.span>
          </motion.div>
        </motion.div>
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

        .pricing-bag-wrap {
          position: relative;
          width: 100%;
          max-width: 420px;
          display: flex;
          align-items: center;
          justify-content: center;
          will-change: transform;
        }

        .pricing-bag-img {
          width: 100%;
          max-width: 420px;
          filter: drop-shadow(0 24px 60px rgba(107,33,214,0.18));
          display: block;
        }

        .pricing-badge {
          position: absolute;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(16px) saturate(160%);
          -webkit-backdrop-filter: blur(16px) saturate(160%);
          border: 1.5px solid rgba(255, 255, 255, 0.7);
          border-radius: 9999px;
          box-shadow: 0 8px 32px rgba(31, 38, 135, 0.12), inset 0 1px 0 rgba(255,255,255,0.4);
          padding: 8px 16px;
          font-size: 12px;
          font-weight: 600;
          color: #1A1A1A;
          white-space: nowrap;
          pointer-events: none;
        }

        /* ── 3D Pushable buttons ── */
        .pushable {
          position: relative;
          border: none;
          background: transparent;
          padding: 0;
          cursor: pointer;
          outline-offset: 4px;
          transition: filter 250ms;
          text-decoration: none;
          display: inline-block;
        }

        .p-shadow {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 999px;
          background: hsl(0deg 0% 0% / 0.25);
          will-change: transform;
          transform: translateY(2px);
          transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
        }

        .p-edge {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 999px;
        }

        .p-edge--dark {
          background: linear-gradient(
            to left,
            hsl(0deg 0% 4%) 0%,
            hsl(0deg 0% 11%) 8%,
            hsl(0deg 0% 11%) 92%,
            hsl(0deg 0% 4%) 100%
          );
        }

        .p-edge--ig {
          background: linear-gradient(
            to left,
            #6b0b31 0%,
            #991830 8%,
            #991830 92%,
            #6b0b31 100%
          );
        }

        .p-front {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          position: relative;
          padding: 12px 32px;
          border-radius: 999px;
          font-size: 14px;
          font-weight: 700;
          color: white;
          will-change: transform;
          transform: translateY(-4px);
          transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
        }

        .p-front--dark {
          background: #1A1A1A;
        }

        .p-front--ig {
          background: linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
          padding: 12px 20px;
        }

        .pushable:hover {
          filter: brightness(110%);
        }

        .pushable:hover .p-front {
          transform: translateY(-6px);
          transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
        }

        .pushable:active .p-front {
          transform: translateY(-2px);
          transition: transform 34ms;
        }

        .pushable:hover .p-shadow {
          transform: translateY(4px);
          transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
        }

        .pushable:active .p-shadow {
          transform: translateY(1px);
          transition: transform 34ms;
        }

        .pushable:focus:not(:focus-visible) {
          outline: none;
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
