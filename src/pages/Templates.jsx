import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import './Templates.scss'

export default function Templates() {
  const { t } = useLanguage()

  const cards = [
    { key: 'saas' },
    { key: 'biz' },
    { key: 'personal' },
    { key: 'simple' },
    { key: 'product' },
    { key: 'event' },
  ]

  return (
    <div className="page-templates">
      <div className="templates-bg" aria-hidden="true">
        <div className="templates-bg-gradient" />
        <div className="templates-bg-blob templates-bg-blob-1" />
        <div className="templates-bg-blob templates-bg-blob-2" />
      </div>
      <div className="page-container page-templates-content">
        <header className="templates-hero">
          <h1 className="page-title">{t('templates.title')}</h1>
          <p className="templates-hero-lead">{t('templates.heroLead')}</p>
          <p className="templates-hero-intro">{t('templates.intro')}</p>
        </header>

        <section className="page-section">
          <h2 className="templates-section-title">{t('templates.listHeading')}</h2>
          <div className="templates-grid">
            {cards.map(({ key }) => (
              <article key={key} className={`template-card template-card--${key}`}>
                <div className="template-preview" aria-hidden="true">
                  <div className="template-preview__chrome">
                    <span className="template-preview__dot" />
                    <span className="template-preview__dot" />
                    <span className="template-preview__dot" />
                  </div>
                  <div className="template-preview__screen">
                    <div className="template-preview__hero" />
                    <div className="template-preview__body">
                      <div className="template-preview__block template-preview__block--1" />
                      <div className="template-preview__block template-preview__block--2" />
                      <div className="template-preview__block template-preview__block--3" />
                    </div>
                    <div className="template-preview__cta" />
                  </div>
                </div>
                <h3 className="template-card-title">{t(`templates.${key}Title`)}</h3>
                <p className="template-card-desc">{t(`templates.${key}Desc`)}</p>
                <p className="template-card-best-for">{t(`templates.${key}BestFor`)}</p>
                <p className="template-card-sections">{t(`templates.${key}Sections`)}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="page-section templates-bottom">
          <p className="templates-note">{t('templates.bottomNote')}</p>
          <div className="templates-ctas">
            <Link to="/contact" className="hero-cta">
              {t('templates.ctaPrimary')}
            </Link>
            <Link to="/contact" className="hero-cta hero-cta-secondary">
              {t('templates.ctaSecondary')}
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
