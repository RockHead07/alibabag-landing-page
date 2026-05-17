import { MessageCircle, Camera } from "lucide-react";

export function CtaOrder() {
  return (
    <section
      id="kontak"
      className="py-20 px-8 lg:px-12"
      style={{ backgroundColor: "#6B21D6" }}
    >
      <div className="mx-auto max-w-3xl text-center">
        {/* Heading */}
        <h2
          className="text-3xl font-black uppercase tracking-tight md:text-4xl"
          style={{ color: "#FAFAFA" }}
        >
          Siap Punya AlibaBag?
        </h2>

        {/* Subtext */}
        <p
          className="mt-4 text-base"
          style={{ color: "rgba(250,250,250,0.8)" }}
        >
          Pesan sekarang lewat WhatsApp atau follow kami di Instagram
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-bold transition hover:opacity-90"
            style={{ backgroundColor: "#FAFAFA", color: "#6B21D6" }}
          >
            <MessageCircle className="h-4 w-4" />
            Pesan via WhatsApp
          </a>
          <a
            href="https://instagram.com/alibabag"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-bold transition hover:opacity-90"
            style={{
              backgroundColor: "transparent",
              border: "2px solid #FAFAFA",
              color: "#FAFAFA",
            }}
          >
            <Camera className="h-4 w-4" />
            Follow Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
