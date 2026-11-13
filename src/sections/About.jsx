import {
  ArrowRight,
  Code2,
  GraduationCap,
  Lightbulb,
  MapPin,
  Quote,
  Sparkles,
  Wrench,
} from 'lucide-react'
import Reveal from '../components/Reveal'
import SectionTitle from '../components/SectionTitle'
import { site } from '../data/site'
import './About.css'

const highlights = [
  {
    icon: GraduationCap,
    title: 'BSIT Student',
    text: 'Fourth-year Bachelor of Science in Information Technology student at La Consolacion University Philippines.',
  },
  {
    icon: Code2,
    title: 'Web Development',
    text: 'Practising HTML, CSS, JavaScript, PHP, and MySQL through classroom activities and hands-on exercises.',
  },
  {
    icon: Wrench,
    title: 'Computer Systems',
    text: 'Interested in computer systems and confident handling basic troubleshooting of hardware and software issues.',
  },
  {
    icon: Lightbulb,
    title: 'Eager to Learn',
    text: 'A responsible, adaptable, and willing-to-learn individual looking for an internship to grow professionally.',
  },
]

export default function About() {
  return (
    <section id="about" className="section about" aria-labelledby="about-title">
      <span className="orb about__orb" aria-hidden="true" />

      <div className="container about__inner">
        <div className="about__content">
          <Reveal>
            <SectionTitle
              id="about-title"
              eyebrow="Who I am"
              title="About Me"
              description="A fourth-year IT student from La Consolacion University Philippines who enjoys learning new skills and turning coursework into practical projects."
            />
          </Reveal>

          <Reveal className="about__bio" delay={70}>
            {site.about.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </Reveal>

          <Reveal className="about__quote" delay={90}>
            <Quote size={20} className="about__quote-icon" aria-hidden="true" />
            <p>{site.quote}</p>
          </Reveal>

          
          <div className="about__highlights">
            {highlights.map((item, index) => {
              const Icon = item.icon
              return (
                <Reveal
                  as="article"
                  className="about__highlight"
                  key={item.title}
                  delay={120 + index * 60}
                >
                  <span className="about__highlight-icon">
                    <Icon size={19} aria-hidden="true" />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </Reveal>
              )
            })}
          </div>

          
        </div>
      </div>
    </section>
  )
}
