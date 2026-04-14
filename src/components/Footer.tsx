import { siteConfig } from "@/site.config";

const NAV_LEFT = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

const NAV_RIGHT = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

export default function Footer() {
  return (
    <footer className="border-t border-divider bg-bg-secondary">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <a href="/" className="flex items-center gap-3 text-text-heading">
              <svg
                className="h-7 w-7 text-accent-primary"
                viewBox="0 0 64 64"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 38c6-2 10-6 14-12 2-3 5-6 10-6 6 0 10 4 12 10-4 0-7 2-9 5-4 6-10 10-18 10-4 0-7-1-9-3l-4 4c0-3 2-6 4-8z" />
              </svg>
              <span className="font-serif text-lg tracking-wide">
                Black Bird Consulting
              </span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-text-secondary">
              Life coaching and creative business strategy for ambitious
              individuals and visionary entrepreneurs.
            </p>
            <p className="mt-4 text-xs text-text-secondary">
              <a
                href={`mailto:${siteConfig.email}`}
                className="transition-colors hover:text-accent-primary"
              >
                {siteConfig.emailDisplay}
              </a>
            </p>
          </div>

          {/* Nav left */}
          <div>
            <h4 className="text-[10px] font-semibold tracking-[0.3em] uppercase text-text-heading">
              Explore
            </h4>
            <nav className="mt-4 flex flex-col gap-3">
              {NAV_LEFT.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-text-secondary transition-colors hover:text-accent-primary"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Nav right */}
          <div>
            <h4 className="text-[10px] font-semibold tracking-[0.3em] uppercase text-text-heading">
              Legal
            </h4>
            <nav className="mt-4 flex flex-col gap-3">
              {NAV_RIGHT.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-text-secondary transition-colors hover:text-accent-primary"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-divider">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-2 px-6 py-6 sm:flex-row sm:items-center">
          <p className="text-xs text-text-secondary/80">
            &copy; {new Date().getFullYear()} {siteConfig.legalName}. All rights
            reserved.
          </p>
          <p className="text-xs text-text-secondary/60">
            {siteConfig.location}
          </p>
        </div>
      </div>
    </footer>
  );
}
