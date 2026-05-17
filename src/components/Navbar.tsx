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
    <nav className="absolute inset-x-0 top-0 z-30">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <a
          href="#home"
          className="text-xl font-extrabold tracking-tight"
          style={{ color: "#1A1A1A" }}
        >
          AlibaBag<span style={{ color: "#6B21D6" }}>.</span>
        </a>

        <ul
          className="hidden items-center gap-1 rounded-full px-2 py-1 backdrop-blur-sm md:flex"
          style={{ backgroundColor: "rgba(255,255,255,0.4)" }}
        >
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="rounded-full px-5 py-2 text-sm font-medium transition-colors"
                style={
                  l.active
                    ? {
                        backgroundColor: "#6B21D6",
                        color: "#FAFAFA",
                      }
                    : {
                        color: "rgba(26,26,26,0.8)",
                      }
                }
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
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
