'use client'

import { useContactForm, useContactFormSubmit } from '@/stores/contactFormStore'
import FormField from './ui/FormField'
import Button from './ui/Button'
import Alert from './ui/Alert'

export default function ContactForm() {
  const { contactForm, updateContactForm, resetContactForm } = useContactForm()
  const { isSubmitting, submitStatus, submitMessage, submitForm, clearSubmitStatus } = useContactFormSubmit()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await submitForm()
  }

  const handleReset = () => {
    resetContactForm()
    clearSubmitStatus()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {submitStatus !== 'idle' && (
        <Alert 
          type={submitStatus as 'success' | 'error'} 
          message={submitMessage}
        />
      )}
      
      <FormField
        label="Name"
        type="text"
        value={contactForm.name}
        onChange={(value) => updateContactForm('name', value)}
        disabled={isSubmitting}
        required
      />
      
      <FormField
        label="Email"
        type="email"
        value={contactForm.email}
        onChange={(value) => updateContactForm('email', value)}
        disabled={isSubmitting}
        required
      />
      
      <FormField
        label="Message"
        type="textarea"
        value={contactForm.message}
        onChange={(value) => updateContactForm('message', value)}
        disabled={isSubmitting}
        rows={4}
        required
      />
      
      <div className="flex gap-4">
        <Button
          type="submit"
          variant="primary"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
        
        <Button
          type="button"
          variant="secondary"
          onClick={handleReset}
          disabled={isSubmitting}
        >
          Reset
        </Button>
      </div>
    </form>
  )
}
