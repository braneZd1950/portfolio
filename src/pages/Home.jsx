import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import './Home.scss'

export default function Home() {
  const { t } = useLanguage()
  const offers = [
    { icon: '⚡', titleKey: 'home.offer1Title', descKey: 'home.offer1Desc' },
    { icon: '📱', titleKey: 'home.offer2Title', descKey: 'home.offer2Desc' },
    { icon: '🔧', titleKey: 'home.offer3Title', descKey: 'home.offer3Desc' },
  ]

  return (
    <div className="page-home">
      <div className="home-bg" aria-hidden="true">
        <div className="home-bg-gradient" />
        <div className="home-bg-blob home-bg-blob-1" />
        <div className="home-bg-blob home-bg-blob-2" />
        <div className="home-bg-blob home-bg-blob-3" />
      </div>
      <div className="page-container page-home-content">
        <section className="hero">
          <h1 className="hero-title">{t('home.heroTitle')}</h1>
          <p className="hero-lead">{t('home.heroLead')}</p>
          <div className="hero-ctas">
            <Link to="/projects" className="hero-cta">{t('home.ctaProjects')}</Link>
            <Link to="/contact" className="hero-cta hero-cta-secondary">{t('home.ctaContact')}</Link>
          </div>
        </section>

        <section className="home-about page-section">
          <h2 className="home-section-title">{t('home.sectionWho')}</h2>
          <p className="home-about-lead">{t('home.aboutLead')}</p>
          <p className="home-about-tech">{t('home.aboutTech')}</p>
          <p className="home-about-stack">{t('home.aboutStack')}</p>
          <p className="home-about-closing">{t('home.aboutClosing')}</p>
        </section>

        <section className="home-offer page-section">
          <h2 className="home-section-title">{t('home.sectionOffer')}</h2>
          <div className="home-offer-grid">
            {offers.map((item) => (
              <div key={item.titleKey} className="home-offer-card">
                <span className="home-offer-icon" aria-hidden="true">{item.icon}</span>
                <h3 className="home-offer-title">{t(item.titleKey)}</h3>
                <p className="home-offer-desc">{t(item.descKey)}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="home-cta page-section">
          <p className="home-cta-text">
            {t('home.ctaText')}<br />
            {t('home.ctaText2')}
          </p>
          <Link to="/contact" className="hero-cta">{t('home.ctaContact')}</Link>
        </section>
      </div>
    </div>
  )
}
