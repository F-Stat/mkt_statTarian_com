import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, ChevronRight } from "lucide-react";
import { Button } from "../../ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "../../ui/sheet";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo-light.png";
import logoMark from "@/assets/logo.png";

const navLinks = [
  { href: "/features", label: "Platform" },
  { href: "/pricing", label: "Pricing" },
  { href: "/promise", label: "Promise" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-brand-900/95 backdrop-blur-sm border-b border-border"
          : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 py-3 md:py-4 relative flex items-center">

        {/* Logo */}
        <Link to="/" className="inline-flex items-center">
          <img src={logo} alt="StatTarian" className="h-6 md:h-8 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-accent",
                location.pathname === link.href
                  ? "text-accent border-b-2 border-accent pb-1"
                  : "text-foreground",
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block ml-auto">
          <Button asChild>
            <Link to="/contact">Book a Demo</Link>
          </Button>
        </div>

        {/* Mobile Trigger */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Open menu"
              className="md:hidden ml-auto text-foreground"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>

          <SheetContent
            side="right"
            className="w-[300px] p-0 flex flex-col bg-background border-border [&>button]:hidden"
          >
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <SheetDescription className="sr-only">
              Browse site pages and book a demo
            </SheetDescription>

            {/* Sheet Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-border">
              <div className="flex items-center gap-3">
                <img src={logoMark} alt="StatTarian" className="h-8 w-auto" />
                <div>
                  <p
                    className="text-sm font-bold text-foreground leading-tight"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    statTarian
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Football. Organised.
                  </p>
                </div>
              </div>
              <button
                onClick={() => setMobileOpen(false)}
                className="text-muted-foreground hover:text-foreground transition-colors p-1"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Nav Links */}
            <div className="flex flex-col px-3 py-4 flex-1 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-medium transition-colors",
                    location.pathname === link.href
                      ? "text-accent bg-primary/10"
                      : "text-foreground hover:text-accent hover:bg-primary/5",
                  )}
                >
                  {link.label}
                  <ChevronRight className="h-4 w-4 opacity-40" />
                </Link>
              ))}
            </div>

            {/* Footer CTA */}
            <div className="px-5 pb-8 pt-4 border-t border-border space-y-3">
              <Button asChild className="w-full" size="lg">
                <Link to="/contact" onClick={() => setMobileOpen(false)}>
                  Book a Demo
                </Link>
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                30-minute personalised walkthrough
              </p>
            </div>

          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}