// PlatformScreens.tsx
// Drop-in replacement visuals for ModuleShowcase.tsx
// Usage: swap the <Visual /> component in ModuleShowcase to use <PlatformScreen id={showcase.id} />

// ─── Shared primitives ────────────────────────────────────────────────────────

const S = {
  frame: {
    width: '100%',
    aspectRatio: '16 / 10',
    borderRadius: '12px',
    overflow: 'hidden',
    background: '#0d1520',
    border: '0.5px solid rgba(255,255,255,0.08)',
    fontFamily: 'var(--font-sans, system-ui, sans-serif)',
    display: 'flex',
    flexDirection: 'column' as const,
    fontSize: '12px',
  },
  topbar: {
    background: '#0a1018',
    borderBottom: '0.5px solid rgba(255,255,255,0.07)',
    padding: '0 14px',
    height: '34px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexShrink: 0,
  },
  body: {
    flex: 1,
    overflow: 'hidden',
    display: 'flex',
    minHeight: 0,
  },
  sidebar: {
    width: '100px',
    minWidth: '100px',
    background: '#0a1018',
    borderRight: '0.5px solid rgba(255,255,255,0.06)',
    padding: '8px 6px',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '2px',
    flexShrink: 0,
  },
  main: {
    flex: 1,
    padding: '12px 14px',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '10px',
  },
}

function LogoDot() {
  return (
    <div style={{ width: 20, height: 20, borderRadius: 5, background: '#1a8c6e', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
      <svg viewBox="0 0 13 13" fill="none" width="11" height="11">
        <path d="M6.5 1L8.5 4.5H11L9 7L10 11L6.5 9L3 11L4 7L2 4.5H4.5L6.5 1Z" fill="#4ecba0" />
      </svg>
    </div>
  )
}

function Topbar({ title, badge, badgeColor = 'green', initials }: { title: string; badge?: string; badgeColor?: 'green' | 'amber' | 'red' | 'blue' | 'teal'; initials?: string }) {
  const badgeStyles: Record<string, React.CSSProperties> = {
    green: { background: 'rgba(30,140,110,0.25)', color: '#4ecba0' },
    amber: { background: 'rgba(200,130,20,0.25)', color: '#f0a830' },
    red:   { background: 'rgba(200,50,50,0.2)',   color: '#f07070' },
    blue:  { background: 'rgba(40,100,200,0.2)',   color: '#70a8f0' },
    teal:  { background: 'rgba(26,140,110,0.2)',   color: '#5dd4b0' },
  }
  return (
    <div style={S.topbar}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <LogoDot />
        <span style={{ fontSize: 11, fontWeight: 500, color: 'rgba(255,255,255,0.85)' }}>{title}</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        {badge && (
          <span style={{ fontSize: 9, padding: '2px 7px', borderRadius: 20, fontWeight: 500, ...badgeStyles[badgeColor] }}>{badge}</span>
        )}
        {initials && (
          <div style={{ width: 22, height: 22, borderRadius: '50%', background: '#1a4a3a', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 8, fontWeight: 600, color: '#4ecba0' }}>{initials}</div>
        )}
      </div>
    </div>
  )
}

function NavItem({ label, active }: { label: string; active?: boolean }) {
  return (
    <div style={{
      fontSize: 9, color: active ? '#4ecba0' : 'rgba(255,255,255,0.35)',
      padding: '4px 7px', borderRadius: 4,
      background: active ? 'rgba(30,140,110,0.15)' : 'transparent',
      fontWeight: active ? 500 : 400,
    }}>{label}</div>
  )
}

function StatCard({ val, label, color }: { val: string; label: string; color?: string }) {
  return (
    <div style={{ background: 'rgba(255,255,255,0.04)', border: '0.5px solid rgba(255,255,255,0.07)', borderRadius: 7, padding: '8px 10px', flex: 1 }}>
      <div style={{ fontSize: 15, fontWeight: 600, color: color ?? '#fff', lineHeight: 1 }}>{val}</div>
      <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.4)', marginTop: 3 }}>{label}</div>
    </div>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <div style={{ fontSize: 9, fontWeight: 500, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{children}</div>
}

function TableWrap({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ background: 'rgba(255,255,255,0.03)', border: '0.5px solid rgba(255,255,255,0.07)', borderRadius: 7, overflow: 'hidden' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 10 }}>
        {children}
      </table>
    </div>
  )
}

function Th({ children }: { children: React.ReactNode }) {
  return <th style={{ background: 'rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.4)', fontWeight: 500, padding: '5px 8px', textAlign: 'left', borderBottom: '0.5px solid rgba(255,255,255,0.06)' }}>{children}</th>
}

function Td({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return <td style={{ padding: '5px 8px', color: 'rgba(255,255,255,0.7)', borderBottom: '0.5px solid rgba(255,255,255,0.04)', ...style }}>{children}</td>
}

function Badge({ children, color = 'green' }: { children: React.ReactNode; color?: 'green' | 'amber' | 'red' | 'blue' }) {
  const styles: Record<string, React.CSSProperties> = {
    green: { background: 'rgba(30,140,110,0.25)', color: '#4ecba0' },
    amber: { background: 'rgba(200,130,20,0.25)', color: '#f0a830' },
    red:   { background: 'rgba(200,50,50,0.2)',   color: '#f07070' },
    blue:  { background: 'rgba(40,100,200,0.2)',   color: '#70a8f0' },
  }
  return <span style={{ fontSize: 9, padding: '2px 6px', borderRadius: 20, fontWeight: 500, ...styles[color] }}>{children}</span>
}

function ProgressBar({ pct, color = '#1a8c6e' }: { pct: number; color?: string }) {
  return (
    <div style={{ height: 3, background: 'rgba(255,255,255,0.08)', borderRadius: 2 }}>
      <div style={{ height: '100%', width: `${pct}%`, background: color, borderRadius: 2 }} />
    </div>
  )
}

function InfoRow({ label, val }: { label: string; val: React.ReactNode }) {
  return (
    <div style={{ background: 'rgba(255,255,255,0.03)', border: '0.5px solid rgba(255,255,255,0.06)', borderRadius: 6, padding: '6px 8px' }}>
      <div style={{ fontSize: 8, color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{label}</div>
      <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.8)', marginTop: 2, fontWeight: 500 }}>{val}</div>
    </div>
  )
}

// ─── Screen: Player Management ────────────────────────────────────────────────

function PlayersScreen() {
  return (
    <div style={S.frame}>
      <Topbar title="Player Profiles" badge="U14s" initials="JW" />
      <div style={S.body}>
        <div style={S.sidebar}>
          <NavItem label="Profile" active />
          <NavItem label="Development" />
          <NavItem label="Medical" />
          <NavItem label="Attendance" />
          <NavItem label="Media" />
        </div>
        <div style={S.main}>
          {/* Profile header */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 38, height: 38, borderRadius: '50%', background: '#1a3a2e', border: '1.5px solid #1a8c6e', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 600, color: '#4ecba0', flexShrink: 0 }}>OT</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: '#fff' }}>Owen Thomas</div>
              <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.4)', marginTop: 1 }}>Midfielder · U14s · #8</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.3)' }}>COMET ID</div>
              <div style={{ fontSize: 10, color: '#4ecba0', fontWeight: 500 }}>WLS-2847-T</div>
            </div>
          </div>

          {/* Info grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6 }}>
            <InfoRow label="Date of Birth" val="14 Mar 2011" />
            <InfoRow label="Age Group" val="U14 (2024/25)" />
            <InfoRow label="Nationality" val="Welsh" />
            <InfoRow label="Maturation" val={<><span>Pre-PHV</span> <Badge color="amber">Est. 0.8yr</Badge></>} />
            <InfoRow label="Guardian" val="David Thomas" />
            <InfoRow label="Registered" val="01 Aug 2023" />
          </div>

          {/* Squad mini-list */}
          <SectionLabel>Squad overview — U14s</SectionLabel>
          <TableWrap>
            <thead><tr><Th>Player</Th><Th>Pos</Th><Th>Status</Th><Th>COMET</Th></tr></thead>
            <tbody>
              <tr><Td>O. Thomas</Td><Td>CM</Td><Td><Badge>Fit</Badge></Td><Td style={{ color: '#4ecba0', fontSize: 9 }}>Linked</Td></tr>
              <tr><Td>R. Williams</Td><Td>ST</Td><Td><Badge color="amber">Doubt</Badge></Td><Td style={{ color: '#4ecba0', fontSize: 9 }}>Linked</Td></tr>
              <tr><Td>B. Lewis</Td><Td>CM</Td><Td><Badge>Fit</Badge></Td><Td style={{ color: 'rgba(255,255,255,0.3)', fontSize: 9 }}>Pending</Td></tr>
            </tbody>
          </TableWrap>
        </div>
      </div>
    </div>
  )
}

// ─── Screen: Coaching & Performance ───────────────────────────────────────────

function CoachingScreen() {
  const bars = [40, 65, 80, 55, 72, 88, 60]
  const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S']
  return (
    <div style={S.frame}>
      <Topbar title="Coaching & Performance" badge="O. Thomas" badgeColor="teal" initials="RC" />
      <div style={S.body}>
        <div style={S.sidebar}>
          <NavItem label="Overview" active />
          <NavItem label="Match Events" />
          <NavItem label="Load & RPE" />
          <NavItem label="Dev Plan" />
          <NavItem label="Reports" />
        </div>
        <div style={S.main}>
          {/* Stats */}
          <div style={{ display: 'flex', gap: 6 }}>
            <StatCard val="87%" label="Pass acc." color="#4ecba0" />
            <StatCard val="4" label="Goals" />
            <StatCard val="6.2" label="Avg rating" color="#4ecba0" />
            <StatCard val="14/16" label="Attendance" />
          </div>

          {/* Load chart */}
          <div>
            <SectionLabel>Session load — last 7 days</SectionLabel>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 4, height: 50, marginTop: 6 }}>
              {bars.map((h, i) => (
                <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, height: '100%', justifyContent: 'flex-end' }}>
                  <div style={{ width: '100%', height: `${h}%`, borderRadius: '2px 2px 0 0', background: i === 2 ? '#1a8c6e' : 'rgba(26,140,110,0.3)' }} />
                  <span style={{ fontSize: 8, color: 'rgba(255,255,255,0.25)' }}>{days[i]}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Dev plan */}
          <SectionLabel>Development plan progress</SectionLabel>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
            {[
              { label: 'Technical — first touch', pct: 72, color: '#1a8c6e' },
              { label: 'Tactical — positioning', pct: 58, color: '#f0a830' },
              { label: 'Physical — sprint endurance', pct: 85, color: '#1a8c6e' },
              { label: 'Psychological — decision making', pct: 44, color: '#f0a830' },
            ].map(({ label, pct, color }) => (
              <div key={label}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 9, color: 'rgba(255,255,255,0.45)', marginBottom: 3 }}>
                  <span>{label}</span><span>{pct}%</span>
                </div>
                <ProgressBar pct={pct} color={color} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Screen: Media ────────────────────────────────────────────────────────────

function PlayBtn() {
  return (
    <div style={{ width: 22, height: 22, borderRadius: '50%', background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg viewBox="0 0 8 9" fill="none" width="8" height="9"><path d="M1 1L7 4.5L1 8V1Z" fill="white" /></svg>
    </div>
  )
}

function VideoCard({ title, sub, bgFrom, bgTo }: { title: string; sub: string; bgFrom: string; bgTo: string }) {
  return (
    <div style={{ background: 'rgba(0,0,0,0.4)', border: '0.5px solid rgba(255,255,255,0.07)', borderRadius: 7, overflow: 'hidden' }}>
      <div style={{ height: 60, background: `linear-gradient(135deg, ${bgFrom} 0%, ${bgTo} 100%)`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <PlayBtn />
      </div>
      <div style={{ padding: '6px 8px' }}>
        <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>{title}</div>
        <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.35)', marginTop: 1 }}>{sub}</div>
      </div>
    </div>
  )
}

function MediaScreen() {
  return (
    <div style={S.frame}>
      <Topbar title="Media Library" badge="U16s" badgeColor="teal" initials="JM" />
      <div style={S.body}>
        <div style={S.sidebar}>
          <NavItem label="All" active />
          <NavItem label="Matches" />
          <NavItem label="Training" />
          <NavItem label="Clips" />
          <NavItem label="Playlists" />
        </div>
        <div style={S.main}>
          {/* Pill filters */}
          <div style={{ display: 'flex', gap: 5 }}>
            {['All footage', 'Match', 'Training', 'Clips'].map((p, i) => (
              <div key={p} style={{ fontSize: 9, padding: '3px 8px', borderRadius: 20, border: '0.5px solid rgba(255,255,255,0.1)', color: i === 0 ? '#4ecba0' : 'rgba(255,255,255,0.4)', background: i === 0 ? 'rgba(26,140,110,0.15)' : 'transparent', borderColor: i === 0 ? '#1a8c6e' : 'rgba(255,255,255,0.1)' }}>{p}</div>
            ))}
          </div>

          {/* Video grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 7 }}>
            <VideoCard title="vs. Wrexham U16 — Full Match" sub="12 Apr · 73 min" bgFrom="#0a2010" bgTo="#123020" />
            <VideoCard title="Training — Set Pieces" sub="10 Apr · 22 min" bgFrom="#0a1820" bgTo="#0d2030" />
            <VideoCard title="O. Thomas — Highlights" sub="08 Apr · 4 min" bgFrom="#101808" bgTo="#152210" />
          </div>

          {/* Playlist */}
          <div>
            <SectionLabel>Coach playlists</SectionLabel>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 5, marginTop: 6 }}>
              {[
                { name: 'Set piece review — U16s', clips: 6, shared: 'Squad' },
                { name: 'O. Thomas — season highlights', clips: 11, shared: 'Private' },
              ].map(({ name, clips, shared }) => (
                <div key={name} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(255,255,255,0.03)', border: '0.5px solid rgba(255,255,255,0.06)', borderRadius: 6, padding: '6px 10px' }}>
                  <div>
                    <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.75)', fontWeight: 500 }}>{name}</div>
                    <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.35)', marginTop: 1 }}>{clips} clips</div>
                  </div>
                  <Badge color={shared === 'Private' ? 'amber' : 'green'}>{shared}</Badge>
                </div>
              ))}
            </div>
          </div>

          <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.25)', marginTop: 'auto' }}>18.4 GB · Footage isolated per club · 30-day erasure policy</div>
        </div>
      </div>
    </div>
  )
}

// ─── Screen: Safeguarding & Welfare ───────────────────────────────────────────

function WelfareScreen() {
  return (
    <div style={S.frame}>
      <Topbar title="Safeguarding & Welfare" badge="1 Open Case" badgeColor="red" initials="SO" />
      <div style={S.body}>
        <div style={S.sidebar}>
          <NavItem label="Cases" active />
          <NavItem label="Wellbeing" />
          <NavItem label="Medical" />
          <NavItem label="DBS Status" />
          <NavItem label="Audit Log" />
        </div>
        <div style={S.main}>
          <div style={{ display: 'flex', gap: 6 }}>
            <StatCard val="1" label="Open cases" color="#f07070" />
            <StatCard val="12" label="DBS verified" color="#4ecba0" />
            <StatCard val="2" label="DBS expiring" color="#f0a830" />
          </div>

          {/* Open case */}
          <div style={{ background: 'rgba(200,50,50,0.07)', border: '0.5px solid rgba(200,50,50,0.2)', borderRadius: 7, padding: '8px 10px' }}>
            <div style={{ fontSize: 10, fontWeight: 500, color: '#f07070', marginBottom: 3 }}>Case #004 — Welfare concern (restricted)</div>
            <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.45)', lineHeight: 1.5 }}>Opened 08 Apr 2025 · Assigned to S. Owen · Access restricted to authorised roles only</div>
          </div>

          {/* Wellbeing check-ins */}
          <SectionLabel>Wellbeing check-ins — this week</SectionLabel>
          <TableWrap>
            <thead><tr><Th>Player</Th><Th>Score</Th><Th>Trend</Th><Th>Note</Th></tr></thead>
            <tbody>
              <tr><Td>O. Thomas</Td><Td><Badge>8/10</Badge></Td><Td style={{ color: '#4ecba0' }}>↑</Td><Td>—</Td></tr>
              <tr><Td>R. Williams</Td><Td><Badge color="amber">5/10</Badge></Td><Td style={{ color: '#f0a830' }}>→</Td><Td style={{ fontSize: 9, color: 'rgba(255,255,255,0.4)' }}>Fatigued</Td></tr>
              <tr><Td>B. Lewis</Td><Td><Badge>9/10</Badge></Td><Td style={{ color: '#4ecba0' }}>↑</Td><Td>—</Td></tr>
            </tbody>
          </TableWrap>

          {/* DBS */}
          <SectionLabel>DBS status — coaching staff</SectionLabel>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {[
              { name: 'R. Collins', role: 'Head Coach', status: 'Valid', color: 'green' as const },
              { name: 'A. Smith', role: 'Assistant Coach', status: 'Valid', color: 'green' as const },
              { name: 'T. Hughes', role: 'Coach', status: 'Expires 30 Jun', color: 'amber' as const },
            ].map(({ name, role, status, color }) => (
              <div key={name} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(255,255,255,0.03)', border: '0.5px solid rgba(255,255,255,0.06)', borderRadius: 6, padding: '5px 8px' }}>
                <div>
                  <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.75)', fontWeight: 500 }}>{name}</div>
                  <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.35)' }}>{role}</div>
                </div>
                <Badge color={color}>{status}</Badge>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Screen: Communication & Admin ────────────────────────────────────────────

function CommsScreen() {
  return (
    <div style={S.frame}>
      <Topbar title="Communication Hub" badge="3 Unread" badgeColor="blue" initials="RC" />
      <div style={S.body}>
        <div style={S.sidebar}>
          <NavItem label="Messages" active />
          <NavItem label="Announcements" />
          <NavItem label="RSVPs" />
          <NavItem label="Schedules" />
          <NavItem label="Admin" />
        </div>
        <div style={S.main}>
          {/* Channel selector */}
          <div style={{ display: 'flex', gap: 5 }}>
            {['U14s Squad', 'U16s Squad', 'All Parents', 'Staff'].map((c, i) => (
              <div key={c} style={{ fontSize: 9, padding: '3px 8px', borderRadius: 20, border: `0.5px solid ${i === 1 ? '#1a8c6e' : 'rgba(255,255,255,0.1)'}`, color: i === 1 ? '#4ecba0' : 'rgba(255,255,255,0.4)', background: i === 1 ? 'rgba(26,140,110,0.15)' : 'transparent' }}>{c}</div>
            ))}
          </div>

          {/* Message thread */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 7, flex: 1 }}>
            {/* Coach message */}
            <div style={{ display: 'flex', gap: 7, alignItems: 'flex-start' }}>
              <div style={{ width: 22, height: 22, borderRadius: '50%', background: '#1a3a2e', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 8, fontWeight: 600, color: '#4ecba0', flexShrink: 0 }}>RC</div>
              <div>
                <div style={{ background: 'rgba(255,255,255,0.05)', border: '0.5px solid rgba(255,255,255,0.07)', borderRadius: 7, padding: '6px 9px', maxWidth: '80%' }}>
                  <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.35)', marginBottom: 2 }}>R. Collins · Head Coach</div>
                  <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.7)', lineHeight: 1.4 }}>Training Thursday moved to 5pm — pitch availability. Please confirm attendance.</div>
                </div>
                <div style={{ fontSize: 8, color: 'rgba(255,255,255,0.2)', marginTop: 2, paddingLeft: 2 }}>Today · 09:14 · Read by 12</div>
              </div>
            </div>

            {/* Parent reply */}
            <div style={{ display: 'flex', gap: 7, alignItems: 'flex-start', justifyContent: 'flex-end' }}>
              <div>
                <div style={{ background: 'rgba(26,140,110,0.15)', border: '0.5px solid rgba(26,140,110,0.25)', borderRadius: 7, padding: '6px 9px' }}>
                  <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.35)', marginBottom: 2 }}>D. Thomas · Parent</div>
                  <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.7)', lineHeight: 1.4 }}>Confirmed — Owen will be there.</div>
                </div>
                <div style={{ fontSize: 8, color: 'rgba(255,255,255,0.2)', marginTop: 2, textAlign: 'right', paddingRight: 2 }}>Today · 09:32</div>
              </div>
              <div style={{ width: 22, height: 22, borderRadius: '50%', background: '#1a2a4a', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 8, fontWeight: 600, color: '#70a8f0', flexShrink: 0 }}>DT</div>
            </div>

            {/* RSVP summary */}
            <div style={{ background: 'rgba(255,255,255,0.03)', border: '0.5px solid rgba(255,255,255,0.07)', borderRadius: 7, padding: '7px 10px' }}>
              <div style={{ fontSize: 10, fontWeight: 500, color: 'rgba(255,255,255,0.7)', marginBottom: 5 }}>RSVP — Thursday Training</div>
              <div style={{ display: 'flex', gap: 8 }}>
                <div style={{ fontSize: 9 }}><span style={{ color: '#4ecba0', fontWeight: 600 }}>12</span> <span style={{ color: 'rgba(255,255,255,0.35)' }}>confirmed</span></div>
                <div style={{ fontSize: 9 }}><span style={{ color: '#f0a830', fontWeight: 600 }}>2</span> <span style={{ color: 'rgba(255,255,255,0.35)' }}>maybe</span></div>
                <div style={{ fontSize: 9 }}><span style={{ color: '#f07070', fontWeight: 600 }}>1</span> <span style={{ color: 'rgba(255,255,255,0.35)' }}>declined</span></div>
                <div style={{ fontSize: 9 }}><span style={{ color: 'rgba(255,255,255,0.3)', fontWeight: 600 }}>1</span> <span style={{ color: 'rgba(255,255,255,0.25)' }}>no response</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Main export ──────────────────────────────────────────────────────────────

const screenMap: Record<string, React.ComponentType> = {
  players: PlayersScreen,
  coaching: CoachingScreen,
  media: MediaScreen,
  welfare: WelfareScreen,
  comms: CommsScreen,
}

export function PlatformScreen({ id }: { id: string }) {
  const Screen = screenMap[id]
  if (!Screen) return null
  return <Screen />
}