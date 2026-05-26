export default function LearnMorePage() {
  return (
    <>
      <style>{css}</style>

      {/* HERO */}
      <div className="lm-hero">
        <div className="lm-badge">Newly Launched Project</div>
        <h1 className="lm-hero-title">MASTER THE GAME<br />OF <span className="lm-accent">LEARNING</span></h1>
        <p className="lm-hero-sub">BrainlyLab is a Brainly-style online platform featuring multiplayer and single-player mini-games, one main game, original graphics, and full Discord integration.</p>
      </div>

      {/* WHAT IS */}
      <section className="lm-section">
        <div className="lm-what-grid">
          <div className="lm-what-text">
            <div className="lm-label">About</div>
            <div className="lm-title">What Is<br />BrainlyLab?</div>
            <p>BrainlyLab is a newly launched project whose goal is to create a Brainly-style online platform with multiplayer and single-player mini-games, as well as one main game.</p>
            <p>The project features original graphics, systems, code, and variables &mdash; all connected to Discord for a seamless community experience.</p>
            <p>Built by a dedicated team of programmers, graphic designers, and office staff under BrainlyHQ management. Every lesson moves you forward.</p>
          </div>
          <div className="lm-what-card">
            <div className="lm-wc-title">BrainlyLab</div>
            <div className="lm-wc-sub">Part of BrainlyHQ</div>
            <div className="lm-wc-icons">
              <div className="lm-wc-icon" style={{ background: "var(--green)", color: "var(--black)" }}>MG</div>
              <div className="lm-wc-icon" style={{ background: "var(--teal)", color: "var(--white)" }}>MP</div>
              <div className="lm-wc-icon" style={{ background: "var(--lavender)", color: "var(--white)" }}>SP</div>
              <div className="lm-wc-icon" style={{ background: "#5865F2", color: "var(--white)" }}>DC</div>
            </div>
          </div>
        </div>
      </section>

      {/* GAME MODES */}
      <section className="lm-section">
        <div className="lm-label">Game Modes</div>
        <div className="lm-title">Three Ways To Play</div>
        <div className="lm-modes-grid">
          <div className="lm-mode-card"><div className="lm-mode-icon">MG</div><div className="lm-mode-title">Main Game</div><div className="lm-mode-desc">The core BrainlyLab experience. Progress through lessons, earn XP, and climb the 30-tier Season Pass as you master new topics.</div><div className="lm-mode-tag">Core Experience</div></div>
          <div className="lm-mode-card"><div className="lm-mode-icon">MP</div><div className="lm-mode-title">Multiplayer Mini-Games</div><div className="lm-mode-desc">Challenge friends in real-time knowledge battles. Compete head-to-head, earn bonus XP, and climb the leaderboard together.</div><div className="lm-mode-tag">Play With Friends</div></div>
          <div className="lm-mode-card"><div className="lm-mode-icon">SP</div><div className="lm-mode-title">Single-Player Modes</div><div className="lm-mode-desc">Practice at your own pace. Focused training sessions to build skills without pressure and unlock hidden rewards.</div><div className="lm-mode-tag">Solo Training</div></div>
        </div>
      </section>

      {/* KEY FEATURES */}
      <section className="lm-section">
        <div className="lm-label">Platform</div>
        <div className="lm-title">Key Features</div>
        <div className="lm-feat-grid">
          {[
            { color: "var(--green)", title: "30-Tier Season Pass", desc: "Unlock rewards, earn coins, XP boosts, and the legendary BrainMaster title as you progress through each season." },
            { color: "var(--teal)", title: "Live Leaderboard", desc: "Compete globally. Track your rank, compare with friends, and see who\u2019s the ultimate brain each week." },
            { color: "var(--purple)", title: "Discord Integration", desc: "Seamless connection with Discord. Login, notifications, role sync, and community features built in." },
            { color: "var(--lavender)", title: "Original Graphics", desc: "Custom-designed icons, banners, and UI components created by the BrainlyLab graphic design team." },
            { color: "var(--cyan)", title: "XP & Progression", desc: "Turn knowledge into experience points. Every lesson, every game, every challenge earns you real progress." },
            { color: "var(--green-dark)", title: "Seasonal Content", desc: "New seasons bring new challenges, rewards, and game modes. Education designed for long-term growth." },
          ].map((f) => (
            <div key={f.title} className="lm-feat">
              <div className="lm-feat-dot" style={{ background: f.color }} />
              <div>
                <div className="lm-feat-title">{f.title}</div>
                <div className="lm-feat-desc">{f.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* THE TEAM */}
      <section className="lm-section">
        <div className="lm-label">Organization</div>
        <div className="lm-title">The Team</div>

        <div className="lm-dept">
          <div className="lm-dept-header">
            <div className="lm-dept-icon" style={{ background: "var(--purple)", color: "var(--white)" }}>MT</div>
            <div><div className="lm-dept-name">Management</div><div className="lm-dept-desc">Strategic leadership and project coordination.</div></div>
          </div>
          <div className="lm-members">
            <div className="lm-member"><div className="lm-avatar">KS</div><div className="lm-minfo"><div className="lm-mname">Ksperix</div><div className="lm-mrole">Leader</div></div></div>
            <div className="lm-member"><div className="lm-avatar">KA</div><div className="lm-minfo"><div className="lm-mname">kinga5606</div><div className="lm-mrole">Leader</div></div></div>
          </div>
        </div>

        <div className="lm-dept">
          <div className="lm-dept-header">
            <div className="lm-dept-icon" style={{ background: "var(--teal)", color: "var(--white)" }}>IT</div>
            <div><div className="lm-dept-name">Programming Team</div><div className="lm-dept-desc">Building the platform, coding game mechanics, and integrating all systems.</div></div>
          </div>
          <div className="lm-members">
            <div className="lm-member"><div className="lm-avatar">LN</div><div className="lm-minfo"><div className="lm-mname">Lunah</div><div className="lm-mrole">Developer</div></div></div>
            <div className="lm-member"><div className="lm-avatar">AJ</div><div className="lm-minfo"><div className="lm-mname">ajr111</div><div className="lm-mrole">Leader</div></div></div>
            <div className="lm-member"><div className="lm-avatar">SF</div><div className="lm-minfo"><div className="lm-mname">Sefton</div><div className="lm-mrole">Developer</div></div></div>
            <a href="https://eodev.com/profil/ZaneSocratic-20789803" target="_blank" rel="noopener noreferrer" className="lm-member lm-member-link"><div className="lm-avatar lm-avatar-active">LP</div><div className="lm-minfo"><div className="lm-mname">LaPluie</div><div className="lm-mrole">Developer</div></div></a>
            <div className="lm-member"><div className="lm-avatar">NK</div><div className="lm-minfo"><div className="lm-mname">niko</div><div className="lm-mrole">Developer</div></div></div>
          </div>
        </div>

        <div className="lm-dept">
          <div className="lm-dept-header">
            <div className="lm-dept-icon" style={{ background: "var(--green)", color: "var(--black)" }}>GD</div>
            <div><div className="lm-dept-name">Graphic Design Team</div><div className="lm-dept-desc">Creating original logos, icons, banners, and all visual assets.</div></div>
          </div>
          <div className="lm-members">
            <div className="lm-member"><div className="lm-avatar">BR</div><div className="lm-minfo"><div className="lm-mname">Barretão</div><div className="lm-mrole">Designer</div></div></div>
            <div className="lm-member"><div className="lm-avatar">IS</div><div className="lm-minfo"><div className="lm-mname">isao</div><div className="lm-mrole">Designer</div></div></div>
            <div className="lm-member"><div className="lm-avatar">WX</div><div className="lm-minfo"><div className="lm-mname">&lt;WXY&gt;</div><div className="lm-mrole">Designer</div></div></div>
            <div className="lm-member"><div className="lm-avatar">KS</div><div className="lm-minfo"><div className="lm-mname">Ksperix</div><div className="lm-mrole">Leader</div></div></div>
          </div>
        </div>

        <div className="lm-dept">
          <div className="lm-dept-header">
            <div className="lm-dept-icon" style={{ background: "var(--lavender)", color: "var(--white)" }}>OF</div>
            <div><div className="lm-dept-name">Office Team</div><div className="lm-dept-desc">Managing community, documentation, social media, and daily operations.</div></div>
          </div>
          <div className="lm-members">
            <div className="lm-member"><div className="lm-avatar">TK</div><div className="lm-minfo"><div className="lm-mname">! tKrystal_.</div><div className="lm-mrole">Staff</div></div></div>
            <div className="lm-member"><div className="lm-avatar">OS</div><div className="lm-minfo"><div className="lm-mname">159Oskar378</div><div className="lm-mrole">Leader</div></div></div>
            <div className="lm-member"><div className="lm-avatar">EM</div><div className="lm-minfo"><div className="lm-mname">Emircan</div><div className="lm-mrole">Staff</div></div></div>
            <div className="lm-member"><div className="lm-avatar">MG</div><div className="lm-minfo"><div className="lm-mname">Mod Galaxxieyy</div><div className="lm-mrole">Staff</div></div></div>
            <div className="lm-member"><div className="lm-avatar">FR</div><div className="lm-minfo"><div className="lm-mname">FROST</div><div className="lm-mrole">Staff</div></div></div>
            <div className="lm-member"><div className="lm-avatar">BY</div><div className="lm-minfo"><div className="lm-mname">beyaz</div><div className="lm-mrole">Staff</div></div></div>
            <div className="lm-member"><div className="lm-avatar">HD</div><div className="lm-minfo"><div className="lm-mname">Hediyee</div><div className="lm-mrole">Staff</div></div></div>
          </div>
        </div>
      </section>

      {/* DISCORD CTA */}
      <div className="lm-discord">
        <div className="lm-discord-title">Join Our Community</div>
        <div className="lm-discord-sub">Connect with players, get updates, and be part of BrainlyLab on Discord.</div>
        <a href="#" className="lm-btn-discord">Join Discord Server</a>
      </div>

      {/* SLOGAN */}
      <div className="lm-slogan">
        <div className="lm-slogan-text">Learn. Level Up. Build.</div>
      </div>
    </>
  );
}

const css = `
  .lm-hero{padding:80px 60px 60px;background:linear-gradient(180deg,var(--green) 0%,var(--white) 100%);text-align:center}
  .lm-badge{display:inline-flex;align-items:center;gap:8px;background:var(--black);color:var(--green);font-weight:900;font-size:11px;text-transform:uppercase;letter-spacing:2px;padding:8px 18px;border-radius:var(--radius-sm);margin-bottom:20px}
  .lm-hero-title{font-weight:900;font-size:clamp(40px,6vw,72px);text-transform:uppercase;line-height:.92;letter-spacing:-3px;margin-bottom:16px}
  .lm-accent{color:var(--purple)}
  .lm-hero-sub{font-size:18px;font-weight:600;color:var(--muted);max-width:600px;margin:0 auto;line-height:1.5}

  .lm-section{padding:64px 60px}
  .lm-section:nth-child(odd){background:var(--off-white)}
  .lm-label{font-weight:900;font-size:11px;text-transform:uppercase;letter-spacing:3px;color:var(--purple);margin-bottom:8px}
  .lm-title{font-weight:900;font-size:clamp(28px,4vw,44px);text-transform:uppercase;letter-spacing:-1.5px;line-height:.95;margin-bottom:24px}

  .lm-what-grid{display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:center}
  .lm-what-text p{font-size:16px;font-weight:500;color:var(--muted);line-height:1.6;margin-bottom:16px}
  .lm-what-card{background:var(--white);border:2px solid var(--black);border-radius:var(--radius-lg);padding:40px;box-shadow:8px 8px 0 var(--black);text-align:center}
  .lm-wc-title{font-weight:900;font-size:20px;text-transform:uppercase;margin-bottom:8px}
  .lm-wc-sub{font-size:13px;color:var(--muted);font-weight:600}
  .lm-wc-icons{display:flex;gap:12px;justify-content:center;margin-top:20px}
  .lm-wc-icon{width:48px;height:48px;border-radius:var(--radius-sm);display:flex;align-items:center;justify-content:center;font-weight:900;font-size:14px;text-transform:uppercase}

  .lm-modes-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
  .lm-mode-card{border:2px solid var(--light-gray);border-radius:var(--radius-lg);padding:32px 24px;transition:.3s;position:relative;overflow:hidden;background:var(--white)}
  .lm-mode-card:hover{border-color:var(--green);transform:translateY(-4px);box-shadow:0 12px 32px rgba(150,238,96,.12)}
  .lm-mode-icon{width:56px;height:56px;border-radius:var(--radius-sm);display:flex;align-items:center;justify-content:center;font-weight:900;font-size:20px;margin-bottom:16px}
  .lm-mode-card:nth-child(1) .lm-mode-icon{background:var(--green);color:var(--black)}
  .lm-mode-card:nth-child(2) .lm-mode-icon{background:var(--teal);color:var(--white)}
  .lm-mode-card:nth-child(3) .lm-mode-icon{background:var(--lavender);color:var(--white)}
  .lm-mode-title{font-weight:900;font-size:18px;text-transform:uppercase;letter-spacing:-.3px;margin-bottom:8px}
  .lm-mode-desc{font-size:14px;font-weight:500;color:var(--muted);line-height:1.5}
  .lm-mode-tag{display:inline-block;margin-top:14px;padding:5px 14px;font-size:10px;font-weight:900;text-transform:uppercase;letter-spacing:1.5px;border-radius:var(--radius-sm)}
  .lm-mode-card:nth-child(1) .lm-mode-tag{background:rgba(150,238,96,.15);color:#2d8a0e}
  .lm-mode-card:nth-child(2) .lm-mode-tag{background:rgba(0,204,197,.12);color:#008a85}
  .lm-mode-card:nth-child(3) .lm-mode-tag{background:rgba(191,141,255,.15);color:var(--purple)}

  .lm-feat-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}
  .lm-feat{display:flex;gap:16px;align-items:flex-start;padding:20px;border:2px solid var(--light-gray);border-radius:var(--radius-sm);background:var(--white);transition:.2s}
  .lm-feat:hover{border-color:var(--green)}
  .lm-feat-dot{width:12px;height:12px;border-radius:50%;flex-shrink:0;margin-top:4px}
  .lm-feat-title{font-weight:900;font-size:15px;text-transform:uppercase;letter-spacing:-.3px;margin-bottom:4px}
  .lm-feat-desc{font-size:13px;color:var(--muted);font-weight:500;line-height:1.4}

  .lm-discord{background:var(--black);text-align:center;padding:64px 60px}
  .lm-discord-title{font-weight:900;font-size:clamp(28px,4vw,44px);text-transform:uppercase;letter-spacing:-1.5px;color:var(--white);margin-bottom:12px}
  .lm-discord-sub{font-size:16px;color:rgba(255,255,255,.5);font-weight:600;margin-bottom:28px}
  .lm-btn-discord{display:inline-block;font-family:var(--font);font-weight:900;font-size:15px;text-transform:uppercase;letter-spacing:1.5px;padding:16px 40px;background:#5865F2;color:var(--white);border:none;cursor:pointer;border-radius:var(--radius-sm);transition:.3s;text-decoration:none}
  .lm-btn-discord:hover{transform:translateY(-3px);box-shadow:0 8px 24px rgba(88,101,242,.4)}

  .lm-slogan{background:var(--green);text-align:center;padding:48px 60px}
  .lm-slogan-text{font-weight:900;font-size:clamp(20px,3vw,36px);text-transform:uppercase;letter-spacing:-1px;line-height:1.1}

  .lm-dept { margin-bottom: 32px; border: 2px solid var(--light-gray); border-radius: var(--radius-lg); padding: 28px; background: var(--white); }
  .lm-dept-header { display: flex; align-items: center; gap: 16px; margin-bottom: 20px; padding-bottom: 16px; border-bottom: 1px solid var(--light-gray); }
  .lm-dept-icon { width: 48px; height: 48px; border-radius: var(--radius-sm); display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 16px; flex-shrink: 0; }
  .lm-dept-name { font-weight: 900; font-size: 16px; text-transform: uppercase; letter-spacing: -.3px; }
  .lm-dept-desc { font-size: 13px; color: var(--muted); font-weight: 500; margin-top: 2px; }
  .lm-members { display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 12px; }
  .lm-member { display: flex; align-items: center; gap: 12px; padding: 12px; border-radius: var(--radius-sm); border: 1px solid var(--light-gray); transition: .2s; }
  .lm-member:hover { border-color: var(--green); }
  .lm-member-link { text-decoration: none; color: inherit; cursor: pointer; }
  .lm-member-link:hover { border-color: var(--green); background: rgba(150,238,96,.04); }
  .lm-avatar { width: 40px; height: 40px; border-radius: 50%; background: var(--light-gray); display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 13px; color: var(--muted); flex-shrink: 0; }
  .lm-avatar-active { background: var(--green); color: var(--black); }
  .lm-mname { font-weight: 800; font-size: 14px; }
  .lm-mrole { font-size: 11px; color: var(--muted); font-weight: 600; text-transform: uppercase; letter-spacing: .5px; }

  @media(max-width:900px){
    .lm-hero,.lm-section,.lm-discord,.lm-slogan{padding-left:24px;padding-right:24px}
    .lm-what-grid,.lm-modes-grid,.lm-feat-grid{grid-template-columns:1fr}
  }
`;
