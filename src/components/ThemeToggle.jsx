import { Moon, Sun } from 'lucide-react'
import './ThemeToggle.css'

/**
 * Animated sun/moon theme switch.
 * `theme` is the current theme, `onToggle` flips it and persists it.
 */
export default function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark'
  const nextTheme = isDark ? 'light' : 'dark'

  return (
    <button
      type="button"
      className={`theme-toggle ${isDark ? 'is-dark' : ''}`.trim()}
      onClick={onToggle}
      aria-label={`Switch to ${nextTheme} mode`}
      title={`Switch to ${nextTheme} mode`}
    >
      <span className="theme-toggle__icon theme-toggle__icon--sun" aria-hidden="true">
        <Sun size={14} strokeWidth={2.2} />
      </span>
      <span className="theme-toggle__icon theme-toggle__icon--moon" aria-hidden="true">
        <Moon size={13} strokeWidth={2.2} />
      </span>
      <span className="theme-toggle__thumb" aria-hidden="true" />
    </button>
  )
}
