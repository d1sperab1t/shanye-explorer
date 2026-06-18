import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const WORDS = ['探路者', '传承人', '山野人', '梦想家']

export default function Hero() {
  const [wordIdx, setWordIdx] = useState(0)
  const [display, setDisplay] = useState('')
  const [phase, setPhase] = useState<'typing' | 'pause' | 'deleting'>('typing')

  useEffect(() => {
    const target = WORDS[wordIdx]
    let timer: ReturnType<typeof setTimeout>
    if (phase === 'typing') {
      if (display.length < target.length) {
        timer = setTimeout(() => setDisplay(target.slice(0, display.length + 1)), 100)
      } else {
        timer = setTimeout(() => setPhase('pause'), 2000)
      }
    } else if (phase === 'pause') {
      timer = setTimeout(() => setPhase('deleting'), 500)
    } else {
      if (display.length > 0) {
        timer = setTimeout(() => setDisplay(display.slice(0, -1)), 55)
      } else {
        setWordIdx(i => (i + 1) % WORDS.length)
        setPhase('typing')
      }
    }
    return () => clearTimeout(timer)
  }, [display, phase, wordIdx])

  return (
    <section style={{ minHeight: '100svh', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>

      {/* Background photo */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: 'url(/sucai/hero.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
      }} />

      {/* Gradient overlay */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.42) 55%, rgba(0,0,0,0.82) 100%)',
      }} />

      {/* Nav */}
      <nav style={{
        position: 'relative', zIndex: 10,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '28px 48px',
      }}>
        <motion.span
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}
          style={{ color: 'white', fontWeight: 800, fontSize: 11, letterSpacing: '0.08em', whiteSpace: 'nowrap' }}
        >
          莫干山户外运动协会 × 山野梦想家 × DEEPBEAT
        </motion.span>
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.1 }}
          style={{ display: 'flex', gap: 36, alignItems: 'center' }}
        >
          {['关于', '权益', '报名'].map(item => (
            <span key={item} style={{ color: 'rgba(255,255,255,0.72)', fontSize: 13, letterSpacing: '0.06em', cursor: 'pointer' }}>
              {item}
            </span>
          ))}
          <a href="https://my.feishu.cn/share/base/form/shrcnqbR2ABIkzdEQHAKjSAwOib" target="_blank" rel="noopener noreferrer" style={{
            background: 'white', color: '#0A0A0A',
            border: 'none', padding: '10px 22px',
            fontSize: 12, fontWeight: 700, letterSpacing: '0.1em',
            cursor: 'pointer', textTransform: 'uppercase',
            textDecoration: 'none', display: 'inline-block',
          }}>
            立即报名
          </a>
        </motion.div>
      </nav>

      {/* Main title block */}
      <div style={{
        flex: 1, position: 'relative', zIndex: 10,
        display: 'flex', flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '0 48px 0',
      }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            fontSize: 11, letterSpacing: '0.32em', color: 'rgba(255,255,255,0.55)',
            textTransform: 'uppercase', marginBottom: 24,
            display: 'flex', alignItems: 'center', gap: 16,
          }}
        >
          <span style={{ display: 'block', width: 36, height: 1, background: 'rgba(255,255,255,0.4)' }} />
          寻迹莫干山 · 2026年首期
        </motion.div>

        <h1 style={{
          fontSize: 'clamp(64px, 12vw, 172px)',
          fontWeight: 900, lineHeight: 1.0,
          letterSpacing: '0.04em',
          fontFamily: "'Noto Sans SC', sans-serif",
        }}>
          <div style={{ color: 'white' }}>寻迹莫干山</div>
          <div style={{ color: 'var(--accent)' }}>探路者计划</div>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          style={{
            fontSize: 'clamp(16px, 2vw, 22px)',
            color: 'rgba(255,255,255,0.75)',
            marginTop: 28, marginBottom: 0,
            fontWeight: 300, lineHeight: 1.7,
            display: 'flex', alignItems: 'center', gap: 12,
          }}
        >
          寻找那个
          <span style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start', width: '5em', flexShrink: 0 }}>
            <span style={{ fontWeight: 700, color: 'white', display: 'flex', alignItems: 'center', height: '1.7em' }}>
              {display}
              <span style={{ display: 'inline-block', width: 2, height: '0.85em', background: 'white', marginLeft: 2, animation: 'blink 1s ease-in-out infinite', flexShrink: 0 }} />
            </span>
          </span>
        </motion.div>

        {/* Slogan */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75 }}
          style={{
            marginTop: 48,
            paddingBottom: 0,
            borderLeft: '3px solid var(--accent)',
            paddingLeft: 20,
          }}
        >
          <div style={{ fontSize: 'clamp(15px, 1.6vw, 20px)', color: 'rgba(255,255,255,0.9)', fontWeight: 500, lineHeight: 1.9, letterSpacing: '0.08em' }}>
            寻找懂运动又专业的你
          </div>
          <div style={{ fontSize: 'clamp(13px, 1.3vw, 17px)', color: 'rgba(255,255,255,0.55)', fontWeight: 300, letterSpacing: '0.08em' }}>
            玩出运动的正确生活方式
          </div>
        </motion.div>
      </div>

      {/* Date badge */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        style={{
          position: 'relative', zIndex: 10,
          padding: '0 48px',
          marginTop: 40,
          display: 'flex', alignItems: 'center', gap: 12,
        }}
      >
        <span style={{
          display: 'inline-flex', alignItems: 'center', gap: 10,
          border: '1px solid rgba(255,255,255,0.2)',
          padding: '8px 18px',
          fontSize: 11, letterSpacing: '0.18em',
          color: 'rgba(255,255,255,0.6)',
          textTransform: 'uppercase',
        }}>
          <span style={{ display: 'block', width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)' }} />
          首期 · 2026.7.3 — 7.5
        </span>
      </motion.div>

      {/* Explore button */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.75 }}
        style={{
          position: 'relative', zIndex: 10,
          margin: '48px',
          display: 'flex', justifyContent: 'center',
        }}
      >
        <div style={{
          padding: '16px 48px',
          background: 'var(--dark)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer',
        }}>
          <span style={{ color: 'white', fontSize: 13, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            Explore
          </span>
        </div>
      </motion.div>
    </section>
  )
}
