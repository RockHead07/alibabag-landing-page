import { MessageCircle, Camera } from "lucide-react";

export function Footer() {
  return (
    <footer
      className="py-12 px-8 lg:px-12"
      style={{ backgroundColor: "#1A1A1A" }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between">
          {/* Left — brand */}
          <div>
            <p className="text-xl font-bold" style={{ color: "#FAFAFA" }}>
              AlibaBag<span style={{ color: "#6B21D6" }}>.</span>
            </p>
            <p className="mt-1 text-sm" style={{ color: "#898AC4" }}>
              Anyaman Lokal, Gaya Global
            </p>
          </div>

          {/* Center — copyright */}
          <p className="text-xs" style={{ color: "#898AC4" }}>
            © 2025 AlibaBag. All rights reserved.
          </p>

          {/* Right — social icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com/alibabag"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow on Instagram"
              className="transition-colors"
              style={{ color: "#A2AADB" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#FAFAFA";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#A2AADB";
              }}
            >
              <Camera className="h-5 w-5" />
            </a>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="transition-colors"
              style={{ color: "#A2AADB" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#FAFAFA";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#A2AADB";
              }}
            >
              <MessageCircle className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
