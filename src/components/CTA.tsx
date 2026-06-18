import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

function Countdown() {
  const TOTAL = 48 * 60 * 60
  const [elapsed, setElapsed] = useState(0)

  useEffect(() => {
    const start = Date.now()
    const id = setInterval(() => {
      setElapsed(Math.floor((Date.now() - start) / 1000))
    }, 1000)
    return () => clearInterval(id)
  }, [])

  const remaining = TOTAL - (elapsed % TOTAL)
  const h = Math.floor(remaining / 3600)
  const m = Math.floor((remaining % 3600) / 60)
  const s = remaining % 60
  const pad = (n: number) => String(n).padStart(2, '0')

  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 0 }}>
      {[['h', pad(h)], ['m', pad(m)], ['s', pad(s)]].map(([unit, val], i) => (
        <div key={unit} style={{ display: 'flex', alignItems: 'flex-start' }}>
          {i > 0 && (
            <span style={{
              fontSize: 'clamp(28px, 4vw, 52px)', fontWeight: 900,
              color: 'rgba(255,255,255,0.25)', lineHeight: 1,
              margin: '0 4px', alignSelf: 'flex-start', paddingTop: 4,
            }}>:</span>
          )}
          <div style={{ textAlign: 'center' }}>
            <div style={{
              fontSize: 'clamp(48px, 7vw, 88px)', fontWeight: 900,
              color: 'white', lineHeight: 1, letterSpacing: '-0.04em',
              fontVariantNumeric: 'tabular-nums',
              fontFamily: 'var(--sans)',
            }}>{val}</div>
            <div style={{
              fontSize: 10, letterSpacing: '0.2em', color: 'rgba(255,255,255,0.3)',
              textTransform: 'uppercase', marginTop: 8,
            }}>{unit === 'h' ? 'hours' : unit === 'm' ? 'min' : 'sec'}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function CTA() {
  const heroRef = useRef<HTMLDivElement>(null)
  const heroInView = useInView(heroRef, { once: true, margin: '-60px' })

  return (
    <section style={{ padding: '0 0 0' }}>

      {/* Full-bleed CTA section */}
      <motion.div
        ref={heroRef}
        initial={{ opacity: 0 }}
        animate={heroInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        style={{
          position: 'relative', overflow: 'hidden',
          minHeight: 560,
          display: 'flex', alignItems: 'center',
        }}
      >
        <img
          src="/sucai/race4.jpg"
          alt="Marathon runners"
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'center',
          }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(135deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0.3) 100%)',
        }} />

        <div className="cta-inner" style={{
          position: 'relative', zIndex: 10,
          padding: 'clamp(48px, 8vw, 100px) max(4vw, 60px)',
          maxWidth: 760,
        }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontSize: 11, letterSpacing: '0.3em', color: 'rgba(255,255,255,0.5)',
              textTransform: 'uppercase', marginBottom: 24,
              display: 'flex', alignItems: 'center', gap: 14,
            }}
          >
            <span style={{ display: 'block', width: 28, height: 2, background: 'var(--accent)' }} />
            莫干山户外运动协会 × 山野梦想家 × DEEPBEAT
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 36 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontSize: 'clamp(36px, 6.5vw, 80px)',
              fontWeight: 900, color: 'white',
              lineHeight: 1.05, letterSpacing: '-0.02em',
              marginBottom: 28, fontFamily: 'var(--sans)',
            }}
          >
            15个人<br />
            15条专属路线<br />
            <span style={{ color: 'var(--accent)' }}>15张传承者证书</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.45 }}
            style={{
              fontSize: 'clamp(14px, 1.8vw, 18px)',
              color: 'rgba(255,255,255,0.6)',
              lineHeight: 1.9, marginBottom: 48, maxWidth: 500,
            }}
          >
            48小时，用身体丈量莫干山。寻找懂运动又专业的你，玩出运动的正确生活方式。
          </motion.p>

          {/* Countdown */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.5 }}
            style={{ marginBottom: 16 }}
          >
            <Countdown />
            <p style={{
              fontSize: 13, color: 'rgba(255,255,255,0.45)',
              letterSpacing: '0.08em', marginTop: 20,
              borderTop: '1px solid rgba(255,255,255,0.08)',
              paddingTop: 20,
            }}>
              48小时倒计时开始，你准备好了吗？
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.58 }}
            className="cta-price-row"
            style={{ display: 'flex', alignItems: 'flex-end', gap: 32, flexWrap: 'wrap' }}
          >
            <div>
              <div style={{ fontSize: 11, letterSpacing: '0.2em', color: 'rgba(255,255,255,0.4)', marginBottom: 6, textTransform: 'uppercase' }}>
                首期早鸟价
              </div>
              <div style={{ fontSize: 'clamp(44px, 7vw, 72px)', fontWeight: 900, color: 'var(--accent)', lineHeight: 1, letterSpacing: '-0.02em' }}>
                ¥5,980
              </div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.3)', marginTop: 6 }}>
                原价 ¥12,800 · 仅限 15 席
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <a href="https://my.feishu.cn/share/base/form/shrcnqbR2ABIkzdEQHAKjSAwOib" target="_blank" rel="noopener noreferrer" style={{
                background: 'white', color: 'var(--dark)',
                border: 'none', padding: '16px 40px',
                fontSize: 14, fontWeight: 800,
                letterSpacing: '0.1em', textTransform: 'uppercase',
                cursor: 'pointer', textDecoration: 'none', display: 'inline-block',
              }}>
                立即报名
              </a>
              <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em', textAlign: 'center' }}>
                满席即止
              </span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
