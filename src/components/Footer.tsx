import { MapPin, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, stagger, vp } from "@/lib/animations";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#tentang" },
  { label: "Proses", href: "#proses" },
  { label: "Harga", href: "#harga" },
  { label: "Kontak", href: "#kontak" },
];

const contactItems = [
  { icon: MapPin, text: "Lamongan, Jawa Timur", href: undefined },
  { icon: Mail, text: "AlibaBag@gmail.com", href: "mailto:AlibaBag@gmail.com" },
  { icon: Phone, text: "+62 812-3456-7890", href: undefined },
];

const colStagger = stagger(0.15, 0);

export function Footer() {
  return (
    <footer style={{ backgroundColor: "#111111", padding: "64px 64px 0" }}>
      <div style={{ maxWidth: 1152, margin: "0 auto" }}>

        {/* ── Top 3-column grid ── */}
        <motion.div
          variants={colStagger}
          initial="hidden"
          whileInView="show"
          viewport={vp}
          className="footer-grid"
        >
          {/* LEFT — brand + WA CTA */}
          <motion.div variants={fadeUp}>
            <p
              style={{
                fontSize: 22,
                fontWeight: 800,
                color: "#FAFAFA",
                marginBottom: 12,
              }}
            >
              <span>AlibaBag</span><span style={{ color: "#6B21D6" }}>.</span>
            </p>

            <p
              style={{
                fontSize: 13,
                color: "#898AC4",
                lineHeight: 1.7,
                maxWidth: 280,
                marginBottom: 24,
              }}
            >
              Tas tangan lokal dari bahan tikar berkualitas. Kami menghadirkan
              keunikan lokal ke gaya hidupmu — handmade, eco-friendly, dan
              penuh karya.
            </p>

            <p
              style={{
                fontSize: 11,
                color: "#898AC4",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                marginBottom: 10,
              }}
            >
              Hubungi kami langsung
            </p>

            <motion.a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-wa-btn"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              💬 Chat via WhatsApp
            </motion.a>
          </motion.div>

          {/* CENTER — quick links */}
          <motion.div variants={fadeUp}>
            <p
              style={{
                fontSize: 12,
                fontWeight: 700,
                color: "#FAFAFA",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                marginBottom: 20,
              }}
            >
              QUICK LINKS
            </p>

            <nav>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="footer-nav-link"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>

          {/* RIGHT — contact */}
          <motion.div variants={fadeUp}>
            <p
              style={{
                fontSize: 12,
                fontWeight: 700,
                color: "#FAFAFA",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                marginBottom: 20,
              }}
            >
              CONTACT
            </p>

            {contactItems.map(({ icon: Icon, text, href }) => (
              <div
                key={text}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 16,
                }}
              >
                <Icon size={16} style={{ color: "#6B21D6", flexShrink: 0 }} />
                {href ? (
                  <a
                    href={href}
                    style={{ fontSize: 14, color: "#898AC4", textDecoration: "none" }}
                  >
                    {text}
                  </a>
                ) : (
                  <span style={{ fontSize: 14, color: "#898AC4" }}>{text}</span>
                )}
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* ── Divider ── */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", margin: "0" }} />

        {/* ── Bottom bar ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={vp}
          className="footer-bottom"
        >
          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.35)" }}>
            © 2026 AlibaBag. All rights reserved.
          </p>
          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", fontStyle: "italic" }}>
            Made with love &amp; some tikar ❤️
          </p>
        </motion.div>
      </div>

      {/* ── Scoped styles ── */}
      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 45% 22% 33%;
          gap: 48px;
          align-items: start;
          padding-bottom: 48px;
        }

        .footer-wa-btn {
          display: inline-block;
          background: #6B21D6;
          color: white;
          font-weight: 700;
          font-size: 13px;
          padding: 12px 24px;
          border-radius: 9999px;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .footer-wa-btn:hover {
          background: #5b1ab8;
        }

        .footer-nav-link {
          display: block;
          font-size: 14px;
          color: #898AC4;
          text-decoration: none;
          margin-bottom: 12px;
          transition: color 0.2s ease;
        }

        .footer-nav-link:hover {
          color: #FAFAFA;
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 0;
        }

        /* Tablet */
        @media (max-width: 1024px) and (min-width: 768px) {
          footer {
            padding-left: 32px !important;
            padding-right: 32px !important;
          }
        }

        /* Mobile */
        @media (max-width: 767px) {
          footer {
            padding-left: 24px !important;
            padding-right: 24px !important;
          }

          .footer-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .footer-bottom {
            flex-direction: column;
            text-align: center;
            gap: 8px;
          }
        }
      `}</style>
    </footer>
  );
}
