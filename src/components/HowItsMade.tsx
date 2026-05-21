import { motion } from "framer-motion";
import { fadeUp, fadeIn, stagger, vp } from "@/lib/animations";
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

const cardStagger = stagger(0.15, 0.1);

export function HowItsMade() {
  return (
    <section
      id="proses"
      className="py-20 px-8 lg:px-12"
      style={{ backgroundColor: "#C0C9EE" }}
    >
      {/* PART A — Full-width giant text with description floating on top */}
      <div
        className="relative mx-auto max-w-7xl pb-8"
        style={{ overflow: "visible" }}
      >
        {/* Giant decorative text — slide up on first appear only */}
        <motion.p
          className="select-none font-black uppercase whitespace-nowrap pointer-events-none"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontSize: "clamp(52px, 7.5vw, 110px)",
            lineHeight: 0.88,
            letterSpacing: "-3px",
            color: "#FAFAFA",
          }}
        >
          DARI TIKAR
          <br />
          KE
          <br />
          TANGANMU
        </motion.p>

        {/* Description — absolutely positioned on top, right side */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={vp}
          className="absolute right-8 z-10 hidden md:block"
          style={{
            top: "50%",
            transform: "translateY(-50%)",
            maxWidth: 340,
          }}
        >
          <h3
            className="uppercase tracking-wide font-extrabold"
            style={{ fontSize: 15, color: "#1A1A1A", marginBottom: 12 }}
          >
            KERAJINAN DI SETIAP LANGKAH
          </h3>
          <p className="leading-relaxed" style={{ fontSize: 13, color: "#1A1A1A" }}>
            Dari pemilihan tikar berkualitas hingga proses anyaman yang
            teliti, setiap AlibaBag dibuat dengan penuh perhatian agar
            sampai ke tanganmu dalam kondisi terbaik.
          </p>
        </motion.div>

        {/* Mobile-only description */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={vp}
          className="mt-6 md:hidden"
        >
          <h3
            className="uppercase tracking-wide font-extrabold"
            style={{ fontSize: 15, color: "#1A1A1A", marginBottom: 12 }}
          >
            KERAJINAN DI SETIAP LANGKAH
          </h3>
          <p className="leading-relaxed" style={{ fontSize: 13, color: "#1A1A1A" }}>
            Dari pemilihan tikar berkualitas hingga proses anyaman yang
            teliti, setiap AlibaBag dibuat dengan penuh perhatian agar
            sampai ke tanganmu dalam kondisi terbaik.
          </p>
        </motion.div>
      </div>

      {/* PART B — 3 cards */}
      <div className="mx-auto max-w-7xl mt-8">
        <motion.div
          variants={cardStagger}
          initial="hidden"
          whileInView="show"
          viewport={vp}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {steps.map((s, i) => (
            <motion.article
              key={s.label}
              variants={fadeUp}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="relative overflow-hidden howitsmade-card"
            >
              <img
                src={s.img}
                alt={s.label}
                loading="lazy"
                className="w-full object-cover"
                style={{ height: 210 }}
              />
              <div className="p-4">
                <p
                  className="text-xs font-bold uppercase tracking-wide"
                  style={{ color: "#1A1A1A" }}
                >
                  {s.label}
                </p>
                <p
                  className="mt-1.5 text-xs leading-relaxed"
                  style={{ color: "#898AC4" }}
                >
                  {s.sub}
                </p>
              </div>

              {i === steps.length - 1 && (
                <div
                  className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full px-3 py-1"
                  style={{
                    backgroundColor: "white",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.10)",
                  }}
                >
                  <span className="text-xs">🇮🇩</span>
                  <span className="text-xs font-semibold" style={{ color: "#1A1A1A" }}>
                    Local Craft
                  </span>
                </div>
              )}
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
