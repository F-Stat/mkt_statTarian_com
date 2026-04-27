import { useEffect } from 'react'
import { useLocation } from 'react-router'

export function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual'
    }

    // Double RAF: first ensures paint, second catches post-animation layout shifts
    const raf = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        window.scrollTo(0, 0)
      })
    })

    return () => cancelAnimationFrame(raf)
  }, [pathname])

  return null
}