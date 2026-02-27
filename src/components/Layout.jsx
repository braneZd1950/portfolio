import { Link, useLocation } from 'react-router-dom'

export default function Layout({ children }) {
  const location = useLocation()

  const navLinks = [
    { to: '/', label: 'Početna' },
    { to: '/about', label: 'O meni' },
    { to: '/projects', label: 'Projekti' },
    { to: '/contact', label: 'Kontakt' },
  ]

  return (
    <>
      <nav className="layout-nav">
        <div className="nav-inner">
          <Link to="/" className="nav-logo">
            Portfolio
          </Link>
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
          </div>
        </div>
      </nav>
      <main className="layout-main">{children}</main>
    </>
  )
}
