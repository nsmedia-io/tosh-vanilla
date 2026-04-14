import PageHero from "@/components/PageHero";
import { siteConfig } from "@/site.config";

export default function Page() {
  const lastUpdated = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle={`Last updated: ${lastUpdated}`}
      />
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-3xl space-y-10 px-6 leading-relaxed text-text-secondary">
          <p>
            {siteConfig.legalName} ("Black Bird Consulting," "we," "us," or
            "our") operates the website at {siteConfig.url} (the "Site") and
            provides life coaching, brand development, media production, and
            creative business strategy services (the "Services"). This Privacy
            Policy describes what information we collect, how we use it, with
            whom we share it, and the rights and choices you have regarding
            your information.
          </p>
          <p>
            By using the Site or engaging our Services, you agree to the
            practices described in this Privacy Policy. If you do not agree,
            please do not use the Site or Services.
          </p>

          <section>
            <h2 className="font-serif text-2xl text-text-heading">
              1. Information We Collect
            </h2>
            <p className="mt-4">
              We collect only the information we reasonably need to operate the
              Site and deliver the Services you request. We do not sell, rent,
              or trade your personal information to third parties.
            </p>

            <h3 className="mt-6 font-serif text-lg text-text-heading">
              a. Information you provide to us
            </h3>
            <p className="mt-3">
              When you submit our intake or contact form, email us, or engage
              our Services, you may provide information such as your name,
              email address, phone number, company or brand name, and details
              about your goals, current situation, timeline, and budget. In
              the course of an active engagement, you may also share
              project-related documents, creative materials, or other business
              information.
            </p>

            <h3 className="mt-6 font-serif text-lg text-text-heading">
              b. Information collected automatically
            </h3>
            <p className="mt-3">
              When you visit the Site, our hosting provider and analytics tools
              may automatically collect limited technical information, such as
              your IP address, device and browser type, referring URL, pages
              viewed, and the date and time of your visit. This information is
              used to understand aggregate Site usage, diagnose technical
              issues, and maintain security. We do not use this information to
              build advertising profiles about you.
            </p>

            <h3 className="mt-6 font-serif text-lg text-text-heading">
              c. Payment information
            </h3>
            <p className="mt-3">
              If you purchase Services, payment is processed by third-party
              payment processors (for example, Stripe or Square). We do not
              store your full payment card number on our systems. Payment
              processors handle your payment data under their own privacy
              policies and security standards.
            </p>

            <h3 className="mt-6 font-serif text-lg text-text-heading">
              d. Information we do not collect
            </h3>
            <p className="mt-3">
              We do not knowingly collect sensitive categories of information
              (such as government identifiers, health data, or biometric data)
              unless you voluntarily provide them in connection with the
              Services, and never for secondary or advertising purposes.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-text-heading">
              2. How We Use Your Information
            </h2>
            <p className="mt-4">We use the information we collect to:</p>
            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>Respond to your inquiries and schedule conversations;</li>
              <li>
                Deliver the Services you've engaged us to provide, including
                coaching sessions, strategy work, and production deliverables;
              </li>
              <li>
                Process payments, send invoices, and maintain accurate business
                records;
              </li>
              <li>
                Send administrative communications related to your engagement
                (appointment confirmations, project updates, receipts, and the
                like);
              </li>
              <li>
                Understand how the Site is used and improve its content,
                performance, and security;
              </li>
              <li>Comply with applicable legal and regulatory obligations.</li>
            </ul>
            <p className="mt-4">
              We do not use your information for automated decision-making or
              profiling that produces legal or similarly significant effects on
              you.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-text-heading">
              3. How We Share Your Information
            </h2>
            <p className="mt-4">
              We do not sell or rent your personal information. We share
              information only in the limited circumstances described below:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>
                <strong className="text-text-primary">Service providers.</strong>{" "}
                We use trusted third-party vendors to host the Site, deliver
                email, process payments, and provide analytics. These providers
                may access personal information only as needed to perform their
                services on our behalf and are contractually required to
                protect it.
              </li>
              <li>
                <strong className="text-text-primary">Legal compliance.</strong>{" "}
                We may disclose information if we believe in good faith that
                disclosure is required to comply with a legal obligation,
                enforce our agreements, or protect the rights, property, or
                safety of Black Bird Consulting, our clients, or the public.
              </li>
              <li>
                <strong className="text-text-primary">Business transfers.</strong>{" "}
                If we are involved in a merger, acquisition, or sale of assets,
                your information may be transferred as part of that
                transaction. We will notify affected clients and update this
                Privacy Policy accordingly.
              </li>
              <li>
                <strong className="text-text-primary">With your consent.</strong>{" "}
                We may share information for any other purpose with your
                explicit authorization.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-text-heading">
              4. Cookies and Similar Technologies
            </h2>
            <p className="mt-4">
              The Site may use cookies and similar technologies to keep the
              Site functioning properly, remember your preferences, and measure
              aggregate usage patterns. You can control cookies through your
              browser settings; however, disabling cookies may affect certain
              features of the Site.
            </p>
            <p className="mt-4">
              We do not use cookies for cross-site behavioral advertising.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-text-heading">
              5. Data Retention
            </h2>
            <p className="mt-4">
              We retain personal information only for as long as necessary to
              provide the Services, comply with our legal obligations, resolve
              disputes, and enforce our agreements. When information is no
              longer needed, we securely delete or anonymize it.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-text-heading">
              6. Data Security
            </h2>
            <p className="mt-4">
              We use reasonable administrative, technical, and physical
              safeguards designed to protect the personal information we hold,
              including encryption in transit, access controls, and vendor
              review. No method of transmission over the Internet or electronic
              storage is 100% secure, however, and we cannot guarantee absolute
              security.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-text-heading">
              7. Your Rights and Choices
            </h2>
            <p className="mt-4">
              Depending on where you live, you may have the right to:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>
                Request access to the personal information we hold about you;
              </li>
              <li>Request correction of inaccurate or incomplete information;</li>
              <li>
                Request deletion of your personal information, subject to
                certain legal exceptions;
              </li>
              <li>
                Object to or restrict certain processing of your personal
                information;
              </li>
              <li>Withdraw any consent you previously provided;</li>
              <li>
                Opt out of marketing communications at any time by following
                the unsubscribe instructions in any message we send.
              </li>
            </ul>
            <p className="mt-4">
              To exercise any of these rights, email us at{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-accent-primary hover:underline"
              >
                {siteConfig.emailDisplay}
              </a>
              . We will respond within a reasonable timeframe and in accordance
              with applicable law. We will not discriminate against you for
              exercising your privacy rights.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-text-heading">
              8. Children's Privacy
            </h2>
            <p className="mt-4">
              Our Site and Services are intended for adults. We do not
              knowingly collect personal information from children under the
              age of 16. If you believe a child has provided us with personal
              information, please contact us and we will promptly delete it.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-text-heading">
              9. International Users
            </h2>
            <p className="mt-4">
              Black Bird Consulting is based in the United States. If you
              access the Site or Services from outside the United States, your
              information may be transferred to, stored in, and processed in
              the United States. By using the Site, you consent to this
              transfer.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-text-heading">
              10. Third-Party Links
            </h2>
            <p className="mt-4">
              The Site may contain links to third-party websites or services
              that we do not operate. This Privacy Policy does not apply to
              those third parties. We encourage you to read their privacy
              policies before providing any information to them.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-text-heading">
              11. Changes to This Privacy Policy
            </h2>
            <p className="mt-4">
              We may update this Privacy Policy from time to time. When we do,
              we will revise the "Last updated" date at the top of this page.
              If the changes are material, we will provide a more prominent
              notice (such as an email to active clients). Your continued use
              of the Site or Services after an update means you accept the
              revised policy.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-text-heading">
              12. Contact Us
            </h2>
            <p className="mt-4">
              If you have questions, concerns, or requests regarding this
              Privacy Policy or our privacy practices, contact us at:
            </p>
            <div className="mt-4 rounded-lg bg-bg-secondary p-6 text-text-primary">
              <p className="font-medium">{siteConfig.legalName}</p>
              <p className="mt-1">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-accent-primary hover:underline"
                >
                  {siteConfig.emailDisplay}
                </a>
              </p>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
