import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { navLinks, site } from '../data/site'
import { useScrollSpy } from '../hooks/useScrollSpy'
import SocialLinks from './SocialLinks'
import ThemeToggle from './ThemeToggle'
import './Navbar.css'

const NAV_IDS = navLinks.map((link) => link.id)

export default function Navbar({ theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const activeId = useScrollSpy(NAV_IDS)
  const toggleRef = useRef(null)

  // Glass background once the visitor starts scrolling.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock the page behind the mobile drawer.
  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen)
    return () => document.body.classList.remove('menu-open')
  }, [menuOpen])

  // Escape closes the mobile menu and returns focus to the toggle.
  useEffect(() => {
    if (!menuOpen) return undefined

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        toggleRef.current?.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  // Never leave the drawer open when switching to desktop width.
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 1120) setMenuOpen(false)
    }

    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`.trim()}>
      <div className="header-inner container">
        <a className="brand" href="#home" onClick={closeMenu} aria-label={`${site.name} — back to top`}>
          <span className="brand-text gradient-text">{site.name}</span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <ul>
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={activeId === link.id ? 'is-active' : ''}
                  aria-current={activeId === link.id ? 'page' : undefined}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <SocialLinks className="header-socials" />
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            ref={toggleRef}
            type="button"
            className={`menu-toggle ${menuOpen ? 'is-active' : ''}`.trim()}
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            {menuOpen ? <X size={19} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </div>

      <div
        className={`mobile-menu-backdrop ${menuOpen ? 'is-open' : ''}`.trim()}
        onClick={closeMenu}
        aria-hidden="true"
      />

      <div
        id="mobile-navigation"
        className={`mobile-menu ${menuOpen ? 'is-open' : ''}`.trim()}
        aria-hidden={!menuOpen}
        inert={!menuOpen}
      >
        <div className="mobile-menu__top">
          <span className="chip">
            <span className="status-dot" aria-hidden="true" />
            {site.availability}
          </span>
          <span className="mobile-menu__label">Menu</span>
        </div>

        <nav aria-label="Mobile navigation">
          <ul>
            {navLinks.map((link, index) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={activeId === link.id ? 'is-active' : ''}
                  aria-current={activeId === link.id ? 'page' : undefined}
                  onClick={closeMenu}
                >
                  <span className="mobile-menu__index">{String(index + 1).padStart(2, '0')}</span>
                  <span className="mobile-menu__text">{link.label}</span>
                  <ArrowUpRight size={16} aria-hidden="true" className="mobile-menu__arrow" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mobile-menu__footer">
          <SocialLinks />
          <a href="#contact" className="btn btn--primary btn--sm" onClick={closeMenu}>
            Let&apos;s talk
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>
      </div>
    </header>
  )
}
