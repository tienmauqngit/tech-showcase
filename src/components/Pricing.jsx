import { useState } from 'react'
import { Check, X, Zap, Building2, Rocket, Tag } from 'lucide-react'
import './Pricing.css'

const plans = [
  {
    name: 'Basic',
    icon: <Zap size={22} />,
    color: '#0f766e',
    monthlyPrice: 990000,
    yearlyPrice: 790000,
    desc: 'Cho doanh nghiệp nhỏ bắt đầu chatbot và tư vấn tự động',
    cta: 'Đăng ký gói Basic',
    ctaStyle: 'outline',
    features: [
      { text: '1 kênh chatbot website', ok: true },
      { text: '50 kịch bản hỏi đáp', ok: true },
      { text: '2 tài khoản quản trị', ok: true },
      { text: 'Báo cáo cơ bản', ok: true },
      { text: 'Tích hợp Zalo OA', ok: false },
      { text: 'Kho tri thức nâng cao', ok: false },
      { text: 'SLA riêng', ok: false },
    ],
  },
  {
    name: 'Professional',
    icon: <Rocket size={22} />,
    color: '#0284c7',
    monthlyPrice: 3490000,
    yearlyPrice: 2890000,
    desc: 'Cho đơn vị cần đa kênh: web, Zalo AI, CSKH và báo cáo vận hành',
    cta: 'Nhận demo Professional',
    ctaStyle: 'primary',
    popular: true,
    features: [
      { text: 'Đa kênh: web + Zalo OA + fanpage', ok: true },
      { text: 'Không giới hạn kịch bản', ok: true },
      { text: 'Kho tri thức theo phòng ban', ok: true },
      { text: 'Phân luồng tới nhân viên trực', ok: true },
      { text: 'Dashboard KPI theo bộ phận', ok: true },
      { text: 'API kết nối CRM/HIS', ok: true },
      { text: 'SLA mở rộng', ok: false },
    ],
  },
  {
    name: 'Enterprise',
    icon: <Building2 size={22} />,
    color: '#2563eb',
    monthlyPrice: null,
    yearlyPrice: null,
    desc: 'Giải pháp tùy chỉnh cho bệnh viện, hành chính công và tập đoàn',
    cta: 'Liên hệ báo giá',
    ctaStyle: 'dark',
    features: [
      { text: 'Kiến trúc và quy trình tùy chỉnh', ok: true },
      { text: 'Bảo mật và phân quyền theo chính sách', ok: true },
      { text: 'Tích hợp sâu với hệ thống nội bộ', ok: true },
      { text: 'On-premise hoac private cloud', ok: true },
      { text: 'SLA + doi van hanh rieng', ok: true },
      { text: 'Đào tạo theo phòng ban', ok: true },
      { text: 'Hỗ trợ triển khai toàn quốc', ok: true },
    ],
  },
]

function formatPrice(p) {
  if (p === null) return 'Tùy chỉnh'
  return `${(p / 1000000).toFixed(2)}M`
}

export default function Pricing() {
  const [yearly, setYearly] = useState(false)

  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <div className="pricing-header">
          <div className="section-tag">
            <Tag size={14} />
            Bảng giá giải pháp
          </div>
          <h2 className="section-title">
            Chọn gói phù hợp<br />
            <span className="gradient-text">quy mô và mục tiêu triển khai</span>
          </h2>
          <p className="section-subtitle">
            Có hỗ trợ tư vấn để xếp cấu hình phù hợp từng đơn vị, có thể mở rộng
            theo giai đoạn mà không phải làm lại hệ thống.
          </p>

          <div className="billing-toggle">
            <span className={!yearly ? 'active' : ''}>Thanh toán tháng</span>
            <button
              className={`toggle-btn ${yearly ? 'on' : ''}`}
              onClick={() => setYearly((v) => !v)}
              aria-label="Toggle yearly billing"
            >
              <span className="toggle-knob" />
            </button>
            <span className={yearly ? 'active' : ''}>
              Thanh toán năm
              <span className="save-badge">Tiết kiệm ~17%</span>
            </span>
          </div>
        </div>

        <div className="pricing-grid">
          {plans.map((plan, i) => (
            <div key={i} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
              {plan.popular && (
                <div className="popular-badge">
                  <Zap size={13} fill="white" /> Gói được chọn nhiều
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
                  {plan.monthlyPrice !== null && (
                    <span className="price-period">/tháng</span>
                  )}
                </div>
                {yearly && plan.monthlyPrice > 0 && (
                  <div className="price-yearly-note">
                    Thanh toán {(plan.yearlyPrice * 12 / 1000000).toFixed(2)}M/năm
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
          <p>Tất cả gói đều bao gồm onboarding, tài liệu hướng dẫn và báo cáo hiệu quả triển khai.</p>
          <p>Cần phương án riêng cho đơn vị? <a href="#faq" style={{ color: 'var(--primary)', fontWeight: 600 }}>Xem FAQ</a> hoặc <a href="#" style={{ color: 'var(--primary)', fontWeight: 600 }}>yêu cầu tư vấn 1-1</a>.</p>
        </div>
      </div>
    </section>
  )
}
