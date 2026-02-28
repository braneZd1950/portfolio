import { useInView } from '../hooks/useInView'
import { useLanguage } from '../context/LanguageContext'
import './Contact.scss'

export default function Contact() {
  const { t } = useLanguage()
  const [heroRef, heroInView] = useInView()
  const [blockRef, blockInView] = useInView()

  const contacts = [
    { label: 'Email', href: 'mailto:banbranimir@outlook.com', text: 'banbranimir@outlook.com' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/branimirban', text: 'linkedin.com/in/branimirban', external: true },
    { label: 'GitHub', href: 'https://github.com/braneZd1950', text: 'github.com/braneZd1950', external: true },
  ]

  return (
    <div className="page-contact">
      <div className="contact-bg" aria-hidden="true">
        <div className="contact-bg-gradient" />
        <div className="contact-bg-blob contact-bg-blob-1" />
        <div className="contact-bg-blob contact-bg-blob-2" />
      </div>
      <div className="page-container page-contact-content">
        <header ref={heroRef} className={`contact-hero ${heroInView ? 'about-in-view' : ''}`}>
          <h1 className="page-title">{t('contact.title')}</h1>
          <p className="contact-hero-lead">{t('contact.heroLead')}</p>
          <p className="contact-hero-note">{t('contact.heroNote')}</p>
        </header>

        <div ref={blockRef} className={`contact-block ${blockInView ? 'about-in-view' : ''}`}>
          <ul className="contact-list">
            {contacts.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  className="contact-link"
                >
                  <span className="contact-label">{item.label}</span>
                  <span className="contact-value">{item.text}</span>
                </a>
              </li>
            ))}
          </ul>
          <p className="contact-footer">{t('contact.footer')}</p>
        </div>
      </div>
    </div>
  )
}
