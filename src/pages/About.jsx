import { useInView } from '../hooks/useInView'

export default function About() {
  const expectations = [
    'Jasnu komunikaciju',
    'Realna očekivanja i pošten pristup',
    'Fokus na funkcionalnost i stabilnost',
    'Spremnost na prilagodbu projektu',
  ]

  const [heroRef, heroInView] = useInView()
  const [card1Ref, card1InView] = useInView()
  const [card2Ref, card2InView] = useInView()
  const [card3Ref, card3InView] = useInView()
  const [closingRef, closingInView] = useInView()
  const [noteRef, noteInView] = useInView()

  return (
    <div className="page-about">
      <div className="about-bg" aria-hidden="true">
        <div className="about-bg-gradient" />
        <div className="about-bg-blob about-bg-blob-1" />
        <div className="about-bg-blob about-bg-blob-2" />
      </div>
      <div className="page-container page-about-content">
        <header ref={heroRef} className={`about-hero ${heroInView ? 'about-in-view' : ''}`}>
          <h1 className="page-title">O meni</h1>
          <p className="about-hero-lead">Tko sam, kako radim i što možete očekivati od suradnje.</p>
        </header>

        <div ref={card1Ref} className={`about-card ${card1InView ? 'about-in-view' : ''}`}>
          <h2 className="about-heading">Tko sam</h2>
          <p className="about-intro">
            Dolazim iz drugačijeg profesionalnog okruženja, ali sam kroz samostalno učenje i predan rad izgradio znanje u području web developmenta.
            Programiranje mi je postalo više od hobija — postalo je smjer u kojem želim graditi svoju budućnost.
            Specijaliziran sam za razvoj modernih web aplikacija i poslovnih web stranica koristeći React i MERN stack.
          </p>
        </div>

        <div ref={card2Ref} className={`about-card ${card2InView ? 'about-in-view' : ''}`}>
          <h2 className="about-heading">Kako radim</h2>
          <p className="about-text">
            U radu se vodim jednostavnim principima:
          </p>
          <ul className="about-list about-list-bullet">
            <li>čist i organiziran kod, dobra struktura projekta i optimizirane performanse.</li>
            <li>Koristim React i MERN stack (MongoDB, Express, React, Node.js) za izradu skalabilnih web rješenja koja se mogu nadograđivati i razvijati s vremenom.</li>
            <li>Kontinuirano učim i unapređujem svoje znanje kako bih mogao ponuditi moderna i pouzdana rješenja.</li>
          </ul>
        </div>

        <div ref={card3Ref} className={`about-card ${card3InView ? 'about-in-view' : ''}`}>
          <h2 className="about-heading">Što možete očekivati</h2>
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
          Otvoren sam za freelance suradnje, manje i srednje projekte te dugoročnu suradnju na razvoju web aplikacija.
        </p>

        <div ref={noteRef} className={`about-note ${noteInView ? 'about-in-view' : ''}`}>
          <p>
            Volim raditi na projektima koji imaju stvarnu svrhu i pomažu ljudima ili poslovanju. Svaki projekt doživljavam kao priliku za rast – i tehnički i profesionalno.
          </p>
        </div>
      </div>
    </div>
  )
}
