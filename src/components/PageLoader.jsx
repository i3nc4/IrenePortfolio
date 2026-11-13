import { useEffect, useState } from 'react'
import { site } from '../data/site'
import './PageLoader.css'

const HOLD_MS = 1000
const FADE_MS = 350

/**
 * Brief welcome animation shown on a fresh page load. It runs for one
 * second, fades out, then removes itself from the DOM.
 */
export default function PageLoader() {
  const [leaving, setLeaving] = useState(false)
  const [removed, setRemoved] = useState(false)

  useEffect(() => {
    const fadeTimer = setTimeout(() => setLeaving(true), HOLD_MS)
    const removeTimer = setTimeout(() => setRemoved(true), HOLD_MS + FADE_MS)

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(removeTimer)
    }
  }, [])

  if (removed) return null

  return (
    <div
      className={`page-loader ${leaving ? 'is-leaving' : ''}`.trim()}
      role="status"
      aria-live="polite"
      aria-label="Loading portfolio"
    >
      <div className="page-loader__mark" aria-hidden="true">
        {site.initials}
      </div>
      <p className="page-loader__text">Loading portfolio</p>
      <span className="page-loader__bar" aria-hidden="true">
        <span />
      </span>
    </div>
  )
}
