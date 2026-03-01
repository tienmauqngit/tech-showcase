import { Cpu, MessageSquare, Shield, Workflow, Globe, Headphones, Database, Smartphone } from 'lucide-react'
import './Features.css'

const features = [
  {
    icon: <Cpu size={26} />,
    color: '#0f766e',
    bg: 'rgba(15,118,110,0.1)',
    title: 'AI Agent cho cong viec noi bo',
    desc: 'Tro ly AI tra loi quy trinh, tong hop van ban, viet email, tao bao cao nhanh cho nhan su van phong.',
  },
  {
    icon: <MessageSquare size={26} />,
    color: '#0284c7',
    bg: 'rgba(2,132,199,0.1)',
    title: 'Chatbot doanh nghiep',
    desc: 'Tu dong tiep nhan cau hoi, huong dan thu tuc, loc nhu cau va chuyen tu van vien khi can.',
  },
  {
    icon: <Smartphone size={26} />,
    color: '#2563eb',
    bg: 'rgba(37,99,235,0.1)',
    title: 'Zalo AI tu van khach hang',
    desc: 'Tich hop Zalo OA de tu van 24/7, gui nhac lich, xac nhan ho so va cham soc sau dich vu.',
  },
  {
    icon: <Workflow size={26} />,
    color: '#f59e0b',
    bg: 'rgba(245,158,11,0.1)',
    title: 'Tu dong hoa quy trinh',
    desc: 'Tu dong phan loai yeu cau, tao ticket, phan cong phong ban va theo doi trang thai xu ly.',
  },
  {
    icon: <Database size={26} />,
    color: '#7c3aed',
    bg: 'rgba(124,58,237,0.1)',
    title: 'Kho tri thuc tap trung',
    desc: 'Dong bo tai lieu nghiep vu, FAQ, quy dinh de AI tra loi dung ngu canh va dung chinh sach.',
  },
  {
    icon: <Shield size={26} />,
    color: '#059669',
    bg: 'rgba(5,150,105,0.1)',
    title: 'Bao mat va phan quyen',
    desc: 'Phan quyen theo vai tro, luu vet thao tac, an thong tin nhay cam trong moi kenh tuong tac.',
  },
  {
    icon: <Globe size={26} />,
    color: '#0ea5e9',
    bg: 'rgba(14,165,233,0.1)',
    title: 'Da kenh mot nen tang',
    desc: 'Quan ly hoi dap tu web, Zalo, fanpage, tong dai tren mot dashboard duy nhat.',
  },
  {
    icon: <Headphones size={26} />,
    color: '#10b981',
    bg: 'rgba(16,185,129,0.1)',
    title: 'Van hanh va toi uu lien tuc',
    desc: 'Theo doi chat luong hoi dap, cap nhat kich ban va huan luyen AI theo du lieu moi.',
  },
]

export default function Features() {
  return (
    <section className="features" id="features">
      <div className="container">
        <div className="features-header">
          <div className="section-tag">
            <Cpu size={14} />
            Giai phap trong tam
          </div>
          <h2 className="section-title">
            Nen tang cong nghe cho<br />
            <span className="gradient-text">tu van va van hanh thong minh</span>
          </h2>
          <p className="section-subtitle">
            Thiet ke cho bai toan thuc te trong doanh nghiep, y te va hanh chinh:
            giam tai tong dai, tang toc xu ly ho so va nang cao trai nghiem nguoi dung.
          </p>
        </div>

        <div className="features-grid">
          {features.map((f, i) => (
            <div key={i} className="feature-card" style={{ '--delay': `${i * 0.05}s` }}>
              <div className="feature-icon" style={{ background: f.bg, color: f.color }}>
                {f.icon}
              </div>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-desc">{f.desc}</p>
              <div className="feature-arrow" style={{ color: f.color }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Xem chi tiet
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
