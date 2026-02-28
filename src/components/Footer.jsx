import { Zap, Twitter, Linkedin, Github, Youtube, Facebook, Mail, Phone, MapPin, ArrowUp } from 'lucide-react'
import './Footer.css'

const footerLinks = {
  'Sản phẩm': [
    'TechVision Analytics',
    'TechVision Commerce',
    'TechVision HRM',
    'TechVision AI Studio',
    'API & Integrations',
    'Mobile App',
  ],
  'Giải pháp': [
    'Doanh nghiệp vừa và nhỏ',
    'Enterprise',
    'Startup',
    'Thương mại điện tử',
    'Sản xuất',
    'Dịch vụ tài chính',
  ],
  'Tài nguyên': [
    'Tài liệu API',
    'Blog & Insights',
    'Webinar',
    'Case Studies',
    'Cộng đồng',
    'Trung tâm hỗ trợ',
  ],
  'Công ty': [
    'Về chúng tôi',
    'Tuyển dụng',
    'Đối tác',
    'Báo chí',
    'Liên hệ',
    'Chính sách bảo mật',
  ],
}

const socials = [
  { icon: <Twitter size={18} />, label: 'Twitter' },
  { icon: <Linkedin size={18} />, label: 'LinkedIn' },
  { icon: <Github size={18} />, label: 'GitHub' },
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
                <span className="logo-text">TechVision</span>
              </a>
              <p className="footer-tagline">
                Hệ sinh thái phần mềm thông minh cho doanh nghiệp Việt Nam và toàn cầu.
              </p>
              <div className="footer-contacts">
                <div className="footer-contact-item">
                  <Mail size={15} />
                  <span>hello@techvision.vn</span>
                </div>
                <div className="footer-contact-item">
                  <Phone size={15} />
                  <span>1800 1234 (miễn phí)</span>
                </div>
                <div className="footer-contact-item">
                  <MapPin size={15} />
                  <span>Tầng 15, Toà nhà Mipec, Hà Nội</span>
                </div>
              </div>
              <div className="footer-socials">
                {socials.map(s => (
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
                  {links.map(link => (
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
              © 2026 TechVision Software Co., Ltd. Bảo lưu mọi quyền.
            </p>
            <div className="footer-bottom-links">
              <a href="#">Điều khoản dịch vụ</a>
              <a href="#">Chính sách bảo mật</a>
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
