import { ArrowRight, Play, Shield, Zap, Globe, Star } from 'lucide-react'
import './Hero.css'

const trustedLogos = ['Bệnh viện', 'Sở ngành', 'Công ty dịch vụ', 'Trường học', 'Chuỗi bán lẻ', 'SME']

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />
        <div className="hero-grid" />
      </div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <Star size={14} fill="currentColor" />
            <span>Triển khai thành công cho 200+ đơn vị tại Việt Nam</span>
          </div>

          <h1 className="hero-title">
            Ứng dụng <span className="gradient-text">AI trong công việc</span>
            <br />
            để tăng tốc vận hành và chăm sóc khách hàng
          </h1>

          <p className="hero-desc">
            TechVision cung cấp bộ giải pháp AI cho doanh nghiệp: trợ lý AI nội bộ,
            chatbot tư vấn tự động, và Zalo AI cho tiếp nhận - hướng dẫn - đặt lịch,
            đặc biệt phù hợp lĩnh vực y tế, hành chính công và dịch vụ khách hàng.
          </p>

          <div className="hero-actions">
            <a href="#pricing" className="btn btn-primary hero-cta">
              Nhận demo giải pháp
              <ArrowRight size={18} />
            </a>
            <button className="hero-demo-btn">
              <span className="play-icon">
                <Play size={14} fill="white" />
              </span>
              Xem demo thực tế
            </button>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <strong>70%</strong>
              <span>Giảm tải CSKH</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <strong>24/7</strong>
              <span>Tư vấn tự động</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <strong>3-14 ngày</strong>
              <span>Thời gian triển khai</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-card main-card">
            <div className="card-header">
              <div className="card-dots">
                <span className="dot dot-red" />
                <span className="dot dot-yellow" />
                <span className="dot dot-green" />
              </div>
              <span className="card-title-bar">AI Operation Center</span>
            </div>
            <div className="card-body">
              <div className="metric-row">
                <div className="metric">
                  <span className="metric-label">Hỏi đáp đã xử lý</span>
                  <span className="metric-value">42,680</span>
                  <span className="metric-change positive">+31%</span>
                </div>
                <div className="metric">
                  <span className="metric-label">Tỷ lệ tự động hóa</span>
                  <span className="metric-value">78%</span>
                  <span className="metric-change positive">+12%</span>
                </div>
              </div>
              <div className="chart-preview">
                <div className="chart-bars">
                  {[40, 65, 45, 80, 55, 90, 70, 95, 60, 85, 75, 100].map((h, i) => (
                    <div key={i} className="chart-bar" style={{ height: `${h}%`, animationDelay: `${i * 0.05}s` }} />
                  ))}
                </div>
                <div className="chart-line">
                  <svg viewBox="0 0 300 80" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="lineGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#0f766e" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#0f766e" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path d="M0,70 C30,65 60,50 90,42 C120,34 150,55 180,30 C210,8 240,25 300,10" fill="none" stroke="#0f766e" strokeWidth="2.5" strokeLinecap="round"/>
                    <path d="M0,70 C30,65 60,50 90,42 C120,34 150,55 180,30 C210,8 240,25 300,10 L300,80 L0,80Z" fill="url(#lineGrad)"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-card float-card float-card-1">
            <Shield size={20} style={{ color: 'var(--success)' }} />
            <div>
              <div className="float-card-title">Bảo mật dữ liệu nhạy cảm</div>
              <div className="float-card-sub">Phù hợp quy trình y tế và hành chính</div>
            </div>
          </div>

          <div className="hero-card float-card float-card-2">
            <Zap size={20} style={{ color: 'var(--accent)' }} />
            <div>
              <div className="float-card-title">Tư vấn đa kênh</div>
              <div className="float-card-sub">Web, Zalo OA, Facebook, hotline</div>
            </div>
          </div>

          <div className="hero-card float-card float-card-3">
            <Globe size={20} style={{ color: 'var(--secondary)' }} />
            <div>
              <div className="float-card-title">Tiếng Việt theo ngành</div>
              <div className="float-card-sub">Kịch bản riêng cho y tế và hành chính</div>
            </div>
          </div>
        </div>
      </div>

      <div className="trusted-section">
        <div className="container">
          <p className="trusted-label">Được áp dụng cho đơn vị công, bệnh viện và doanh nghiệp dịch vụ</p>
          <div className="trusted-logos">
            {trustedLogos.map((logo) => (
              <div key={logo} className="trusted-logo">{logo}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
