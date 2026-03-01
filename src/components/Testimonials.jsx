import { useState } from 'react'
import { Star, ChevronLeft, ChevronRight, Quote, MessageSquare } from 'lucide-react'
import './Testimonials.css'

const testimonials = [
  {
    name: 'Trần Minh Khang',
    role: 'Giám đốc vận hành',
    company: 'Bệnh viện đa khoa',
    avatar: 'TK',
    avatarBg: '#0f766e',
    rating: 5,
    content: 'Sau khi triển khai Zalo AI, số cuộc gọi lặp lại về thủ tục khám giảm mạnh. Người bệnh nhận hướng dẫn rõ ràng hơn và đặt lịch nhanh hơn.',
    tag: 'Zalo AI tư vấn y tế',
  },
  {
    name: 'Lê Thu Trang',
    role: 'Trưởng phòng một cửa',
    company: 'Đơn vị hành chính',
    avatar: 'LT',
    avatarBg: '#0284c7',
    rating: 5,
    content: 'Chatbot xử lý phần lớn câu hỏi cơ bản về hồ sơ và quy trình. Nhân viên có thêm thời gian tập trung cho hồ sơ phức tạp, chất lượng phục vụ tăng rõ.',
    tag: 'Chatbot hành chính công',
  },
  {
    name: 'Nguyễn Quốc Bảo',
    role: 'CEO',
    company: 'Công ty dịch vụ tài chính',
    avatar: 'NB',
    avatarBg: '#2563eb',
    rating: 5,
    content: 'AI Workplace giúp đội ngũ văn phòng xử lý tài liệu nhanh hơn và chuẩn hơn. Chỉ sau một quý, KPI năng suất của team đã tăng vượt mức kỳ vọng.',
    tag: 'AI trong công việc nội bộ',
  },
  {
    name: 'Phạm Gia Hân',
    role: 'Head of Customer Care',
    company: 'Chuỗi phòng khám',
    avatar: 'PH',
    avatarBg: '#10b981',
    rating: 5,
    content: 'Hệ thống đa kênh của TechVision đồng bộ dữ liệu hỏi đáp giữa web và Zalo. Đội CSKH theo dõi mọi yêu cầu trên một màn hình, không bỏ sót khách hàng.',
    tag: 'Omnichannel support AI',
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
            Khách hàng đánh giá
          </div>
          <h2 className="section-title">
            Phản hồi từ các đơn vị<br />
            <span className="gradient-text">đã ứng dụng AI vào vận hành</span>
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
