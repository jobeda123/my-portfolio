"use client";

import {
  useContactForm,
  useContactFormSubmit,
} from "@/stores/contactFormStore";
import FormField from "@/components/core/input/FormField";
import Alert from "@/components/core/alert/Alert";
import GradientButton from "@/components/core/button/GradientButton";

export default function ContactForm() {
  const { contactForm, updateContactForm } = useContactForm();
  const { isSubmitting, submitStatus, submitMessage, submitForm } =
    useContactFormSubmit();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitForm();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {submitStatus !== "idle" && (
        <Alert
          type={submitStatus as "success" | "error"}
          message={submitMessage}
        />
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          label="Name"
          type="text"
          value={contactForm.name}
          onChange={(value) => updateContactForm("name", value)}
          disabled={isSubmitting}
          placeholder="Your Name"
          required
        />

        <FormField
          label="Email"
          type="email"
          value={contactForm.email}
          onChange={(value) => updateContactForm("email", value)}
          disabled={isSubmitting}
          placeholder="Your Email"
          required
        />
      </div>

      <FormField
        label="Subject"
        type="text"
        value={contactForm.subject}
        onChange={(value) => updateContactForm("subject", value)}
        disabled={isSubmitting}
        placeholder="Subject"
      />

      <FormField
        label="Message"
        type="textarea"
        value={contactForm.message}
        onChange={(value) => updateContactForm("message", value)}
        disabled={isSubmitting}
        placeholder="Your message..."
        rows={6}
        required
      />

      <GradientButton
        label="Send Message"
        loadingLabel="Sending..."
        disabled={isSubmitting}
        isLoading={isSubmitting}
      />
    </form>
  );
}
