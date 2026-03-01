import { useState } from 'react'
import { Briefcase, MessageCircle, Stethoscope, ArrowRight, CheckCircle2, Package } from 'lucide-react'
import './Products.css'

const products = [
  {
    id: 'workplace-ai',
    icon: <Briefcase size={24} />,
    color: '#0f766e',
    name: 'AI Workplace Assistant',
    tagline: 'AI trong công việc',
    desc: 'Trợ lý AI cho nhân viên: trả lời quy trình, tóm tắt biên bản, tạo văn bản nhanh và hỗ trợ báo cáo.',
    features: [
      'Tìm và tóm tắt tài liệu nội bộ trong vài giây',
      'Tạo mẫu văn bản theo quy định từng phòng ban',
      'Tự động tổng hợp số liệu và tạo báo cáo ngày',
      'Gợi ý hành động tiếp theo theo ngữ cảnh công việc',
      'Theo dõi KPI sử dụng AI theo đơn vị',
    ],
    image: 'workplace-ai',
  },
  {
    id: 'enterprise-chatbot',
    icon: <MessageCircle size={24} />,
    color: '#0284c7',
    name: 'Enterprise Chatbot Platform',
    tagline: 'Chatbot doanh nghiệp',
    desc: 'Nền tảng chatbot đa kênh giúp tiếp nhận và xử lý yêu cầu khách hàng tự động 24/7.',
    features: [
      'Kịch bản hỏi đáp theo từng ngành nghề',
      'Phân luồng hội thoại cho bộ phận phụ trách',
      'Tích hợp CRM để lưu lịch sử và cơ hội bán hàng',
      'Đánh giá mức độ hài lòng sau mỗi phiên chat',
      'Báo cáo tỉ lệ xử lý tự động và thời gian phản hồi',
    ],
    image: 'enterprise-chatbot',
  },
  {
    id: 'zalo-healthcare',
    icon: <Stethoscope size={24} />,
    color: '#2563eb',
    name: 'Zalo AI Advisor',
    tagline: 'Zalo AI cho y tế và hành chính',
    desc: 'Giải pháp tư vấn qua Zalo OA cho bệnh viện, phòng khám và đơn vị hành chính công.',
    features: [
      'Hướng dẫn thủ tục, giấy tờ và quy trình tiếp nhận',
      'Đặt lịch khám, nhắc lịch và thông báo kết quả',
      'Trả lời câu hỏi thường gặp theo đúng kiểu ngữ nghiệp vụ',
      'Kết nối tổng đài viên khi vượt phạm vi AI',
      'Thống kê lượt hỏi đáp theo từng dịch vụ',
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
          <span className="pv-date">Tháng 03, 2026</span>
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
          <span className="pv-pill" style={{ background: `${color}20`, color }}>Năng suất +35%</span>
          <span className="pv-pill" style={{ background: 'rgba(16,185,129,0.15)', color: '#10b981' }}>Sai sót giảm 22%</span>
        </div>
      </div>
    ),
    'enterprise-chatbot': (
      <div className="pv-ai">
        <div className="pv-ai-chat">
          <div className="pv-chat-msg bot">
            <div className="pv-chat-bubble bot-bubble">Xin chào, tôi có thể hỗ trợ bạn vấn đề gì?</div>
          </div>
          <div className="pv-chat-msg user">
            <div className="pv-chat-bubble user-bubble" style={{ background: color }}>
              Tôi cần tra cứu thủ tục cấp lại hồ sơ.
            </div>
          </div>
          <div className="pv-chat-msg bot">
            <div className="pv-chat-bubble bot-bubble">
              Bạn vui lòng cung cấp mã hồ sơ. Tôi đã gửi danh sách giấy tờ cần bổ sung.
            </div>
          </div>
        </div>
        <div className="pv-ai-models">
          {['Kho tri thức', 'Intent AI', 'Live Agent'].map((m, i) => (
            <span key={i} className="pv-model-tag" style={{ background: `${color}15`, color }}>{m}</span>
          ))}
        </div>
      </div>
    ),
    'zalo-healthcare': (
      <div className="pv-commerce">
        {[
          { name: 'Lịch hẹn mới', count: 684, badge: 'Hôm nay' },
          { name: 'Lượt tư vấn Zalo', count: '4,920', badge: '' },
          { name: 'Tỷ lệ xử lý tự động', count: '76%', badge: 'Ổn định' },
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
          <span className="pv-progress-label">Mục tiêu giảm tải quầy tiếp nhận</span>
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
            Sản phẩm tiêu biểu
          </div>
          <h2 className="section-title">
            Bộ sản phẩm công nghệ<br />
            <span className="gradient-text">ứng dụng AI theo từng bài toán</span>
          </h2>
          <p className="section-subtitle">
            Triển khai linh hoạt theo quy mô tổ chức, từ phương án nhanh cho SME đến mô hình
            tích hợp sâu cho bệnh viện, sở ban ngành và doanh nghiệp lớn.
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
                Tư vấn giải pháp
                <ArrowRight size={16} />
              </a>
              <button className="btn btn-outline">Tải tài liệu demo</button>
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
