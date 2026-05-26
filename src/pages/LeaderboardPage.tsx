import { useState } from "react";

const TABS = ["All Time", "Weekly", "Daily", "Friends"];

export default function LeaderboardPage() {
  const [tab, setTab] = useState("All Time");

  return (
    <>
      <style>{css}</style>

      {/* HERO */}
      <section className="lb-hero">
        <div>
          <div className="lb-badge"><span className="lb-dot" /> Season 1</div>
          <h1 className="lb-hero-title">LEADER<br /><span className="lb-accent">BOARD</span></h1>
        </div>
        <div className="lb-hero-stats">
          <div className="lb-hstat"><div className="lb-hstat-n">&mdash;</div><div className="lb-hstat-l">Your Rank</div></div>
          <div className="lb-hstat"><div className="lb-hstat-n">0</div><div className="lb-hstat-l">Total Players</div></div>
          <div className="lb-hstat"><div className="lb-hstat-n">S1</div><div className="lb-hstat-l">Season</div></div>
        </div>
      </section>

      {/* FILTERS */}
      <div className="lb-filters">
        <div className="lb-ftabs">
          {TABS.map((t) => (
            <button key={t} className={`lb-ftab${tab === t ? " active" : ""}`} onClick={() => setTab(t)}>{t}</button>
          ))}
        </div>
        <div className="lb-search">
          <span className="lb-search-ico">&#128269;</span>
          <input type="text" placeholder="Search players..." />
        </div>
      </div>

      {/* PODIUM - empty state */}
      <section className="lb-podium-empty">
        <div style={{ fontSize: 64, marginBottom: 16, opacity: 0.25 }}>&#127942;</div>
        <div style={{ fontWeight: 900, fontSize: 22, textTransform: "uppercase" as const, letterSpacing: 1, color: "var(--muted)" }}>No players yet</div>
        <div style={{ fontWeight: 600, fontSize: 15, color: "var(--light-gray)", marginTop: 8 }}>Be the first to join and claim the top spot!</div>
      </section>

      {/* TABLE */}
      <div className="lb-table">
        <div className="lb-thead">
          <div>Rank</div><div></div><div>Player</div><div>Tier</div><div style={{ textAlign: "right" }}>XP</div><div style={{ textAlign: "center" }}>+/-</div>
        </div>
      </div>
    </>
  );
}

const css = `
  .lb-hero {
    padding: 60px 60px 48px;
    background: linear-gradient(180deg, var(--green) 0%, var(--white) 100%);
    display: flex; align-items: flex-end; justify-content: space-between; gap: 40px;
  }
  .lb-badge {
    display: inline-flex; align-items: center; gap: 8px;
    background: var(--black); color: var(--green);
    font-weight: 900; font-size: 11px; text-transform: uppercase;
    letter-spacing: 2px; padding: 8px 18px; border-radius: var(--radius-sm); margin-bottom: 16px;
  }
  .lb-dot { width: 6px; height: 6px; background: var(--green); border-radius: 50%; animation: blink 1.4s ease-in-out infinite; }
  .lb-hero-title {
    font-weight: 900; font-size: clamp(44px, 6vw, 76px);
    text-transform: uppercase; line-height: 0.9; letter-spacing: -3px;
  }
  .lb-accent { color: var(--purple); }
  .lb-hero-stats { display: flex; gap: 24px; flex-shrink: 0; }
  .lb-hstat {
    background: var(--white); border: 2px solid var(--black);
    border-radius: var(--radius-sm); padding: 14px 20px; text-align: center;
    box-shadow: 4px 4px 0 var(--black);
  }
  .lb-hstat-n { font-weight: 900; font-size: 24px; line-height: 1; }
  .lb-hstat-l { font-size: 9px; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; color: var(--muted); margin-top: 4px; }

  .lb-filters {
    padding: 16px 60px; background: var(--off-white);
    display: flex; align-items: center; justify-content: space-between;
    border-bottom: 1px solid var(--light-gray);
  }
  .lb-ftabs { display: flex; gap: 4px; }
  .lb-ftab {
    font-family: var(--font); font-weight: 700; font-size: 13px;
    text-transform: uppercase; letter-spacing: 1px; padding: 8px 20px; cursor: pointer;
    background: transparent; border: 2px solid transparent;
    color: var(--muted); border-radius: var(--radius-sm); transition: all 0.2s;
  }
  .lb-ftab:hover { color: var(--black); }
  .lb-ftab.active { background: var(--green); border-color: var(--black); color: var(--black); }
  .lb-search {
    display: flex; align-items: center; gap: 8px;
    background: var(--white); border: 2px solid var(--light-gray);
    padding: 8px 16px; border-radius: var(--radius-sm); transition: border-color 0.2s;
  }
  .lb-search:focus-within { border-color: var(--green); }
  .lb-search input {
    font-family: var(--font); font-weight: 600; font-size: 13px;
    border: none; outline: none; background: none; width: 180px;
  }
  .lb-search-ico { color: var(--muted); font-size: 14px; }

  .lb-podium-empty {
    padding: 60px; display: flex; flex-direction: column; align-items: center; text-align: center;
  }

  .lb-table { padding: 0 60px 60px; }
  .lb-thead {
    display: grid; grid-template-columns: 56px 44px 1fr 120px 100px 60px;
    gap: 12px; align-items: center; padding: 12px 16px;
    font-size: 10px; font-weight: 700; text-transform: uppercase;
    letter-spacing: 2px; color: var(--muted);
    border-bottom: 2px solid var(--light-gray);
  }

  @media (max-width: 900px) {
    .lb-hero, .lb-filters, .lb-podium-empty, .lb-table { padding-left: 24px; padding-right: 24px; }
    .lb-hero { flex-direction: column; align-items: flex-start; }
    .lb-hero-stats { flex-wrap: wrap; }
    .lb-filters { flex-direction: column; gap: 12px; align-items: flex-start; }
  }
`;
