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
        title="Terms of Service"
        subtitle={`Last updated: ${lastUpdated}`}
      />
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-3xl space-y-10 px-6 leading-relaxed text-text-secondary">
          <p>
            These Terms of Service ("Terms") are a legal agreement between you
            ("you," "your," or "Client") and {siteConfig.legalName} ("Black
            Bird Consulting," "we," "us," or "our") governing your access to
            and use of the website at {siteConfig.url} (the "Site") and the
            services we provide (the "Services"). By accessing the Site or
            engaging our Services, you agree to be bound by these Terms. If
            you do not agree, do not use the Site or Services.
          </p>

          <section>
            <h2 className="font-serif text-2xl text-text-heading">
              1. Eligibility
            </h2>
            <p className="mt-4">
              You must be at least 18 years old and legally able to enter into
              a binding contract to use the Site or engage our Services. By
              using the Site or Services, you represent and warrant that you
              meet these requirements.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-text-heading">
              2. The Services
            </h2>
            <p className="mt-4">
              Black Bird Consulting provides life coaching, brand development,
              media production, and creative business strategy services. The
              specific scope, deliverables, milestones, timeline, and fees for
              each engagement are set out in a separate written agreement,
              statement of work, or proposal signed by both parties (each, an
              "Engagement Agreement"). In the event of any conflict between
              these Terms and an Engagement Agreement, the Engagement
              Agreement controls for that engagement.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-text-heading">
              3. Not Professional Advice
            </h2>
            <p className="mt-4">
              Coaching and consulting services are intended to support your
              personal and professional growth. They are <strong className="text-text-primary">not</strong>{" "}
              a substitute for medical, psychological, psychiatric, legal,
              accounting, tax, or financial advice. We are not licensed
              therapists, attorneys, or financial advisors, and nothing we
              provide should be interpreted as professional advice in those
              areas. You are solely responsible for the decisions you make and
              the actions you take, and you should consult appropriate licensed
              professionals where needed.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-text-heading">
              4. Client Responsibilities
            </h2>
            <p className="mt-4">You agree to:</p>
            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>
                Provide complete, accurate, and timely information needed for
                us to perform the Services;
              </li>
              <li>
                Show up for scheduled sessions and respond reasonably promptly
                to communications required to keep the engagement on track;
              </li>
              <li>
                Use the Site and any materials we provide only for lawful
                purposes and in accordance with these Terms;
              </li>
              <li>
                Respect the confidentiality of any proprietary information,
                frameworks, or content shared with you during the engagement.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-text-heading">
              5. Fees and Payment
            </h2>
            <p className="mt-4">
              Fees, payment amounts, and payment schedules are set out in your
              Engagement Agreement. Unless otherwise specified in writing:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>
                Invoices are due upon receipt and may be paid through any
                payment method we accept (typically Stripe or Square);
              </li>
              <li>
                A deposit or retainer may be required to begin work, and work
                does not commence until the deposit is received;
              </li>
              <li>
                Overdue balances may accrue interest at the lesser of 1.5% per
                month or the maximum rate permitted by law, and we may suspend
                or terminate Services while amounts are past due;
              </li>
              <li>
                You are responsible for any fees, taxes, or duties applicable
                to your jurisdiction.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-text-heading">
              6. Refunds and Cancellations
            </h2>
            <p className="mt-4">
              Deposits, retainers, and fees for completed work or work in
              progress are non-refundable, except as expressly provided in your
              Engagement Agreement or as required by applicable law.
            </p>
            <p className="mt-4">
              Coaching sessions and appointments may be rescheduled with at
              least 24 hours' advance notice at no charge. Cancellations or
              no-shows with less than 24 hours' notice may be charged at the
              full session rate, unless the Engagement Agreement states
              otherwise.
            </p>
            <p className="mt-4">
              Either party may terminate an ongoing engagement with written
              notice as specified in the Engagement Agreement. You remain
              responsible for fees earned through the effective termination
              date.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-text-heading">
              7. Confidentiality
            </h2>
            <p className="mt-4">
              We treat client communications, session content, and any
              non-public business information disclosed in the course of an
              engagement as confidential. We will not disclose such information
              to third parties except: (a) to trusted contractors or service
              providers bound by confidentiality obligations; (b) as required
              by law or legal process; or (c) with your written consent.
            </p>
            <p className="mt-4">
              You likewise agree to keep confidential any proprietary
              frameworks, materials, pricing, or strategies we share with you
              during the engagement, and to use them only for the purposes of
              the Services.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-text-heading">
              8. Intellectual Property
            </h2>
            <p className="mt-4">
              All content on this Site, including text, graphics, logos,
              images, media, and the overall design, is owned by Black Bird
              Consulting or its licensors and is protected by copyright,
              trademark, and other applicable intellectual property laws. You
              may not copy, reproduce, republish, distribute, modify, or
              create derivative works from Site content without our prior
              written permission, other than for personal, non-commercial
              browsing.
            </p>
            <p className="mt-4">
              Ownership of deliverables produced under a client engagement
              (brand strategy documents, creative assets, video, photography,
              and so on) is governed by the Engagement Agreement. Until all
              fees for a given deliverable are paid in full, we retain all
              rights to that deliverable. Unless the Engagement Agreement says
              otherwise, we retain the right to use general knowledge, skills,
              and concepts developed during an engagement, and to feature the
              work in our portfolio and marketing.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-text-heading">
              9. Testimonials and Results
            </h2>
            <p className="mt-4">
              Any testimonials, case studies, or examples of client outcomes
              shared on the Site reflect the experiences of specific clients.
              Results vary based on individual effort, circumstances, market
              conditions, and many other factors. We do not guarantee specific
              outcomes, income, or results from our Services.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-text-heading">
              10. Disclaimer of Warranties
            </h2>
            <p className="mt-4">
              THE SITE AND SERVICES ARE PROVIDED ON AN "AS IS" AND "AS
              AVAILABLE" BASIS. TO THE FULLEST EXTENT PERMITTED BY APPLICABLE
              LAW, BLACK BIRD CONSULTING DISCLAIMS ALL WARRANTIES, WHETHER
              EXPRESS, IMPLIED, OR STATUTORY, INCLUDING WITHOUT LIMITATION ANY
              IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
              PURPOSE, TITLE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE
              SITE OR SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, OR THAT ANY
              SPECIFIC RESULT WILL BE ACHIEVED.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-text-heading">
              11. Limitation of Liability
            </h2>
            <p className="mt-4">
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT
              WILL BLACK BIRD CONSULTING, ITS OWNERS, EMPLOYEES, CONTRACTORS,
              OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
              CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY DAMAGES, OR FOR ANY LOSS
              OF PROFITS, REVENUE, DATA, GOODWILL, OR BUSINESS OPPORTUNITY,
              ARISING OUT OF OR RELATED TO THESE TERMS, THE SITE, OR THE
              SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF
              SUCH DAMAGES.
            </p>
            <p className="mt-4">
              OUR TOTAL AGGREGATE LIABILITY FOR ALL CLAIMS ARISING OUT OF OR
              RELATED TO THESE TERMS OR AN ENGAGEMENT WILL NOT EXCEED THE
              AMOUNT YOU ACTUALLY PAID TO US FOR THE SERVICES GIVING RISE TO
              THE CLAIM IN THE TWELVE (12) MONTHS IMMEDIATELY PRECEDING THE
              EVENT ON WHICH THE CLAIM IS BASED.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-text-heading">
              12. Indemnification
            </h2>
            <p className="mt-4">
              You agree to indemnify, defend, and hold harmless Black Bird
              Consulting and its owners, employees, contractors, and affiliates
              from and against any and all claims, damages, losses, liabilities,
              and expenses (including reasonable attorneys' fees) arising out
              of or related to (a) your breach of these Terms or any Engagement
              Agreement, (b) your use or misuse of the Site or Services, (c)
              content or materials you provide to us, or (d) your violation of
              any law or the rights of any third party.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-text-heading">
              13. Third-Party Services
            </h2>
            <p className="mt-4">
              The Site and Services may incorporate or link to third-party
              tools, websites, or services (such as payment processors,
              scheduling platforms, hosting, and analytics). We do not control
              those third parties and are not responsible for their content,
              policies, or practices. Your use of any third-party service is
              at your own risk and subject to that provider's terms.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-text-heading">
              14. Termination
            </h2>
            <p className="mt-4">
              We may suspend or terminate your access to the Site or Services,
              in whole or in part, at any time, with or without notice, if we
              reasonably believe you have violated these Terms or if we
              discontinue the Site or Services. Sections intended to survive
              termination (including intellectual property, confidentiality,
              disclaimers, limitation of liability, indemnification, and
              governing law) will continue in effect after termination.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-text-heading">
              15. Governing Law and Dispute Resolution
            </h2>
            <p className="mt-4">
              These Terms are governed by and construed in accordance with the
              laws of the United States and the state in which{" "}
              {siteConfig.legalName} is organized, without regard to conflict
              of law principles. The parties will attempt in good faith to
              resolve any dispute arising out of or related to these Terms
              through direct negotiation before pursuing other remedies. If the
              dispute cannot be resolved informally, it will be brought
              exclusively in the state or federal courts located in that
              jurisdiction, and each party consents to personal jurisdiction
              there.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-text-heading">
              16. Changes to These Terms
            </h2>
            <p className="mt-4">
              We may update these Terms from time to time. When we do, we will
              revise the "Last updated" date at the top of this page. If the
              changes are material, we will provide a more prominent notice.
              Your continued use of the Site or Services after an update means
              you accept the revised Terms.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-text-heading">
              17. Miscellaneous
            </h2>
            <p className="mt-4">
              These Terms, together with any Engagement Agreement and our
              Privacy Policy, constitute the entire agreement between you and
              Black Bird Consulting regarding the Site and Services. If any
              provision is held unenforceable, the remaining provisions will
              remain in full force. Our failure to enforce any right or
              provision is not a waiver of that right or provision. You may
              not assign these Terms without our prior written consent; we may
              assign them freely.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-text-heading">
              18. Contact
            </h2>
            <p className="mt-4">
              Questions about these Terms can be directed to:
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
