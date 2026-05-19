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
    <>
      {/* Section 1 header — Logo + CTA scroll away with hero, never re-appear */}
      <header className="absolute inset-x-0 top-0 z-30">
        <div className="relative mx-auto max-w-7xl px-6 py-6 lg:px-10">
          <a
            href="#home"
            className="absolute left-6 top-1/2 -translate-y-1/2 text-xl font-extrabold tracking-tight lg:left-10"
            style={{ color: "#1A1A1A" }}
          >
            AlibaBag<span style={{ color: "#6B21D6" }}>.</span>
          </a>

          <ul
            className="mx-auto hidden w-fit items-center gap-1 rounded-full bg-white/40 px-2 py-1 backdrop-blur-sm md:flex"
            style={{ visibility: isScrolled ? "hidden" : "visible" }}
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

      {/* Floating navbar — only appears after scroll */}
      <div
        className={[
          "pointer-events-none fixed inset-x-0 top-4 z-40 mx-auto hidden w-fit transition-all duration-500 ease-out md:block",
          isScrolled
            ? "translate-y-0 opacity-100"
            : "-translate-y-6 opacity-0",
        ].join(" ")}
      >
        <ul
          className="pointer-events-auto flex items-center gap-1 bg-white/85 px-2 py-1 shadow-[0_10px_30px_-12px_rgba(26,26,26,0.25)] backdrop-blur-md"
          style={{ borderRadius: "14px" }}
        >
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="rounded-[10px] px-5 py-2 text-sm font-medium transition-colors"
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
      </div>
    </>
  );
}
