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
      className={
        "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium backdrop-blur-sm " +
        (active
          ? "bg-primary text-primary-foreground shadow-sm"
          : "border border-muted/70 bg-white/50 text-foreground")
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
      className="bg-hero-gradient relative isolate min-h-screen overflow-hidden"
    >
      <Navbar />

      {/* Giant background wordmark */}
      <div className="pointer-events-none absolute inset-x-0 bottom-10 z-0 flex justify-center overflow-hidden whitespace-nowrap">
        <span className="text-wordmark select-none">ALIBABAG</span>
      </div>

      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl grid-cols-1 gap-10 px-6 pb-24 pt-32 lg:grid-cols-12 lg:px-10 lg:pt-36">
        {/* LEFT */}
        <div className="flex flex-col justify-between lg:col-span-3">
          <div className="flex flex-wrap gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-full border border-muted/70 bg-white/60">
              <Sparkles className="h-4 w-4 text-primary" />
            </span>
            <Pill>Handcrafted</Pill>
            <Pill>Eco-Friendly</Pill>
            <Pill active>Unik &amp; Langka</Pill>
            <Pill>Lokal Pride 🇮🇩</Pill>
          </div>

          <h1 className="mt-10 text-3xl font-extrabold uppercase leading-tight tracking-tight text-foreground lg:mt-0 lg:text-4xl">
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
            className="drop-shadow-bag relative z-10 w-[78%] max-w-[520px] object-contain"
          />
          <span className="absolute right-4 top-1/3 z-20 rounded-full border border-white/60 bg-white/70 px-4 py-1.5 text-xs font-medium text-foreground shadow-sm backdrop-blur-sm">
            Organic
          </span>
          <span className="absolute bottom-24 left-2 z-20 rounded-full border border-white/60 bg-white/70 px-4 py-1.5 text-xs font-medium text-foreground shadow-sm backdrop-blur-sm">
            No Chemicals
          </span>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col items-end justify-between gap-6 lg:col-span-3">
          <div className="w-full max-w-[220px] overflow-hidden rounded-2xl bg-white p-2 shadow-md">
            <img
              src={heroPerson}
              alt="Artisan holding an AlibaBag"
              width={768}
              height={896}
              className="h-56 w-full rounded-xl object-cover"
            />
            <div className="px-2 py-2 text-right">
              <p className="text-sm font-semibold text-foreground">Hamida Jannat</p>
              <p className="text-xs text-muted-foreground">Founder · AlibaBag</p>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-sm">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-primary/15 text-sm">
              🇮🇩
            </span>
            <div className="pr-2 text-left">
              <p className="text-xs font-semibold leading-tight">Local Craft</p>
              <p className="text-[10px] leading-tight text-muted-foreground">
                Made in Indonesia
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
