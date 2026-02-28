import { useState, useEffect } from 'react'
import { Menu, X, Zap } from 'lucide-react'
import './Header.css'

const navLinks = [
  { label: 'Tính năng', href: '#features' },
  { label: 'Sản phẩm', href: '#products' },
  { label: 'Cách hoạt động', href: '#how-it-works' },
  { label: 'Bảng giá', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="container">
        <nav className="nav">
          <a href="#" className="nav-logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
            <div className="logo-icon">
              <Zap size={20} />
            </div>
            <span className="logo-text">TechVision</span>
          </a>

          <ul className="nav-links">
            {navLinks.map(link => (
              <li key={link.href}>
                <a href={link.href} className="nav-link" onClick={(e) => handleNavClick(e, link.href)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            <a href="#" className="nav-login">Đăng nhập</a>
            <a href="#pricing" className="btn btn-primary nav-cta" onClick={(e) => handleNavClick(e, '#pricing')}>
              Dùng thử miễn phí
            </a>
          </div>

          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          <ul className="mobile-nav-links">
            {navLinks.map(link => (
              <li key={link.href}>
                <a href={link.href} className="mobile-nav-link" onClick={(e) => handleNavClick(e, link.href)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mobile-nav-actions">
            <a href="#" className="btn btn-outline" style={{ width: '100%', justifyContent: 'center' }}>Đăng nhập</a>
            <a href="#pricing" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} onClick={(e) => handleNavClick(e, '#pricing')}>
              Dùng thử miễn phí
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
