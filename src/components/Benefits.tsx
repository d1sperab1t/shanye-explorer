import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const benefits = [
  {
    num: '01',
    title: '专属山野梦想家定制礼包',
    tag: '入营即获',
    items: ['定制莫干山寻迹全景地图', '山野运动专属护肤套装', '第一视角专业视频拍摄全流程指导', '专业功能性运动营养补给套装', '限定惊喜神秘礼物盲盒'],
  },
  {
    num: '02',
    title: '48小时倒计时·山野落跑专属计划',
    tag: '官方认证',
    items: ['以48小时倒计时主线贯穿全程活动', '沉浸式任务驱动，积累专属个人山野运动印记', '莫干山户外协会官方专属认证'],
  },
  {
    num: '03',
    title: '非遗传承人·深度山野文脉探索',
    tag: '文化溯源',
    items: ['跟随非遗传承人实地踏查山野', '深度勘探百年人文与自然文化脉络', '完成山野精神的文化传承与价值传递'],
  },
  {
    num: '04',
    title: '独家定制·莫干山专属运动路线设计',
    tag: '独家权益',
    items: ['自主DIY原创设计专属莫干山山野运动路线', '优质原创路线纳入莫干山官方路线资源库存档', '获得下一届官方赛事路线设计参与资格'],
  },
  {
    num: '05',
    title: '专业级运动恢复·理疗康复体系体验',
    tag: '科学恢复',
    items: ['体验顶尖运动员同款被动科学训练体系', '专业运动康复团队一对一系统化干预指导', '掌握科学运动、高效恢复的专业训练方法'],
  },
  {
    num: '06',
    title: '高山氧高阶心肺健康管理赛前增益',
    tag: '运动科学',
    items: ['全方位深度身体机能检测', '模拟海拔高低氧交替训练', '心肺功能精准记录与提升建议'],
  },
  {
    num: '07',
    title: '寻迹落日·逐光越野赛事专属名额',
    tag: '官方赛事',
    items: ['获赠山野梦想家限定专属运动服饰', '直通10.6km寻迹主题落日越野跑赛事名额', '专属CP补给点定点抓拍记录高光瞬间'],
  },
  {
    num: '08',
    title: '全流程视觉影像全程服务',
    tag: '内容冷启动',
    items: ['高阶山野运动视觉美学教学', '专业摄影团队全程第三视角跟拍', '定制产出6条个人专属短视频产出', '享受官方专属流量投流扶持补贴'],
  },
  {
    num: '09',
    title: '山野旅居礼遇·篝火跨界晚宴双重体验',
    tag: '身体闭环',
    items: ['山野梦想家原创DIY路线投票仪式', '篝火晚宴跨界圈层深度交流', '尊享山野晚安助眠礼遇'],
  },
  {
    num: '10',
    title: '终身莫干山文化传承者身份授予',
    tag: '永久身份',
    items: ['莫干山户外运动协会官方运动博主认证', '实体证书官方颁发仪式', '莫干山山野文化传承者背书'],
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
        padding: '40px 32px 48px',
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
            {[
              ['零跑', '领跑'],
              ['达人', '山野人'],
              ['记路者', '传承记录者'],
            ].map(([from, to]) => (
              <div key={from} style={{ display: 'grid', gridTemplateColumns: 'max-content max-content max-content max-content', alignItems: 'baseline', gap: '0 0.18em', whiteSpace: 'nowrap' }}>
                <span style={{ color: 'rgba(255,255,255,0.4)' }}>从</span>
                <span>{from}</span>
                <span style={{ color: 'rgba(255,255,255,0.4)' }}>到</span>
                <span style={{ color: 'var(--accent)' }}>{to}</span>
              </div>
            ))}
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
              desc: '坐落于莫干山竹林深处，全球顶级度假品牌郡安里，为记路家专属呈现。',
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
              desc: '记路家身份赋予你最先一步的机会，顶级赛事名额，优先锁定，不错过每一场值得的出发。',
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
