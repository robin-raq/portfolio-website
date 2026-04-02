const GITHUB = "https://github.com/robin-raq";
const LINKEDIN = "https://www.linkedin.com/in/raq-robinson";

type Props = {
  formAction?: string;
};

/** Spam-resistant contact: prefer Formspree (set NEXT_PUBLIC_CONTACT_FORM_ACTION in env). */
export function ContactSection({ formAction }: Props) {
  const hasForm = Boolean(formAction && formAction.length > 0);

  return (
    <section aria-labelledby="contact-heading">
      <h2
        id="contact-heading"
        className="font-serif text-2xl font-semibold text-zinc-50"
      >
        Contact
      </h2>
      <p className="mt-2 max-w-2xl text-sm text-zinc-400">
        Prefer GitHub or LinkedIn for a first touch; use the form when it is
        configured with your Formspree (or similar) endpoint.
      </p>

      <ul className="mt-6 flex flex-wrap gap-4 text-sm">
        <li>
          <a
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-cyan-400 underline-offset-4 hover:text-cyan-300 hover:underline"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-cyan-400 underline-offset-4 hover:text-cyan-300 hover:underline"
          >
            LinkedIn
          </a>
        </li>
      </ul>

      {hasForm ? (
        <form
          action={formAction}
          method="POST"
          className="mt-8 max-w-lg space-y-4"
        >
          <input type="hidden" name="_gotcha" tabIndex={-1} autoComplete="off" />
          <div>
            <label htmlFor="contact-name" className="sr-only">
              Name
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              placeholder="Name"
              className="w-full rounded-lg border border-zinc-600 bg-zinc-900/80 px-3 py-2 text-zinc-50 shadow-inner placeholder:text-zinc-500"
            />
          </div>
          <div>
            <label htmlFor="contact-email" className="sr-only">
              Email
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              placeholder="Email"
              className="w-full rounded-lg border border-zinc-600 bg-zinc-900/80 px-3 py-2 text-zinc-50 shadow-inner placeholder:text-zinc-500"
            />
          </div>
          <div>
            <label htmlFor="contact-message" className="sr-only">
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              rows={4}
              placeholder="Message"
              className="w-full rounded-lg border border-zinc-600 bg-zinc-900/80 px-3 py-2 text-zinc-50 shadow-inner placeholder:text-zinc-500"
            />
          </div>
          <button
            type="submit"
            className="rounded-lg bg-cyan-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-cyan-500"
          >
            Send
          </button>
        </form>
      ) : (
        <p className="mt-6 text-sm text-zinc-500">
          Form endpoint not set. Add{" "}
          <code className="rounded bg-zinc-800 px-1.5 py-0.5 font-mono text-xs text-zinc-300">
            NEXT_PUBLIC_CONTACT_FORM_ACTION
          </code>{" "}
          to enable the contact form.
        </p>
      )}
    </section>
  );
}
