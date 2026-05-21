import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { fadeUp, stagger, vp } from "@/lib/animations";
import heroBag from "@/assets/hero-bag.png";

const textLines = ["Act", "Different", "With", "AlibaBag"];
const textStagger = stagger(0.1, 0);

export function ActDifferent() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Bag drifts upward and subtly rotates as user scrolls through
  const rawBagY   = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const rawBagRot = useTransform(scrollYProgress, [0, 1], [6, -6]);
  const bagY   = useSpring(rawBagY,   { stiffness: 55, damping: 18, mass: 0.7 });
  const bagRot = useSpring(rawBagRot, { stiffness: 55, damping: 18, mass: 0.7 });

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: "#C0C9EE" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-[55%_45%] items-center md:min-h-[580px]">
        {/* LEFT */}
        <div className="order-1 flex flex-col justify-center px-6 pt-16 pb-8 md:px-0 md:pl-10 md:py-20 lg:pl-16">
          <motion.h2
            variants={textStagger}
            initial="hidden"
            whileInView="show"
            viewport={vp}
            className="uppercase font-black text-[#FAFAFA] mb-6 md:mb-8"
            style={{
              fontSize: "clamp(56px, 14vw, 130px)",
              fontWeight: 900,
              lineHeight: 0.92,
              letterSpacing: "-0.04em",
            }}
          >
            {textLines.map((line) => (
              <motion.span key={line} variants={fadeUp} className="block">
                {line}
              </motion.span>
            ))}
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={vp}
            className="text-[#1A1A1A]/75 mb-6 md:mb-8"
            style={{ fontSize: "15px", lineHeight: 1.7, maxWidth: "380px" }}
          >
            Pesan hari ini dan dapatkan tas lokal handmade yang tidak akan kamu
            temukan di tempat lain.
          </motion.p>

          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={vp}>
            <motion.a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block self-start rounded-full bg-[#1A1A1A] text-white font-bold text-sm py-3 px-8"
              style={{ fontWeight: 700 }}
              whileHover={{ scale: 1.05, backgroundColor: "#6B21D6" }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.2 }}
            >
              Pesan Sekarang
            </motion.a>
          </motion.div>
        </div>

        {/* RIGHT — bag with scroll parallax + rotation */}
        <div className="order-2 relative flex items-center justify-center overflow-visible px-6 pb-16 pt-4 md:p-0 md:h-full">
          <motion.img
            src={heroBag}
            alt="AlibaBag handmade woven tikar handbag"
            className="object-contain mx-auto w-[78%] sm:w-[65%] md:w-[90%]"
            style={{
              maxWidth: "520px",
              filter: "drop-shadow(0 24px 48px rgba(107,33,214,0.20))",
              y: bagY,
              rotate: bagRot,
            }}
          />
        </div>
      </div>
    </section>
  );
}
