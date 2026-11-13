/**
 * SITE CONTENT
 * ---------------------------------------------------------------
 * This is the main place to personalise the portfolio.
 * Every social link, email address and phone number used across
 * the site is sourced from this file.
 */

export const site = {
  name: 'Irene Concepcion',
  initials: 'IC',
  role: 'Aspiring IT Professional | BSIT Student',
  // Update this description if you replace the placeholder portrait.
  profileAlt: 'Portrait of Irene Concepcion',
  // Short introduction used in the hero section.
  intro:
    "I'm a Bachelor of Science in Information Technology student with an interest in technology, web development, and digital innovation. I'm passionate about learning new skills, exploring different technologies, and developing practical solutions through academic projects.",
  // Used in the About section.
  about: [
    'I am Irene Concepcion, a fourth-year Bachelor of Science in Information Technology student at La Consolacion University Philippines.',
    'As an IT student, I have developed an interest in technology, computer systems, web development, and other areas of Information Technology. Throughout my academic journey, I have gained knowledge and experience through classroom activities, hands-on exercises, and group projects.',
    'I consider myself a responsible, adaptable, and willing-to-learn individual. I believe that learning does not stop inside the classroom, which is why I am excited to gain practical experience and improve my skills through an internship.',
    'My goal is to become a competent IT professional, continuously develop my knowledge, and contribute to a company where I can grow both personally and professionally.',
  ],
  // A short line that appears in the About section.
  quote: 'Learning Today, Building Tomorrow.',
  location: 'Philippines',
  email: 'ireneconcepcion04@gmail.com',
  phone: '09554529263',
  availability: 'Open to internships',
  // Replace these placeholders with real profile URLs.
  socials: {
    github: 'https://github.com/i3nc4',
  },
  stats: [
    { value: '4th', label: 'Year student' },
    { value: '1', label: 'Capstone project' },
    { value: '7', label: 'Core skills' },
  ],
}

/** Navigation links. `id` must match the section id in App.jsx. */
export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'contact', label: 'Contact' },
]

/** Social profiles shared by the navbar, hero, contact section and footer. */
export const socialLinks = [
  {
    id: 'github',
    label: 'GitHub',
    url: site.socials.github,
    icon: 'github',
  },
]
