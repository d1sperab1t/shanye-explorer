import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const rows = [
  { label: '野奢度假酒店住宿2晚', value: '¥3,000' },
  { label: '记路家专属大礼包', value: '¥1,500' },
  { label: '专业运动恢复理疗', value: '¥3,000/次' },
  { label: '晚安双重恢复礼', value: '¥500' },
  { label: '6条短视频拍摄剪辑', value: '¥9,800' },
  { label: '山野视觉教学课程', value: '¥1,980' },
  { label: '高山氧运动健康体验', value: '专属资源' },
  { label: '官方投流资金补贴', value: '平台承担' },
  { label: '莫干山文化传承者证书', value: '不对外单独发售' },
  { label: '官方路线库收录资格', value: '荣誉，无市价' },
  { label: '认证课程长期专属折扣', value: '持续受益' },
]

export default function ValueTable() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const photoRef = useRef<HTMLDivElement>(null)
  const photoInView = useInView(photoRef, { once: true, margin: '-80px' })

  return (
    <section style={{ padding: '0 0 120px' }}>
      {/* Full-width photo strip with overlay text */}
      <motion.div
        ref={photoRef}
        initial={{ opacity: 0 }}
        animate={photoInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        style={{
          position: 'relative', height: 'clamp(260px, 35vw, 460px)',
          overflow: 'hidden', marginBottom: 80,
        }}
      >
        <img
          src="/sucai/race1.jpg"
          alt="Runners in the city"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 40%' }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(135deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.2) 100%)',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          display: 'flex', alignItems: 'center',
          padding: 'max(4vw, 48px)',
        }}>
          <div>
            <div style={{
              fontSize: 11, letterSpacing: '0.28em', color: 'rgba(255,255,255,0.55)',
              textTransform: 'uppercase', marginBottom: 16,
              display: 'flex', alignItems: 'center', gap: 12,
            }}>
              <span style={{ display: 'block', width: 24, height: 2, background: 'var(--accent)' }} />
              权益价值一览
            </div>
            <h2 style={{
              fontSize: 'clamp(40px, 7vw, 96px)',
              fontWeight: 900, color: 'white',
              letterSpacing: '-0.03em', lineHeight: 0.95,
              fontFamily: 'var(--sans)',
            }}>
              综合价值<br />
              <span style={{ color: 'var(--accent)' }}>¥19,000<span style={{ fontSize: '0.55em', fontWeight: 700, verticalAlign: 'middle', marginLeft: 4 }}>+</span></span>
            </h2>
          </div>
        </div>
      </motion.div>

      {/* Table section */}
      <div ref={ref} className="value-table-grid" style={{ padding: '0 max(3vw, 48px)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }}>

        {/* Left: table */}
        <div className="value-table-inner">
          <div style={{
            display: 'flex', justifyContent: 'space-between',
            padding: '10px 0', marginBottom: 8,
            borderBottom: '2px solid var(--dark)',
          }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--muted)' }}>
              权益项目
            </span>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--muted)' }}>
              市场价值
            </span>
          </div>

          {rows.map((row, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.03 + i * 0.035, ease: [0.22, 1, 0.36, 1] }}
              style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '14px 0',
                borderBottom: '1px solid var(--border)',
              }}
            >
              <span style={{ fontSize: 13, color: '#444', lineHeight: 1.4 }}>{row.label}</span>
              <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--text)', letterSpacing: '0.02em', textAlign: 'right' }}>
                {row.value}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Right: price card + photo */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="value-price-col"
          style={{ display: 'flex', flexDirection: 'column', gap: 24 }}
        >
          {/* Price callout */}
          <div style={{
            background: 'var(--dark)',
            padding: 'clamp(32px, 4vw, 48px)',
          }}>
            <div style={{ fontSize: 11, letterSpacing: '0.22em', color: 'rgba(255,255,255,0.4)', marginBottom: 8, textTransform: 'uppercase' }}>
              首期早鸟价
            </div>
            <div style={{ fontSize: 'clamp(52px, 8vw, 80px)', fontWeight: 900, color: 'var(--accent)', lineHeight: 1, letterSpacing: '-0.03em', marginBottom: 16 }}>
              ¥5,980
            </div>
            <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', textDecoration: 'line-through', marginBottom: 24 }}>
              原价 ¥12,800
            </div>
            <div style={{
              display: 'flex', gap: 24,
              paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.1)',
            }}>
              {[['15席', '首期名额'], ['3天2夜', '活动时长'], ['10项', '专属权益']].map(([num, label]) => (
                <div key={label} style={{ textAlign: 'center', flex: 1 }}>
                  <div style={{ fontSize: 18, fontWeight: 800, color: 'white', lineHeight: 1 }}>{num}</div>
                  <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em', marginTop: 6 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Night race photo */}
          <div style={{ position: 'relative', flex: 1, minHeight: 240, overflow: 'hidden' }}>
            <img
              src="/sucai/race3.jpg"
              alt="Night race"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%' }}
            />
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to top, rgba(0,0,0,0.65), transparent)',
            }} />
            <div style={{
              position: 'absolute', bottom: 20, left: 24,
              fontSize: 12, color: 'white', letterSpacing: '0.1em', fontWeight: 600,
            }}>
              寻迹 · 落日逐光 · 官方赛事
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  )
}
