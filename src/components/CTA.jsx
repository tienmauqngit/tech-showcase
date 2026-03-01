import { ArrowRight, Rocket } from 'lucide-react'
import './CTA.css'

export default function CTA() {
  return (
    <section className="cta-section">
      <div className="cta-bg">
        <div className="cta-orb cta-orb-1" />
        <div className="cta-orb cta-orb-2" />
        <div className="cta-grid" />
      </div>
      <div className="container">
        <div className="cta-content">
          <div className="cta-icon">
            <Rocket size={32} />
          </div>
          <h2 className="cta-title">
            Sẵn sàng đưa AI vào quy trình<br />
            <span>tư vấn và vận hành của đơn vị bạn?</span>
          </h2>
          <p className="cta-desc">
            Đặt lịch demo để xem trực tiếp chatbot doanh nghiệp, trợ lý AI công việc
            và mô hình Zalo AI tư vấn cho y tế, hành chính và dịch vụ khách hàng.
          </p>
          <div className="cta-actions">
            <a href="#pricing" className="btn btn-white">
              Đặt lịch demo ngay
              <ArrowRight size={18} />
            </a>
            <a href="#" className="btn cta-demo-btn">
              Nhận đề xuất triển khai
            </a>
          </div>
          <div className="cta-trust">
            <span>✓ Khảo sát nhu cầu miễn phí</span>
            <span>✓ Có lộ trình triển khai rõ ràng</span>
            <span>✓ Đồng hành tối ưu sau go-live</span>
          </div>
        </div>
      </div>
    </section>
  )
}
