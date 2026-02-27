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

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      {
        threshold: options.threshold ?? 0.25,
        rootMargin: options.rootMargin ?? '0px 0px -35% 0px',
        ...options,
      }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return [ref, isInView]
}
