import { Link } from 'react-router'
import { Linkedin, Youtube } from 'lucide-react'
import logo from '@/assets/logo-light.png'

export function SiteFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-[var(--layer-4)]">
      <div className="container mx-auto px-4 py-12">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-10">

          {/* Brand Column */}
          <div className="space-y-4 md:pr-12">
            <Link to="/" className="inline-flex items-center gap-2">
              <img src={logo} alt="StatTarian" className="h-7 w-auto" />
              <span className="font-[var(--font-heading)] text-lg">statTarian</span>
            </Link>

            <p className="text-sm text-muted-foreground">Football Organised</p>

            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Purpose‑built academy management software for football clubs.
            </p>

            <p className="text-xs text-muted-foreground">
              © {currentYear} statTarian Ltd.
            </p>
          </div>

          {/* Right Columns — shifted right + tighter */}
          <div className="md:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 md:pl-6">

            {/* Product */}
            <div>
              <h3
                className="font-semibold mb-3 text-base"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Product
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/features"
                    className="text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    to="/pricing"
                    className="text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3
                className="font-semibold mb-3 text-base"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Company
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/about"
                    className="text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    About
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3
                className="font-semibold mb-3 text-base"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Legal
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/legal/privacy"
                    className="text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/legal/terms"
                    className="text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>

            {/* Socials */}
            <div>
              <h3
                className="font-semibold mb-3 text-base"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Socials
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://www.linkedin.com/company/stattarian-ltd/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    <Youtube className="h-4 w-4" />
                    YouTube
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </footer>
  )
}
