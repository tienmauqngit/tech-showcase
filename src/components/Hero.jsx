import { ArrowRight, Play, Shield, Zap, Globe, Star } from 'lucide-react'
import './Hero.css'

const trustedLogos = ['Benh vien', 'So nganh', 'Cong ty dich vu', 'Truong hoc', 'Chuoi ban le', 'SME']

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
            <span>Trien khai thanh cong cho 200+ don vi tai Viet Nam</span>
          </div>

          <h1 className="hero-title">
            Ung dung <span className="gradient-text">AI trong cong viec</span>
            <br />
            de tang toc van hanh va cham soc khach hang
          </h1>

          <p className="hero-desc">
            TechVision cung cap bo giai phap AI cho doanh nghiep: tro ly AI noi bo,
            chatbot tu van tu dong, va Zalo AI cho tiep nhan - huong dan - dat lich,
            dac biet phu hop linh vuc y te, hanh chinh cong va dich vu khach hang.
          </p>

          <div className="hero-actions">
            <a href="#pricing" className="btn btn-primary hero-cta">
              Nhan demo giai phap
              <ArrowRight size={18} />
            </a>
            <button className="hero-demo-btn">
              <span className="play-icon">
                <Play size={14} fill="white" />
              </span>
              Xem demo thuc te
            </button>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <strong>70%</strong>
              <span>Giam tai CSKH</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <strong>24/7</strong>
              <span>Tu van tu dong</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <strong>3-14 ngay</strong>
              <span>Thoi gian trien khai</span>
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
                  <span className="metric-label">Hoi dap da xu ly</span>
                  <span className="metric-value">42,680</span>
                  <span className="metric-change positive">+31%</span>
                </div>
                <div className="metric">
                  <span className="metric-label">Ty le tu dong hoa</span>
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
              <div className="float-card-title">Bao mat du lieu nhay cam</div>
              <div className="float-card-sub">Phu hop quy trinh y te va hanh chinh</div>
            </div>
          </div>

          <div className="hero-card float-card float-card-2">
            <Zap size={20} style={{ color: 'var(--accent)' }} />
            <div>
              <div className="float-card-title">Tu van da kenh</div>
              <div className="float-card-sub">Web, Zalo OA, Facebook, hotline</div>
            </div>
          </div>

          <div className="hero-card float-card float-card-3">
            <Globe size={20} style={{ color: 'var(--secondary)' }} />
            <div>
              <div className="float-card-title">Tieng Viet theo nganh</div>
              <div className="float-card-sub">Kich ban rieng cho y te va hanh chinh</div>
            </div>
          </div>
        </div>
      </div>

      <div className="trusted-section">
        <div className="container">
          <p className="trusted-label">Duoc ap dung cho don vi cong, benh vien va doanh nghiep dich vu</p>
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
