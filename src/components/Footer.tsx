export default function Footer() {
  return (
    <footer className="footer-wrap" style={{
      background: 'var(--dark)',
      padding: '48px max(3vw, 48px)',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      flexWrap: 'wrap', gap: 16,
    }}>
      <div>
        <div style={{ fontSize: 13, fontWeight: 800, color: 'white', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 6 }}>
          Moganshan Road Explorer Project
        </div>
        <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.08em' }}>
          © 2026 寻迹莫干山 · 记路家计划
        </div>
      </div>

      <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', letterSpacing: '0.08em' }}>
        健康中国·山野梦想家
      </div>

      <div style={{ textAlign: 'right' }}>
        <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.1em', lineHeight: 1.8 }}>
          莫干山户外运动协会<br />
          山野梦想家 × DEEPBEAT<span style={{ fontFamily: 'var(--serif)', fontWeight: 400, letterSpacing: '0.08em' }}>记路家</span><br />
          浙江 · 德清 · 莫干山
        </div>
      </div>
    </footer>
  )
}
