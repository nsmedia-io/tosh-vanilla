import PageHero from "@/components/PageHero";
import IntakeForm from "@/components/IntakeForm";
import { siteConfig } from "@/site.config";

function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-serif text-3xl text-text-heading">
          Start a conversation.
        </h2>
        <p className="mt-4 leading-relaxed text-text-secondary">
          This form helps us understand where you are and what you're working
          toward. The more context you share, the more useful our first
          conversation will be.
        </p>
      </div>

      <div className="space-y-6 rounded-xl border border-divider bg-bg-elevated p-8">
        <div>
          <h3 className="text-[10px] font-semibold tracking-[0.3em] uppercase text-text-heading">
            Email
          </h3>
          <a
            href={`mailto:${siteConfig.email}`}
            className="mt-2 block text-sm text-text-primary transition-colors hover:text-accent-primary"
          >
            {siteConfig.emailDisplay}
          </a>
        </div>
        <div>
          <h3 className="text-[10px] font-semibold tracking-[0.3em] uppercase text-text-heading">
            Location
          </h3>
          <p className="mt-2 text-sm text-text-primary">{siteConfig.location}</p>
        </div>
        <div>
          <h3 className="text-[10px] font-semibold tracking-[0.3em] uppercase text-text-heading">
            Response Time
          </h3>
          <p className="mt-2 text-sm text-text-primary">
            We respond to every intake within 2 business days.
          </p>
        </div>
      </div>

      <div className="rounded-xl bg-bg-secondary p-8">
        <h3 className="font-serif text-xl text-text-heading">
          Prefer to email first?
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-text-secondary">
          If the intake form feels like too much for your first touchpoint,
          email us directly and we'll take it from there.
        </p>
        <a
          href={`mailto:${siteConfig.email}`}
          className="mt-5 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-accent-primary hover:text-accent-deep"
        >
          Write To Natasha
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
    </div>
  );
}

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about what's next."
        subtitle="Submit a brief intake to start the conversation. The details you share stay confidential and are used only to prepare for our first call."
      />
      <section className="py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[1fr_1.6fr] lg:gap-24">
          <ContactInfo />
          <div className="rounded-2xl border border-divider bg-bg-elevated p-8 md:p-10 lg:p-12">
            <IntakeForm />
          </div>
        </div>
      </section>
    </>
  );
}
