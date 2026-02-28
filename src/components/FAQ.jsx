import { useState } from 'react'
import { Plus, Minus, HelpCircle } from 'lucide-react'
import './FAQ.css'

const faqs = [
  {
    q: 'TechVision có thể tích hợp với các phần mềm hiện tại của tôi không?',
    a: 'Có. TechVision hỗ trợ hơn 500+ integrations với các công cụ phổ biến như Google Workspace, Microsoft 365, Salesforce, HubSpot, Shopify, và nhiều hơn nữa. Chúng tôi cũng cung cấp REST API và Webhooks để tích hợp tùy chỉnh với bất kỳ hệ thống nào.',
  },
  {
    q: 'Dữ liệu của tôi được bảo mật như thế nào?',
    a: 'Bảo mật là ưu tiên hàng đầu của chúng tôi. TechVision sử dụng mã hóa AES-256 cho dữ liệu lưu trữ và TLS 1.3 cho dữ liệu truyền tải. Chúng tôi đạt chứng chỉ ISO 27001, SOC 2 Type II và tuân thủ GDPR. Dữ liệu của bạn không bao giờ được chia sẻ với bên thứ ba.',
  },
  {
    q: 'Tôi có thể dùng thử trước khi mua không?',
    a: 'Có. Gói Starter hoàn toàn miễn phí vĩnh viễn, không cần thẻ tín dụng. Gói Professional có 14 ngày dùng thử miễn phí với đầy đủ tính năng. Chúng tôi cũng cung cấp demo 1-1 cho gói Enterprise.',
  },
  {
    q: 'Mất bao lâu để triển khai và đào tạo nhân viên?',
    a: 'Hầu hết khách hàng bắt đầu sử dụng trong vòng 5-30 phút sau đăng ký. Chúng tôi cung cấp bộ tài liệu hướng dẫn chi tiết, video tutorial, và webinar đào tạo miễn phí hàng tuần. Đội ngũ onboarding sẽ hỗ trợ bạn xuyên suốt quá trình.',
  },
  {
    q: 'Tôi có thể hủy hoặc thay đổi gói bất kỳ lúc nào không?',
    a: 'Có, bạn có thể nâng cấp, hạ cấp hoặc hủy gói bất kỳ lúc nào mà không bị phạt. Khi hủy, bạn vẫn giữ quyền truy cập đến hết chu kỳ thanh toán hiện tại. Dữ liệu được lưu trữ trong 30 ngày sau khi hủy để bạn có thể export.',
  },
  {
    q: 'TechVision có hỗ trợ tiếng Việt không?',
    a: 'Hoàn toàn. TechVision hỗ trợ đầy đủ tiếng Việt trong toàn bộ giao diện, tài liệu, và đội ngũ hỗ trợ khách hàng. Chúng tôi cũng có văn phòng tại Hà Nội và TP. Hồ Chí Minh.',
  },
  {
    q: 'Điều gì xảy ra nếu tôi vượt quá giới hạn của gói?',
    a: 'Chúng tôi sẽ thông báo trước khi bạn đạt giới hạn. Bạn có thể chọn nâng cấp lên gói cao hơn hoặc mua thêm tài nguyên add-on. Chúng tôi không tự động tính phí thêm mà không có sự đồng ý của bạn.',
  },
  {
    q: 'TechVision có cung cấp SLA không?',
    a: 'Có. Tất cả các gói đều được bảo đảm 99.9% uptime SLA. Gói Enterprise được bảo đảm 99.99% uptime với dedicated infrastructure. Trong trường hợp vi phạm SLA, chúng tôi sẽ hoàn tiền tự động theo tỷ lệ thời gian downtime.',
  },
]

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`faq-item ${open ? 'open' : ''}`}>
      <button className="faq-question" onClick={() => setOpen(v => !v)}>
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
            Bạn có thắc mắc?<br />
            <span className="gradient-text">Chúng tôi có câu trả lời</span>
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
              <h3>Vẫn còn thắc mắc?</h3>
              <p>Đội ngũ hỗ trợ của chúng tôi luôn sẵn sàng giải đáp mọi câu hỏi của bạn.</p>
              <div className="faq-contact-methods">
                <a href="#" className="contact-method">
                  <span className="cm-icon">💬</span>
                  <div>
                    <div className="cm-title">Live Chat</div>
                    <div className="cm-sub">Phản hồi trong 2 phút</div>
                  </div>
                </a>
                <a href="#" className="contact-method">
                  <span className="cm-icon">📧</span>
                  <div>
                    <div className="cm-title">Email</div>
                    <div className="cm-sub">support@techvision.vn</div>
                  </div>
                </a>
                <a href="#" className="contact-method">
                  <span className="cm-icon">📞</span>
                  <div>
                    <div className="cm-title">Điện thoại</div>
                    <div className="cm-sub">1800 1234 (miễn phí)</div>
                  </div>
                </a>
              </div>
              <a href="#" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '8px' }}>
                Liên hệ ngay
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
