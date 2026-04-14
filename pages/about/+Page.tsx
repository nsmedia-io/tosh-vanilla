import PageHero from "@/components/PageHero";
import Divider from "@/components/Divider";

function Story() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[1fr_1.3fr] lg:gap-24">
        <aside className="lg:sticky lg:top-32 lg:self-start">
          <span className="text-[11px] font-semibold tracking-[0.35em] uppercase text-accent-primary">
            Meet Natasha
          </span>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-text-heading md:text-5xl">
            Intuitive coaching meets practical business acumen.
          </h2>
          <div className="mt-8 space-y-3 text-sm tracking-[0.05em] text-text-secondary">
            <div className="flex items-start gap-4">
              <span className="mt-1 h-px w-6 bg-accent-primary" />
              <div>
                <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-text-heading">
                  Founder
                </p>
                <p className="mt-1">Natasha · Life Coach & Strategist</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="mt-1 h-px w-6 bg-accent-primary" />
              <div>
                <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-text-heading">
                  Focus
                </p>
                <p className="mt-1">
                  Life coaching, brand development, creative strategy
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="mt-1 h-px w-6 bg-accent-primary" />
              <div>
                <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-text-heading">
                  Clients
                </p>
                <p className="mt-1">
                  Ambitious individuals · Visionary entrepreneurs
                </p>
              </div>
            </div>
          </div>
        </aside>

        <div className="space-y-6 text-lg leading-relaxed text-text-secondary">
          <p>
            At Black Bird Consulting, we focus on life coaching and creative
            business strategies, dedicated to helping ambitious individuals and
            visionary entrepreneurs build lives and businesses that feel both
            deeply fulfilling and strategically successful.
          </p>
          <p>
            With a unique blend of intuitive coaching and practical business
            acumen, I guide clients to clarify their vision, overcome internal
            blocks, and create sustainable systems that turn creative ideas into
            profitable realities.
          </p>
          <p>
            Whether you're navigating a major life transition, launching or
            scaling a creative business, or simply ready to align your work with
            your true purpose, I provide the clarity, accountability, and
            creative solutions you need to move forward with confidence.
          </p>
          <p>
            My approach is holistic yet results-driven: we address mindset and
            inner growth while building the tangible strategies, offers, and
            operations that create real momentum. Clients often describe our
            work together as transformative. They leave sessions feeling
            lighter, clearer, and empowered to take bold, aligned action.
          </p>
          <p className="border-l-2 border-accent-primary pl-6 font-serif text-xl italic text-text-heading">
            If you're tired of playing small, feeling stuck in overthinking, or
            ready to stop compromising between passion and profit, I'd love to
            partner with you on your next chapter. Let's create a life and
            business that lights you up.
          </p>
        </div>
      </div>
    </section>
  );
}

function Values() {
  const values = [
    {
      title: "Holistic",
      desc: "We address mindset and inner growth alongside systems, offers, and operations, because business problems are rarely just business problems.",
    },
    {
      title: "Results-Driven",
      desc: "Strategy without action is a journal entry. Every session ends with a next step, and every engagement is anchored by measurable outcomes.",
    },
    {
      title: "Transformative",
      desc: "Clients leave sessions lighter, clearer, and empowered to take bold, aligned action. That's the standard, not a bonus.",
    },
    {
      title: "Confidential",
      desc: "Everything we discuss is held in strict confidence. Vulnerability is a prerequisite for real change, and that requires safety.",
    },
  ];

  return (
    <section className="bg-bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <span className="text-[11px] font-semibold tracking-[0.35em] uppercase text-accent-primary">
            Values
          </span>
          <h2 className="mt-4 font-serif text-4xl text-text-heading md:text-5xl">
            The principles behind the work.
          </h2>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-xl bg-bg-elevated p-8"
            >
              <h3 className="font-serif text-xl text-text-heading">
                {value.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                {value.desc}
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
          Curious if we're a fit?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-text-secondary">
          The best way to find out is a conversation. Submit a brief intake and
          we'll be in touch within two business days.
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
        eyebrow="About"
        title="A partner for ambitious, creative lives."
        subtitle="Black Bird Consulting is the work of Natasha, a life coach and creative business strategist helping clients build lives and businesses that feel both deeply fulfilling and strategically successful."
      />
      <Story />
      <Divider />
      <Values />
      <Cta />
    </>
  );
}
