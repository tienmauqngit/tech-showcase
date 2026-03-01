import { useState } from 'react'
import { Briefcase, MessageCircle, Stethoscope, ArrowRight, CheckCircle2, Package } from 'lucide-react'
import './Products.css'

const products = [
  {
    id: 'workplace-ai',
    icon: <Briefcase size={24} />,
    color: '#0f766e',
    name: 'AI Workplace Assistant',
    tagline: 'AI trong cong viec',
    desc: 'Tro ly AI cho nhan vien: tra loi quy trinh, tom tat bien ban, tao van ban nhanh va ho tro bao cao.',
    features: [
      'Tim va tom tat tai lieu noi bo trong vai giay',
      'Tao mau van ban theo quy dinh tung phong ban',
      'Tu dong tong hop so lieu va tao bao cao ngay',
      'Goi y hanh dong tiep theo theo ngu canh cong viec',
      'Theo doi KPI su dung AI theo don vi',
    ],
    image: 'workplace-ai',
  },
  {
    id: 'enterprise-chatbot',
    icon: <MessageCircle size={24} />,
    color: '#0284c7',
    name: 'Enterprise Chatbot Platform',
    tagline: 'Chatbot doanh nghiep',
    desc: 'Nen tang chatbot da kenh giup tiep nhan va xu ly yeu cau khach hang tu dong 24/7.',
    features: [
      'Kich ban hoi dap theo tung nganh nghe',
      'Phan luong hoi thoai cho bo phan phu trach',
      'Tich hop CRM de luu lich su va co hoi ban hang',
      'Danh gia muc do hai long sau moi phien chat',
      'Bao cao ti le xu ly tu dong va thoi gian phan hoi',
    ],
    image: 'enterprise-chatbot',
  },
  {
    id: 'zalo-healthcare',
    icon: <Stethoscope size={24} />,
    color: '#2563eb',
    name: 'Zalo AI Advisor',
    tagline: 'Zalo AI cho y te va hanh chinh',
    desc: 'Giai phap tu van qua Zalo OA cho benh vien, phong kham va don vi hanh chinh cong.',
    features: [
      'Huong dan thu tuc, giay to va quy trinh tiep nhan',
      'Dat lich kham, nhac lich va thong bao ket qua',
      'Tra loi cau hoi thuong gap theo dung kieu ngu nghiep vu',
      'Ket noi tong dai vien khi vuot pham vi AI',
      'Thong ke luot hoi dap theo tung dich vu',
    ],
    image: 'zalo-healthcare',
  },
]

function ProductVisual({ type, color }) {
  const items = {
    'workplace-ai': (
      <div className="pv-analytics">
        <div className="pv-header">
          <span className="pv-title">AI Task Dashboard</span>
          <span className="pv-date">Thang 03, 2026</span>
        </div>
        <div className="pv-big-number">12,840 <span className="pv-up">task AI</span></div>
        <div className="pv-bars">
          {[50, 45, 58, 62, 75, 80, 70, 84, 88, 76, 90, 100].map((h, i) => (
            <div key={i} className="pv-bar-wrap">
              <div className="pv-bar" style={{ height: `${h}%`, background: color, opacity: i === 11 ? 1 : 0.3 }} />
            </div>
          ))}
        </div>
        <div className="pv-pills">
          <span className="pv-pill" style={{ background: `${color}20`, color }}>Nang suat +35%</span>
          <span className="pv-pill" style={{ background: 'rgba(16,185,129,0.15)', color: '#10b981' }}>Sai sot giam 22%</span>
        </div>
      </div>
    ),
    'enterprise-chatbot': (
      <div className="pv-ai">
        <div className="pv-ai-chat">
          <div className="pv-chat-msg bot">
            <div className="pv-chat-bubble bot-bubble">Xin chao, toi co the ho tro ban van de gi?</div>
          </div>
          <div className="pv-chat-msg user">
            <div className="pv-chat-bubble user-bubble" style={{ background: color }}>
              Toi can tra cuu thu tuc cap lai ho so.
            </div>
          </div>
          <div className="pv-chat-msg bot">
            <div className="pv-chat-bubble bot-bubble">
              Ban vui long cung cap ma ho so. Toi da gui danh sach giay to can bo sung.
            </div>
          </div>
        </div>
        <div className="pv-ai-models">
          {['Knowledge Base', 'Intent AI', 'Live Agent'].map((m, i) => (
            <span key={i} className="pv-model-tag" style={{ background: `${color}15`, color }}>{m}</span>
          ))}
        </div>
      </div>
    ),
    'zalo-healthcare': (
      <div className="pv-commerce">
        {[
          { name: 'Lich hen moi', count: 684, badge: 'Hom nay' },
          { name: 'Luot tu van Zalo', count: '4,920', badge: '' },
          { name: 'Ty le xu ly tu dong', count: '76%', badge: 'On dinh' },
        ].map((item, i) => (
          <div key={i} className="pv-commerce-row">
            <div className="pv-commerce-icon" style={{ background: `${color}20`, color }}>
              <Package size={16} />
            </div>
            <div className="pv-commerce-info">
              <span className="pv-commerce-name">{item.name}</span>
              <span className="pv-commerce-val">{item.count}</span>
            </div>
            {item.badge && <span className="pv-badge" style={{ background: `${color}20`, color }}>{item.badge}</span>}
          </div>
        ))}
        <div className="pv-progress-section">
          <span className="pv-progress-label">Muc tieu giam tai quay tiep nhan</span>
          <div className="pv-progress-bar">
            <div className="pv-progress-fill" style={{ width: '81%', background: color }} />
          </div>
          <span className="pv-progress-pct" style={{ color }}>81%</span>
        </div>
      </div>
    ),
  }
  return items[type] || null
}

export default function Products() {
  const [active, setActive] = useState(0)
  const product = products[active]

  return (
    <section className="products" id="products">
      <div className="container">
        <div className="products-header">
          <div className="section-tag">
            <Package size={14} />
            San pham tieu bieu
          </div>
          <h2 className="section-title">
            Bo san pham cong nghe<br />
            <span className="gradient-text">ung dung AI theo tung bai toan</span>
          </h2>
          <p className="section-subtitle">
            Trien khai linh hoat theo quy mo to chuc, tu phuong an nhanh cho SME den mo hinh
            tich hop sau cho benh vien, so ban nganh va doanh nghiep lon.
          </p>
        </div>

        <div className="products-tabs">
          {products.map((p, i) => (
            <button
              key={p.id}
              className={`product-tab ${active === i ? 'active' : ''}`}
              onClick={() => setActive(i)}
              style={active === i ? { borderColor: p.color, color: p.color, background: `${p.color}0f` } : {}}
            >
              <span className="product-tab-icon" style={active === i ? { background: `${p.color}20`, color: p.color } : {}}>
                {p.icon}
              </span>
              <span className="product-tab-name">{p.tagline}</span>
            </button>
          ))}
        </div>

        <div className="product-showcase">
          <div className="product-info">
            <div className="product-label" style={{ background: `${product.color}15`, color: product.color }}>
              {product.icon} {product.tagline}
            </div>
            <h3 className="product-name">{product.name}</h3>
            <p className="product-desc">{product.desc}</p>
            <ul className="product-features">
              {product.features.map((f, i) => (
                <li key={i}>
                  <CheckCircle2 size={18} style={{ color: product.color, flexShrink: 0 }} />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <div className="product-actions">
              <a href="#pricing" className="btn btn-primary" style={{ background: product.color, boxShadow: `0 4px 14px ${product.color}40` }}>
                Tu van giai phap
                <ArrowRight size={16} />
              </a>
              <button className="btn btn-outline">Tai tai lieu demo</button>
            </div>
          </div>

          <div className="product-visual-wrap">
            <div className="product-visual" style={{ borderColor: `${product.color}30` }}>
              <ProductVisual type={product.image} color={product.color} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
