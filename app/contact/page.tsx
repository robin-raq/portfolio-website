import type { Metadata } from "next";
import { ContactSection } from "@/components/ContactSection";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch via GitHub, LinkedIn, or the contact form.",
};

export default function ContactPage() {
  const formAction = process.env.NEXT_PUBLIC_CONTACT_FORM_ACTION;

  return (
    <>
      <PageHeader
        title="Contact"
        description="Reach out for roles, collaboration, or community tech projects."
      />
      <ContactSection formAction={formAction} />
    </>
  );
}
