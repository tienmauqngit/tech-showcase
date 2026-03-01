import { useState } from 'react'
import { Plus, Minus, HelpCircle } from 'lucide-react'
import './FAQ.css'

const faqs = [
  {
    q: 'Giải pháp có phù hợp cho bệnh viện và đơn vị hành chính công không?',
    a: 'Có. Hệ thống được thiết kế theo quy trình tiếp nhận hồ sơ, hướng dẫn thủ tục, đặt lịch và chăm sóc sau xử lý. Nội dung trả lời có thể tùy chỉnh theo từng đơn vị.',
  },
  {
    q: 'Có tích hợp được Zalo OA, website và CRM/HIS không?',
    a: 'Có. Nhân sự có thể vận hành trên một dashboard, dữ liệu hỏi đáp được đồng bộ để theo dõi lịch sử xử lý và đo hiệu quả.',
  },
  {
    q: 'AI có thay thế hoàn toàn nhân viên tư vấn không?',
    a: 'Không. Mục tiêu là giảm việc lặp lại và tăng tốc phản hồi. Các tình huống phức tạp vẫn được chuyển đến nhân viên phụ trách.',
  },
  {
    q: 'Mất bao lâu để triển khai hệ thống đầu tiên?',
    a: 'Thường từ 3 đến 14 ngày tùy mức độ tích hợp. Ban đầu có thể go-live nhanh với bộ kịch bản cơ bản, sau đó mở rộng theo giai đoạn.',
  },
  {
    q: 'Dữ liệu nhạy cảm được bảo vệ như thế nào?',
    a: 'Hệ thống có phân quyền theo vai trò, lưu vết thao tác, và cho phép ẩn thông tin nhạy cảm trong quá trình xử lý hỏi đáp.',
  },
  {
    q: 'Có hỗ trợ đào tạo đội ngũ vận hành không?',
    a: 'Có. Gói triển khai bao gồm hướng dẫn sử dụng, tài liệu vận hành và buổi đào tạo cho nhân viên quản trị nội dung.',
  },
]

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`faq-item ${open ? 'open' : ''}`}>
      <button className="faq-question" onClick={() => setOpen((v) => !v)}>
        <span>{q}</span>
        <span className="faq-icon">
          {open ? <Minus size={18} /> : <Plus size={18} />}
        </span>
      </button>
      {open && (
        <div className="faq-answer">
          <p>{a}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
  return (
    <section className="faq" id="faq">
      <div className="container">
        <div className="faq-header">
          <div className="section-tag">
            <HelpCircle size={14} />
            Câu hỏi thường gặp
          </div>
          <h2 className="section-title">
            Bạn cần làm rõ điều gì?<br />
            <span className="gradient-text">Chúng tôi sẵn sàng giải đáp</span>
          </h2>
        </div>

        <div className="faq-layout">
          <div className="faq-list">
            {faqs.map((item, i) => (
              <FAQItem key={i} {...item} />
            ))}
          </div>

          <div className="faq-contact">
            <div className="faq-contact-card">
              <div className="faq-contact-icon">
                <HelpCircle size={28} />
              </div>
              <h3>Cần tư vấn theo bài toán riêng?</h3>
              <p>Gửi nhu cầu của bạn, đội ngũ TechVision sẽ đề xuất lộ trình và cấu hình phù hợp theo lĩnh vực.</p>
              <div className="faq-contact-methods">
                <a href="#" className="contact-method">
                  <span className="cm-icon">Chat</span>
                  <div>
                    <div className="cm-title">Tư vấn nhanh</div>
                    <div className="cm-sub">Phản hồi trong giờ hành chính</div>
                  </div>
                </a>
                <a href="#" className="contact-method">
                  <span className="cm-icon">Mail</span>
                  <div>
                    <div className="cm-title">Email</div>
                    <div className="cm-sub">hello@techvision.vn</div>
                  </div>
                </a>
                <a href="#" className="contact-method">
                  <span className="cm-icon">Call</span>
                  <div>
                    <div className="cm-title">Hotline</div>
                    <div className="cm-sub">1900 88 66</div>
                  </div>
                </a>
              </div>
              <a href="#" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '8px' }}>
                Nhận tư vấn 1-1
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
