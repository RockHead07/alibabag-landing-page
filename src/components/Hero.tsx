import { useRef } from "react";
import { Sparkles } from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { fadeUp, scaleIn, slideRight, stagger } from "@/lib/animations";
import heroBag from "@/assets/hero-bag.png";
import heroPerson from "@/assets/hero-person.jpg";

function Pill({
  children,
  active,
  icon,
}: {
  children: React.ReactNode;
  active?: boolean;
  icon?: React.ReactNode;
}) {
  return (
    <span
      className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium"
      style={
        active
          ? {
              backgroundColor: "#6B21D6",
              color: "#FAFAFA",
              boxShadow: "0 2px 8px rgba(107,33,214,0.25)",
            }
          : {
              border: "1.5px solid #A2AADB",
              backgroundColor: "rgba(255,255,255,0.5)",
              color: "#1A1A1A",
              backdropFilter: "blur(8px)",
            }
      }
    >
      {icon}
      {children}
    </span>
  );
}

const pillsStagger = stagger(0.08, 0.25);

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const rawBagY   = useTransform(scrollYProgress, [0, 1], [0, -110]);
  const rawWordY  = useTransform(scrollYProgress, [0, 1], [0, -55]);
  const rawRightY = useTransform(scrollYProgress, [0, 1], [0, -70]);

  const bagY   = useSpring(rawBagY,   { stiffness: 80, damping: 20, mass: 0.5 });
  const wordY  = useSpring(rawWordY,  { stiffness: 80, damping: 20, mass: 0.5 });
  const rightY = useSpring(rawRightY, { stiffness: 80, damping: 20, mass: 0.5 });

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative isolate min-h-screen overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #FAFAFA 0%, #E6E9F7 55%, #C0C9EE 100%)",
      }}
    >
      {/* Giant background wordmark — parallax slower */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.4 }}
        style={{ y: wordY }}
        className="pointer-events-none absolute inset-x-0 bottom-10 z-0 flex justify-center overflow-hidden whitespace-nowrap"
      >
        <span
          className="select-none font-black uppercase"
          style={{
            fontSize: "clamp(80px, 12vw, 160px)",
            lineHeight: 0.85,
            letterSpacing: "-0.04em",
            color: "#A2AADB",
            opacity: 0.3,
          }}
        >
          ALIBABAG
        </span>
      </motion.div>

      <div
        className="relative z-10 mx-auto grid min-h-screen max-w-7xl grid-cols-1 gap-10 px-6 pb-24 pt-32 lg:grid-cols-12 lg:px-10 lg:pt-36"
      >
        {/* LEFT — pills staggered */}
        <div className="flex flex-col justify-between lg:col-span-3">
          <motion.div
            variants={pillsStagger}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-2 items-start"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-2">
              <span
                className="grid h-9 w-9 place-items-center rounded-full"
                style={{
                  border: "1.5px solid #A2AADB",
                  backgroundColor: "rgba(255,255,255,0.6)",
                }}
              >
                <Sparkles className="h-4 w-4" style={{ color: "#6B21D6" }} />
              </span>
              <Pill>Handcrafted</Pill>
            </motion.div>
            <motion.div variants={fadeUp} className="ml-4">
              <Pill>Eco-Friendly</Pill>
            </motion.div>
            <motion.div variants={fadeUp} className="ml-1">
              <Pill active>Unik &amp; Langka</Pill>
            </motion.div>
            <motion.div variants={fadeUp} className="ml-6">
              <Pill>Lokal Pride 🇮🇩</Pill>
            </motion.div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
            className="mt-10 uppercase leading-tight tracking-tight lg:mt-0"
            style={{
              fontSize: "clamp(24px, 3vw, 36px)",
              fontWeight: 800,
              color: "#1A1A1A",
            }}
          >
            Anyaman Lokal,
            <br />
            Gaya Global
          </motion.h1>
        </div>

        {/* CENTER — floating bag with parallax */}
        <div className="relative flex items-center justify-center lg:col-span-6">
          <motion.div
            variants={scaleIn}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            style={{ y: bagY }}
            className="relative z-10 w-[78%] max-w-[520px]"
          >
            <img
              src={heroBag}
              alt="AlibaBag handwoven tikar handbag in royal purple"
              width={1024}
              height={1024}
              className="w-full object-contain"
              style={{
                filter: "drop-shadow(0 20px 60px rgba(107, 33, 214, 0.15))",
              }}
            />

            {/* Organic badge — hugs top-right edge of bag */}
            <motion.span
              initial={{ opacity: 0, x: 10, scale: 0.85 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: 0.75, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-[-2%] top-[30%] z-20 translate-x-1/4 rounded-full px-4 py-1.5 text-xs font-medium"
              style={{
                backdropFilter: "blur(20px) saturate(200%)",
                WebkitBackdropFilter: "blur(20px) saturate(200%)",
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(107, 33, 214, 0.4)",
                color: "#1A1A1A",
                boxShadow: "0 4px 20px rgba(107, 33, 214, 0.12), inset 0 1px 0 rgba(255,255,255,0.25)",
              }}
            >
              Organic
            </motion.span>

            {/* No Chemicals badge — hugs bottom-left edge of bag */}
            <motion.span
              initial={{ opacity: 0, x: -10, scale: 0.85 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: 0.92, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="absolute bottom-[20%] left-[-2%] z-20 -translate-x-1/4 rounded-full px-4 py-1.5 text-xs font-medium"
              style={{
                backdropFilter: "blur(20px) saturate(200%)",
                WebkitBackdropFilter: "blur(20px) saturate(200%)",
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(107, 33, 214, 0.4)",
                color: "#1A1A1A",
                boxShadow: "0 4px 20px rgba(107, 33, 214, 0.12), inset 0 1px 0 rgba(255,255,255,0.25)",
              }}
            >
              No Chemicals
            </motion.span>
          </motion.div>
        </div>

        {/* RIGHT — card with parallax */}
        <motion.div
          variants={slideRight}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
          style={{ y: rightY }}
          className="flex flex-col items-end justify-between gap-6 lg:col-span-3"
        >
          <div
            className="w-full max-w-[220px] overflow-hidden rounded-2xl p-2"
            style={{
              backgroundColor: "#FAFAFA",
              boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            }}
          >
            <img
              src={heroPerson}
              alt="Artisan holding an AlibaBag"
              width={768}
              height={896}
              className="h-56 w-full rounded-xl object-cover"
            />
            <div className="px-2 py-2 text-right">
              <p className="text-sm font-semibold" style={{ color: "#1A1A1A" }}>
                Hamida Jannat
              </p>
              <p className="text-xs" style={{ color: "#898AC4" }}>
                Founder · AlibaBag
              </p>
            </div>
          </div>

          <div
            className="inline-flex items-center gap-2 rounded-full px-3 py-2"
            style={{
              backgroundColor: "#FAFAFA",
              boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
            }}
          >
            <span
              className="grid h-8 w-8 place-items-center rounded-full text-sm"
              style={{ backgroundColor: "rgba(107,33,214,0.12)" }}
            >
              🇮🇩
            </span>
            <div className="pr-2 text-left">
              <p className="text-xs font-semibold leading-tight" style={{ color: "#1A1A1A" }}>
                Local Craft
              </p>
              <p className="text-[10px] leading-tight" style={{ color: "#898AC4" }}>
                Made in Indonesia
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
