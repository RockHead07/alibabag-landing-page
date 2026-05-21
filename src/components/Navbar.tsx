import { Phone } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const links = [
<<<<<<< HEAD
  { label: "Home",   href: "#home",   id: "home"   },
  { label: "About",  href: "#about",  id: "about"  },
  { label: "Proses", href: "#proses", id: "proses" },
  { label: "Harga",  href: "#harga",  id: "harga"  },
  { label: "Kontak", href: "#kontak", id: "kontak" },
=======
  { label: "Home", href: "#home", active: true },
  { label: "About", href: "#about" },
  { label: "Proses", href: "#proses" },
  { label: "Harga", href: "#harga" },
>>>>>>> f6e997230046d37f4cbbe287a19fe31c60cff091
];

export function Navbar() {
  const [visible, setVisible]         = useState(true);
  const [atTop, setAtTop]             = useState(true);
  const [activeId, setActiveId]       = useState("home");
  const lastY                         = useRef(0);

  // Show / hide on scroll direction
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setAtTop(y < 10);
      if (y < 10) {
        setVisible(true);
      } else if (y > lastY.current + 2) {
        setVisible(false);
      } else if (y < lastY.current - 2) {
        setVisible(true);
      }
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section tracking via IntersectionObserver
  useEffect(() => {
    const sectionIds = links.map((l) => l.id);
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(id);
        },
        // Trigger when top of section crosses the upper-middle of the viewport
        { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: visible ? 0 : "-100%", opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-[100]"
      style={{
        background: "transparent",
        backdropFilter: "blur(24px) saturate(160%)",
        WebkitBackdropFilter: "blur(24px) saturate(160%)",
        borderBottom: atTop ? "none" : "1px solid rgba(255,255,255,0.12)",
      }}
    >
      <div className="relative mx-auto max-w-7xl px-6 py-6 lg:px-10">
        <a
          href="#home"
          className="absolute left-6 top-1/2 -translate-y-1/2 text-xl font-extrabold tracking-tight lg:left-10"
          style={{ color: "#1A1A1A" }}
        >
          AlibaBag<span style={{ color: "#6B21D6" }}>.</span>
        </a>

        <ul className="mx-auto hidden w-fit items-center gap-6 md:flex">
          {links.map((l) => {
            const isActive = activeId === l.id;
            return (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="relative text-sm font-medium transition-colors duration-200"
                  style={{ color: isActive ? "#6B21D6" : "rgba(26,26,26,0.8)" }}
                >
                  {l.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full"
                      style={{ backgroundColor: "#6B21D6" }}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="absolute right-6 top-1/2 flex -translate-y-1/2 items-center gap-2 lg:right-10">
          <button
            aria-label="Call us"
            className="grid h-11 w-11 place-items-center rounded-full transition hover:opacity-90"
            style={{ backgroundColor: "#1A1A1A", color: "#FAFAFA" }}
          >
            <Phone className="h-4 w-4" />
          </button>
          <a
            href="#kontak"
            className="rounded-full px-5 py-3 text-sm font-semibold transition hover:opacity-90"
            style={{ backgroundColor: "#1A1A1A", color: "#FAFAFA" }}
          >
            Pesan Sekarang
          </a>
        </div>
      </div>
    </motion.header>
  );
}
