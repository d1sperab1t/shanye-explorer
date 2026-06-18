import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const benefits = [
  {
    num: '01',
    title: '探路者专属大礼包',
    tag: '入营即获',
    items: ['莫干山越野地图', '运动护肤套装', '探路者运动服 + 运动袜', '专属定制行程单', '功能性营养补剂', '神秘礼物盲盒'],
  },
  {
    num: '02',
    title: '48小时倒计时城市落跑计划',
    tag: '官方认证',
    items: ['抵达即启动，以时间为轴贯穿整个活动', '全程任务驱动，积累专属山野足迹', '有始有终的仪式感'],
  },
  {
    num: '03',
    title: '莫干山传承人深度探索',
    tag: '文化溯源',
    items: ['跟随传承人深入山野', '了解莫干山文化脉络与地形肌理', '山野精神传递与路线设计灵感起点'],
  },
  {
    num: '04',
    title: '专属越野路线设计',
    tag: '独家权益',
    items: ['亲自设计一条莫干山越野路线', '篝火晚宴正式发布并接受投票', '最高分路线收纳进官方路线库', '有机会成为下届赛事指定路线'],
  },
  {
    num: '05',
    title: '专业运动恢复理疗',
    tag: '科学恢复',
    items: ['高端被动训练设备理疗服务', '专业康复团队系统干预', '科学恢复，认真对待身体'],
  },
  {
    num: '06',
    title: '高山氧运动健康体验',
    tag: '运动科学',
    items: ['莫干山专属高山氧设备体验', '心肺功能采样记录与训练', '感受山野环境下真实的运动数据'],
  },
  {
    num: '07',
    title: '寻迹·落日逐光赛事参与资格',
    tag: '官方赛事',
    items: ['山野梦想家官方赛事参与资格', '莫干山山脊与竹林间奔跑', '用身体丈量这片土地'],
  },
  {
    num: '08',
    title: '山野视觉全套内容服务',
    tag: '内容冷启动',
    items: ['山野视觉教学课程', '专业团队全程跟拍剪辑 8 条短视频', '官方投流资金补贴'],
  },
  {
    num: '09',
    title: '篝火晚宴 · 晚安双重礼',
    tag: '身体闭环',
    items: ['篝火晚宴 · 路线发布 · 投票仪式', '高端被动训练设备深度恢复体验', '专属助眠礼遇，进入深度恢复'],
  },
  {
    num: '10',
    title: '莫干山文化传承者身份授予',
    tag: '永久身份',
    items: ['篝火晚宴现场正式授予身份', '颁发专属实体证书', '永久有效的山野背书'],
  },
]

function BenefitCard({ b, index }: { b: typeof benefits[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: (index % 2) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      style={{
        background: 'var(--card)',
        padding: '36px 32px',
        display: 'flex', flexDirection: 'column', gap: 20,
        borderBottom: '3px solid transparent',
        transition: 'border-color 0.25s, box-shadow 0.25s',
        cursor: 'default',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLDivElement
        el.style.borderBottomColor = 'var(--accent)'
        el.style.boxShadow = '0 8px 32px rgba(0,0,0,0.08)'
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLDivElement
        el.style.borderBottomColor = 'transparent'
        el.style.boxShadow = 'none'
      }}
    >
      {/* Number + tag row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <span style={{
          fontSize: 'clamp(40px, 5vw, 56px)',
          fontWeight: 900, color: 'var(--accent)',
          lineHeight: 1, letterSpacing: '-0.03em',
          fontFamily: 'var(--sans)',
        }}>
          {b.num}
        </span>
        <span style={{
          fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase',
          color: 'var(--accent)', border: '1px solid var(--accent)',
          padding: '4px 10px', marginTop: 4,
          fontWeight: 600,
        }}>
          {b.tag}
        </span>
      </div>

      {/* Title */}
      <h3 style={{
        fontSize: 'clamp(16px, 1.8vw, 20px)',
        fontWeight: 700, color: 'var(--text)',
        letterSpacing: '0.02em', lineHeight: 1.3,
        fontFamily: 'var(--serif)',
      }}>
        {b.title}
      </h3>

      {/* Items */}
      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {b.items.map((item, i) => (
          <li key={i} style={{
            display: 'flex', alignItems: 'flex-start', gap: 12,
            fontSize: 13, color: 'var(--muted)', lineHeight: 1.6,
          }}>
            <span style={{
              display: 'block', width: 6, height: 6,
              borderRadius: '50%', background: 'var(--accent)',
              marginTop: 6, flexShrink: 0,
            }} />
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default function Benefits() {
  const titleRef = useRef<HTMLDivElement>(null)
  const titleInView = useInView(titleRef, { once: true, margin: '-80px' })
  const photoRef = useRef<HTMLDivElement>(null)
  const photoInView = useInView(photoRef, { once: true, margin: '-80px' })

  return (
    <section style={{ background: 'var(--bg)', padding: '0 0 120px' }}>

      {/* Section intro — full-width image with frosted text overlay */}
      <motion.div
        ref={photoRef}
        initial={{ opacity: 0 }}
        animate={photoInView ? { opacity: 1 } : {}}
        transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'relative', height: 780, overflow: 'hidden',
          marginBottom: 80,
        }}
      >
        {/* Background image */}
        <img
          src="/sucai/race2.jpg"
          alt="Hikers on mountain"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%' }}
        />

        {/* Top-to-bottom frosted gradient */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, rgba(10,10,10,0.82) 0%, rgba(10,10,10,0.55) 45%, rgba(10,10,10,0.15) 100%)',
          backdropFilter: 'blur(0px)',
        }} />

        {/* Text content — top area */}
        <div ref={titleRef} className="benefits-photo-text" style={{
          position: 'absolute', top: 0, left: 0, right: 0,
          padding: 'clamp(48px, 6vw, 80px)',
          display: 'flex', flexDirection: 'column',
        }}>
          <motion.h2
            className="benefits-hero-title"
            initial={{ opacity: 0, y: 24 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontSize: 'clamp(44px, 7.5vw, 104px)',
              fontWeight: 900, color: 'white',
              lineHeight: 1.05, letterSpacing: '-0.04em',
              marginBottom: 28, fontFamily: 'var(--sans)',
            }}
          >
            <div style={{ whiteSpace: 'nowrap' }}><span style={{ marginRight: '0.3em' }}>从</span>零跑到<span style={{ color: 'var(--accent)' }}>领跑</span></div>
            <div style={{ whiteSpace: 'nowrap' }}><span style={{ marginRight: '0.3em' }}>从</span>达人到<span style={{ color: 'var(--accent)' }}>山野人</span></div>
            <div style={{ whiteSpace: 'nowrap' }}><span style={{ marginRight: '0.3em' }}>从</span>探路者到<span style={{ color: 'var(--accent)' }}>传承记录者</span></div>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              fontSize: 14, color: 'rgba(255,255,255,0.5)',
              lineHeight: 1.9, maxWidth: 480,
              letterSpacing: '0.01em',
            }}
          >
            这不只是一次活动，是一套文化 + 身份 + 内容的完整配置包。<br />
            每一项权益都是为认真对待运动的内容创作者量身设计。
          </motion.p>

        </div>

        {/* Bottom location label */}
        <div style={{
          position: 'absolute', bottom: 36, right: 44,
          color: 'rgba(255,255,255,0.4)', textAlign: 'right',
        }}>
          <div style={{ fontSize: 10, letterSpacing: '0.28em', textTransform: 'uppercase' }}>
            Moganshan · Zhejiang
          </div>
        </div>
      </motion.div>

      {/* Featured perks — horizontal image cards */}
      <div className="benefits-section-pad" style={{ padding: '0 max(3vw, 48px)', marginBottom: 80 }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 12,
          marginBottom: 32,
          fontSize: 11, letterSpacing: '0.26em', color: 'var(--muted)', textTransform: 'uppercase',
        }}>
          <span style={{ display: 'block', width: 20, height: 2, background: 'var(--accent)' }} />
          Featured Experience · 2026
        </div>
        <div className="benefits-featured-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
          {[
            {
              img: '/sucai/01.jpg',
              title: '入住莫干山 Joe Lalli 郡安里度假酒店',
              desc: '坐落于莫干山竹林深处，全球顶级度假品牌郡安里，为探路者专属呈现。',
            },
            {
              img: '/sucai/02.jpg',
              title: '感受莫干山百年红土网球场',
              desc: '百年历史沉淀，莫干山标志性红土场地，在山野间挥拍，体验运动与自然的融合。',
            },
            {
              img: '/sucai/03.jpg',
              title: '感受国际运动员同款运动恢复设备',
              desc: '顶级被动训练设备，专业康复团队全程支持，科学恢复，认真对待每一个身体。',
            },
            {
              img: '/sucai/04.jpg',
              title: '优先抢购超级赛事名额',
              desc: '探路者身份赋予你最先一步的机会，顶级赛事名额，优先锁定，不错过每一场值得的出发。',
              note: '*超级赛事名额限量，以届时发布名额数量为准',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              style={{ position: 'relative', overflow: 'hidden', cursor: 'default' }}
            >
              {/* 4:3 image frame */}
              <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden' }}>
                <img
                  src={item.img}
                  alt={item.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block', transition: 'transform 0.6s ease' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.04)' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)' }}
                />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.05) 50%, transparent 100%)',
                }} />
                {/* Text overlay */}
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '20px 24px' }}>
                  <div style={{ fontSize: 15, fontWeight: 700, color: 'white', lineHeight: 1.4, marginBottom: 6, fontFamily: 'var(--serif)' }}>
                    {item.title}
                  </div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)', lineHeight: 1.65 }}>
                    {item.desc}
                  </div>
                  {'note' in item && (
                    <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.45)', marginTop: 6, lineHeight: 1.6 }}>
                      {(item as any).note}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Section label */}
      <div className="benefits-section-pad" style={{ padding: '0 max(3vw, 48px)', marginBottom: 40 }}>
        <div className="benefits-label-row" style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
          borderBottom: '2px solid var(--dark)', paddingBottom: 20,
        }}>
          <div style={{
            fontSize: 11, letterSpacing: '0.26em', color: 'var(--muted)',
            textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: 12,
          }}>
            <span style={{ display: 'block', width: 20, height: 2, background: 'var(--accent)' }} />
            Popular Perks · 2026
          </div>
          <h2 style={{
            fontSize: 'clamp(32px, 5vw, 56px)',
            fontWeight: 900, color: 'var(--dark)',
            letterSpacing: '-0.02em', lineHeight: 1,
            fontFamily: 'var(--sans)',
          }}>
            十大专属权益
          </h2>
          <p style={{ fontSize: 13, color: 'var(--muted)', maxWidth: 260, textAlign: 'right', lineHeight: 1.7 }}>
            每一项都是为认真对待运动的<br />内容创作者量身设计。
          </p>
        </div>
      </div>

      {/* Cards grid */}
      <div className="benefits-cards-grid" style={{
        padding: '0 max(3vw, 48px)',
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 16,
      }}>
        {benefits.map((b, i) => (
          <BenefitCard key={b.num} b={b} index={i} />
        ))}
      </div>
    </section>
  )
}
