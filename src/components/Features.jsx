import { Cpu, BarChart3, Shield, Workflow, Globe, Headphones, Database, Smartphone } from 'lucide-react'
import './Features.css'

const features = [
  {
    icon: <Cpu size={26} />,
    color: '#6366f1',
    bg: 'rgba(99,102,241,0.1)',
    title: 'AI & Machine Learning',
    desc: 'Tích hợp mô hình AI tiên tiến, tự động học hỏi và cải thiện hiệu suất theo thời gian thực.',
  },
  {
    icon: <BarChart3 size={26} />,
    color: '#10b981',
    bg: 'rgba(16,185,129,0.1)',
    title: 'Phân tích dữ liệu thông minh',
    desc: 'Dashboard trực quan với hơn 200+ biểu đồ và báo cáo tùy chỉnh, hỗ trợ quyết định chiến lược.',
  },
  {
    icon: <Shield size={26} />,
    color: '#06b6d4',
    bg: 'rgba(6,182,212,0.1)',
    title: 'Bảo mật cấp doanh nghiệp',
    desc: 'Mã hóa end-to-end, xác thực đa yếu tố, và tuân thủ các tiêu chuẩn ISO 27001, SOC 2.',
  },
  {
    icon: <Workflow size={26} />,
    color: '#f59e0b',
    bg: 'rgba(245,158,11,0.1)',
    title: 'Tự động hóa quy trình',
    desc: 'Xây dựng workflow phức tạp bằng giao diện kéo-thả trực quan, không cần viết code.',
  },
  {
    icon: <Globe size={26} />,
    color: '#8b5cf6',
    bg: 'rgba(139,92,246,0.1)',
    title: 'Hạ tầng toàn cầu',
    desc: '40+ trung tâm dữ liệu trên toàn thế giới, đảm bảo độ trễ thấp và khả năng mở rộng không giới hạn.',
  },
  {
    icon: <Database size={26} />,
    color: '#ef4444',
    bg: 'rgba(239,68,68,0.1)',
    title: 'Quản lý dữ liệu tập trung',
    desc: 'Đồng bộ và quản lý toàn bộ dữ liệu từ nhiều nguồn khác nhau trên một nền tảng duy nhất.',
  },
  {
    icon: <Smartphone size={26} />,
    color: '#06b6d4',
    bg: 'rgba(6,182,212,0.1)',
    title: 'Ứng dụng đa nền tảng',
    desc: 'Trải nghiệm mượt mà trên web, iOS và Android. Đồng bộ realtime trên tất cả thiết bị.',
  },
  {
    icon: <Headphones size={26} />,
    color: '#10b981',
    bg: 'rgba(16,185,129,0.1)',
    title: 'Hỗ trợ 24/7',
    desc: 'Đội ngũ kỹ thuật chuyên nghiệp sẵn sàng hỗ trợ bạn mọi lúc qua chat, email và điện thoại.',
  },
]

export default function Features() {
  return (
    <section className="features" id="features">
      <div className="container">
        <div className="features-header">
          <div className="section-tag">
            <Cpu size={14} />
            Tính năng nổi bật
          </div>
          <h2 className="section-title">
            Mọi thứ bạn cần để<br />
            <span className="gradient-text">vận hành doanh nghiệp</span>
          </h2>
          <p className="section-subtitle">
            Bộ công cụ toàn diện được thiết kế để tối ưu hóa từng khía cạnh
            trong hoạt động kinh doanh của bạn.
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
                Tìm hiểu thêm
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
