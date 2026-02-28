import { ArrowRight, Play, Shield, Zap, Globe, Star } from 'lucide-react'
import './Hero.css'

const trustedLogos = ['Google', 'Microsoft', 'Amazon', 'Shopee', 'VNG', 'FPT']

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
            <span>Được tin dùng bởi 10,000+ doanh nghiệp</span>
          </div>

          <h1 className="hero-title">
            Chuyển đổi số{' '}
            <span className="gradient-text">toàn diện</span>
            {' '}cho doanh nghiệp của bạn
          </h1>

          <p className="hero-desc">
            TechVision cung cấp hệ sinh thái phần mềm thông minh — từ quản lý vận hành,
            phân tích dữ liệu đến tự động hóa quy trình — giúp bạn tăng trưởng mạnh mẽ
            và bứt phá trong kỷ nguyên số.
          </p>

          <div className="hero-actions">
            <a href="#pricing" className="btn btn-primary hero-cta">
              Bắt đầu miễn phí
              <ArrowRight size={18} />
            </a>
            <button className="hero-demo-btn">
              <span className="play-icon">
                <Play size={14} fill="white" />
              </span>
              Xem demo
            </button>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <strong>10K+</strong>
              <span>Doanh nghiệp</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <strong>99.9%</strong>
              <span>Uptime SLA</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <strong>4.9★</strong>
              <span>Đánh giá</span>
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
              <span className="card-title-bar">Dashboard Analytics</span>
            </div>
            <div className="card-body">
              <div className="metric-row">
                <div className="metric">
                  <span className="metric-label">Doanh thu tháng</span>
                  <span className="metric-value">₫2.4B</span>
                  <span className="metric-change positive">+18.5%</span>
                </div>
                <div className="metric">
                  <span className="metric-label">Người dùng mới</span>
                  <span className="metric-value">12,840</span>
                  <span className="metric-change positive">+24.2%</span>
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
                        <stop offset="0%" stopColor="#6366f1" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path d="M0,70 C30,65 60,50 90,42 C120,34 150,55 180,30 C210,8 240,25 300,10" fill="none" stroke="#6366f1" strokeWidth="2.5" strokeLinecap="round"/>
                    <path d="M0,70 C30,65 60,50 90,42 C120,34 150,55 180,30 C210,8 240,25 300,10 L300,80 L0,80Z" fill="url(#lineGrad)"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-card float-card float-card-1">
            <Shield size={20} style={{ color: 'var(--success)' }} />
            <div>
              <div className="float-card-title">Bảo mật ISO 27001</div>
              <div className="float-card-sub">Dữ liệu được mã hoá end-to-end</div>
            </div>
          </div>

          <div className="hero-card float-card float-card-2">
            <Zap size={20} style={{ color: 'var(--accent)' }} />
            <div>
              <div className="float-card-title">Triển khai trong 5 phút</div>
              <div className="float-card-sub">Không cần cài đặt phức tạp</div>
            </div>
          </div>

          <div className="hero-card float-card float-card-3">
            <Globe size={20} style={{ color: 'var(--secondary)' }} />
            <div>
              <div className="float-card-title">40+ quốc gia</div>
              <div className="float-card-sub">Hạ tầng toàn cầu</div>
            </div>
          </div>
        </div>
      </div>

      <div className="trusted-section">
        <div className="container">
          <p className="trusted-label">Được tin dùng bởi các công ty hàng đầu</p>
          <div className="trusted-logos">
            {trustedLogos.map(logo => (
              <div key={logo} className="trusted-logo">{logo}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
