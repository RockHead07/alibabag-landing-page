import { Sparkles } from "lucide-react";
import { Navbar } from "./Navbar";
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

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate min-h-screen overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #FAFAFA 0%, #E6E9F7 55%, #C0C9EE 100%)",
      }}
    >
      <Navbar />

      {/* Giant background wordmark */}
      <div className="pointer-events-none absolute inset-x-0 bottom-10 z-0 flex justify-center overflow-hidden whitespace-nowrap">
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
      </div>

      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl grid-cols-1 gap-10 px-6 pb-24 pt-32 lg:grid-cols-12 lg:px-10 lg:pt-36">
        {/* LEFT — pills staggered */}
        <div className="flex flex-col justify-between lg:col-span-3">
          <div className="flex flex-col gap-2 items-start">
            <div className="flex items-center gap-2">
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
            </div>
            <div className="ml-4">
              <Pill>Eco-Friendly</Pill>
            </div>
            <div className="ml-1">
              <Pill active>Unik &amp; Langka</Pill>
            </div>
            <div className="ml-6">
              <Pill>Lokal Pride 🇮🇩</Pill>
            </div>
          </div>

          <h1
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
          </h1>
        </div>

        {/* CENTER — floating bag */}
        <div className="relative flex items-center justify-center lg:col-span-6">
          <img
            src={heroBag}
            alt="AlibaBag handwoven tikar handbag in royal purple"
            width={1024}
            height={1024}
            className="relative z-10 w-[78%] max-w-[520px] object-contain"
            style={{
              filter: "drop-shadow(0 20px 60px rgba(107, 33, 214, 0.15))",
            }}
          />
          <span
            className="absolute right-4 top-1/3 z-20 rounded-full px-4 py-1.5 text-xs font-medium backdrop-blur-sm"
            style={{
              border: "1px solid rgba(255,255,255,0.6)",
              backgroundColor: "rgba(255,255,255,0.7)",
              color: "#1A1A1A",
              boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
            }}
          >
            Organic
          </span>
          <span
            className="absolute bottom-24 left-2 z-20 rounded-full px-4 py-1.5 text-xs font-medium backdrop-blur-sm"
            style={{
              border: "1px solid rgba(255,255,255,0.6)",
              backgroundColor: "rgba(255,255,255,0.7)",
              color: "#1A1A1A",
              boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
            }}
          >
            No Chemicals
          </span>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col items-end justify-between gap-6 lg:col-span-3">
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
        </div>
      </div>
    </section>
  );
}
