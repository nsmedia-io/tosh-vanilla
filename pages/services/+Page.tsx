import PageHero from "@/components/PageHero";
import Divider from "@/components/Divider";

type Service = {
  id: string;
  eyebrow: string;
  title: string;
  lede: string;
  paragraphs: string[];
  bullets: string[];
  bestFor: string;
};

const SERVICES: Service[] = [
  {
    id: "brand",
    eyebrow: "Service 01",
    title: "Brand Development & Research",
    lede: "Transform your company, product, or personal brand into a recognized and respected name within your target market.",
    paragraphs: [
      "Using a powerful, multi-channel brand development strategy, we build strong visibility, credibility, and emotional connection with your ideal audience.",
      "This isn't logo-and-call-it-a-day work. It's a research-driven process that grounds your brand in the market you're actually in, and positions you to lead it.",
    ],
    bullets: [
      "Market research & positioning",
      "Audience & competitor analysis",
      "Brand voice, narrative & messaging",
      "Multi-channel visibility strategy",
    ],
    bestFor:
      "Founders building from zero, or established operators who've outgrown the brand that got them here.",
  },
  {
    id: "media",
    eyebrow: "Service 02",
    title: "Media Production",
    lede: "Strong brand development begins with a compelling online presence.",
    paragraphs: [
      "We create dynamic, original media content in-house: video, photography, social content, and campaigns. We never outsource this critical foundation of your brand.",
      "That means the highest level of quality, consistency, and strategic alignment every step of the way, and a brand presence that actually matches the business you're building.",
    ],
    bullets: [
      "Video production & direction",
      "Photography & art direction",
      "Social content & campaign production",
      "Creative concepting & storytelling",
    ],
    bestFor:
      "Brands and founders who want their media to feel as considered as the work behind it.",
  },
  {
    id: "coaching",
    eyebrow: "Service 03",
    title: "Life Coaching",
    lede: "For ambitious individuals and visionary entrepreneurs ready to create lives and careers that feel deeply fulfilling and aligned with their true potential.",
    paragraphs: [
      "Through one-on-one coaching, we clarify your vision, overcome limiting beliefs and internal blocks, and design actionable strategies to move you forward with confidence and purpose.",
      "Whether you're navigating a major life transition, seeking greater work-life balance, or ready to step into your next level of personal and professional growth, our sessions provide the clarity, accountability, and support you need to make lasting change.",
    ],
    bullets: [
      "1:1 coaching sessions (virtual or in-person)",
      "Vision clarification & alignment",
      "Mindset work & limiting-belief reframing",
      "Action plans with real accountability",
    ],
    bestFor:
      "Individuals navigating transitions: new chapters, bigger businesses, or simply a life that actually fits.",
  },
];

function ServiceBlock({ service, index }: { service: Service; index: number }) {
  const isReversed = index % 2 === 1;
  return (
    <article
      id={service.id}
      className="mx-auto max-w-7xl px-6 py-20 md:py-28"
    >
      <div
        className={`grid gap-12 md:grid-cols-2 md:gap-16 ${isReversed ? "md:[&>*:first-child]:col-start-2" : ""}`}
      >
        <div>
          <span className="text-[11px] font-semibold tracking-[0.35em] uppercase text-accent-primary">
            {service.eyebrow}
          </span>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-text-heading md:text-5xl">
            {service.title}
          </h2>
          <p className="mt-6 font-serif text-xl leading-snug italic text-accent-deep">
            {service.lede}
          </p>
          <div className="mt-6 space-y-4 leading-relaxed text-text-secondary">
            {service.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
        <div
          className={`space-y-6 ${isReversed ? "md:row-start-1" : ""}`}
        >
          <div className="rounded-xl border border-divider bg-bg-elevated p-8">
            <h3 className="text-[10px] font-semibold tracking-[0.3em] uppercase text-text-heading">
              What's included
            </h3>
            <ul className="mt-6 space-y-4">
              {service.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex items-start gap-4 text-text-primary"
                >
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-primary" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl bg-bg-secondary p-8">
            <h3 className="text-[10px] font-semibold tracking-[0.3em] uppercase text-text-heading">
              Best For
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-text-secondary">
              {service.bestFor}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

function Process() {
  const steps = [
    {
      step: "01",
      title: "Submit an intake",
      desc: "Share a few details about where you are, what you're working toward, and the timeline you're in.",
    },
    {
      step: "02",
      title: "Discovery conversation",
      desc: "We meet for a complimentary call to see whether we're the right fit and map the scope of the work.",
    },
    {
      step: "03",
      title: "Proposal & agreement",
      desc: "You receive a clear proposal outlining scope, deliverables, timeline, and investment. No surprises.",
    },
    {
      step: "04",
      title: "Begin the work",
      desc: "We get to work. Regular sessions, defined milestones, and real accountability throughout.",
    },
  ];

  return (
    <section className="bg-bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <span className="text-[11px] font-semibold tracking-[0.35em] uppercase text-accent-primary">
            Engagement Process
          </span>
          <h2 className="mt-4 font-serif text-4xl text-text-heading md:text-5xl">
            A clear path from first contact to real change.
          </h2>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.step} className="rounded-xl bg-bg-elevated p-8">
              <span className="font-serif text-3xl text-accent-primary">
                {step.step}
              </span>
              <h3 className="mt-4 font-serif text-xl text-text-heading">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Cta() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="font-serif text-4xl text-text-heading md:text-5xl">
          Let's figure out the right fit.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-text-secondary">
          Not sure which service is right for you? That's what the intake is
          for. Share your situation, and we'll recommend the most aligned path
          forward.
        </p>
        <a
          href="/contact"
          className="mt-10 inline-block rounded-full bg-accent-primary px-10 py-4 text-sm font-semibold tracking-[0.2em] uppercase text-text-inverse transition-colors hover:bg-accent-deep"
        >
          Submit An Intake
        </a>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Three practices. One partner."
        subtitle="Brand Development, Media Production, and Life Coaching, delivered by one strategist who sees them as inseparable parts of the same work."
      />

      {SERVICES.map((service, i) => (
        <div key={service.id}>
          <ServiceBlock service={service} index={i} />
          {i < SERVICES.length - 1 && <Divider />}
        </div>
      ))}

      <Process />
      <Cta />
    </>
  );
}
