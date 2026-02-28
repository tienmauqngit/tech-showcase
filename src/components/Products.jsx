import { useState } from 'react'
import { BarChart3, ShoppingCart, Users, Bot, ArrowRight, CheckCircle2, Package } from 'lucide-react'
import './Products.css'

const products = [
  {
    id: 'analytics',
    icon: <BarChart3 size={24} />,
    color: '#6366f1',
    name: 'TechVision Analytics',
    tagline: 'Phân tích & Báo cáo',
    desc: 'Nền tảng phân tích dữ liệu thời gian thực, giúp bạn hiểu sâu về khách hàng, vận hành và thị trường.',
    features: [
      'Dashboard tùy chỉnh không giới hạn',
      'Báo cáo tự động định kỳ',
      'Phân tích hành vi người dùng',
      'Dự báo xu hướng với AI',
      'Tích hợp 100+ nguồn dữ liệu',
    ],
    image: 'analytics',
  },
  {
    id: 'commerce',
    icon: <ShoppingCart size={24} />,
    color: '#10b981',
    name: 'TechVision Commerce',
    tagline: 'Thương mại điện tử',
    desc: 'Giải pháp thương mại điện tử toàn diện, từ quản lý sản phẩm đến xử lý đơn hàng và thanh toán.',
    features: [
      'Quản lý kho hàng thông minh',
      'Thanh toán đa kênh',
      'Tích hợp vận chuyển tự động',
      'CRM khách hàng tích hợp',
      'Marketing automation',
    ],
    image: 'commerce',
  },
  {
    id: 'hrm',
    icon: <Users size={24} />,
    color: '#f59e0b',
    name: 'TechVision HRM',
    tagline: 'Quản lý nhân sự',
    desc: 'Hệ thống quản lý nhân sự hiện đại, tối ưu hóa quy trình tuyển dụng, đào tạo và phát triển nhân tài.',
    features: [
      'Tuyển dụng & onboarding tự động',
      'Chấm công & tính lương thông minh',
      'Đánh giá hiệu suất KPI',
      'Đào tạo & phát triển kỹ năng',
      'Phúc lợi & bảo hiểm linh hoạt',
    ],
    image: 'hrm',
  },
  {
    id: 'ai',
    icon: <Bot size={24} />,
    color: '#8b5cf6',
    name: 'TechVision AI Studio',
    tagline: 'AI & Automation',
    desc: 'Studio xây dựng ứng dụng AI không cần code, tạo chatbot, tự động hóa và quy trình thông minh.',
    features: [
      'No-code AI model builder',
      'Chatbot đa ngôn ngữ',
      'Xử lý văn bản & hình ảnh',
      'Tích hợp API linh hoạt',
      'Theo dõi hiệu suất model',
    ],
    image: 'ai',
  },
]

function ProductVisual({ type, color }) {
  const items = {
    analytics: (
      <div className="pv-analytics">
        <div className="pv-header">
          <span className="pv-title">Revenue Overview</span>
          <span className="pv-date">Tháng 2, 2026</span>
        </div>
        <div className="pv-big-number">₫4.82B <span className="pv-up">+23%</span></div>
        <div className="pv-bars">
          {[60, 45, 80, 55, 95, 70, 85, 90, 65, 75, 88, 100].map((h, i) => (
            <div key={i} className="pv-bar-wrap">
              <div className="pv-bar" style={{ height: `${h}%`, background: color, opacity: i === 11 ? 1 : 0.3 }} />
            </div>
          ))}
        </div>
        <div className="pv-pills">
          <span className="pv-pill" style={{ background: `${color}20`, color }}>Tăng trưởng tốt</span>
          <span className="pv-pill" style={{ background: 'rgba(16,185,129,0.15)', color: '#10b981' }}>+12K khách hàng</span>
        </div>
      </div>
    ),
    commerce: (
      <div className="pv-commerce">
        {[
          { name: 'Đơn hàng mới', count: 1284, badge: 'Hôm nay' },
          { name: 'Doanh thu', count: '₫286M', badge: '' },
          { name: 'Tồn kho', count: '4,820 SP', badge: 'Cập nhật' },
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
          <span className="pv-progress-label">Mục tiêu tháng</span>
          <div className="pv-progress-bar">
            <div className="pv-progress-fill" style={{ width: '72%', background: color }} />
          </div>
          <span className="pv-progress-pct" style={{ color }}>72%</span>
        </div>
      </div>
    ),
    hrm: (
      <div className="pv-hrm">
        <div className="pv-hrm-title">Nhân sự tháng này</div>
        <div className="pv-hrm-stats">
          <div className="pv-hrm-stat" style={{ background: `${color}15` }}>
            <span className="pv-hrm-num" style={{ color }}>248</span>
            <span>Nhân viên</span>
          </div>
          <div className="pv-hrm-stat" style={{ background: 'rgba(16,185,129,0.12)' }}>
            <span className="pv-hrm-num" style={{ color: '#10b981' }}>12</span>
            <span>Tuyển mới</span>
          </div>
          <div className="pv-hrm-stat" style={{ background: 'rgba(239,68,68,0.1)' }}>
            <span className="pv-hrm-num" style={{ color: '#ef4444' }}>3</span>
            <span>Nghỉ việc</span>
          </div>
        </div>
        <div className="pv-hrm-list">
          {['Nguyễn Văn An', 'Trần Thị Bình', 'Lê Minh Cường'].map((name, i) => (
            <div key={i} className="pv-hrm-person">
              <div className="pv-avatar" style={{ background: `hsl(${i * 80 + 220},70%,60%)` }}>{name[0]}</div>
              <span>{name}</span>
              <span className="pv-hrm-role" style={{ color }}>Kỹ sư {i + 1}</span>
            </div>
          ))}
        </div>
      </div>
    ),
    ai: (
      <div className="pv-ai">
        <div className="pv-ai-chat">
          <div className="pv-chat-msg bot">
            <div className="pv-chat-bubble bot-bubble">Xin chào! Tôi có thể giúp gì cho bạn?</div>
          </div>
          <div className="pv-chat-msg user">
            <div className="pv-chat-bubble user-bubble" style={{ background: color }}>
              Phân tích doanh số Q1 2026
            </div>
          </div>
          <div className="pv-chat-msg bot">
            <div className="pv-chat-bubble bot-bubble">
              Doanh số Q1 tăng 28% so với cùng kỳ. Sản phẩm A dẫn đầu với ₫1.2B...
            </div>
          </div>
        </div>
        <div className="pv-ai-models">
          {['GPT-4', 'Claude 3', 'Gemini'].map((m, i) => (
            <span key={i} className="pv-model-tag" style={{ background: `${color}15`, color }}>{m}</span>
          ))}
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
            Sản phẩm
          </div>
          <h2 className="section-title">
            Hệ sinh thái sản phẩm<br />
            <span className="gradient-text">đa dạng & mạnh mẽ</span>
          </h2>
          <p className="section-subtitle">
            Bốn nền tảng phần mềm chuyên biệt, tích hợp hoàn hảo với nhau để phục vụ
            mọi nhu cầu vận hành của doanh nghiệp.
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
                Dùng thử ngay
                <ArrowRight size={16} />
              </a>
              <button className="btn btn-outline">Tìm hiểu thêm</button>
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
