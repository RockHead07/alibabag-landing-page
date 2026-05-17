import { Phone } from "lucide-react";

const links = [
  { label: "Home", href: "#home", active: true },
  { label: "About", href: "#about" },
  { label: "Keunggulan", href: "#keunggulan" },
  { label: "Harga", href: "#harga" },
  { label: "Kontak", href: "#kontak" },
];

export function Navbar() {
  return (
    <nav className="absolute inset-x-0 top-0 z-30">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <a href="#home" className="text-xl font-extrabold tracking-tight text-foreground">
          AlibaBag<span className="text-primary">.</span>
        </a>

        <ul className="hidden items-center gap-1 rounded-full bg-white/40 px-2 py-1 backdrop-blur-sm md:flex">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className={
                  l.active
                    ? "rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground"
                    : "rounded-full px-5 py-2 text-sm font-medium text-foreground/80 hover:text-foreground"
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
            className="grid h-11 w-11 place-items-center rounded-full bg-foreground text-background transition hover:opacity-90"
          >
            <Phone className="h-4 w-4" />
          </button>
          <a
            href="#kontak"
            className="rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background transition hover:opacity-90"
          >
            Pesan Sekarang
          </a>
        </div>
      </div>
    </nav>
  );
}
