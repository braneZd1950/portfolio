import { Link } from 'react-router-dom'

export default function Home() {
  const offers = [
    {
      icon: '⚡',
      title: 'Brzina i performanse',
      description: 'Web stranice i aplikacije optimizirane za brzo učitavanje i ugodno korisničko iskustvo.',
    },
    {
      icon: '📱',
      title: 'Responzivni dizajn',
      description: 'Prilagođeno za mobitele, tablete i računala.',
    },
    {
      icon: '🔧',
      title: 'Moderna tehnologija',
      description: 'Razvoj u Reactu i MERN stacku za fleksibilnost i buduće nadogradnje.',
    },
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
        {/* 1. HERO SEKCIJA */}
        <section className="hero">
          <h1 className="hero-title">
            Pozdrav, ja sam Branimir Ban.
          </h1>
          <p className="hero-lead">
            Razvijam moderne web stranice i web aplikacije koristeći React i MERN stack, s fokusom na brzinu, funkcionalnost i jednostavno korisničko iskustvo.
          </p>
          <div className="hero-ctas">
            <Link to="/projects" className="hero-cta">
              👉 Pogledaj projekte
            </Link>
            <Link to="/contact" className="hero-cta hero-cta-secondary">
              👉 Kontaktiraj me
            </Link>
          </div>
        </section>

        {/* 2. KRATKO O MENI */}
        <section className="home-about page-section">
          <h2 className="home-section-title">Tko sam i što radim</h2>
          <p className="home-about-lead">
            Web developmentom se bavim s ciljem stvaranja jednostavnih, brzih i pouzdanih digitalnih rješenja. Fokusiran sam na čisti kod, dobre performanse i projekte koji mogu rasti s vremenom.
          </p>
          <p className="home-about-tech">
            Radim s tehnologijama poput:
          </p>
          <p className="home-about-stack">
            React • Node.js • MongoDB • Express • REST API
          </p>
          <p className="home-about-closing">
            Otvoren sam za manje i srednje projekte te suradnje u razvoju web aplikacija.
          </p>
        </section>

        {/* 3. ŠTO NUDIM */}
        <section className="home-offer page-section">
          <h2 className="home-section-title">Što nudim</h2>
          <div className="home-offer-grid">
            {offers.map((item) => (
              <div key={item.title} className="home-offer-card">
                <span className="home-offer-icon" aria-hidden="true">{item.icon}</span>
                <h3 className="home-offer-title">{item.title}</h3>
                <p className="home-offer-desc">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. CTA PRIJE PROJEKATA */}
        <section className="home-cta page-section">
          <p className="home-cta-text">
            Imate ideju ili projekt u planu?<br />
            Slobodno se javite — rado ću saslušati i predložiti rješenje.
          </p>
          <Link to="/contact" className="hero-cta">
            👉 Kontaktiraj me
          </Link>
        </section>
      </div>
    </div>
  )
}
