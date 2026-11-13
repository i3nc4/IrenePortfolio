import { FaGithub } from 'react-icons/fa6'
import { socialLinks } from '../data/site'

const iconMap = {
  github: FaGithub,
}

/**
 * Renders the social links from src/data/site.js.
 * `className` can be used to tweak spacing from the parent.
 */
export default function SocialLinks({ className = '', size = 'md', links = socialLinks }) {
  return (
    <ul
      className={`social-links ${size === 'lg' ? 'social-links--lg' : ''} ${className}`.trim()}
    >
      {links.map((link) => {
        const Icon = iconMap[link.icon]
        return (
          <li key={link.id}>
            <a
              className="icon-btn"
              href={link.url}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${link.label} profile (opens in a new tab)`}
              title={link.label}
            >
              <Icon aria-hidden="true" />
            </a>
          </li>
        )
      })}
    </ul>
  )
}
