import { useLanguage } from '../context/LanguageContext'
import './Legal.scss'

export default function Privacy() {
  const { t } = useLanguage()

  return (
    <div className="page-legal">
      <div className="page-container page-legal-content">
        <h1 className="page-title">{t('legal.privacy.title')}</h1>
        <p className="page-legal-updated">{t('legal.privacy.updated')}</p>

        <div className="page-section page-legal-section">
          <p>{t('legal.privacy.disclaimer')}</p>
        </div>

        <section className="page-section page-legal-section">
          <h2>{t('legal.privacy.section1Title')}</h2>
          <p>{t('legal.privacy.section1p1')}</p>
          <p>{t('legal.privacy.section1p2')}</p>
        </section>

        <section className="page-section page-legal-section">
          <h2>{t('legal.privacy.section2Title')}</h2>
          <p>{t('legal.privacy.section2p1')}</p>
          <ul className="page-legal-list">
            <li>{t('legal.privacy.section2p1List1')}</li>
            <li>{t('legal.privacy.section2p1List2')}</li>
            <li>{t('legal.privacy.section2p1List3')}</li>
          </ul>
          <p>{t('legal.privacy.section2p2')}</p>
        </section>

        <section className="page-section page-legal-section">
          <h2>{t('legal.privacy.section3Title')}</h2>
          <p>{t('legal.privacy.section3p1')}</p>
          <p>{t('legal.privacy.section3p2')}</p>
          <p>{t('legal.privacy.section3p3')}</p>
        </section>

        <section className="page-section page-legal-section">
          <h2>{t('legal.privacy.section4Title')}</h2>
          <p>{t('legal.privacy.section4p1')}</p>
          <p>{t('legal.privacy.section4p2')}</p>
        </section>

        <section className="page-section page-legal-section">
          <h2>{t('legal.privacy.section5Title')}</h2>
          <p>{t('legal.privacy.section5p1')}</p>
          <p>{t('legal.privacy.section5p2')}</p>
          <p>{t('legal.privacy.section5p3')}</p>
        </section>

        <section className="page-section page-legal-section">
          <h2>{t('legal.privacy.section6Title')}</h2>
          <p>{t('legal.privacy.section6p1')}</p>
          <p>{t('legal.privacy.section6p2')}</p>
        </section>

        <section className="page-section page-legal-section">
          <h2>{t('legal.privacy.section7Title')}</h2>
          <p>{t('legal.privacy.section7p1')}</p>
          <ul className="page-legal-list">
            <li>{t('legal.privacy.section7p1List1')}</li>
            <li>{t('legal.privacy.section7p1List2')}</li>
            <li>{t('legal.privacy.section7p1List3')}</li>
            <li>{t('legal.privacy.section7p1List4')}</li>
            <li>{t('legal.privacy.section7p1List5')}</li>
            <li>{t('legal.privacy.section7p1List6')}</li>
          </ul>
          <p>{t('legal.privacy.section7p2')}</p>
        </section>

        <section className="page-section page-legal-section">
          <h2>{t('legal.privacy.section8Title')}</h2>
          <p>{t('legal.privacy.section8p1')}</p>
          <p>{t('legal.privacy.section8p2')}</p>
        </section>

        <section className="page-section page-legal-section">
          <h2>{t('legal.privacy.section9Title')}</h2>
          <p>{t('legal.privacy.section9p1')}</p>
        </section>

        <section className="page-section page-legal-section">
          <h2>{t('legal.privacy.section10Title')}</h2>
          <p>{t('legal.privacy.section10p1')}</p>
          <p>{t('legal.privacy.section10p2')}</p>
        </section>
      </div>
    </div>
  )
}

