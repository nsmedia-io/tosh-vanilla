import PageHero from "@/components/PageHero";
import { siteConfig } from "@/site.config";

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle={`Last updated: ${new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}`}
      />
      <section className="py-20 md:py-24">
        <div className="prose-like mx-auto max-w-3xl space-y-8 px-6 leading-relaxed text-text-secondary">
          <p>
            {siteConfig.legalName} ("Black Bird Consulting," "we," "us," or
            "our") respects your privacy and is committed to protecting the
            personal information you share with us. This Privacy Policy explains
            what information we collect, how we use it, and the choices you
            have.
          </p>

          <section>
            <h2 className="font-serif text-2xl text-text-heading">
              Information We Collect
            </h2>
            <p className="mt-4">
              We collect information you voluntarily provide when you submit our
              intake form, email us, or otherwise communicate with us. This
              typically includes your name, email address, phone number,
              company, and the details you share about your goals and current
              situation.
            </p>
            <p className="mt-4">
              We may also collect non-identifying technical information
              automatically (such as browser type and pages visited) to help us
              understand site usage and improve the experience.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-text-heading">
              How We Use Your Information
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>To respond to your inquiry and schedule conversations.</li>
              <li>
                To deliver the services you've engaged us to provide, including
                coaching, strategy, and production work.
              </li>
              <li>
                To send occasional administrative communications related to
                your engagement.
              </li>
              <li>To comply with legal and regulatory obligations.</li>
            </ul>
            <p className="mt-4">
              We do not sell your personal information, and we do not share it
              with third parties for their own marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-text-heading">
              How We Protect Your Information
            </h2>
            <p className="mt-4">
              We use reasonable administrative, technical, and physical
              safeguards to protect the personal information you share with us.
              Sessions, intake details, and any other client-provided content
              are held in strict confidence.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-text-heading">
              Third-Party Services
            </h2>
            <p className="mt-4">
              We may use trusted third-party service providers to process
              payments, host our website, or deliver our services. These
              providers are bound by their own privacy commitments and only
              receive the information necessary to perform their function on
              our behalf.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-text-heading">
              Your Choices
            </h2>
            <p className="mt-4">
              You can request access to, correction of, or deletion of your
              personal information at any time by emailing{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-accent-primary hover:underline"
              >
                {siteConfig.emailDisplay}
              </a>
              . We will respond within a reasonable timeframe and in accordance
              with applicable law.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-text-heading">
              Children's Privacy
            </h2>
            <p className="mt-4">
              Our services are intended for adults. We do not knowingly collect
              information from children under 13.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-text-heading">
              Changes to This Policy
            </h2>
            <p className="mt-4">
              We may update this Privacy Policy from time to time. When we do,
              we will revise the "Last updated" date at the top of this page.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-text-heading">Contact</h2>
            <p className="mt-4">
              Questions about this Privacy Policy can be directed to{" "}
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
