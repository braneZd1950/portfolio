import { useLanguage } from '../context/LanguageContext'
import './Legal.scss'

export default function Terms() {
  const { t } = useLanguage()

  return (
    <div className="page-legal">
      <div className="page-container page-legal-content">
        <h1 className="page-title">{t('legal.terms.title')}</h1>
        <p className="page-legal-updated">{t('legal.terms.updated')}</p>

        <div className="page-section page-legal-section">
          <p>{t('legal.terms.intro')}</p>
        </div>

        <section className="page-section page-legal-section">
          <h2>{t('legal.terms.section1Title')}</h2>
          <p>{t('legal.terms.section1p1')}</p>
          <p>{t('legal.terms.section1p2')}</p>
        </section>

        <section className="page-section page-legal-section">
          <h2>{t('legal.terms.section2Title')}</h2>
          <p>{t('legal.terms.section2p1')}</p>
        </section>

        <section className="page-section page-legal-section">
          <h2>{t('legal.terms.section3Title')}</h2>
          <p>{t('legal.terms.section3p1')}</p>
          <p>{t('legal.terms.section3p2')}</p>
        </section>

        <section className="page-section page-legal-section">
          <h2>{t('legal.terms.section4Title')}</h2>
          <p>{t('legal.terms.section4p1')}</p>
          <p>{t('legal.terms.section4p2')}</p>
        </section>

        <section className="page-section page-legal-section">
          <h2>{t('legal.terms.section5Title')}</h2>
          <p>{t('legal.terms.section5p1')}</p>
          <p>{t('legal.terms.section5p2')}</p>
        </section>

        <section className="page-section page-legal-section">
          <h2>{t('legal.terms.section6Title')}</h2>
          <p>{t('legal.terms.section6p1')}</p>
          <p>{t('legal.terms.section6p2')}</p>
        </section>

        <section className="page-section page-legal-section">
          <h2>{t('legal.terms.section7Title')}</h2>
          <p>{t('legal.terms.section7p1')}</p>
          <p>{t('legal.terms.section7p2')}</p>
        </section>

        <section className="page-section page-legal-section">
          <h2>{t('legal.terms.section8Title')}</h2>
          <p>{t('legal.terms.section8p1')}</p>
        </section>
      </div>
    </div>
  )
}

