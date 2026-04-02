const GITHUB = "https://github.com/robin-raq";
const LINKEDIN = "https://www.linkedin.com/in/raq-robinson";

type Props = {
  formAction?: string;
};

/** Spam-resistant contact: prefer Formspree (set NEXT_PUBLIC_CONTACT_FORM_ACTION in env). */
export function ContactSection({ formAction }: Props) {
  const hasForm = Boolean(formAction && formAction.length > 0);

  return (
    <section aria-label="Contact form" className="font-sans">
      <p className="max-w-2xl text-[13px] leading-relaxed text-[#2a2a2a]">
        Prefer GitHub or LinkedIn for a first touch; use the form when it is
        configured with your Formspree (or similar) endpoint.
      </p>

      <ul className="mt-4 flex flex-wrap gap-4 text-[13px]">
        <li>
          <a
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0000cc] underline hover:text-[#000080]"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0000cc] underline hover:text-[#000080]"
          >
            LinkedIn
          </a>
        </li>
      </ul>

      {hasForm ? (
        <form
          action={formAction}
          method="POST"
          className="mt-6 max-w-lg space-y-3"
        >
          <input type="hidden" name="_gotcha" tabIndex={-1} autoComplete="off" />
          <div>
            <label htmlFor="contact-name" className="mb-1 block text-[11px] font-bold text-[#000080]">
              Name
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              className="win95-inset w-full bg-white px-2 py-1.5 text-sm text-black"
            />
          </div>
          <div>
            <label htmlFor="contact-email" className="mb-1 block text-[11px] font-bold text-[#000080]">
              Email
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              className="win95-inset w-full bg-white px-2 py-1.5 text-sm text-black"
            />
          </div>
          <div>
            <label htmlFor="contact-message" className="mb-1 block text-[11px] font-bold text-[#000080]">
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              rows={4}
              className="win95-inset w-full bg-white px-2 py-1.5 text-sm text-black"
            />
          </div>
          <button type="submit" className="win-btn rounded-sm text-[12px]">
            Send
          </button>
        </form>
      ) : (
        <p className="mt-4 text-[13px] text-[#404040]">
          Form endpoint not set. Add{" "}
          <code className="win95-inset bg-white px-1.5 py-0.5 font-mono text-[11px] text-black">
            NEXT_PUBLIC_CONTACT_FORM_ACTION
          </code>{" "}
          to enable the contact form.
        </p>
      )}
    </section>
  );
}
