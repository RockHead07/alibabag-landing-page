import { Phone } from "lucide-react";

const links = [
  { label: "Home", href: "#home", active: true },
  { label: "About", href: "#about" },
  { label: "Proses", href: "#proses" },
  { label: "Harga", href: "#harga" },
  { label: "Kontak", href: "#kontak" },
];

export function Navbar() {
  return (
    <>
      {/* Section 1 header — Logo + CTA scroll away with hero, never re-appear */}
      <header
        className={[
          "fixed inset-x-0 top-0 z-[100]",
          "bg-white/80 backdrop-blur-xl backdrop-saturate-150 border-b border-white/35",
          "supports-[backdrop-filter]:bg-white/60",
        ].join(" ")}
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
