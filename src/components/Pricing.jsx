import { useState } from 'react'
import { Check, X, Zap, Building2, Rocket, Tag } from 'lucide-react'
import './Pricing.css'

const plans = [
  {
    name: 'Starter',
    icon: <Zap size={22} />,
    color: '#6366f1',
    monthlyPrice: 0,
    yearlyPrice: 0,
    desc: 'Hoàn hảo để bắt đầu và thử nghiệm',
    cta: 'Bắt đầu miễn phí',
    ctaStyle: 'outline',
    features: [
      { text: '3 người dùng', ok: true },
      { text: '5 dự án', ok: true },
      { text: '10GB lưu trữ', ok: true },
      { text: 'Analytics cơ bản', ok: true },
      { text: 'API access', ok: true },
      { text: 'Integrations', ok: false },
      { text: 'AI Features', ok: false },
      { text: 'Hỗ trợ 24/7', ok: false },
      { text: 'Custom domain', ok: false },
    ],
  },
  {
    name: 'Professional',
    icon: <Rocket size={22} />,
    color: '#6366f1',
    monthlyPrice: 1490000,
    yearlyPrice: 1190000,
    desc: 'Dành cho team đang tăng trưởng nhanh',
    cta: 'Dùng thử 14 ngày',
    ctaStyle: 'primary',
    popular: true,
    features: [
      { text: '25 người dùng', ok: true },
      { text: 'Không giới hạn dự án', ok: true },
      { text: '100GB lưu trữ', ok: true },
      { text: 'Analytics nâng cao', ok: true },
      { text: 'API access đầy đủ', ok: true },
      { text: '500+ Integrations', ok: true },
      { text: 'AI Features (giới hạn)', ok: true },
      { text: 'Hỗ trợ 24/7 priority', ok: true },
      { text: 'Custom domain', ok: false },
    ],
  },
  {
    name: 'Enterprise',
    icon: <Building2 size={22} />,
    color: '#10b981',
    monthlyPrice: null,
    yearlyPrice: null,
    desc: 'Giải pháp tùy chỉnh cho doanh nghiệp lớn',
    cta: 'Liên hệ tư vấn',
    ctaStyle: 'dark',
    features: [
      { text: 'Không giới hạn người dùng', ok: true },
      { text: 'Không giới hạn dự án', ok: true },
      { text: 'Lưu trữ không giới hạn', ok: true },
      { text: 'Analytics toàn diện + BI', ok: true },
      { text: 'API & Webhooks không giới hạn', ok: true },
      { text: 'Tất cả Integrations', ok: true },
      { text: 'AI Features không giới hạn', ok: true },
      { text: 'Dedicated support manager', ok: true },
      { text: 'Custom domain & SSO', ok: true },
    ],
  },
]

function formatPrice(p) {
  if (p === null) return 'Tùy chỉnh'
  if (p === 0) return 'Miễn phí'
  return `₫${(p / 1000).toFixed(0)}K`
}

export default function Pricing() {
  const [yearly, setYearly] = useState(false)

  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <div className="pricing-header">
          <div className="section-tag">
            <Tag size={14} />
            Bảng giá
          </div>
          <h2 className="section-title">
            Giá cả minh bạch,<br />
            <span className="gradient-text">không phát sinh ẩn phí</span>
          </h2>
          <p className="section-subtitle">
            Chọn gói phù hợp với quy mô doanh nghiệp. Nâng cấp hoặc hủy bất kỳ lúc nào.
          </p>

          <div className="billing-toggle">
            <span className={!yearly ? 'active' : ''}>Thanh toán tháng</span>
            <button
              className={`toggle-btn ${yearly ? 'on' : ''}`}
              onClick={() => setYearly(v => !v)}
              aria-label="Toggle yearly billing"
            >
              <span className="toggle-knob" />
            </button>
            <span className={yearly ? 'active' : ''}>
              Thanh toán năm
              <span className="save-badge">Tiết kiệm 20%</span>
            </span>
          </div>
        </div>

        <div className="pricing-grid">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`pricing-card ${plan.popular ? 'popular' : ''}`}
            >
              {plan.popular && (
                <div className="popular-badge">
                  <Zap size={13} fill="white" /> Phổ biến nhất
                </div>
              )}

              <div className="plan-header">
                <div className="plan-icon" style={{ background: `${plan.color}15`, color: plan.color }}>
                  {plan.icon}
                </div>
                <div className="plan-name">{plan.name}</div>
                <div className="plan-price">
                  <span className="price-amount">
                    {formatPrice(yearly ? plan.yearlyPrice : plan.monthlyPrice)}
                  </span>
                  {plan.monthlyPrice !== null && plan.monthlyPrice > 0 && (
                    <span className="price-period">/tháng</span>
                  )}
                </div>
                {yearly && plan.monthlyPrice > 0 && (
                  <div className="price-yearly-note">
                    Thanh toán ₫{((plan.yearlyPrice * 12) / 1000000).toFixed(1)}M/năm
                  </div>
                )}
                <p className="plan-desc">{plan.desc}</p>
              </div>

              <button
                className={`plan-cta btn ${plan.ctaStyle === 'primary' ? 'btn-primary' : plan.ctaStyle === 'dark' ? 'plan-cta-dark' : 'btn-outline'}`}
              >
                {plan.cta}
              </button>

              <ul className="plan-features">
                {plan.features.map((f, fi) => (
                  <li key={fi} className={f.ok ? '' : 'disabled'}>
                    {f.ok
                      ? <Check size={16} style={{ color: plan.color, flexShrink: 0 }} />
                      : <X size={16} style={{ color: 'var(--gray-light)', flexShrink: 0 }} />
                    }
                    <span>{f.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pricing-footer">
          <p>Tất cả các gói đều bao gồm SSL miễn phí, backup tự động hàng ngày, và SLA uptime 99.9%</p>
          <p>Có câu hỏi về giá? <a href="#faq" style={{ color: 'var(--primary)', fontWeight: 600 }}>Xem FAQ</a> hoặc <a href="#" style={{ color: 'var(--primary)', fontWeight: 600 }}>liên hệ chúng tôi</a></p>
        </div>
      </div>
    </section>
  )
}
