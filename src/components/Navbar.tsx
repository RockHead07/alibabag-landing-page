import { Phone } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { label: "Home", href: "#home", active: true },
  { label: "About", href: "#about" },
  { label: "Proses", href: "#proses" },
  { label: "Harga", href: "#harga" },
  { label: "Kontak", href: "#kontak" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={[
          "fixed inset-x-0 top-0 z-[100] transition-all duration-500",
          scrolled
            ? "border-b border-white/30 shadow-[0_4px_24px_rgba(0,0,0,0.08)]"
            : "border-b border-white/20",
        ].join(" ")}
        style={{
          background: scrolled
            ? "rgba(250,250,250,0.78)"
            : "rgba(255,255,255,0.35)",
          backdropFilter: "blur(24px) saturate(180%)",
          WebkitBackdropFilter: "blur(24px) saturate(180%)",
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
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="text-sm font-medium transition-colors"
                  style={
                    l.active
                      ? { color: "#6B21D6" }
                      : { color: "rgba(26,26,26,0.8)" }
                  }
                >
                  {l.label}
                </a>
              </li>
            ))}
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
      </header>
    </>
  );
}
