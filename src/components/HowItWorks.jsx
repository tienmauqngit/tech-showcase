import { SearchCheck, Settings, Rocket, TrendingUp, Lightbulb } from 'lucide-react'
import './HowItWorks.css'

const steps = [
  {
    number: '01',
    icon: <SearchCheck size={28} />,
    color: '#0f766e',
    title: 'Khảo sát bài toán',
    desc: 'Phân tích quy trình tiếp nhận - tư vấn - xử lý của đơn vị để chọn đúng điểm ứng dụng AI.',
  },
  {
    number: '02',
    icon: <Settings size={28} />,
    color: '#2563eb',
    title: 'Dựng mô hình và dữ liệu',
    desc: 'Xây bộ tri thức từ tài liệu nghiệp vụ, mẫu hỏi đáp và kịch bản vận hành theo từng phòng ban.',
  },
  {
    number: '03',
    icon: <Rocket size={28} />,
    color: '#0284c7',
    title: 'Triển khai đa kênh',
    desc: 'Kết nối chatbot website, Zalo OA, fanpage và tổng đài; cấu hình chuyển tiếp nhân viên khi cần.',
  },
  {
    number: '04',
    icon: <TrendingUp size={28} />,
    color: '#10b981',
    title: 'Tối ưu liên tục',
    desc: 'Đo lường hiệu quả, huấn luyện mô hình theo dữ liệu mới và mở rộng tình huống sử dụng theo tháng.',
  },
]

export default function HowItWorks() {
  return (
    <section className="how-it-works" id="how-it-works">
      <div className="container">
        <div className="hiw-header">
          <div className="section-tag">
            <Lightbulb size={14} />
            Quy trình triển khai
          </div>
          <h2 className="section-title">
            Từ bài toán đến hệ thống vận hành<br />
            <span className="gradient-text">trong 4 bước rõ ràng</span>
          </h2>
          <p className="section-subtitle">
            Được thiết kế để đơn vị có thể đưa AI vào công việc một cách an toàn,
            nhanh gọn và có thể đo lường hiệu quả ngay.
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
                    <div className="step-line-fill" style={{ background: `linear-gradient(90deg, ${step.color}, ${steps[i + 1].color})` }} />
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
