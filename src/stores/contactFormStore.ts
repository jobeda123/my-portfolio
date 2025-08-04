import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

interface ContactFormData {
  name: string
  email: string
  message: string
}

interface ContactFormState {
  contactForm: ContactFormData
  isSubmitting: boolean
  submitStatus: 'idle' | 'success' | 'error'
  submitMessage: string
  updateContactForm: (field: keyof ContactFormData, value: string) => void
  setContactForm: (form: ContactFormData) => void
  resetContactForm: () => void
  submitForm: () => Promise<void>
  clearSubmitStatus: () => void
}

const initialForm: ContactFormData = {
  name: '',
  email: '',
  message: '',
}

export const useContactFormStore = create<ContactFormState>()(
  devtools(
    (set, get) => ({
      contactForm: initialForm,
      isSubmitting: false,
      submitStatus: 'idle',
      submitMessage: '',
      updateContactForm: (field, value) =>
        set((state) => ({
          contactForm: {
            ...state.contactForm,
            [field]: value,
          },
        }), false, 'updateContactForm'),
      setContactForm: (form) =>
        set({ contactForm: form }, false, 'setContactForm'),
      resetContactForm: () =>
        set({
          contactForm: initialForm,
          submitStatus: 'idle',
          submitMessage: '',
        }, false, 'resetContactForm'),
      submitForm: async () => {
        const { contactForm } = get()
        set({ isSubmitting: true, submitStatus: 'idle' }, false, 'submitForm:start')
        
        try {
          // Simulate API call
          await new Promise(resolve => setTimeout(resolve, 1500))
          
          // Simulate success/error based on email validation
          if (!contactForm.email.includes('@')) {
            throw new Error('Invalid email address')
          }
          
          set({
            isSubmitting: false,
            submitStatus: 'success',
            submitMessage: 'Thank you! Your message has been sent successfully.',
            contactForm: initialForm,
          }, false, 'submitForm:success')
        } catch (error) {
          set({
            isSubmitting: false,
            submitStatus: 'error',
            submitMessage: error instanceof Error ? error.message : 'Failed to send message. Please try again.',
          }, false, 'submitForm:error')
        }
      },
      clearSubmitStatus: () =>
        set({
          submitStatus: 'idle',
          submitMessage: '',
        }, false, 'clearSubmitStatus'),
    }),
    {
      name: 'contact-form-store',
    }
  )
)

// Individual selector hooks for better performance
export const useContactFormData = () => useContactFormStore((state) => state.contactForm)
export const useUpdateContactForm = () => useContactFormStore((state) => state.updateContactForm)
export const useSetContactForm = () => useContactFormStore((state) => state.setContactForm)
export const useResetContactForm = () => useContactFormStore((state) => state.resetContactForm)

export const useIsSubmitting = () => useContactFormStore((state) => state.isSubmitting)
export const useSubmitStatus = () => useContactFormStore((state) => state.submitStatus)
export const useSubmitMessage = () => useContactFormStore((state) => state.submitMessage)
export const useSubmitForm = () => useContactFormStore((state) => state.submitForm)
export const useClearSubmitStatus = () => useContactFormStore((state) => state.clearSubmitStatus)

// Combined hooks for components that need multiple contact form values
export const useContactForm = () => {
  const contactForm = useContactFormData()
  const updateContactForm = useUpdateContactForm()
  const setContactForm = useSetContactForm()
  const resetContactForm = useResetContactForm()
  
  return {
    contactForm,
    updateContactForm,
    setContactForm,
    resetContactForm,
  }
}

export const useContactFormSubmit = () => {
  const isSubmitting = useIsSubmitting()
  const submitStatus = useSubmitStatus()
  const submitMessage = useSubmitMessage()
  const submitForm = useSubmitForm()
  const clearSubmitStatus = useClearSubmitStatus()
  
  return {
    isSubmitting,
    submitStatus,
    submitMessage,
    submitForm,
    clearSubmitStatus,
  }
}
