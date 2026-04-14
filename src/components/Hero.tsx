export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-bg-secondary/60 via-bg-primary to-bg-primary" />
      <div className="absolute right-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-accent-muted/20 blur-[140px]" />
      <div className="absolute bottom-[-20%] left-[-10%] h-[400px] w-[400px] rounded-full bg-accent-primary/10 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 py-24 md:grid-cols-2 md:py-32 lg:py-40">
        <div className="flex flex-col justify-center">
          <span className="text-[11px] font-semibold tracking-[0.35em] uppercase text-accent-primary">
            Life Coaching · Business Strategy
          </span>
          <h1 className="mt-5 font-serif text-5xl leading-[1.05] font-light text-text-heading md:text-6xl lg:text-7xl">
            Build a life and business that{" "}
            <span className="italic text-accent-deep">lights you up.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-text-secondary md:text-xl">
            At Black Bird Consulting, we help ambitious individuals and
            visionary entrepreneurs create lives and businesses that feel both
            deeply fulfilling and strategically successful.
          </p>
          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row">
            <a
              href="/contact"
              className="rounded-full bg-accent-primary px-8 py-3.5 text-xs font-semibold tracking-[0.2em] uppercase text-text-inverse transition-colors hover:bg-accent-deep"
            >
              Start A Conversation
            </a>
            <a
              href="/services"
              className="rounded-full border border-accent-primary/40 px-8 py-3.5 text-xs font-semibold tracking-[0.2em] uppercase text-text-primary transition-colors hover:border-accent-primary hover:text-accent-primary"
            >
              Explore Services
            </a>
          </div>
        </div>

        {/* Right-side decorative card stack */}
        <div className="relative hidden md:block">
          <div className="absolute left-10 top-10 h-[420px] w-[320px] rotate-[-4deg] rounded-xl border border-divider bg-bg-elevated shadow-[0_20px_60px_-20px_rgba(92,74,48,0.25)]">
            <div className="flex h-full flex-col justify-between p-8">
              <div>
                <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-accent-primary">
                  Our Approach
                </span>
                <h3 className="mt-4 font-serif text-2xl text-text-heading">
                  Holistic. Results-driven. Human.
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                  We address mindset and inner growth while building the
                  tangible strategies, offers, and operations that create real
                  momentum.
                </p>
              </div>
              <div className="flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-text-secondary">
                <span className="h-px w-8 bg-accent-primary" />
                Established Practice
              </div>
            </div>
          </div>
          <div className="absolute right-0 top-32 h-[380px] w-[280px] rotate-[5deg] rounded-xl bg-accent-deep p-8 text-text-inverse shadow-[0_20px_60px_-20px_rgba(15,13,10,0.4)]">
            <div className="flex h-full flex-col justify-between">
              <div>
                <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-accent-muted">
                  Core Promise
                </span>
                <blockquote className="mt-6 font-serif text-xl leading-snug italic">
                  "Clarity, accountability, and creative solutions to move
                  forward with confidence."
                </blockquote>
              </div>
              <div className="text-[11px] tracking-[0.2em] uppercase text-accent-muted">
                — Natasha · Founder
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
