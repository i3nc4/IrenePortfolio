import { useCallback, useEffect, useState } from 'react'

const STORAGE_KEY = 'portfolio-theme'

/** Read a saved theme, otherwise fall back to the system preference. */
function getInitialTheme() {
  if (typeof window === 'undefined') return 'light'

  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored === 'light' || stored === 'dark') return stored

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

/**
 * Light/dark theme state persisted in localStorage.
 * The initial value is also applied by an inline script in index.html
 * to prevent a flash of the wrong theme before React hydrates.
 */
export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)

    const themeColor = document.querySelector('meta[name="theme-color"]')
    if (themeColor) {
      themeColor.setAttribute('content', theme === 'dark' ? '#120c1c' : '#f8f3ff')
    }

    window.localStorage.setItem(STORAGE_KEY, theme)
  }, [theme])

  const toggleTheme = useCallback(() => {
    const root = document.documentElement
    root.classList.add('theme-transition')
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'))

    window.setTimeout(() => root.classList.remove('theme-transition'), 450)
  }, [])

  return { theme, toggleTheme }
}
