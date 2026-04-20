import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router'
import { Menu, X } from 'lucide-react'
import { Button } from '../../ui/button'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from '../../ui/sheet'
import { cn } from '@/lib/utils'
import logo from '@/assets/logo-light.png'
import logoMark from '@/assets/logo.png'

const navLinks = [
  { href: '/features', label: 'Platform' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/promise', label: 'Promise' },
]

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-brand-900/95 backdrop-blur-sm border-b border-border'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 py-3 md:py-4 relative flex items-center">

        {/* Logo (Left) */}
        <Link to="/" className="inline-flex items-center">
          <img src={logo} alt="StatTarian" className="h-6 md:h-8 w-auto" />
        </Link>

        {/* Desktop Navigation (Perfectly Centered) */}
        <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-accent',
                location.pathname === link.href
                  ? 'text-accent border-b-2 border-accent pb-1'
                  : 'text-foreground'
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA Button (Right — desktop) */}
        <div className="hidden md:block ml-auto">
          <Button asChild>
            <Link to="/contact">Book a Demo</Link>
          </Button>
        </div>

        {/* Mobile Menu Trigger */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Open menu"
              className="md:hidden ml-auto text-foreground"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="w-[280px] flex flex-col bg-background border-border">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <SheetDescription className="sr-only">
              Browse site pages and book a demo
            </SheetDescription>

            {/* Sheet Header */}
            <div className="flex flex-col items-center gap-1 pt-8 pb-6 border-b border-border">
              <img src={logoMark} alt="StatTarian" className="h-12 w-auto mb-2" />
              <p
                className="text-base font-bold text-foreground"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                statTarian
              </p>
              <p className="text-xs text-muted-foreground tracking-widest uppercase">
                Football. Organised.
              </p>
            </div>

            {/* Nav Links */}
            <div className="flex flex-col gap-1 py-6 flex-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    'px-4 py-3 rounded-lg text-base font-medium transition-colors',
                    location.pathname === link.href
                      ? 'text-accent bg-primary/10'
                      : 'text-foreground hover:text-accent hover:bg-primary/5'
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA at bottom */}
            <div className="pb-8">
              <Button asChild className="w-full" size="lg">
                <Link to="/contact" onClick={() => setMobileOpen(false)}>
                  Book a Demo
                </Link>
              </Button>
            </div>

          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}