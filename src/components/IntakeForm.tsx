import { useState } from "react";
import { contactWorkerEndpoint, tenantId } from "@/contact.config";

type IntakeFormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  serviceInterest: string;
  timeline: string;
  budget: string;
  currentSituation: string;
  goals: string;
  howHeard: string;
};

type SubmitStatus = "idle" | "loading" | "success" | "error";

const SERVICE_OPTIONS = [
  "Life Coaching (1:1)",
  "Brand Development & Research",
  "Media Production",
  "Creative Business Strategy",
  "Not sure yet — help me figure it out",
];

const TIMELINE_OPTIONS = [
  "Ready to start now",
  "Within the next month",
  "1 to 3 months out",
  "Just exploring for now",
];

const BUDGET_OPTIONS = [
  "Under $1,000",
  "$1,000 – $5,000",
  "$5,000 – $15,000",
  "$15,000+",
  "Prefer to discuss",
];

const EMPTY_FORM: IntakeFormData = {
  name: "",
  email: "",
  phone: "",
  company: "",
  serviceInterest: "",
  timeline: "",
  budget: "",
  currentSituation: "",
  goals: "",
  howHeard: "",
};

export default function IntakeForm() {
  const [formData, setFormData] = useState<IntakeFormData>(EMPTY_FORM);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitStatus("loading");

    try {
      const payload = {
        text: {
          ...formData,
          phone: formData.phone || null,
          company: formData.company || null,
          howHeard: formData.howHeard || null,
          timestamp: new Date().toISOString(),
        },
      };

      const response = await fetch(contactWorkerEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(tenantId && { "X-Client-Id": tenantId }),
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Failed to send: ${response.statusText}`);
      }

      setSubmitStatus("success");
      setFormData(EMPTY_FORM);
      setTimeout(() => setSubmitStatus("idle"), 12000);
    } catch (error) {
      console.error("Error submitting intake form:", error);
      setSubmitStatus("error");
    }
  };

  const inputClasses =
    "w-full rounded-md border border-divider bg-bg-elevated px-4 py-3 text-text-primary placeholder:text-text-secondary/50 focus:border-accent-primary focus:outline-none focus:ring-1 focus:ring-accent-primary transition-colors";

  const labelClasses = "text-xs font-medium tracking-[0.1em] uppercase text-text-secondary";

  return (
    <form onSubmit={onSubmit} className="space-y-8">
      {/* Contact Info */}
      <fieldset className="space-y-6">
        <legend className="font-serif text-lg text-text-heading">
          Contact Information
        </legend>

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="name" className={labelClasses}>
              Full Name <span className="text-accent-primary">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              className={inputClasses}
              placeholder="Your full name"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className={labelClasses}>
              Email <span className="text-accent-primary">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={inputClasses}
              placeholder="you@example.com"
            />
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="phone" className={labelClasses}>
              Phone <span className="text-text-secondary/50">(optional)</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              className={inputClasses}
              placeholder="(555) 123-4567"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="company" className={labelClasses}>
              Company / Brand{" "}
              <span className="text-text-secondary/50">(optional)</span>
            </label>
            <input
              id="company"
              name="company"
              type="text"
              value={formData.company}
              onChange={handleChange}
              className={inputClasses}
              placeholder="If applicable"
            />
          </div>
        </div>
      </fieldset>

      {/* Project Details */}
      <fieldset className="space-y-6 border-t border-divider pt-8">
        <legend className="font-serif text-lg text-text-heading">
          Project Details
        </legend>

        <div className="space-y-2">
          <label htmlFor="serviceInterest" className={labelClasses}>
            What are you interested in?{" "}
            <span className="text-accent-primary">*</span>
          </label>
          <select
            id="serviceInterest"
            name="serviceInterest"
            value={formData.serviceInterest}
            onChange={handleChange}
            required
            className={inputClasses}
          >
            <option value="">Select a service</option>
            {SERVICE_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="timeline" className={labelClasses}>
              Timeline <span className="text-accent-primary">*</span>
            </label>
            <select
              id="timeline"
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
              required
              className={inputClasses}
            >
              <option value="">Select a timeline</option>
              {TIMELINE_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="budget" className={labelClasses}>
              Budget Range <span className="text-accent-primary">*</span>
            </label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              required
              className={inputClasses}
            >
              <option value="">Select a budget</option>
              {BUDGET_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
      </fieldset>

      {/* Tell Us More */}
      <fieldset className="space-y-6 border-t border-divider pt-8">
        <legend className="font-serif text-lg text-text-heading">
          Tell us more
        </legend>

        <div className="space-y-2">
          <label htmlFor="currentSituation" className={labelClasses}>
            Where are you right now?{" "}
            <span className="text-accent-primary">*</span>
          </label>
          <textarea
            id="currentSituation"
            name="currentSituation"
            rows={4}
            value={formData.currentSituation}
            onChange={handleChange}
            required
            className={`${inputClasses} resize-none`}
            placeholder="Briefly describe where you are in your life or business today — the wins, the stuck points, or the transition you're navigating."
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="goals" className={labelClasses}>
            What would a win look like?{" "}
            <span className="text-accent-primary">*</span>
          </label>
          <textarea
            id="goals"
            name="goals"
            rows={4}
            value={formData.goals}
            onChange={handleChange}
            required
            className={`${inputClasses} resize-none`}
            placeholder="Share your goals, vision, or the outcome you're hoping this partnership will create."
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="howHeard" className={labelClasses}>
            How did you hear about us?{" "}
            <span className="text-text-secondary/50">(optional)</span>
          </label>
          <input
            id="howHeard"
            name="howHeard"
            type="text"
            value={formData.howHeard}
            onChange={handleChange}
            className={inputClasses}
            placeholder="Referral, Instagram, Google, etc."
          />
        </div>
      </fieldset>

      <div className="border-t border-divider pt-8">
        <button
          type="submit"
          disabled={submitStatus === "loading"}
          className="w-full rounded-full bg-accent-primary px-10 py-4 text-sm font-semibold tracking-[0.2em] uppercase text-text-inverse transition-colors hover:bg-accent-deep disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
        >
          {submitStatus === "loading" ? "Sending..." : "Submit Intake"}
        </button>

        {submitStatus === "success" && (
          <p className="mt-6 text-sm text-accent-deep">
            Thank you — your intake was received. Natasha will be in touch within
            2 business days.
          </p>
        )}
        {submitStatus === "error" && (
          <p className="mt-6 text-sm text-red-600">
            Something went wrong. Please try again, or email us directly.
          </p>
        )}

        <p className="mt-6 text-xs text-text-secondary/70">
          Your information is confidential and will only be used to respond to
          your inquiry.
        </p>
      </div>
    </form>
  );
}
