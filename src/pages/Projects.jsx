import { useInView } from '../hooks/useInView'

const linkeyFeatures = [
  'Registracija i prijava korisnika',
  'Kreiranje profila pružatelja usluga',
  'Pretraživanje prema kategorijama',
  'Strukturirana baza podataka',
  'Responzivan dizajn za mobilne uređaje',
]

const linkeyTech = ['React', 'Node.js', 'Express', 'MongoDB']

export default function Projects() {
  const [heroRef, heroInView] = useInView()
  const [projectRef, projectInView] = useInView()

  return (
    <div className="page-projects">
      <div className="projects-bg" aria-hidden="true">
        <div className="projects-bg-gradient" />
        <div className="projects-bg-blob projects-bg-blob-1" />
        <div className="projects-bg-blob projects-bg-blob-2" />
      </div>
      <div className="page-container page-projects-content">
        <header ref={heroRef} className={`projects-hero ${heroInView ? 'about-in-view' : ''}`}>
          <h1 className="page-title">Projekti</h1>
          <p className="projects-hero-lead">
            Izdvojeni projekt
          </p>
        </header>

        <article
          ref={projectRef}
          className={`project-featured ${projectInView ? 'about-in-view' : ''}`}
        >
          <div className="project-featured-header">
            <h2 className="project-featured-title">Link-ey</h2>
            <p className="project-featured-subtitle">
              Platforma za povezivanje korisnika i pružatelja usluga
            </p>
            <a
              href="https://link-ey.com"
              target="_blank"
              rel="noopener noreferrer"
              className="project-featured-link"
            >
              link-ey.com
            </a>
          </div>

          <section className="project-featured-section">
            <h3 className="project-featured-heading">O projektu</h3>
            <p>
              Link-ey je web aplikacija osmišljena za jednostavno povezivanje osoba koje traže usluge s onima koji ih nude. Cilj aplikacije je pojednostaviti pronalazak pouzdanih pružatelja usluga kroz pregledne kategorije i jednostavno korisničko sučelje.
            </p>
            <p>
              Projekt je razvijen kao full-stack aplikacija s naglaskom na funkcionalnost, preglednost i buduću mogućnost nadogradnje.
            </p>
          </section>

          <section className="project-featured-section">
            <h3 className="project-featured-heading">Ključne funkcionalnosti</h3>
            <ul className="project-featured-list">
              {linkeyFeatures.map((item) => (
                <li key={item}>
                  <span className="project-featured-check" aria-hidden="true">✔</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="project-featured-section">
            <h3 className="project-featured-heading">Tehnologije</h3>
            <p className="project-featured-tech">
              {linkeyTech.join(' · ')}
            </p>
            <p className="project-featured-tech-note">
              Aplikacija je razvijena koristeći MERN stack arhitekturu.
            </p>
          </section>

          <section className="project-featured-section">
            <h3 className="project-featured-heading">Cilj projekta</h3>
            <p>
              Cilj razvoja bio je izgraditi funkcionalnu web aplikaciju koja može služiti kao temelj za daljnje širenje i dodavanje novih mogućnosti.
            </p>
            <a
              href="https://link-ey.com"
              target="_blank"
              rel="noopener noreferrer"
              className="project-featured-cta"
            >
              👉 Pogledaj aplikaciju
            </a>
          </section>
        </article>
      </div>
    </div>
  )
}
