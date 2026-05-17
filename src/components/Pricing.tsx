import { Star, MapPin, Sparkles, MessageCircle } from "lucide-react";

const stats = [
  {
    icon: <Star className="h-7 w-7" style={{ color: "#898AC4" }} />,
    label: "Handpicked",
    sub: "Quality Check",
  },
  {
    icon: <span className="text-[28px] leading-none">🇮🇩</span>,
    label: "Made in Indonesia",
    sub: "Local Pride",
  },
  {
    icon: <Sparkles className="h-7 w-7" style={{ color: "#6B21D6" }} />,
    label: "Exclusive!",
    sub: "Only at AlibaBag",
  },
];

export function Pricing() {
  return (
    <section
      id="harga"
      className="py-24 px-8"
      style={{ backgroundColor: "#C0C9EE" }}
    >
      <div className="mx-auto max-w-4xl text-center">
        {/* Top label */}
        <p
          className="uppercase"
          style={{
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.25em",
            color: "#898AC4",
            marginBottom: 12,
          }}
        >
          Harga
        </p>

        {/* Main heading */}
        <h2
          className="uppercase"
          style={{
            fontSize: "clamp(28px, 4vw, 42px)",
            fontWeight: 900,
            color: "#1A1A1A",
            letterSpacing: "-1px",
            marginBottom: 48,
          }}
        >
          Miliki AlibaBag Sekarang
        </h2>

        {/* Stats row */}
        <div
          className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center sm:gap-0"
          style={{ marginBottom: 56 }}
        >
          {stats.map((stat, i) => (
            <div key={stat.label} className="flex items-center">
              {/* Separator (before item 2 and 3, desktop only) */}
              {i > 0 && (
                <div
                  className="hidden sm:block mx-8 lg:mx-12"
                  style={{
                    width: 1,
                    height: 48,
                    backgroundColor: "#A2AADB",
                  }}
                />
              )}
              <div className="flex flex-col items-center">
                {stat.icon}
                <p
                  style={{
                    fontSize: 15,
                    fontWeight: 700,
                    color: "#1A1A1A",
                    marginTop: 8,
                  }}
                >
                  {stat.label}
                </p>
                <p
                  style={{
                    fontSize: 12,
                    color: "#898AC4",
                    marginTop: 4,
                  }}
                >
                  {stat.sub}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Price display */}
        <p
          className="leading-none"
          style={{
            fontSize: "clamp(52px, 8vw, 88px)",
            fontWeight: 900,
            color: "#6B21D6",
            letterSpacing: "-2px",
            marginBottom: 8,
          }}
        >
          Rp 20.000
        </p>
        <p
          style={{
            fontSize: 14,
            color: "#898AC4",
            fontWeight: 500,
            marginBottom: 40,
          }}
        >
          s/d Rp 25.000
        </p>

        {/* CTA button */}
        <a
          href="https://wa.me/6281234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full transition-all duration-200"
          style={{
            backgroundColor: "#6B21D6",
            color: "#FAFAFA",
            fontWeight: 700,
            fontSize: 15,
            padding: "16px 40px",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#5b1ab8";
            e.currentTarget.style.boxShadow =
              "0 8px 24px rgba(107,33,214,0.35)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#6B21D6";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          <MessageCircle className="h-4 w-4" />
          Pesan via WhatsApp
        </a>

        {/* Fine print */}
        <p
          className="italic"
          style={{
            marginTop: 16,
            fontSize: 11,
            color: "#A2AADB",
          }}
        >
          * Free ongkir untuk area tertentu
        </p>
      </div>
    </section>
  );
}
