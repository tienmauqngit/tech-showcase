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
            San sang dua AI vao quy trinh<br />
            <span>tu van va van hanh cua don vi ban?</span>
          </h2>
          <p className="cta-desc">
            Dat lich demo de xem truc tiep chatbot doanh nghiep, tro ly AI cong viec
            va mo hinh Zalo AI tu van cho y te, hanh chinh va dich vu khach hang.
          </p>
          <div className="cta-actions">
            <a href="#pricing" className="btn btn-white">
              Dat lich demo ngay
              <ArrowRight size={18} />
            </a>
            <a href="#" className="btn cta-demo-btn">
              Nhan de xuat trien khai
            </a>
          </div>
          <div className="cta-trust">
            <span>✓ Khao sat nhu cau mien phi</span>
            <span>✓ Co lo trinh trien khai ro rang</span>
            <span>✓ Dong hanh toi uu sau go-live</span>
          </div>
        </div>
      </div>
    </section>
  )
}
