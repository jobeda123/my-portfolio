import { useEffect } from 'react'
import { useNavigationStore } from '@/stores/navigationStore'
import { useContactFormStore } from '@/stores/contactFormStore'
import { useLoadingStore } from '@/stores/loadingStore'

/**
 * Store Communication Examples
 * 
 * This file demonstrates how separate Zustand stores can communicate
 * with each other when needed, while maintaining their independence.
 */

// Example 1: Clear contact form when navigating away from contact section
export function useFormNavigationSync() {
  useEffect(() => {
    const unsubscribe = useNavigationStore.subscribe((state) => {
      if (state.currentSection !== 'contact') {
        const { resetContactForm, clearSubmitStatus } = useContactFormStore.getState()
        resetContactForm()
        clearSubmitStatus()
      }
    })
    
    return unsubscribe
  }, [])
}

// Example 2: Show loading when form is submitting
export function useFormLoadingSync() {
  useEffect(() => {
    const unsubscribe = useContactFormStore.subscribe((state) => {
      const { setLoading, clearLoading } = useLoadingStore.getState()
      
      if (state.isSubmitting) {
        setLoading(true, 'Sending your message...')
      } else {
        clearLoading()
      }
    })
    
    return unsubscribe
  }, [])
}

// Example 3: Custom hook that combines multiple stores
export function usePageState() {
  const navigation = useNavigationStore()
  const loading = useLoadingStore()
  
  return {
    // Computed state from multiple stores
    isContactPage: navigation.currentSection === 'contact',
    canShowBackButton: navigation.navigationHistory.length > 1,
    pageTitle: `Portfolio - ${navigation.currentSection.charAt(0).toUpperCase() + navigation.currentSection.slice(1)}`,
    
    // Combined actions
    navigateWithLoading: async (section: string) => {
      loading.setLoading(true, `Loading ${section}...`)
      // Simulate page load
      await new Promise(resolve => setTimeout(resolve, 500))
      navigation.setCurrentSection(section)
      loading.clearLoading()
    }
  }
}

// Example 4: Store middleware for cross-store effects
export function createStoreMiddleware() {
  // This pattern allows you to create middleware that listens to all stores
  // and performs cross-cutting concerns like logging, analytics, etc.
  
  const middlewares = {
    // Log all navigation changes
    navigationLogger: useNavigationStore.subscribe((state, prevState) => {
      if (state.currentSection !== prevState?.currentSection) {
        // Navigation tracking (console.log removed for production)
      }
    }),
    
    // Analytics tracking
    analyticsTracker: useContactFormStore.subscribe((state) => {
      if (state.submitStatus === 'success') {
        // Track successful form submission (console.log removed for production)
      }
    })
  }
  
  // Return cleanup function
  return () => {
    Object.values(middlewares).forEach(unsubscribe => unsubscribe())
  }
}
