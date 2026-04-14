import { useState } from "react";

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <a
        href="#main-content"
        className="fixed left-2 top-2 z-[100] -translate-y-16 rounded-full bg-accent-primary px-6 py-2 text-sm font-semibold text-text-inverse transition-transform focus:translate-y-0"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-50 border-b border-divider bg-bg-primary/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a
            href="/"
            className="flex items-center gap-3 text-text-heading"
          >
            <svg
              className="h-8 w-8 text-accent-primary"
              viewBox="0 0 64 64"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 38c6-2 10-6 14-12 2-3 5-6 10-6 6 0 10 4 12 10-4 0-7 2-9 5-4 6-10 10-18 10-4 0-7-1-9-3l-4 4c0-3 2-6 4-8z" />
            </svg>
            <span className="font-serif text-xl leading-none tracking-wide md:text-2xl">
              Black Bird
              <span className="block text-[10px] tracking-[0.25em] text-text-secondary uppercase mt-1">
                Consulting
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-10 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-medium tracking-[0.2em] uppercase text-text-secondary transition-colors hover:text-accent-primary focus:text-accent-primary focus:outline-none"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="/contact"
            className="hidden rounded-full bg-accent-primary px-6 py-2.5 text-xs font-semibold tracking-[0.15em] uppercase text-text-inverse transition-all hover:bg-accent-deep lg:inline-block"
          >
            Start A Conversation
          </a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex flex-col gap-1.5 rounded-sm p-1 focus:outline-none focus:ring-2 focus:ring-accent-primary/50 lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <span
              className={`block h-0.5 w-6 bg-text-primary transition-all ${mobileOpen ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 bg-text-primary transition-all ${mobileOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 bg-text-primary transition-all ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </div>

        {mobileOpen && (
          <div className="border-t border-divider bg-bg-primary px-6 py-6 lg:hidden">
            <nav className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm tracking-[0.15em] uppercase text-text-secondary transition-colors hover:text-accent-primary"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 inline-block rounded-full bg-accent-primary px-6 py-2.5 text-center text-xs font-semibold tracking-[0.15em] uppercase text-text-inverse"
              >
                Start A Conversation
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
