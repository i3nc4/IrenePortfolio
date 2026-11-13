import Reveal from '../components/Reveal'
import SectionTitle from '../components/SectionTitle'
import { skills } from '../data/skills'
import './Skills.css'

/** Two identical lists make the -50% loop seamless. */
const TRACK_COPIES = [0, 1]
/** Repeat the set so the track stays full on wide screens. */
const LIST_SETS = [0, 1]

function Chip({ skill, duplicate = false }) {
  const Icon = skill.icon

  return (
    <li className={`skill-chip ${duplicate ? 'skill-chip--dup' : ''}`.trim()}>
      <span className="skill-chip__icon">
        <Icon aria-hidden="true" />
      </span>
      <span className="skill-chip__name">{skill.name}</span>
    </li>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="section section--tint skills" aria-labelledby="skills-title">
      <div className="container">
        <Reveal>
          <SectionTitle
            id="skills-title"
            eyebrow="What I work with"
            title="Skills & Technologies"
            description="Technologies and tools I have encountered and practiced throughout my academic journey."
          />
        </Reveal>
      </div>

      <Reveal className="skills__carousel" delay={80}>
        <div className="skills-marquee">
          <div className="skills-marquee__track" aria-hidden="true">
            {TRACK_COPIES.map((copy) => (
              <ul className="skills-marquee__list" key={copy}>
                {LIST_SETS.map((set) =>
                  skills.map((skill) => (
                    <Chip
                      skill={skill}
                      duplicate={set > 0}
                      key={`${copy}-${set}-${skill.name}`}
                    />
                  )),
                )}
              </ul>
            ))}
          </div>
        </div>

        <ul className="sr-only">
          {skills.map((skill) => (
            <li key={skill.name}>{skill.name}</li>
          ))}
        </ul>
      </Reveal>
    </section>
  )
}
