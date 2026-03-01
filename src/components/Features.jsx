import { Cpu, MessageSquare, Shield, Workflow, Globe, Headphones, Database, Smartphone } from 'lucide-react'
import './Features.css'

const features = [
  {
    icon: <Cpu size={26} />,
    color: '#0f766e',
    bg: 'rgba(15,118,110,0.1)',
    title: 'AI Agent cho công việc nội bộ',
    desc: 'Trợ lý AI trả lời quy trình, tổng hợp văn bản, viết email, tạo báo cáo nhanh cho nhân sự văn phòng.',
  },
  {
    icon: <MessageSquare size={26} />,
    color: '#0284c7',
    bg: 'rgba(2,132,199,0.1)',
    title: 'Chatbot doanh nghiệp',
    desc: 'Tự động tiếp nhận câu hỏi, hướng dẫn thủ tục, lọc nhu cầu và chuyển tư vấn viên khi cần.',
  },
  {
    icon: <Smartphone size={26} />,
    color: '#2563eb',
    bg: 'rgba(37,99,235,0.1)',
    title: 'Zalo AI tư vấn khách hàng',
    desc: 'Tích hợp Zalo OA để tư vấn 24/7, gửi nhắc lịch, xác nhận hồ sơ và chăm sóc sau dịch vụ.',
  },
  {
    icon: <Workflow size={26} />,
    color: '#f59e0b',
    bg: 'rgba(245,158,11,0.1)',
    title: 'Tự động hóa quy trình',
    desc: 'Tự động phân loại yêu cầu, tạo ticket, phân công phòng ban và theo dõi trạng thái xử lý.',
  },
  {
    icon: <Database size={26} />,
    color: '#7c3aed',
    bg: 'rgba(124,58,237,0.1)',
    title: 'Kho tri thức tập trung',
    desc: 'Đồng bộ tài liệu nghiệp vụ, FAQ, quy định để AI trả lời đúng ngữ cảnh và đúng chính sách.',
  },
  {
    icon: <Shield size={26} />,
    color: '#059669',
    bg: 'rgba(5,150,105,0.1)',
    title: 'Bảo mật và phân quyền',
    desc: 'Phân quyền theo vai trò, lưu vết thao tác, ẩn thông tin nhạy cảm trong mọi kênh tương tác.',
  },
  {
    icon: <Globe size={26} />,
    color: '#0ea5e9',
    bg: 'rgba(14,165,233,0.1)',
    title: 'Đa kênh một nền tảng',
    desc: 'Quản lý hỏi đáp từ web, Zalo, fanpage, tổng đài trên một dashboard duy nhất.',
  },
  {
    icon: <Headphones size={26} />,
    color: '#10b981',
    bg: 'rgba(16,185,129,0.1)',
    title: 'Vận hành và tối ưu liên tục',
    desc: 'Theo dõi chất lượng hỏi đáp, cập nhật kịch bản và huấn luyện AI theo dữ liệu mới.',
  },
]

export default function Features() {
  return (
    <section className="features" id="features">
      <div className="container">
        <div className="features-header">
          <div className="section-tag">
            <Cpu size={14} />
            Giải pháp trọng tâm
          </div>
          <h2 className="section-title">
            Nền tảng công nghệ cho<br />
            <span className="gradient-text">tư vấn và vận hành thông minh</span>
          </h2>
          <p className="section-subtitle">
            Thiết kế cho bài toán thực tế trong doanh nghiệp, y tế và hành chính:
            giảm tải tổng đài, tăng tốc xử lý hồ sơ và nâng cao trải nghiệm người dùng.
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
                Xem chi tiết
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
