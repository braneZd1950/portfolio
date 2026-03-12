import { useState, useEffect, useRef } from 'react'

/**
 * Hook koji prati je li element vidljiv u viewportu.
 * @param {Object} options - IntersectionObserver opcije (threshold, rootMargin)
 * @returns {[React.RefObject, boolean]} [ref, isInView]
 */
export function useInView(options = {}) {
  const ref = useRef(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const { once, ...observerOptions } = options

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          if (once) {
            observer.disconnect()
          }
        } else if (!once) {
          setIsInView(false)
        }
      },
      {
        threshold: observerOptions.threshold ?? 0.25,
        rootMargin: observerOptions.rootMargin ?? '0px 0px -35% 0px',
        ...observerOptions,
      }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return [ref, isInView]
}
