import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="ft-top">
        <div className="ft-brand">
          <img src="/brainlylab-logo.png" alt="BrainlyLab" />
          <div className="ft-slogan">Brainly Core - Partnership HQ Website 2026.</div>
        </div>
        <div className="ft-cols">
          <div className="ft-col">
            <div className="ft-col-title">Website</div>
            <Link to="/">Projects</Link>
            <Link to="/">Partners</Link>
            <Link to="/">Services</Link>
            <Link to="/">News and Updates</Link>
          </div>
          <div className="ft-col">
            <div className="ft-col-title">Clients</div>
            <Link to="/">Individual Clients</Link>
            <Link to="/">Market / Organization / University</Link>
            <Link to="/">Creators and Influencers</Link>
          </div>
          <div className="ft-col">
            <div className="ft-col-title">About</div>
            <Link to="/">Partnership HQ</Link>
            <Link to="/">Requirements</Link>
            <Link to="/">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
