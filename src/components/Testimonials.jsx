import { useState } from 'react'
import { Star, ChevronLeft, ChevronRight, Quote, MessageSquare } from 'lucide-react'
import './Testimonials.css'

const testimonials = [
  {
    name: 'Tran Minh Khang',
    role: 'Giam doc van hanh',
    company: 'Benh vien da khoa',
    avatar: 'TK',
    avatarBg: '#0f766e',
    rating: 5,
    content: 'Sau khi trien khai Zalo AI, so cuoc goi lap lai ve thu tuc kham giam manh. Nguoi benh nhan nhan huong dan ro rang hon va dat lich nhanh hon.',
    tag: 'Zalo AI tu van y te',
  },
  {
    name: 'Le Thu Trang',
    role: 'Truong phong mot cua',
    company: 'Don vi hanh chinh',
    avatar: 'LT',
    avatarBg: '#0284c7',
    rating: 5,
    content: 'Chatbot xu ly phan lon cau hoi co ban ve ho so va quy trinh. Nhan vien co them thoi gian tap trung cho ho so phuc tap, chat luong phuc vu tang ro.',
    tag: 'Chatbot hanh chinh cong',
  },
  {
    name: 'Nguyen Quoc Bao',
    role: 'CEO',
    company: 'Cong ty dich vu tai chinh',
    avatar: 'NB',
    avatarBg: '#2563eb',
    rating: 5,
    content: 'AI Workplace giup doi ngu van phong xu ly tai lieu nhanh hon va chuan hon. Chi sau mot quy, KPI nang suat cua team da tang vuot muc ky vong.',
    tag: 'AI trong cong viec noi bo',
  },
  {
    name: 'Pham Gia Han',
    role: 'Head of Customer Care',
    company: 'Chuoi phong kham',
    avatar: 'PH',
    avatarBg: '#10b981',
    rating: 5,
    content: 'He thong da kenh cua TechVision dong bo du lieu hoi dap giua web va Zalo. Doi CSKH theo doi moi yeu cau tren mot man hinh, khong bo sot khach hang.',
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
            Khach hang danh gia
          </div>
          <h2 className="section-title">
            Phan hoi tu cac don vi<br />
            <span className="gradient-text">da ung dung AI vao van hanh</span>
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
