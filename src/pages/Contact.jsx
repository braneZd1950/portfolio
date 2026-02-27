import { useInView } from '../hooks/useInView'

export default function Contact() {
  const [heroRef, heroInView] = useInView()
  const [blockRef, blockInView] = useInView()

  const contacts = [
    { label: 'Email', href: 'mailto:tvojemail@gmail.com', text: 'banbranimir@outlook.com' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/branimirban', text: 'linkedin.com/in/branimirban', external: true },
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
          <h1 className="page-title">Kontakt</h1>
          <p className="contact-hero-lead">
            Otvoren sam za freelance projekte, suradnje i nova iskustva u području web developmenta.
            Ako imate ideju ili projekt u planu, slobodno me kontaktirajte.
          </p>
          <p className="contact-hero-note">
            Odgovaram u najkraćem mogućem roku.
          </p>
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
          <p className="contact-footer">
            Dostupan za remote suradnje.
          </p>
        </div>
      </div>
    </div>
  )
}
