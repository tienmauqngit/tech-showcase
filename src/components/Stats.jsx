import { useEffect, useRef, useState } from 'react'
import { TrendingUp } from 'lucide-react'
import './Stats.css'

const stats = [
  { value: 120, suffix: '+', label: 'Du an AI da trien khai', desc: 'Cho doanh nghiep, don vi cong va benh vien' },
  { value: 76, suffix: '%', label: 'Ti le hoi dap tu dong', desc: 'Giam tai tong dai va bo phan tiep nhan' },
  { value: 24, suffix: '/7', label: 'Van hanh lien tuc', desc: 'Khach hang duoc tu van moi luc' },
  { value: 40, suffix: '%', label: 'Giam chi phi CSKH TB', desc: 'Nho toi uu quy trinh tu van va phan luong' },
  { value: 3, suffix: ' ngay', label: 'Go-live nhanh', desc: 'Voi kich ban co ban cho web va Zalo OA' },
  { value: 93, suffix: '%', label: 'Muc do hai long', desc: 'Theo khao sat sau trien khai va van hanh' },
]

function useCountUp(target, duration = 1800, start = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return
    const isFloat = target % 1 !== 0
    const startTime = performance.now()

    const animate = (now) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = isFloat ? parseFloat((eased * target).toFixed(1)) : Math.floor(eased * target)
      setCount(current)
      if (progress < 1) requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)
  }, [target, duration, start])

  return count
}

function StatCard({ value, suffix, label, desc, animate }) {
  const count = useCountUp(value, 1800, animate)
  const isFloat = value % 1 !== 0

  return (
    <div className="stat-card">
      <div className="stat-value">
        <span className="stat-number">{isFloat ? count.toFixed(1) : count.toLocaleString()}</span>
        <span className="stat-suffix">{suffix}</span>
      </div>
      <div className="stat-label">{label}</div>
      <div className="stat-desc">{desc}</div>
    </div>
  )
}

export default function Stats() {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true)
    }, { threshold: 0.2 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="stats" ref={ref}>
      <div className="stats-bg">
        <div className="stats-orb stats-orb-1" />
        <div className="stats-orb stats-orb-2" />
      </div>
      <div className="container">
        <div className="stats-header">
          <div className="section-tag" style={{ background: 'rgba(255,255,255,0.15)', color: 'white', borderColor: 'rgba(255,255,255,0.2)' }}>
            <TrendingUp size={14} />
            So lieu trien khai
          </div>
          <h2 className="section-title" style={{ color: 'white' }}>
            Ket qua do luong duoc<br />
            <span style={{ opacity: 0.85 }}>tu cac du an thuc te</span>
          </h2>
        </div>
        <div className="stats-grid">
          {stats.map((s, i) => (
            <StatCard key={i} {...s} animate={visible} />
          ))}
        </div>
      </div>
    </section>
  )
}
