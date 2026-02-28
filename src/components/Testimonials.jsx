import { useState } from 'react'
import { Star, ChevronLeft, ChevronRight, Quote, MessageSquare } from 'lucide-react'
import './Testimonials.css'

const testimonials = [
  {
    name: 'Nguyễn Thanh Hải',
    role: 'CEO',
    company: 'VietCommerce JSC',
    avatar: 'NH',
    avatarBg: '#6366f1',
    rating: 5,
    content: 'TechVision đã giúp chúng tôi tăng doanh thu 42% chỉ trong 6 tháng. Hệ thống analytics cực kỳ mạnh mẽ, giúp chúng tôi hiểu rõ hành vi khách hàng và tối ưu chiến dịch marketing hiệu quả chưa từng thấy.',
    tag: 'TechVision Analytics',
  },
  {
    name: 'Trần Thị Mai Anh',
    role: 'CTO',
    company: 'SmartRetail Vietnam',
    avatar: 'TM',
    avatarBg: '#10b981',
    rating: 5,
    content: 'Chúng tôi đã thử nhiều giải pháp khác nhau trước khi chọn TechVision. Tốc độ triển khai nhanh đến ngạc nhiên — chỉ 3 ngày để toàn bộ hệ thống đi vào hoạt động. Đội ngũ support xuất sắc!',
    tag: 'TechVision Commerce',
  },
  {
    name: 'Phạm Đức Minh',
    role: 'COO',
    company: 'TechStartup Hub',
    avatar: 'PM',
    avatarBg: '#8b5cf6',
    rating: 5,
    content: 'AI Studio của TechVision đã cho phép chúng tôi xây dựng chatbot hỗ trợ khách hàng 24/7 mà không cần một kỹ sư AI nào. ROI đạt 380% chỉ sau 4 tháng triển khai.',
    tag: 'TechVision AI Studio',
  },
  {
    name: 'Lê Hoàng Long',
    role: 'HR Director',
    company: 'ManufacturingCo',
    avatar: 'LL',
    avatarBg: '#f59e0b',
    rating: 5,
    content: 'Quản lý 2,000 nhân viên trở nên đơn giản hơn rất nhiều với TechVision HRM. Tự động hóa hoàn toàn quy trình tính lương và chấm công, tiết kiệm 80% thời gian của phòng HR mỗi tháng.',
    tag: 'TechVision HRM',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent((c) => (c + 1) % testimonials.length)

  const t = testimonials[current]
  const others = testimonials.filter((_, i) => i !== current).slice(0, 3)

  return (
    <section className="testimonials">
      <div className="container">
        <div className="testimonials-header">
          <div className="section-tag">
            <MessageSquare size={14} />
            Khách hàng nói gì
          </div>
          <h2 className="section-title">
            Hàng ngàn doanh nghiệp<br />
            <span className="gradient-text">đã tin tưởng lựa chọn</span>
          </h2>
        </div>

        <div className="testimonials-layout">
          <div className="main-testimonial">
            <div className="quote-icon">
              <Quote size={24} />
            </div>
            <div className="stars">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} size={18} fill="#f59e0b" color="#f59e0b" />
              ))}
            </div>
            <blockquote className="testimonial-content">"{t.content}"</blockquote>
            <div className="testimonial-author">
              <div className="testimonial-avatar" style={{ background: t.avatarBg }}>
                {t.avatar}
              </div>
              <div className="testimonial-meta">
                <div className="testimonial-name">{t.name}</div>
                <div className="testimonial-role">{t.role} · {t.company}</div>
              </div>
              <span className="testimonial-tag">{t.tag}</span>
            </div>

            <div className="testimonial-nav">
              <button className="nav-btn" onClick={prev} aria-label="Previous">
                <ChevronLeft size={20} />
              </button>
              <div className="dots">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    className={`dot-btn ${i === current ? 'active' : ''}`}
                    onClick={() => setCurrent(i)}
                    aria-label={`Go to ${i + 1}`}
                  />
                ))}
              </div>
              <button className="nav-btn" onClick={next} aria-label="Next">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div className="side-testimonials">
            {others.map((o, i) => (
              <div
                key={i}
                className="side-testimonial"
                onClick={() => setCurrent(testimonials.indexOf(o))}
              >
                <div className="side-header">
                  <div className="testimonial-avatar small" style={{ background: o.avatarBg }}>
                    {o.avatar}
                  </div>
                  <div>
                    <div className="testimonial-name" style={{ fontSize: '14px' }}>{o.name}</div>
                    <div className="testimonial-role">{o.role}</div>
                  </div>
                  <div className="side-stars">
                    {Array.from({ length: 5 }).map((_, si) => (
                      <Star key={si} size={12} fill="#f59e0b" color="#f59e0b" />
                    ))}
                  </div>
                </div>
                <p className="side-content">"{o.content.slice(0, 100)}..."</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
