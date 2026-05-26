import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AuthPage() {
  const [tab, setTab] = useState<"login" | "register">("login");
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setError("");
    setLoading(true);
    try {
      const res = await fetch("http://127.0.0.1:8000/api/auth/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (res.ok) {
        localStorage.setItem("access_token", data.access);
        localStorage.setItem("refresh_token", data.refresh);
        navigate("/profile");
      } else {
        setError(data.detail || "Invalid credentials");
      }
    } catch (err) {
      setError("Error connecting to server");
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async () => {
    setError("");
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("http://127.0.0.1:8000/api/auth/register/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });
      const data = await res.json();
      if (res.ok) {
        // Log them in automatically after register
        handleLogin();
      } else {
        setError(JSON.stringify(data));
      }
    } catch (err) {
      setError("Error connecting to server");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style>{css}</style>

      <div className="au-main">
        <div className="au-card">
          <div className="au-header">
            <img src="/brainlylab-logo.png" alt="BrainlyLab" className="au-logo" />
            <div className="au-title">{tab === "login" ? "Log In" : "Sign Up"}</div>
            <div className="au-subtitle">{tab === "login" ? "Every Lesson Moves You Forward." : "Knowledge Is the First Power-Up."}</div>
          </div>

          <div className="au-tabs">
            <button className={`au-tab${tab === "login" ? " active" : ""}`} onClick={() => { setTab("login"); setError(""); }}>Log In</button>
            <button className={`au-tab${tab === "register" ? " active" : ""}`} onClick={() => { setTab("register"); setError(""); }}>Sign Up</button>
          </div>

          {error && <div className="prof-error" style={{ marginBottom: 16 }}>{error}</div>}

          {tab === "login" && (
            <div>
              <div className="au-field">
                <label>Username</label>
                <input type="text" placeholder="Enter your username" value={username} onChange={(e) => setUsername(e.target.value)} />
              </div>
              <div className="au-field">
                <label>Password</label>
                <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div className="au-field-row">
                <label className="au-ck"><input type="checkbox" /><span>Remember me</span></label>
                <a href="#" className="au-forgot">Forgot password?</a>
              </div>
              <button className="au-submit" onClick={handleLogin} disabled={loading}>{loading ? "..." : "Log In"}</button>
              <div className="au-divider"><span>or continue with</span></div>
              <div className="au-socials">
                <button className="au-social discord">Discord</button>
                <button className="au-social google">Google</button>
              </div>
            </div>
          )}

          {tab === "register" && (
            <div>
              <div className="au-field">
                <label>Username</label>
                <input type="text" placeholder="Choose a username" value={username} onChange={(e) => setUsername(e.target.value)} />
              </div>
              <div className="au-field">
                <label>Email</label>
                <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="au-field">
                <label>Password</label>
                <input type="password" placeholder="Create a password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div className="au-field">
                <label>Confirm Password</label>
                <input type="password" placeholder="Repeat your password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
              </div>
              <button className="au-submit" style={{ marginTop: 8 }} onClick={handleRegister} disabled={loading}>{loading ? "..." : "Create Account"}</button>
              <div className="au-divider"><span>or sign up with</span></div>
              <div className="au-socials">
                <button className="au-social discord">Discord</button>
                <button className="au-social google">Google</button>
              </div>
              <div className="au-terms">By signing up, you agree to BrainlyLab&#39;s<br /><a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a></div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

const css = `
  .au-main {
    flex: 1; display: flex; align-items: center; justify-content: center;
    padding: 60px 24px; position: relative; z-index: 1;
    background: linear-gradient(180deg, var(--green) 0%, var(--white) 40%);
  }
  .au-card {
    width: 100%; max-width: 440px;
    background: var(--white); border: 2px solid var(--black);
    border-radius: var(--radius-lg); padding: 48px 40px;
    box-shadow: 10px 10px 0 var(--black);
  }
  .au-header { text-align: center; margin-bottom: 36px; }
  .au-logo { height: 52px; margin: 0 auto 16px; }
  .au-title { font-weight: 900; font-size: 32px; text-transform: uppercase; letter-spacing: -1px; line-height: 1; }
  .au-subtitle { font-weight: 600; font-size: 14px; color: var(--muted); margin-top: 8px; }
  .au-tabs { display: flex; gap: 4px; margin-bottom: 28px; background: var(--off-white); border-radius: var(--radius-sm); padding: 4px; }
  .au-tab {
    flex: 1; padding: 10px; text-align: center;
    font-family: var(--font); font-weight: 900; font-size: 13px;
    text-transform: uppercase; letter-spacing: 1.5px;
    border: none; cursor: pointer; border-radius: 16px;
    background: transparent; color: var(--muted); transition: all 0.2s;
  }
  .au-tab.active { background: var(--green); color: var(--black); }
  .au-tab:hover:not(.active) { color: var(--black); }
  .au-field { margin-bottom: 16px; }
  .au-field label {
    display: block; font-weight: 700; font-size: 11px;
    text-transform: uppercase; letter-spacing: 2px;
    color: var(--muted); margin-bottom: 6px;
  }
  .au-field input {
    width: 100%; padding: 14px 18px;
    font-family: var(--font); font-weight: 600; font-size: 15px;
    border: 2px solid var(--light-gray); border-radius: var(--radius-sm);
    outline: none; transition: border-color 0.2s; background: var(--white);
  }
  .au-field input:focus { border-color: var(--green); }
  .au-field input::placeholder { color: #bbb; }
  .au-field-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; }
  .au-ck { display: flex; align-items: center; gap: 8px; cursor: pointer; }
  .au-ck input[type="checkbox"] { width: 18px; height: 18px; accent-color: var(--green); cursor: pointer; }
  .au-ck span { font-weight: 600; font-size: 13px; color: var(--muted); }
  .au-forgot { font-weight: 700; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: var(--purple); text-decoration: none; transition: color 0.2s; }
  .au-forgot:hover { color: var(--black); }
  .au-submit {
    width: 100%; padding: 16px;
    font-family: var(--font); font-weight: 900; font-size: 15px;
    text-transform: uppercase; letter-spacing: 2px;
    background: var(--black); color: var(--green);
    border: none; cursor: pointer; border-radius: var(--radius-sm); transition: all 0.3s;
  }
  .au-submit:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(0,0,0,0.25); }
  .au-divider { display: flex; align-items: center; gap: 16px; margin: 24px 0; }
  .au-divider::before, .au-divider::after { content: ''; flex: 1; height: 1px; background: var(--light-gray); }
  .au-divider span { font-weight: 700; font-size: 10px; text-transform: uppercase; letter-spacing: 2px; color: var(--muted); }
  .au-socials { display: flex; gap: 10px; }
  .au-social {
    flex: 1; padding: 12px;
    font-family: var(--font); font-weight: 700; font-size: 13px;
    text-transform: uppercase; letter-spacing: 1px;
    background: var(--off-white); border: 2px solid var(--light-gray);
    color: var(--black); cursor: pointer; border-radius: var(--radius-sm);
    transition: all 0.2s; text-align: center;
  }
  .au-social:hover { border-color: var(--green); background: rgba(150,238,96,0.06); }
  .au-social.discord { border-color: #5865F2; color: #5865F2; }
  .au-social.discord:hover { background: rgba(88,101,242,0.06); }
  .au-social.google { border-color: #e44; color: #e44; }
  .au-social.google:hover { background: rgba(238,68,68,0.06); }
  .au-terms { font-weight: 600; font-size: 12px; color: var(--muted); text-align: center; margin-top: 20px; line-height: 1.5; }
  .au-terms a { color: var(--purple); text-decoration: none; font-weight: 700; }
  .au-terms a:hover { text-decoration: underline; }

  @media (max-width: 560px) {
    .au-main { padding: 32px 16px; }
    .au-card { padding: 32px 24px; box-shadow: 6px 6px 0 var(--black); }
    .au-socials { flex-direction: column; }
  }
`;
