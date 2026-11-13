import { FolderOpen, Sparkles, UserRound } from 'lucide-react'
import Reveal from '../components/Reveal'
import SectionTitle from '../components/SectionTitle'
import { projects } from '../data/projects'
import './Projects.css'

export default function Projects() {
  return (
    <section id="projects" className="section section--tint projects" aria-labelledby="projects-title">
      <div className="container">
        <div className="projects__head">
          <Reveal>
            <SectionTitle
              id="projects-title"
              eyebrow="Things I've built"
              title="Featured Project"
              description="An academic capstone project where I put my skills into practice — from planning and design to development."
            />
          </Reveal>
        </div>

        {projects.length === 0 ? (
          <div className="projects__empty">
            <span className="projects__empty-icon">
              <FolderOpen size={26} aria-hidden="true" />
            </span>
            <h3>Projects coming soon</h3>
            <p>
              I&apos;m currently working on my capstone project. New work will be shared here as it
              becomes available.
            </p>
          </div>
        ) : (
          <div className="projects__grid">
            {projects.map((project, index) => (
              <Reveal
                as="article"
                className={`project-card ${project.featured ? 'project-card--featured' : ''}`.trim()}
                key={project.id}
                delay={index * 80}
              >
                <div className="project-card__media">
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    width="900"
                    height="600"
                    loading="lazy"
                  />
                  <div className="project-card__badges">
                    <span className="project-card__status">
                      <span className="status-dot" aria-hidden="true" />
                      {project.status}
                    </span>
                    {project.featured ? (
                      <span className="project-card__featured">
                        <Sparkles size={12} aria-hidden="true" />
                        Featured
                      </span>
                    ) : null}
                  </div>
                </div>

                <div className="project-card__body">
                  <div className="project-card__meta">
                    <span>{project.year}</span>
                    <span className="project-card__meta-dot" aria-hidden="true" />
                    <span>{project.focus.length} focus areas</span>
                  </div>

                  <h3>{project.title}</h3>
                  {project.subtitle ? (
                    <p className="project-card__subtitle">{project.subtitle}</p>
                  ) : null}
                  <p className="project-card__role">
                    <UserRound size={14} aria-hidden="true" />
                    {project.role}
                  </p>
                  <p className="project-card__description">{project.description}</p>

                  <div className="project-card__focus">
                    <span className="project-card__focus-label">Project focus</span>
                    <ul className="project-card__tags" aria-label="Project focus">
                      {project.focus.map((item) => (
                        <li className="tag" key={item}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
