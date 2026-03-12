import { Link, useLocation } from 'react-router-dom'
import banlogicLogo from '../assets/favicons/banlogic_logo.png'
import { useLanguage } from '../context/LanguageContext'

export default function Layout({ children }) {
  const location = useLocation()
  const { lang, setLang, t } = useLanguage()

  const navLinks = [
    { to: '/', label: t('nav.home') },
    { to: '/about', label: t('nav.about') },
    { to: '/projects', label: t('nav.projects') },
    { to: '/templates', label: t('nav.templates') },
    { to: '/contact', label: t('nav.contact') },
  ]

  return (
    <>
      <nav className="layout-nav">
        <div className="nav-inner">
          <div className="nav-logo-wrap">
            <Link to="/" className="nav-logo">
              <img src={banlogicLogo} alt="banlogic logo" className="nav-logo-mark" />
              <span className="nav-logo-text">banlogic</span>
            </Link>
            <div className="nav-lang nav-lang-mobile" aria-label={t('nav.ariaLang')}>
              <button
                type="button"
                className={`nav-lang-btn ${lang === 'hr' ? 'active' : ''}`}
                onClick={() => setLang('hr')}
                aria-pressed={lang === 'hr'}
              >
                HR
              </button>
              <button
                type="button"
                className={`nav-lang-btn ${lang === 'en' ? 'active' : ''}`}
                onClick={() => setLang('en')}
                aria-pressed={lang === 'en'}
              >
                EN
              </button>
            </div>
          </div>
          <div className="nav-links">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`nav-link ${location.pathname === to ? 'active' : ''}`}
              >
                {label}
              </Link>
            ))}
            <div className="nav-lang nav-lang-desktop" aria-label={t('nav.ariaLang')}>
              <button
                type="button"
                className={`nav-lang-btn ${lang === 'hr' ? 'active' : ''}`}
                onClick={() => setLang('hr')}
                aria-pressed={lang === 'hr'}
              >
                HR
              </button>
              <button
                type="button"
                className={`nav-lang-btn ${lang === 'en' ? 'active' : ''}`}
                onClick={() => setLang('en')}
                aria-pressed={lang === 'en'}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </nav>
      <main className="layout-main">{children}</main>
      <footer className="layout-footer">
        <div className="page-container layout-footer-inner">
          <div className="layout-footer-left">
            <span className="layout-footer-brand">banlogic</span>
            <span className="layout-footer-copy">© {new Date().getFullYear()} Branimir Ban</span>
          </div>
          <div className="layout-footer-right">
            <a href="mailto:banbranimir@outlook.com">banbranimir@outlook.com</a>
            <a
              href="https://www.linkedin.com/in/branimirban"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div className="page-container layout-footer-legal">
          <div className="layout-footer-legal-links">
            <Link to="/terms" className="layout-footer-legal-link">
              {t('footer.terms')}
            </Link>
            <span className="layout-footer-legal-separator">·</span>
            <Link to="/privacy" className="layout-footer-legal-link">
              {t('footer.privacy')}
            </Link>
          </div>
        </div>
      </footer>
    </>
  )
}
