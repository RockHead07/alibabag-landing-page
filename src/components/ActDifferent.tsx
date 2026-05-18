import heroBag from "@/assets/hero-bag.png";

export function ActDifferent() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: "#C0C9EE", minHeight: "640px" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-[50%_50%] items-center h-full">
        {/* LEFT */}
        <div className="flex flex-col justify-center px-8 py-16 md:pl-10 md:py-20 lg:pl-16">
          <h2
            className="uppercase font-black text-[#FAFAFA] mb-8"
            style={{
              fontSize: "clamp(48px, 10vw, 130px)",
              fontWeight: 900,
              lineHeight: 0.92,
              letterSpacing: "-4px",
            }}
          >
            <span className="block">Act</span>
            <span className="block">Different</span>
            <span className="block">With</span>
            <span className="block">AlibaBag</span>
          </h2>

          <p
            className="text-[#1A1A1A]/75 mb-8"
            style={{
              fontSize: "15px",
              lineHeight: 1.7,
              maxWidth: "380px",
            }}
          >
            Pesan hari ini dan dapatkan tas lokal handmade yang tidak akan kamu
            temukan di tempat lain.
          </p>

          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block self-start rounded-full bg-[#1A1A1A] text-white font-bold text-sm py-3 px-8 transition-all duration-200 hover:bg-[#6B21D6]"
            style={{ fontWeight: 700 }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.boxShadow =
                "0 8px 24px rgba(107,33,214,0.3)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
          >
            Pesan Sekarang
          </a>
        </div>

        {/* RIGHT */}
        <div className="relative flex items-center justify-center h-full overflow-visible py-8 md:py-0">
          <img
            src={heroBag}
            alt="AlibaBag handmade woven tikar handbag"
            className="object-contain mx-auto w-4/5 md:w-[90%]"
            style={{
              maxWidth: "520px",
              filter: "drop-shadow(0 24px 48px rgba(107,33,214,0.20))",
            }}
          />
        </div>
      </div>
    </section>
  );
}
