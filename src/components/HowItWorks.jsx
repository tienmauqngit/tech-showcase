import { UserPlus, Settings, Rocket, TrendingUp, Lightbulb } from 'lucide-react'
import './HowItWorks.css'

const steps = [
  {
    number: '01',
    icon: <UserPlus size={28} />,
    color: '#6366f1',
    title: 'Đăng ký & Cài đặt',
    desc: 'Tạo tài khoản trong 2 phút, không cần thẻ tín dụng. Chọn gói phù hợp và bắt đầu ngay.',
  },
  {
    number: '02',
    icon: <Settings size={28} />,
    color: '#06b6d4',
    title: 'Cấu hình & Tích hợp',
    desc: 'Kết nối các công cụ hiện có của bạn qua 500+ integration. Nhập dữ liệu tự động, không mất dữ liệu.',
  },
  {
    number: '03',
    icon: <Rocket size={28} />,
    color: '#8b5cf6',
    title: 'Triển khai & Vận hành',
    desc: 'Đội ngũ chuyên gia hỗ trợ onboarding 1-1. Hệ thống sẵn sàng hoạt động trong vòng 5 phút.',
  },
  {
    number: '04',
    icon: <TrendingUp size={28} />,
    color: '#10b981',
    title: 'Tăng trưởng & Mở rộng',
    desc: 'Theo dõi KPI thời gian thực. AI tự động đề xuất tối ưu hóa để doanh nghiệp tăng trưởng bền vững.',
  },
]

export default function HowItWorks() {
  return (
    <section className="how-it-works" id="how-it-works">
      <div className="container">
        <div className="hiw-header">
          <div className="section-tag">
            <Lightbulb size={14} />
            Cách hoạt động
          </div>
          <h2 className="section-title">
            Bắt đầu trong{' '}
            <span className="gradient-text">4 bước đơn giản</span>
          </h2>
          <p className="section-subtitle">
            Từ đăng ký đến vận hành hoàn chỉnh, chúng tôi đồng hành cùng bạn ở mỗi bước.
          </p>
        </div>

        <div className="steps">
          {steps.map((step, i) => (
            <div key={i} className="step">
              <div className="step-connector">
                <div className="step-number-wrap">
                  <div className="step-number" style={{ color: step.color, borderColor: `${step.color}30`, background: `${step.color}10` }}>
                    {step.number}
                  </div>
                </div>
                {i < steps.length - 1 && (
                  <div className="step-line">
                    <div className="step-line-fill" style={{ background: `linear-gradient(90deg, ${step.color}, ${steps[i+1].color})` }} />
                  </div>
                )}
              </div>
              <div className="step-card">
                <div className="step-icon" style={{ background: `${step.color}15`, color: step.color }}>
                  {step.icon}
                </div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
