import { useInView } from '../hooks/useInView'
import { useLanguage } from '../context/LanguageContext'
import './About.scss'

export default function About() {
  const { t } = useLanguage()
  const expectations = [
    t('about.expect1'),
    t('about.expect2'),
    t('about.expect3'),
    t('about.expect4'),
  ]

  const [heroRef, heroInView] = useInView()
  const [card1Ref, card1InView] = useInView()
  const [card2Ref, card2InView] = useInView()
  const [card3Ref, card3InView] = useInView()
  const [closingRef, closingInView] = useInView()
  const [noteRef, noteInView] = useInView({ rootMargin: '0px 0px -5% 0px' })

  return (
    <div className="page-about">
      <div className="about-bg" aria-hidden="true">
        <div className="about-bg-gradient" />
        <div className="about-bg-blob about-bg-blob-1" />
        <div className="about-bg-blob about-bg-blob-2" />
      </div>
      <div className="page-container page-about-content">
        <header ref={heroRef} className={`about-hero ${heroInView ? 'about-in-view' : ''}`}>
          <h1 className="page-title">{t('about.title')}</h1>
          <p className="about-hero-lead">{t('about.heroLead')}</p>
        </header>

        <div ref={card1Ref} className={`about-card ${card1InView ? 'about-in-view' : ''}`}>
          <h2 className="about-heading">{t('about.whoHeading')}</h2>
          <p className="about-intro">{t('about.intro')}</p>
        </div>

        <div ref={card2Ref} className={`about-card ${card2InView ? 'about-in-view' : ''}`}>
          <h2 className="about-heading">{t('about.howHeading')}</h2>
          <p className="about-text">{t('about.howIntro')}</p>
          <ul className="about-list about-list-bullet">
            <li>{t('about.how1')}</li>
            <li>{t('about.how2')}</li>
            <li>{t('about.how3')}</li>
          </ul>
        </div>

        <div ref={card3Ref} className={`about-card ${card3InView ? 'about-in-view' : ''}`}>
          <h2 className="about-heading">{t('about.expectHeading')}</h2>
          <div className="about-expectations-grid">
            {expectations.map((item) => (
              <div key={item} className="about-expectation-item">
                <span className="about-check" aria-hidden="true">✔</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <p ref={closingRef} className={`about-closing ${closingInView ? 'about-in-view' : ''}`}>
          {t('about.closing')}
        </p>

        <div ref={noteRef} className={`about-note ${noteInView ? 'about-in-view' : ''}`}>
          <p>{t('about.note')}</p>
        </div>
      </div>
    </div>
  )
}
