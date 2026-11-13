import { CalendarDays, CheckCircle2, GraduationCap } from 'lucide-react'
import Reveal from '../components/Reveal'
import SectionTitle from '../components/SectionTitle'
import { education } from '../data/education'
import './Education.css'

export default function Education() {
  return (
    <section id="education" className="section education" aria-labelledby="education-title">
      <div className="container">
        <Reveal>
          <SectionTitle
            id="education-title"
            eyebrow="My academic path"
            title="Education"
            description="My educational journey reflects my continuous growth, learning, and development through each stage of my education."
          />
        </Reveal>

        <div className="timeline">
          {education.map((item, index) => (
            <Reveal
              as="article"
              className="timeline-item"
              key={item.id}
              delay={index * 90}
            >
              <span className="timeline-item__marker" aria-hidden="true">
                <GraduationCap size={21} />
              </span>

              <div className="timeline-item__card">
                <div className="timeline-item__top">
                  <span className="timeline-item__period">
                    <CalendarDays size={14} aria-hidden="true" />
                    {item.period}
                  </span>
                  <span className="timeline-item__status">{item.status}</span>
                </div>

                <h3>{item.program}</h3>
                <p className="timeline-item__school">{item.school}</p>
                <p className="timeline-item__desc">{item.description}</p>

                {item.highlights.length > 0 ? (
                  <ul className="timeline-item__highlights">
                    {item.highlights.map((highlight) => (
                      <li key={highlight}>
                        <CheckCircle2 size={13} aria-hidden="true" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
