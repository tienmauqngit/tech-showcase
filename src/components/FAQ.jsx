import { useState } from 'react'
import { Plus, Minus, HelpCircle } from 'lucide-react'
import './FAQ.css'

const faqs = [
  {
    q: 'Giai phap co phu hop cho benh vien va don vi hanh chinh cong khong?',
    a: 'Co. He thong duoc thiet ke theo quy trinh tiep nhan ho so, huong dan thu tuc, dat lich va cham soc sau xu ly. Noi dung tra loi co the tuy chinh theo tung don vi.',
  },
  {
    q: 'Co tich hop duoc Zalo OA, website va CRM/HIS khong?',
    a: 'Co. Nhan su co the van hanh tren mot dashboard, du lieu hoi dap duoc dong bo de theo doi lich su xu ly va do hieu qua.',
  },
  {
    q: 'AI co thay the hoan toan nhan vien tu van khong?',
    a: 'Khong. Muc tieu la giam viec lap lai va tang toc phan hoi. Cac tinh huong phuc tap van duoc chuyen den nhan vien phu trach.',
  },
  {
    q: 'Mat bao lau de trien khai he thong dau tien?',
    a: 'Thuong tu 3 den 14 ngay tuy muc do tich hop. Ban dau co the go-live nhanh voi bo kich ban co ban, sau do mo rong theo giai doan.',
  },
  {
    q: 'Du lieu nhay cam duoc bao ve nhu the nao?',
    a: 'He thong co phan quyen theo vai tro, luu vet thao tac, va cho phep an thong tin nhay cam trong qua trinh xu ly hoi dap.',
  },
  {
    q: 'Co ho tro dao tao doi ngu van hanh khong?',
    a: 'Co. Goi trien khai bao gom huong dan su dung, tai lieu van hanh va buoi dao tao cho nhan vien quan tri noi dung.',
  },
]

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`faq-item ${open ? 'open' : ''}`}>
      <button className="faq-question" onClick={() => setOpen((v) => !v)}>
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
            Cau hoi thuong gap
          </div>
          <h2 className="section-title">
            Ban can lam ro dieu gi?<br />
            <span className="gradient-text">Chung toi san sang giai dap</span>
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
              <h3>Can tu van theo bai toan rieng?</h3>
              <p>Gui nhu cau cua ban, doi ngu TechVision se de xuat lo trinh va cau hinh phu hop theo linh vuc.</p>
              <div className="faq-contact-methods">
                <a href="#" className="contact-method">
                  <span className="cm-icon">Chat</span>
                  <div>
                    <div className="cm-title">Tu van nhanh</div>
                    <div className="cm-sub">Phan hoi trong gio hanh chinh</div>
                  </div>
                </a>
                <a href="#" className="contact-method">
                  <span className="cm-icon">Mail</span>
                  <div>
                    <div className="cm-title">Email</div>
                    <div className="cm-sub">hello@techvision.vn</div>
                  </div>
                </a>
                <a href="#" className="contact-method">
                  <span className="cm-icon">Call</span>
                  <div>
                    <div className="cm-title">Hotline</div>
                    <div className="cm-sub">1900 88 66</div>
                  </div>
                </a>
              </div>
              <a href="#" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '8px' }}>
                Nhan tu van 1-1
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
