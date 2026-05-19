import { useEffect, useState } from "react";
import { Phone } from "lucide-react";

const links = [
  { label: "Home", href: "#home", active: true },
  { label: "About", href: "#about" },
  { label: "Proses", href: "#proses" },
  { label: "Harga", href: "#harga" },
  { label: "Kontak", href: "#kontak" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed inset-x-0 top-0 z-30">
      <div className="relative mx-auto max-w-7xl px-6 py-6 lg:px-10">
        {/* Logo — fixed, never animates */}
        <a
          href="#home"
          className="absolute left-6 top-1/2 -translate-y-1/2 text-xl font-extrabold tracking-tight lg:left-10"
          style={{ color: "#1A1A1A" }}
        >
          AlibaBag<span style={{ color: "#6B21D6" }}>.</span>
        </a>

        {/* Center nav — morphs from pill to floating box on scroll */}
        <ul
          className={[
            "mx-auto hidden w-fit items-center gap-1 px-2 py-1 transition-all duration-500 ease-out md:flex",
            isScrolled
              ? "bg-white/80 shadow-[0_10px_30px_-12px_rgba(26,26,26,0.25)] backdrop-blur-md"
              : "rounded-full bg-white/40 backdrop-blur-sm",
          ].join(" ")}
          style={isScrolled ? { borderRadius: "14px" } : undefined}
        >
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="rounded-full px-5 py-2 text-sm font-medium transition-colors"
                style={
                  l.active
                    ? { backgroundColor: "#6B21D6", color: "#FAFAFA" }
                    : { color: "rgba(26,26,26,0.8)" }
                }
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA group — fixed, never animates */}
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
    </nav>
  );
}

