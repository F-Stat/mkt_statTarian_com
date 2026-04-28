import { Link } from "react-router";
import { Linkedin, Youtube } from "lucide-react";
import logo from "@/assets/logo-light.png";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 pt-12 md:pt-20 pb-8 md:pb-12">
        <div className="grid grid-cols-2 md:grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-6 md:gap-8 mb-8 md:mb-10">
          {/* Column 1: Brand — full width + centred on mobile */}
          <div className="col-span-2 md:col-span-1 flex flex-col items-center text-center md:items-start md:text-left">
            <img src={logo} alt="statTarian Logo" className="h-12 w-auto mb-1" />
            <h3
              className="text-lg md:text-xl font-bold mb-0"
              style={{ fontFamily: "var(--font-display)" }}
            >
              statTarian
            </h3>
            <p className="text-xs text-primary font-medium mb-2">
              Football. Organised.
            </p>
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed max-w-[240px]">
              Purpose‑built academy management software for football academies in Cymru.
            </p>
          </div>

          {/* Column 2: Product — centred on mobile */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <h3
              className="font-semibold mb-3 text-xs uppercase tracking-widest"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Product
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/features"
                  className="text-xs md:text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="text-xs md:text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company — centred on mobile */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <h3
              className="font-semibold mb-3 text-xs uppercase tracking-widest"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-xs md:text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/promise"
                  className="text-xs md:text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  Promise
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal — centred on mobile */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <h3
              className="font-semibold mb-3 text-xs uppercase tracking-widest"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/legal/DataProcessing"
                  className="text-xs md:text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  Data Processing
                </Link>
              </li>
              <li>
                <Link
                  to="/legal/privacy"
                  className="text-xs md:text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/legal/terms"
                  className="text-xs md:text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Socials — centred on mobile */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <h3
              className="font-semibold mb-3 text-xs uppercase tracking-widest"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Socials
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.linkedin.com/company/stattarian-ltd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  <Linkedin className="h-3 w-3 md:h-4 md:w-4" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  <Youtube className="h-3 w-3 md:h-4 md:w-4" />
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-border pt-4 md:pt-6 text-xs text-muted-foreground text-center">
          © {currentYear} statTarian Ltd.
        </div>
      </div>
    </footer>
  );
}
