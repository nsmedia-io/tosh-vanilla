import Hero from "@/components/Hero";
import Divider from "@/components/Divider";
import { siteConfig } from "@/site.config";

function Pillars() {
  const pillars = [
    {
      number: "01",
      title: "Clarity",
      description:
        "We help you cut through noise and overthinking to name what you actually want — for your life, your career, and the business only you can build.",
    },
    {
      number: "02",
      title: "Strategy",
      description:
        "Practical business acumen meets intuitive coaching. We translate your vision into offers, systems, and decisions that create real momentum.",
    },
    {
      number: "03",
      title: "Accountability",
      description:
        "A dedicated partner in the work. We hold the standard, keep you honest with yourself, and show up for the messy middle — not just the highlight reel.",
    },
  ];

  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <span className="text-[11px] font-semibold tracking-[0.35em] uppercase text-accent-primary">
            How we work
          </span>
          <h2 className="mt-4 font-serif text-4xl text-text-heading md:text-5xl">
            A holistic, results-driven partnership.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-text-secondary">
            Our approach addresses mindset and inner growth while building the
            tangible strategies, offers, and operations that create real
            momentum. Clients often describe our work together as transformative.
          </p>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="border-t border-divider pt-8"
            >
              <span className="font-serif text-sm text-accent-primary">
                {pillar.number}
              </span>
              <h3 className="mt-4 font-serif text-2xl text-text-heading">
                {pillar.title}
              </h3>
              <p className="mt-4 leading-relaxed text-text-secondary">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesOverview() {
  const services = [
    {
      eyebrow: "Brand Development",
      title: "Brand Development & Research",
      desc: "Transform your company, product, or personal brand into a recognized and respected name. A multi-channel strategy that builds visibility, credibility, and emotional connection with your ideal audience.",
    },
    {
      eyebrow: "Media Production",
      title: "Original, In-House Media",
      desc: "Dynamic media content produced in-house — video, photography, social, and campaigns. We never outsource this foundation, ensuring consistency and strategic alignment every step of the way.",
    },
    {
      eyebrow: "Life Coaching",
      title: "One-on-One Life Coaching",
      desc: "For ambitious individuals and visionary entrepreneurs. We clarify your vision, overcome limiting beliefs, and design actionable strategies to move forward with confidence and purpose.",
    },
  ];

  return (
    <section className="bg-bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="text-[11px] font-semibold tracking-[0.35em] uppercase text-accent-primary">
              Services
            </span>
            <h2 className="mt-4 font-serif text-4xl text-text-heading md:text-5xl">
              Three practices. One partner.
            </h2>
          </div>
          <a
            href="/services"
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-accent-primary hover:text-accent-deep"
          >
            View All Services
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </a>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="flex flex-col rounded-xl border border-divider bg-bg-elevated p-8 transition-shadow hover:shadow-[0_10px_40px_-15px_rgba(92,74,48,0.2)]"
            >
              <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-accent-primary">
                {service.eyebrow}
              </span>
              <h3 className="mt-3 font-serif text-2xl text-text-heading">
                {service.title}
              </h3>
              <p className="mt-4 flex-1 leading-relaxed text-text-secondary">
                {service.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Philosophy() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <span className="text-[11px] font-semibold tracking-[0.35em] uppercase text-accent-primary">
          Philosophy
        </span>
        <blockquote className="mt-6 font-serif text-3xl leading-snug text-text-heading md:text-4xl lg:text-5xl">
          "If you're tired of playing small, feeling stuck in overthinking, or
          ready to stop compromising between{" "}
          <span className="italic text-accent-deep">passion and profit</span> —
          let's create a chapter that lights you up."
        </blockquote>
        <div className="mt-10 flex items-center justify-center gap-4">
          <div className="h-px w-12 bg-accent-primary" />
          <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-text-secondary">
            Natasha · Founder
          </p>
          <div className="h-px w-12 bg-accent-primary" />
        </div>
      </div>
    </section>
  );
}

function Cta() {
  return (
    <section className="relative overflow-hidden bg-accent-deep py-24 text-text-inverse md:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-accent-deep via-accent-deep to-accent-primary/80" />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <h2 className="font-serif text-4xl leading-tight md:text-5xl">
          Ready for your next chapter?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-accent-muted">
          If you're navigating a major life transition, launching or scaling a
          creative business, or ready to align your work with your true purpose,
          we'd love to talk.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="/contact"
            className="rounded-full bg-bg-primary px-10 py-4 text-sm font-semibold tracking-[0.2em] uppercase text-accent-deep transition-colors hover:bg-bg-secondary"
          >
            Submit an Intake
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="rounded-full border border-accent-muted/50 px-10 py-4 text-sm font-semibold tracking-[0.2em] uppercase text-text-inverse transition-colors hover:border-accent-muted"
          >
            Email Us Directly
          </a>
        </div>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <>
      <Hero />
      <Pillars />
      <Divider />
      <ServicesOverview />
      <Philosophy />
      <Cta />
    </>
  );
}
