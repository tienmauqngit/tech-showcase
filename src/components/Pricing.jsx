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
    desc: 'Cho doanh nghiep nho bat dau chatbot va tu van tu dong',
    cta: 'Dang ky goi Basic',
    ctaStyle: 'outline',
    features: [
      { text: '1 kenh chatbot website', ok: true },
      { text: '50 kich ban hoi dap', ok: true },
      { text: '2 tai khoan quan tri', ok: true },
      { text: 'Bao cao co ban', ok: true },
      { text: 'Tich hop Zalo OA', ok: false },
      { text: 'Kho tri thuc nang cao', ok: false },
      { text: 'SLA rieng', ok: false },
    ],
  },
  {
    name: 'Professional',
    icon: <Rocket size={22} />,
    color: '#0284c7',
    monthlyPrice: 3490000,
    yearlyPrice: 2890000,
    desc: 'Cho don vi can da kenh: web, Zalo AI, CSKH va bao cao van hanh',
    cta: 'Nhan demo Professional',
    ctaStyle: 'primary',
    popular: true,
    features: [
      { text: 'Da kenh: web + Zalo OA + fanpage', ok: true },
      { text: 'Khong gioi han kich ban', ok: true },
      { text: 'Kho tri thuc theo phong ban', ok: true },
      { text: 'Phan luong toi nhan vien truc', ok: true },
      { text: 'Dashboard KPI theo bo phan', ok: true },
      { text: 'API ket noi CRM/HIS', ok: true },
      { text: 'SLA mo rong', ok: false },
    ],
  },
  {
    name: 'Enterprise',
    icon: <Building2 size={22} />,
    color: '#2563eb',
    monthlyPrice: null,
    yearlyPrice: null,
    desc: 'Giai phap tuy chinh cho benh vien, hanh chinh cong va tap doan',
    cta: 'Lien he bao gia',
    ctaStyle: 'dark',
    features: [
      { text: 'Kien truc va quy trinh tuy chinh', ok: true },
      { text: 'Bao mat va phan quyen theo chinh sach', ok: true },
      { text: 'Tich hop sau voi he thong noi bo', ok: true },
      { text: 'On-premise hoac private cloud', ok: true },
      { text: 'SLA + doi van hanh rieng', ok: true },
      { text: 'Dao tao theo phong ban', ok: true },
      { text: 'Ho tro trien khai toan quoc', ok: true },
    ],
  },
]

function formatPrice(p) {
  if (p === null) return 'Tuy chinh'
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
            Bang gia giai phap
          </div>
          <h2 className="section-title">
            Chon goi phu hop<br />
            <span className="gradient-text">quy mo va muc tieu trien khai</span>
          </h2>
          <p className="section-subtitle">
            Co ho tro tu van de xep cau hinh phu hop tung don vi, co the mo rong
            theo giai doan ma khong phai lam lai he thong.
          </p>

          <div className="billing-toggle">
            <span className={!yearly ? 'active' : ''}>Thanh toan thang</span>
            <button
              className={`toggle-btn ${yearly ? 'on' : ''}`}
              onClick={() => setYearly((v) => !v)}
              aria-label="Toggle yearly billing"
            >
              <span className="toggle-knob" />
            </button>
            <span className={yearly ? 'active' : ''}>
              Thanh toan nam
              <span className="save-badge">Tiet kiem ~17%</span>
            </span>
          </div>
        </div>

        <div className="pricing-grid">
          {plans.map((plan, i) => (
            <div key={i} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
              {plan.popular && (
                <div className="popular-badge">
                  <Zap size={13} fill="white" /> Goi duoc chon nhieu
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
                    <span className="price-period">/thang</span>
                  )}
                </div>
                {yearly && plan.monthlyPrice > 0 && (
                  <div className="price-yearly-note">
                    Thanh toan {(plan.yearlyPrice * 12 / 1000000).toFixed(2)}M/nam
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
          <p>Tat ca goi deu bao gom onboarding, tai lieu huong dan va bao cao hieu qua trien khai.</p>
          <p>Can phuong an rieng cho don vi? <a href="#faq" style={{ color: 'var(--primary)', fontWeight: 600 }}>Xem FAQ</a> hoac <a href="#" style={{ color: 'var(--primary)', fontWeight: 600 }}>yeu cau tu van 1-1</a>.</p>
        </div>
      </div>
    </section>
  )
}
