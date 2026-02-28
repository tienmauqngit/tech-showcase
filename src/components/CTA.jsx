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
            Sẵn sàng chuyển đổi số<br />
            <span>doanh nghiệp của bạn?</span>
          </h2>
          <p className="cta-desc">
            Hơn 10,000 doanh nghiệp đã tin tưởng TechVision. Bắt đầu hôm nay
            với gói miễn phí — không cần thẻ tín dụng, không cam kết.
          </p>
          <div className="cta-actions">
            <a href="#pricing" className="btn btn-white">
              Bắt đầu miễn phí ngay
              <ArrowRight size={18} />
            </a>
            <a href="#" className="btn cta-demo-btn">
              Đặt lịch demo
            </a>
          </div>
          <div className="cta-trust">
            <span>✓ Không cần thẻ tín dụng</span>
            <span>✓ Cài đặt trong 5 phút</span>
            <span>✓ Hủy bất kỳ lúc nào</span>
          </div>
        </div>
      </div>
    </section>
  )
}
