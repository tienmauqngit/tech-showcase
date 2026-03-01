import { SearchCheck, Settings, Rocket, TrendingUp, Lightbulb } from 'lucide-react'
import './HowItWorks.css'

const steps = [
  {
    number: '01',
    icon: <SearchCheck size={28} />,
    color: '#0f766e',
    title: 'Khao sat bai toan',
    desc: 'Phan tich quy trinh tiep nhan - tu van - xu ly cua don vi de chon dung diem ung dung AI.',
  },
  {
    number: '02',
    icon: <Settings size={28} />,
    color: '#2563eb',
    title: 'Dung mo hinh va du lieu',
    desc: 'Xay bo tri thuc tu tai lieu nghiep vu, mau hoi dap va kich ban van hanh theo tung phong ban.',
  },
  {
    number: '03',
    icon: <Rocket size={28} />,
    color: '#0284c7',
    title: 'Trien khai da kenh',
    desc: 'Ket noi chatbot website, Zalo OA, fanpage va tong dai; cau hinh chuyen tiep nhan vien khi can.',
  },
  {
    number: '04',
    icon: <TrendingUp size={28} />,
    color: '#10b981',
    title: 'Toi uu lien tuc',
    desc: 'Do luong hieu qua, huan luyen mo hinh theo du lieu moi va mo rong tinh huong su dung theo thang.',
  },
]

export default function HowItWorks() {
  return (
    <section className="how-it-works" id="how-it-works">
      <div className="container">
        <div className="hiw-header">
          <div className="section-tag">
            <Lightbulb size={14} />
            Quy trinh trien khai
          </div>
          <h2 className="section-title">
            Tu bai toan den he thong van hanh<br />
            <span className="gradient-text">trong 4 buoc ro rang</span>
          </h2>
          <p className="section-subtitle">
            Duoc thiet ke de don vi co the dua AI vao cong viec mot cach an toan,
            nhanh gon va co the do luong hieu qua ngay.
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
