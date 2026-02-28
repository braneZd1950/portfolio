import { useInView } from '../hooks/useInView'
import { useLanguage } from '../context/LanguageContext'
import './Projects.scss'

export default function Projects() {
  const { t } = useLanguage()
  const linkeyFeatures = [
    t('projects.feature1'),
    t('projects.feature2'),
    t('projects.feature3'),
    t('projects.feature4'),
    t('projects.feature5'),
  ]
  const linkeyTech = ['React', 'Node.js', 'Express', 'MongoDB']

  const [heroRef, heroInView] = useInView()
  const [projectRef, projectInView] = useInView()

  return (
    <div className="page-projects">
      <div className="projects-bg" aria-hidden="true">
        <div className="projects-bg-gradient" />
        <div className="projects-bg-blob projects-bg-blob-1" />
        <div className="projects-bg-blob projects-bg-blob-2" />
      </div>
      <div className="page-container page-projects-content">
        <header ref={heroRef} className={`projects-hero ${heroInView ? 'about-in-view' : ''}`}>
          <h1 className="page-title">{t('projects.title')}</h1>
          <p className="projects-hero-lead">{t('projects.heroLead')}</p>
        </header>

        <article
          ref={projectRef}
          className={`project-featured ${projectInView ? 'about-in-view' : ''}`}
        >
          <div className="project-featured-header">
            <h2 className="project-featured-title">{t('projects.linkeyTitle')}</h2>
            <p className="project-featured-subtitle">{t('projects.linkeySubtitle')}</p>
            <a
              href="https://link-ey.com"
              target="_blank"
              rel="noopener noreferrer"
              className="project-featured-link"
            >
              link-ey.com
            </a>
          </div>

          <section className="project-featured-section">
            <h3 className="project-featured-heading">{t('projects.aboutHeading')}</h3>
            <p>{t('projects.about1')}</p>
            <p>{t('projects.about2')}</p>
          </section>

          <section className="project-featured-section">
            <h3 className="project-featured-heading">{t('projects.featuresHeading')}</h3>
            <ul className="project-featured-list">
              {linkeyFeatures.map((item) => (
                <li key={item}>
                  <span className="project-featured-check" aria-hidden="true">✔</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="project-featured-section">
            <h3 className="project-featured-heading">{t('projects.techHeading')}</h3>
            <p className="project-featured-tech">{linkeyTech.join(' · ')}</p>
            <p className="project-featured-tech-note">{t('projects.techNote')}</p>
          </section>

          <section className="project-featured-section">
            <h3 className="project-featured-heading">{t('projects.goalHeading')}</h3>
            <p>{t('projects.goalText')}</p>
            <a
              href="https://link-ey.com"
              target="_blank"
              rel="noopener noreferrer"
              className="project-featured-cta"
            >
              {t('projects.ctaApp')}
            </a>
          </section>
        </article>
      </div>
    </div>
  )
}
