import PageHero from "@/components/PageHero";
import { siteConfig } from "@/site.config";

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        subtitle={`Last updated: ${new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}`}
      />
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-3xl space-y-8 px-6 leading-relaxed text-text-secondary">
          <p>
            These Terms of Service ("Terms") govern your use of the website at{" "}
            {siteConfig.url} and the services provided by {siteConfig.legalName}{" "}
            ("Black Bird Consulting," "we," "us," or "our"). By accessing the
            site or engaging our services, you agree to these Terms.
          </p>

          <section>
            <h2 className="font-serif text-2xl text-text-heading">Services</h2>
            <p className="mt-4">
              Black Bird Consulting provides life coaching, brand development,
              media production, and creative business strategy services. The
              specific scope, deliverables, timeline, and fees for each
              engagement are defined in a separate written agreement between us
              and the client.
            </p>
            <p className="mt-4">
              Coaching services are not a substitute for medical, psychological,
              legal, or financial advice. Clients are responsible for their own
              decisions and outcomes.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-text-heading">
              Payment & Refunds
            </h2>
            <p className="mt-4">
              Fees, payment schedules, and refund terms are set out in the
              engagement agreement signed at the start of each project. Unless
              otherwise stated in writing, deposits and fees for completed work
              are non-refundable.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-text-heading">
              Scheduling & Cancellations
            </h2>
            <p className="mt-4">
              Sessions and appointments may be rescheduled with reasonable
              notice (typically 24 hours). Late cancellations or no-shows may
              be charged at the full session rate, as outlined in your
              engagement agreement.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-text-heading">
              Confidentiality
            </h2>
            <p className="mt-4">
              We treat all client communications and session content as
              confidential. We will not disclose client information to third
              parties except as required by law, or as specifically authorized
              by the client in writing.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-text-heading">
              Intellectual Property
            </h2>
            <p className="mt-4">
              All content on this website — including text, graphics, logos,
              and media — is the property of Black Bird Consulting or its
              licensors and is protected by applicable copyright and trademark
              law. Deliverables produced under client engagements are assigned
              according to the terms of each individual agreement.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-text-heading">
              Limitation of Liability
            </h2>
            <p className="mt-4">
              To the maximum extent permitted by law, Black Bird Consulting's
              total liability arising out of or related to these Terms or any
              engagement shall not exceed the amount paid by the client for the
              services in question. We are not liable for indirect, incidental,
              or consequential damages.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-text-heading">
              Governing Law
            </h2>
            <p className="mt-4">
              These Terms are governed by and construed in accordance with the
              laws of the United States and the state in which Black Bird
              Consulting USA, LLC is organized, without regard to conflict of
              law principles.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-text-heading">
              Changes to These Terms
            </h2>
            <p className="mt-4">
              We may revise these Terms from time to time. The most current
              version will always be posted on this page.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-text-heading">Contact</h2>
            <p className="mt-4">
              Questions about these Terms can be directed to{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-accent-primary hover:underline"
              >
                {siteConfig.emailDisplay}
              </a>
              .
            </p>
          </section>
        </div>
      </section>
    </>
  );
}
