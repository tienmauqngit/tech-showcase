import { Zap, Linkedin, Youtube, Facebook, Mail, Phone, MapPin, ArrowUp } from 'lucide-react'
import './Footer.css'

const footerLinks = {
  'Giải pháp': [
    'AI trong công việc',
    'Chatbot doanh nghiệp',
    'Zalo AI tư vấn',
    'Tự động hóa tiếp nhận',
    'Báo cáo vận hành',
  ],
  'Lĩnh vực': [
    'Y tế',
    'Hành chính công',
    'Giáo dục',
    'Tài chính - bảo hiểm',
    'Bán lẻ - dịch vụ',
  ],
  'Tài nguyên': [
    'Tài liệu sản phẩm',
    'Case study',
    'Hướng dẫn triển khai',
    'Câu hỏi thường gặp',
  ],
  'Công ty': [
    'Về chúng tôi',
    'Liên hệ',
    'Đối tác',
    'Chính sách bảo mật',
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
                Nền tảng công nghệ giúp tổ chức ứng dụng AI vào công việc và chăm sóc khách hàng.
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
                  <span>Đà Nẵng - Hà Nội - TP HCM</span>
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
