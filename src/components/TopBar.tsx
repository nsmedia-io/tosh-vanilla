import { siteConfig } from "@/site.config";

export default function TopBar() {
  return (
    <div className="border-b border-divider bg-bg-secondary">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs text-text-secondary">
        <div className="flex items-center gap-6">
          <span className="hidden items-center gap-2 sm:flex">
            <svg
              className="h-3.5 w-3.5 text-accent-primary"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            {siteConfig.location}
          </span>
          <a
            href={`mailto:${siteConfig.email}`}
            className="flex items-center gap-2 transition-colors hover:text-accent-primary"
          >
            <svg
              className="h-3.5 w-3.5 text-accent-primary"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
            {siteConfig.emailDisplay}
          </a>
        </div>
        <div className="hidden items-center gap-4 md:flex">
          <span className="tracking-[0.2em] uppercase">By appointment only</span>
        </div>
      </div>
    </div>
  );
}
