const partnerTracks = [
  {
    label: "Individual Clients",
    short: "IC",
    requirements: [
      "Minimum of 700 messages sent per month",
      "Minimum of 20 active days per month",
      "Minimum of 30 days on the server",
      "Minimum of 5,000 BrainlyCoins",
      "No warns on the server or profile",
      "Two-factor authentication enabled",
      "Positive behavior towards the community",
    ],
    additional: [
      "Invite at least 5 users to the BrainlyHQ server",
      "Reach at least level 10 on the BrainlyHQ server",
      "Provide at least 50 answers on Brainly",
    ],
    expected: [
      "Place an active invite link to the BrainlyHQ server in your Discord profile bio",
      "Actively participate in events organized on the BrainlyHQ server",
      "Stay regularly active on the BrainlyHQ server through public messages",
    ],
    termination: [
      "The user acts against the interests of the community",
      "The BrainlyHQ server rules are repeatedly violated",
      "The user remains inactive for at least 30 days",
    ],
    accent: "green",
  },
  {
    label: "Market / Organization / University",
    short: "OU",
    requirements: [
      "At least 300 members on your Discord server or at least 500 followers on social media",
      "Social media profiles must be publicly accessible",
      "Regular activity on social media",
      "No NSFW, extremist, or otherwise harmful content on social media",
      "Last social media activity within the past 30 days",
    ],
    expected: [
      "Display partnership information on all social media accounts and websites",
      "Publish at least 2 posts per month about the partnership",
      "Maintain active contact with the BrainlyHQ server management",
      "Be ready to co-organize events",
      "Care for the good reputation of the BrainlyHQ server and its members",
    ],
    termination: [
      "The partner organization becomes inactive",
      "The partner organization removes information about the active partnership",
      "The organization's activities negatively affect the reputation of the BrainlyHQ community",
      "Promotion stops for more than 30 days",
    ],
    accent: "teal",
  },
  {
    label: "Creators and Influencers",
    short: "CR",
    requirements: [
      "At least 1,000 followers/subscribers",
      "Average views per piece of content must be at least 100",
      "Regular activity on social media",
      "No NSFW, extremist, or otherwise harmful content on social media",
      "Social media profiles must be publicly accessible",
      "Last social media activity within the past 14 days",
    ],
    expected: [
      "Display partnership information on all social media accounts and websites",
      "Publish at least 2 posts/reels/mentions per month",
      "Maintain active contact with the BrainlyHQ server management",
      "Be ready to co-organize events",
      "Care for the good reputation of the BrainlyHQ server and its members",
      "Maintain a professional approach to promoting the BrainlyHQ server and community",
    ],
    termination: [
      "The creator stops actively promoting the BrainlyHQ server and community",
      "The creator's activity becomes irregular",
      "The creator removes information about the active partnership",
      "The creator's current activities negatively affect the reputation of the BrainlyHQ community",
    ],
    accent: "lavender",
  },
];

const offers = [
  "Support for teamwork",
  "Project planning",
  "Communication",
  "Partnership building",
  "Updates",
  "Opportunities",
];

function ListBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="hp-list-block">
      <h4>{title}</h4>
      <ul className="hp-req-list">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <style>{css}</style>

      <section className="hp-hero">
        <div className="hp-hero-text fade-up">
          <h1 className="hp-title">
            Brainly HQ<br />
            <span className="hp-accent">Partnership Program</span>
          </h1>
          <p className="hp-subtitle">
            This website helps people connect, work together, and grow. It gives
            support, ideas, and opportunities for better partnerships.
          </p>
          <div className="hp-actions">
            <a href="#requirements" className="hp-btn-primary">View Requirements</a>
            <a href="#services" className="hp-btn-secondary">View Services</a>
          </div>
        </div>

        <div className="hp-hero-visual fade-up" style={{ animationDelay: "0.15s" }}>
          <div className="hp-card">
            <div className="hp-card-kicker">Brainly Core</div>
            <div className="hp-card-logo">Partnership HQ</div>
            <div className="hp-card-slogan">
              People connect, work together, and grow.
            </div>
            <div className="hp-stats">
              <div className="hp-stat">
                <div className="hp-stat-num">2026</div>
                <div className="hp-stat-label">Website</div>
              </div>
              <div className="hp-stat">
                <div className="hp-stat-num">3</div>
                <div className="hp-stat-label">Clients</div>
              </div>
              <div className="hp-stat">
                <div className="hp-stat-num">1.0</div>
                <div className="hp-stat-label">Version</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hp-intro" id="about">
        <div className="hp-intro-copy">
          <div className="hp-sec-label">About Us</div>
          <h2 className="hp-sec-title">Partnership HQ is made to help people build strong connections and teamwork.</h2>
          <p>
            The goal is to create a friendly and helpful community where everyone
            can share ideas and succeed together.
          </p>
        </div>
        <div className="hp-mission-grid">
          <div>
            <span>Mission</span>
            <strong>Help people build better partnerships through teamwork, trust, and communication.</strong>
          </div>
          <div>
            <span>Vision</span>
            <strong>Create a community where people help each other grow and succeed together.</strong>
          </div>
        </div>
      </section>

      <section className="hp-promo" id="services">
        <div className="hp-promo-inner">
          <div className="hp-promo-text">
            <div className="hp-promo-label">What We Offer</div>
            <h2 className="hp-promo-title">Support for teamwork, project planning, communication, and partnership building.</h2>
            <p className="hp-promo-desc">
              Partnership HQ also provides updates and opportunities that can help
              people improve their projects and ideas.
            </p>
          </div>
          <div className="hp-offer-grid">
            {offers.map((offer) => (
              <div className="hp-offer" key={offer}>{offer}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="hp-features" id="requirements">
        <div className="hp-sec-label">Clients</div>
        <h2 className="hp-sec-title">The program distinguishes 3 categories of clients.</h2>
        <div className="hp-feat-grid">
          {partnerTracks.map((track, index) => (
            <article
              className="hp-feat-card fade-up"
              key={track.label}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`hp-feat-icon hp-fi-${track.accent}`}>{track.short}</div>
              <h3 className="hp-feat-title">{track.label}</h3>
              <ListBlock title="Requirements that must be met" items={track.requirements} />
              {track.additional ? (
                <ListBlock title="Additionally, at least one must be met" items={track.additional} />
              ) : null}
              <ListBlock title="What we expect in return" items={track.expected} />
              <ListBlock title="The partnership may be terminated if" items={track.termination} />
            </article>
          ))}
        </div>
      </section>

      <section className="hp-slogan" id="contact">
        <div className="hp-slogan-text"><span>Thank You!</span> Brainly Core</div>
        <div className="hp-slogan-actions">
          <a className="hp-slogan-btn hp-slogan-btn-contact" href="https://discord.com/users/743056866593996832" target="_blank" rel="noopener noreferrer">Contact</a>
          <a className="hp-slogan-btn hp-slogan-btn-join" href="https://discord.gg/ApmsnwYC" target="_blank" rel="noopener noreferrer">Join BrainlyHQ</a>
        </div>
      </section>
    </>
  );
}

const css = `
  .hp-hero {
    padding: 80px 60px 60px;
    display: flex; align-items: center; gap: 60px;
    min-height: 80vh;
    background: linear-gradient(180deg, var(--green) 0%, var(--white) 100%);
    position: relative; overflow: hidden;
  }
  .hp-hero::before {
    content: ''; position: absolute; top: -200px; right: -200px;
    width: 600px; height: 600px;
    background: radial-gradient(circle, rgba(0,204,197,0.16) 0%, transparent 70%);
    pointer-events: none;
  }
  .hp-hero::after {
    content: ''; position: absolute; bottom: -150px; left: -100px;
    width: 500px; height: 500px;
    background: radial-gradient(circle, rgba(191,141,255,0.1) 0%, transparent 70%);
    pointer-events: none;
  }
  .hp-hero-text { flex: 1; position: relative; z-index: 1; }
  .hp-badge {
    display: inline-flex; align-items: center; gap: 8px;
    background: var(--black); color: var(--green);
    font-weight: 900; font-size: 11px; text-transform: uppercase;
    letter-spacing: 2px; padding: 8px 18px; border-radius: var(--radius-sm);
    margin-bottom: 24px;
  }
  .hp-dot {
    width: 6px; height: 6px; background: var(--green);
    border-radius: 50%; animation: blink 1.4s ease-in-out infinite;
  }
  .hp-title {
    font-weight: 900; font-size: clamp(46px, 7vw, 84px);
    text-transform: uppercase; line-height: 0.98; letter-spacing: 0;
    margin-bottom: 20px;
  }
  .hp-accent { color: var(--purple); }
  .hp-subtitle {
    font-size: 20px; font-weight: 600; color: var(--muted);
    max-width: 620px; line-height: 1.5; margin-bottom: 36px;
  }
  .hp-actions { display: flex; gap: 16px; flex-wrap: wrap; }
  .hp-btn-primary,
  .hp-btn-secondary {
    font-family: var(--font); font-weight: 900; font-size: 15px;
    text-transform: uppercase; letter-spacing: 1.5px; padding: 16px 32px;
    border-radius: var(--radius-sm); transition: all 0.3s; text-decoration: none;
    display: inline-block;
  }
  .hp-btn-primary { background: var(--black); color: var(--green); }
  .hp-btn-primary:hover { transform: translateY(-3px); box-shadow: 0 8px 24px rgba(0,0,0,0.2); }
  .hp-btn-secondary { background: transparent; color: var(--black); border: 2px solid var(--black); }
  .hp-btn-secondary:hover { background: var(--black); color: var(--green); }
  .hp-hero-visual { flex: 0 0 420px; display: flex; justify-content: center; align-items: center; position: relative; z-index: 1; }
  .hp-card {
    width: 100%; padding: 40px; text-align: center;
    background: var(--white); border: 2px solid var(--black);
    border-radius: var(--radius-lg); position: relative;
    box-shadow: 12px 12px 0 var(--black);
  }
  .hp-card-kicker { font-size: 11px; font-weight: 900; color: var(--purple); text-transform: uppercase; letter-spacing: 2px; margin-bottom: 10px; }
  .hp-card-logo { font-weight: 900; font-size: 30px; margin-bottom: 12px; text-transform: uppercase; }
  .hp-card-slogan { font-weight: 700; font-size: 16px; color: var(--muted); margin-bottom: 24px; line-height: 1.4; }
  .hp-stats { display: flex; gap: 12px; justify-content: center; }
  .hp-stat { background: var(--green); border-radius: var(--radius-sm); padding: 12px; text-align: center; flex: 1; }
  .hp-stat-num { font-weight: 900; font-size: 22px; line-height: 1; }
  .hp-stat-label { font-size: 9px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.2px; color: rgba(0,0,0,0.5); margin-top: 5px; }

  .hp-intro, .hp-features { padding: 80px 60px; }
  .hp-intro { background: var(--white); display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 48px; align-items: center; }
  .hp-intro-copy p {
    color: var(--muted); font-size: 18px; font-weight: 600; line-height: 1.6; max-width: 720px;
  }
  .hp-mission-grid { display: grid; gap: 18px; }
  .hp-mission-grid div {
    background: var(--off-white); border: 2px solid var(--light-gray);
    border-radius: var(--radius-lg); padding: 28px;
  }
  .hp-mission-grid span {
    display: block; color: var(--purple); font-size: 11px; font-weight: 900;
    text-transform: uppercase; letter-spacing: 2px; margin-bottom: 8px;
  }
  .hp-mission-grid strong { font-size: 20px; line-height: 1.35; display: block; }

  .hp-sec-label { font-weight: 900; font-size: 11px; text-transform: uppercase; letter-spacing: 3px; color: var(--purple); margin-bottom: 8px; }
  .hp-sec-title { font-weight: 900; font-size: clamp(32px, 4vw, 52px); text-transform: uppercase; letter-spacing: 0; margin-bottom: 40px; line-height: 1; max-width: 920px; }
  .hp-feat-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; align-items: start; }
  .hp-feat-card { padding: 34px 28px; border: 2px solid var(--light-gray); border-radius: var(--radius-lg); transition: all 0.3s; position: relative; overflow: hidden; background: var(--white); }
  .hp-feat-card:hover { border-color: var(--green); transform: translateY(-4px); box-shadow: 0 12px 32px rgba(150,238,96,0.15); }
  .hp-feat-icon { width: 56px; height: 56px; display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 20px; border-radius: var(--radius-sm); margin-bottom: 20px; }
  .hp-fi-green { background: var(--green); color: var(--black); }
  .hp-fi-teal { background: var(--teal); color: var(--white); }
  .hp-fi-lavender { background: var(--lavender); color: var(--white); }
  .hp-feat-title { font-weight: 900; font-size: 20px; text-transform: uppercase; letter-spacing: 0; margin-bottom: 18px; }
  .hp-list-block { margin-top: 18px; }
  .hp-list-block h4 {
    font-size: 11px; font-weight: 900; text-transform: uppercase; letter-spacing: 1.6px;
    color: var(--purple); margin-bottom: 9px;
  }
  .hp-req-list { display: grid; gap: 8px; list-style: none; }
  .hp-req-list li {
    color: var(--dark); font-weight: 700; font-size: 13px; line-height: 1.35;
    padding-left: 18px; position: relative;
  }
  .hp-req-list li::before {
    content: ''; position: absolute; left: 0; top: 8px; width: 7px; height: 7px;
    background: var(--green); border-radius: 50%;
  }

  .hp-promo { padding: 80px 60px; background: var(--green); position: relative; overflow: hidden; }
  .hp-promo::before { content: ''; position: absolute; inset: 0; background: url('/brainlylab-watermark.png') repeat center; background-size: 800px auto; opacity: 0.06; pointer-events: none; }
  .hp-promo-inner { display: grid; grid-template-columns: 1fr 1fr; align-items: center; gap: 60px; position: relative; z-index: 1; }
  .hp-promo-label { font-weight: 900; font-size: 11px; text-transform: uppercase; letter-spacing: 3px; color: rgba(0,0,0,0.4); margin-bottom: 8px; }
  .hp-promo-title { font-weight: 900; font-size: clamp(34px, 5vw, 56px); text-transform: uppercase; letter-spacing: 0; line-height: 1; margin-bottom: 16px; max-width: 720px; }
  .hp-promo-desc { font-size: 17px; font-weight: 600; color: rgba(0,0,0,0.58); max-width: 560px; line-height: 1.5; }
  .hp-offer-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; }
  .hp-offer { background: var(--white); border: 2px solid var(--black); border-radius: var(--radius-sm); padding: 20px; font-weight: 900; text-transform: uppercase; box-shadow: 5px 5px 0 rgba(0,0,0,0.18); }

  .hp-slogan { padding: 56px 60px; background: var(--black); text-align: center; }
  .hp-slogan-text { font-weight: 900; font-size: clamp(28px, 4vw, 52px); text-transform: uppercase; letter-spacing: 0; color: var(--green); line-height: 1.1; }
  .hp-slogan-text span { color: var(--white); }
  .hp-slogan-actions { display: flex; justify-content: center; gap: 16px; flex-wrap: wrap; margin-top: 26px; }
  .hp-slogan-btn {
    display: inline-block; padding: 14px 28px; border-radius: var(--radius-sm);
    font-size: 13px; font-weight: 900; letter-spacing: 1.5px; text-transform: uppercase;
    text-decoration: none; transition: transform 0.3s, box-shadow 0.3s, background 0.3s, color 0.3s;
  }
  .hp-slogan-btn-contact { background: var(--green); color: var(--black); }
  .hp-slogan-btn-join { background: transparent; color: var(--green); border: 2px solid var(--green); }
  .hp-slogan-btn:hover { transform: translateY(-3px); box-shadow: 0 8px 24px rgba(150,238,96,0.2); }
  .hp-slogan-btn-join:hover { background: var(--green); color: var(--black); }
  .hp-slogan p { max-width: 760px; margin: 16px auto 0; color: rgba(255,255,255,0.68); font-weight: 700; font-size: 16px; text-transform: uppercase; letter-spacing: 1.5px; }

  @media (max-width: 1100px) {
    .hp-hero, .hp-intro, .hp-features, .hp-promo, .hp-slogan { padding-left: 24px; padding-right: 24px; }
    .hp-hero { flex-direction: column; min-height: auto; padding-top: 48px; align-items: flex-start; }
    .hp-hero-visual { width: 100%; flex: none; }
    .hp-intro, .hp-promo-inner { grid-template-columns: 1fr; }
    .hp-feat-grid { grid-template-columns: 1fr; }
  }

  @media (max-width: 620px) {
    .hp-stats, .hp-offer-grid { grid-template-columns: 1fr; display: grid; }
    .hp-card { padding: 28px; }
    .hp-title { font-size: 40px; }
    .hp-subtitle { font-size: 17px; }
  }
`;
