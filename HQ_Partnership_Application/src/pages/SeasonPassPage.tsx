import { useState, useEffect, useRef, useMemo } from "react";

const CUR = 0;
const MS = new Set([5, 10, 15, 20, 25, 30]);
const NAMES = [
  "", "Brain Spark", "Quick Mind", "Lab Recruit", "Cipher", "Neuro Flash",
  "Cortex", "Data Surge", "Mind Surge", "Neural Link", "Circuit Break",
  "Quantum Step", "Deep Think", "Logic Lock", "Signal Boost", "Synapse",
  "Breakthrough", "Knowledge Core", "Algorithm", "Overload", "Mastermind",
  "Apex Thinker", "Neural Storm", "Data Architect", "Prime Circuit",
  "Lab Elite", "Cortex Prime", "Grand Synapse", "Omega Mind", "Infinite IQ", "BrainMaster",
];

function rw(t: number) {
  const m = MS.has(t);
  return {
    c: m ? 800 : t <= 10 ? 200 : t <= 20 ? 300 : 500,
    x: m ? "2x" : t <= 10 ? "1.25x" : t <= 20 ? "1.5x" : "1.75x",
    d: m ? "48h" : "24h",
    m,
    sx: t % 2 === 0 || m || t >= 25,
  };
}

function Check() {
  return (
    <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
      <path d="M1 6L6 11L15 1" stroke="#00e043" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function useCountdown() {
  const end = useMemo(() => { const d = new Date(); d.setDate(d.getDate() + 90); return d; }, []);
  const fmt = () => {
    const diff = end.getTime() - Date.now();
    if (diff <= 0) return { d: "00", h: "00", m: "00" };
    const p = (n: number) => String(n).padStart(2, "0");
    return { d: p(Math.floor(diff / 864e5)), h: p(Math.floor((diff % 864e5) / 36e5)), m: p(Math.floor((diff % 36e5) / 6e4)) };
  };
  const [t, setT] = useState(fmt);
  useEffect(() => { const id = setInterval(() => setT(fmt()), 60000); return () => clearInterval(id); }, []);
  return t;
}

export default function SeasonPassPage() {
  const cd = useCountdown();
  const bar = useRef<HTMLDivElement>(null);
  useEffect(() => { const t = setTimeout(() => { if (bar.current) bar.current.style.width = "0%"; }, 300); return () => clearTimeout(t); }, []);

  return (
    <>
      <style>{css}</style>

      {/* HERO */}
      <section className="sp-hero">
        <div className="sp-hero-left">
          <div className="sp-badge"><span className="sp-dot" /> Season 1 &mdash; Active Now</div>
          <h1 className="sp-hero-title">REWARD<br /><span className="sp-accent">ROAD</span></h1>
        </div>
        <div className="sp-hero-right">
          <div className="sp-countdown">
            <div className="sp-cd-label">Season Ends In</div>
            <div className="sp-cd-row">
              <div className="sp-cd-block"><div className="sp-cd-num">{cd.d}</div><div className="sp-cd-unit">Days</div></div>
              <div className="sp-cd-sep">:</div>
              <div className="sp-cd-block"><div className="sp-cd-num">{cd.h}</div><div className="sp-cd-unit">Hours</div></div>
              <div className="sp-cd-sep">:</div>
              <div className="sp-cd-block"><div className="sp-cd-num">{cd.m}</div><div className="sp-cd-unit">Mins</div></div>
            </div>
          </div>
          <div className="sp-xp">
            <div className="sp-xp-head"><span className="sp-xp-cur">0 XP</span><span className="sp-xp-tot">1,000 XP to Tier 1</span></div>
            <div className="sp-xp-bar"><div className="sp-xp-fill" ref={bar} /></div>
            <div className="sp-xp-info">Current Tier: <strong>0</strong> / 30</div>
          </div>
        </div>
      </section>

      {/* CURRENT TIER */}
      <div className="sp-ct">
        <div><div className="sp-ct-label">Currently Unlocking</div><div className="sp-ct-name">Tier 1 &mdash; Brain Spark</div></div>
        <div className="sp-ct-div" />
        <div className="sp-ct-reward"><div className="sp-ct-icon" /><div><div className="sp-ct-rw-label">Next Reward</div><div className="sp-ct-rw-val">+200 Coins</div></div></div>
        <div className="sp-ct-reward"><div className="sp-ct-icon" /><div><div className="sp-ct-rw-label">Bonus</div><div className="sp-ct-rw-val sp-green">+1.25x XP (24h)</div></div></div>
      </div>

      {/* ROAD */}
      <div className="sp-road">
        <div className="sp-road-head">
          <div className="sp-road-title">All 30 Tiers</div>
          <div className="sp-road-legend">
            <span><span className="sp-ldot" style={{ background: "var(--green)" }} />Unlocked</span>
            <span><span className="sp-ldot" style={{ background: "var(--green)", animation: "pulse 2s infinite" }} />Active</span>
            <span><span className="sp-ldot" style={{ background: "var(--light-gray)" }} />Locked</span>
          </div>
        </div>

        <div className="sp-tiers">
          {Array.from({ length: 29 }, (_, i) => i + 1).map((t) => {
            const st = t < CUR ? "unlocked" : t === CUR ? "active" : "locked";
            const ul = st === "unlocked";
            const { c, x, d, m, sx } = rw(t);
            return (
              <div key={t} className={`sp-tier ${st}`} style={{ animationDelay: `${(t - 1) * 0.04}s` }}>
                <div className="sp-t-line" />
                <div className="sp-t-num"><div className="sp-t-circle">{ul ? <Check /> : t}</div></div>
                <div className="sp-t-body">
                  <div className="sp-t-rewards">
                    <div className="sp-rw-card">
                      {ul && <div className="sp-claimed">Claimed</div>}
                      <div className="sp-rw-icon" />
                      <div><div className="sp-rw-type">Coins</div><div className="sp-rw-amt sp-coin">+{c}</div></div>
                    </div>
                    {sx && (
                      <div className="sp-rw-card">
                        {ul && <div className="sp-claimed">Claimed</div>}
                        <div className="sp-rw-icon" />
                        <div><div className="sp-rw-type">XP Boost</div><div className="sp-rw-amt sp-xp-boost">{x} &middot; {d}</div></div>
                      </div>
                    )}
                  </div>
                  {m && <div className="sp-milestone">Milestone</div>}
                  <div className="sp-t-name">{NAMES[t]}</div>
                  {st === "locked" && <div className="sp-t-lock">&#128274;</div>}
                </div>
              </div>
            );
          })}
        </div>

        <div className="sp-finale">
          <div className="sp-finale-icon">&#127942;</div>
          <div>
            <div className="sp-finale-label">Season 1 Grand Finale &mdash; Tier 30</div>
            <div className="sp-finale-title">THE BRAINMASTER<br />BUNDLE</div>
            <div className="sp-finale-pills">
              <div className="sp-f-pill">5,000 Coins</div>
              <div className="sp-f-pill sp-green">Permanent 2x XP</div>
              <div className="sp-f-pill">&quot;BrainMaster&quot; Title</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const css = `
  /* HERO */
  .sp-hero {
    padding: 60px 60px 48px;
    background: linear-gradient(180deg, var(--green) 0%, var(--white) 100%);
    display: flex; align-items: flex-end; justify-content: space-between; gap: 40px;
  }
  .sp-badge {
    display: inline-flex; align-items: center; gap: 8px;
    background: var(--black); color: var(--green);
    font-weight: 900; font-size: 11px; text-transform: uppercase;
    letter-spacing: 2px; padding: 8px 18px; border-radius: var(--radius-sm); margin-bottom: 16px;
  }
  .sp-dot { width: 6px; height: 6px; background: var(--green); border-radius: 50%; animation: blink 1.4s ease-in-out infinite; }
  .sp-hero-title { font-weight: 900; font-size: clamp(44px, 6vw, 76px); text-transform: uppercase; line-height: 0.9; letter-spacing: -3px; }
  .sp-accent { color: var(--purple); }
  .sp-hero-right { display: flex; gap: 24px; flex-shrink: 0; align-items: flex-end; }

  .sp-countdown { background: var(--white); border: 2px solid var(--black); border-radius: var(--radius-lg); padding: 20px 24px; box-shadow: 6px 6px 0 var(--black); text-align: center; }
  .sp-cd-label { font-weight: 900; font-size: 9px; text-transform: uppercase; letter-spacing: 2px; color: var(--muted); margin-bottom: 8px; }
  .sp-cd-row { display: flex; align-items: center; gap: 8px; }
  .sp-cd-block { text-align: center; }
  .sp-cd-num { font-weight: 900; font-size: 28px; line-height: 1; }
  .sp-cd-unit { font-size: 9px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; color: var(--muted); margin-top: 2px; }
  .sp-cd-sep { font-weight: 900; font-size: 20px; color: var(--muted); padding: 0 2px; }

  .sp-xp { min-width: 240px; }
  .sp-xp-head { display: flex; justify-content: space-between; margin-bottom: 6px; }
  .sp-xp-cur { font-weight: 900; font-size: 15px; }
  .sp-xp-tot { font-weight: 600; font-size: 12px; color: var(--muted); }
  .sp-xp-bar { height: 10px; background: var(--light-gray); border-radius: 5px; overflow: hidden; }
  .sp-xp-fill { height: 100%; width: 0; background: linear-gradient(90deg, var(--green), var(--green-dark)); border-radius: 5px; transition: width 1s ease; }
  .sp-xp-info { margin-top: 6px; font-weight: 700; font-size: 11px; color: var(--muted); text-transform: uppercase; letter-spacing: 1px; }

  /* CURRENT TIER */
  .sp-ct {
    padding: 20px 60px; background: var(--black); color: var(--white);
    display: flex; align-items: center; gap: 24px;
  }
  .sp-ct-label { font-size: 9px; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; color: rgba(255,255,255,0.4); }
  .sp-ct-name { font-weight: 900; font-size: 18px; text-transform: uppercase; letter-spacing: -0.5px; }
  .sp-ct-div { width: 1px; height: 36px; background: rgba(255,255,255,0.15); }
  .sp-ct-reward { display: flex; align-items: center; gap: 10px; }
  .sp-ct-icon { width: 32px; height: 32px; background: rgba(255,255,255,0.08); border-radius: 10px; }
  .sp-ct-rw-label { font-size: 9px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; color: rgba(255,255,255,0.4); }
  .sp-ct-rw-val { font-weight: 900; font-size: 15px; }
  .sp-green { color: var(--green); }

  /* ROAD */
  .sp-road { padding: 48px 60px; background: var(--off-white); }
  .sp-road-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 32px; }
  .sp-road-title { font-weight: 900; font-size: 24px; text-transform: uppercase; letter-spacing: -0.5px; }
  .sp-road-legend { display: flex; gap: 20px; font-size: 11px; font-weight: 700; color: var(--muted); }
  .sp-road-legend span { display: inline-flex; align-items: center; gap: 6px; }
  .sp-ldot { width: 8px; height: 8px; border-radius: 50%; display: inline-block; }

  /* TIERS */
  .sp-tiers { position: relative; }
  .sp-tier {
    display: flex; align-items: flex-start; gap: 16px; padding: 16px 0;
    position: relative; opacity: 0; transform: translateY(8px);
    animation: fadeIn 0.4s ease forwards;
  }
  .sp-t-line { position: absolute; left: 17px; top: 0; bottom: 0; width: 2px; background: var(--light-gray); }
  .sp-tier.unlocked .sp-t-line { background: var(--green); }
  .sp-tier.active .sp-t-line { background: var(--green); }
  .sp-t-num { position: relative; z-index: 1; flex-shrink: 0; }
  .sp-t-circle {
    width: 36px; height: 36px; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-weight: 900; font-size: 13px; border: 2px solid var(--light-gray); background: var(--white);
  }
  .sp-tier.unlocked .sp-t-circle { border-color: var(--green); background: rgba(150,238,96,0.1); }
  .sp-tier.active .sp-t-circle { border-color: var(--green); background: var(--green); color: var(--black); animation: pulse 2s infinite; }
  .sp-tier.locked .sp-t-circle { color: var(--muted); }
  .sp-t-body { flex: 1; padding-bottom: 16px; border-bottom: 1px solid var(--light-gray); }
  .sp-tier.active .sp-t-body { border-bottom-color: var(--green); }
  .sp-t-rewards { display: flex; gap: 10px; flex: 1; flex-wrap: wrap; }
  .sp-rw-card {
    display: flex; align-items: center; gap: 10px; padding: 10px 14px;
    background: var(--white); border: 1px solid var(--light-gray); border-radius: 12px;
    position: relative;
  }
  .sp-tier.active .sp-rw-card { border-color: var(--green); background: rgba(150,238,96,0.05); }
  .sp-tier.locked .sp-rw-card { opacity: 0.5; }
  .sp-rw-icon { width: 28px; height: 28px; background: var(--off-white); border-radius: 8px; flex-shrink: 0; }
  .sp-rw-type { font-size: 9px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; color: var(--muted); }
  .sp-rw-amt { font-weight: 900; font-size: 14px; }
  .sp-coin { color: var(--gold); }
  .sp-xp-boost { color: var(--teal); }
  .sp-claimed {
    position: absolute; top: -6px; right: -6px;
    font-size: 8px; font-weight: 900; text-transform: uppercase; letter-spacing: 1px;
    padding: 2px 8px; background: var(--green); color: var(--black); border-radius: 6px;
  }
  .sp-milestone {
    display: inline-block; margin-top: 8px; padding: 3px 12px;
    font-size: 9px; font-weight: 900; text-transform: uppercase; letter-spacing: 1.5px;
    background: var(--purple); color: var(--white); border-radius: 8px;
  }
  .sp-t-name { margin-top: 6px; font-weight: 700; font-size: 13px; color: var(--muted); }
  .sp-t-lock { margin-top: 4px; font-size: 12px; opacity: 0.4; }

  /* FINALE */
  .sp-finale {
    margin-top: 32px; padding: 36px; background: var(--black); color: var(--white);
    border-radius: var(--radius-lg); display: flex; align-items: center; gap: 24px;
    box-shadow: 8px 8px 0 var(--green);
  }
  .sp-finale-icon { font-size: 48px; }
  .sp-finale-label { font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; color: rgba(255,255,255,0.4); margin-bottom: 4px; }
  .sp-finale-title { font-weight: 900; font-size: 28px; text-transform: uppercase; letter-spacing: -1px; line-height: 1; margin-bottom: 12px; }
  .sp-finale-pills { display: flex; gap: 12px; flex-wrap: wrap; }
  .sp-f-pill {
    padding: 6px 16px; font-size: 11px; font-weight: 900; text-transform: uppercase; letter-spacing: 1px;
    background: rgba(255,255,255,0.08); border-radius: 8px; color: rgba(255,255,255,0.7);
  }
  .sp-f-pill.sp-green { background: rgba(150,238,96,0.15); color: var(--green); }

  @media (max-width: 900px) {
    .sp-hero, .sp-ct, .sp-road { padding-left: 24px; padding-right: 24px; }
    .sp-hero { flex-direction: column; align-items: flex-start; }
    .sp-hero-right { flex-direction: column; width: 100%; }
    .sp-xp { width: 100%; }
    .sp-ct { flex-wrap: wrap; gap: 16px; justify-content: flex-start; }
    .sp-finale { flex-direction: column; text-align: center; padding: 28px 24px; }
    .sp-finale-pills { justify-content: center; }
  }
`;
