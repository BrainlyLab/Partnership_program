import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const LINKS = [
  { label: "Partnership HQ", path: "/" },
  { label: "About Us", path: "/#about" },
  { label: "Services", path: "/#services" },
  { label: "Requirements", path: "/#requirements" },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <nav className="site-nav">
      <Link to="/" className="nav-logo">
        <img src="/brainlylab-logo.png" alt="BrainlyLab" />
      </Link>
      <div className={`nav-links${open ? " open" : ""}`}>
        {LINKS.map((l) => (
          <Link
            key={l.path}
            to={l.path}
            className={pathname === l.path ? "active" : ""}
          >
            {l.label}
          </Link>
        ))}
      </div>
      <Link to="/#contact" className="nav-cta">Apply Now</Link>
      <button className="burger" onClick={() => setOpen(!open)} aria-label="Menu">
        <span /><span /><span />
      </button>
    </nav>
  );
}
