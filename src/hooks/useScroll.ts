import { useEffect, useState } from 'react'

export function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up')
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    let lastScrollY = window.pageYOffset

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset
      const direction = scrollY > lastScrollY ? 'down' : 'up'
      
      if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
        setScrollDirection(direction)
      }
      
      setScrollY(scrollY)
      lastScrollY = scrollY > 0 ? scrollY : 0
    }

    window.addEventListener('scroll', updateScrollDirection)
    return () => window.removeEventListener('scroll', updateScrollDirection)
  }, [scrollDirection])

  return { scrollDirection, scrollY }
}

export function useScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = scrollPx / winHeightPx

      setScrollProgress(scrolled)
    }

    window.addEventListener('scroll', updateScrollProgress)
    return () => window.removeEventListener('scroll', updateScrollProgress)
  }, [])

  return scrollProgress
}
