import { Zap, Linkedin, Youtube, Facebook, Mail, Phone, MapPin, ArrowUp } from 'lucide-react'
import './Footer.css'

const footerLinks = {
  'Giai phap': [
    'AI trong cong viec',
    'Chatbot doanh nghiep',
    'Zalo AI tu van',
    'Tu dong hoa tiep nhan',
    'Bao cao van hanh',
  ],
  'Linh vuc': [
    'Y te',
    'Hanh chinh cong',
    'Giao duc',
    'Tai chinh - bao hiem',
    'Ban le - dich vu',
  ],
  'Tai nguyen': [
    'Tai lieu san pham',
    'Case study',
    'Huong dan trien khai',
    'Cau hoi thuong gap',
  ],
  'Cong ty': [
    'Ve chung toi',
    'Lien he',
    'Doi tac',
    'Chinh sach bao mat',
  ],
}

const socials = [
  { icon: <Linkedin size={18} />, label: 'LinkedIn' },
  { icon: <Youtube size={18} />, label: 'YouTube' },
  { icon: <Facebook size={18} />, label: 'Facebook' },
]

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <a href="#" className="footer-logo" onClick={(e) => { e.preventDefault(); scrollToTop() }}>
                <div className="logo-icon">
                  <Zap size={20} />
                </div>
                <span className="logo-text">TechVision AI</span>
              </a>
              <p className="footer-tagline">
                Nen tang cong nghe giup to chuc ung dung AI vao cong viec va cham soc khach hang.
              </p>
              <div className="footer-contacts">
                <div className="footer-contact-item">
                  <Mail size={15} />
                  <span>hello@techvision.vn</span>
                </div>
                <div className="footer-contact-item">
                  <Phone size={15} />
                  <span>1900 88 66</span>
                </div>
                <div className="footer-contact-item">
                  <MapPin size={15} />
                  <span>Da Nang - Ha Noi - TP HCM</span>
                </div>
              </div>
              <div className="footer-socials">
                {socials.map((s) => (
                  <a key={s.label} href="#" className="social-btn" aria-label={s.label}>
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title} className="footer-col">
                <h4 className="footer-col-title">{title}</h4>
                <ul className="footer-col-links">
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-inner">
            <p className="copyright">
              © 2026 TechVision AI Solutions. All rights reserved.
            </p>
            <div className="footer-bottom-links">
              <a href="#">Dieu khoan dich vu</a>
              <a href="#">Chinh sach bao mat</a>
              <a href="#">Cookie Policy</a>
            </div>
            <button className="scroll-top" onClick={scrollToTop} aria-label="Scroll to top">
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
