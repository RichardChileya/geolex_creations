"use client";

import { useEffect, useRef, useState } from "react";

const services = [
  {
    icon: "📱",
    title: "App Development",
    desc: "Native and cross-platform mobile apps built for performance, scalability, and beautiful user experiences.",
  },
  {
    icon: "📣",
    title: "Digital Marketing",
    desc: "Data-driven campaigns across SEO, social media, and paid ads that grow your brand and convert audiences.",
  },
  {
    icon: "🖥️",
    title: "IT Consultancy",
    desc: "Strategic technology guidance to align your IT infrastructure with your business goals and vision.",
  },
  {
    icon: "🛠️",
    title: "IT Support",
    desc: "Reliable, responsive support services keeping your systems running smoothly around the clock.",
  },
  {
    icon: "🌐",
    title: "Web Development",
    desc: "Fast, modern websites and web apps crafted with cutting-edge frameworks and clean, maintainable code.",
  },
  {
    icon: "☁️",
    title: "Cloud Solutions",
    desc: "Secure cloud migration, architecture and management so your business scales without limits.",
  },
];

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "24/7", label: "Support Available" },
  { value: "5+", label: "Years Experience" },
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --navy: #050d1f;
          --navy-mid: #0a1628;
          --navy-light: #0f2040;
          --green: #00d97e;
          --green-dim: #00b868;
          --white: #f0f4ff;
          --muted: #7a8aaa;
          --border: rgba(0,217,126,0.15);
          --font-display: 'Syne', sans-serif;
          --font-body: 'DM Sans', sans-serif;
        }

        html { scroll-behavior: smooth; }

        body {
          background: var(--navy);
          color: var(--white);
          font-family: var(--font-body);
          overflow-x: hidden;
        }

        /* ── NAV ── */
        nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          padding: 1.25rem 2rem;
          display: flex; align-items: center; justify-content: space-between;
          transition: background 0.4s, backdrop-filter 0.4s, box-shadow 0.4s;
        }
        nav.scrolled {
          background: rgba(5,13,31,0.85);
          backdrop-filter: blur(18px);
          box-shadow: 0 1px 0 var(--border);
        }
        .nav-logo {
          font-family: var(--font-display);
          font-weight: 800; font-size: 1.4rem; letter-spacing: 0.04em;
          color: var(--white); text-decoration: none;
        }
        .nav-logo span { color: var(--green); }
        .nav-links { display: flex; gap: 2.5rem; list-style: none; }
        .nav-links a {
          color: var(--muted); text-decoration: none;
          font-size: 0.9rem; font-weight: 500; letter-spacing: 0.03em;
          transition: color 0.2s;
        }
        .nav-links a:hover { color: var(--white); }
        .nav-cta {
          background: var(--green); color: var(--navy);
          padding: 0.55rem 1.4rem; border-radius: 6px;
          font-weight: 700; font-size: 0.88rem; text-decoration: none;
          letter-spacing: 0.04em; transition: background 0.2s, transform 0.15s;
        }
        .nav-cta:hover { background: var(--green-dim); transform: translateY(-1px); }
        .hamburger { display: none; flex-direction: column; gap: 5px; cursor: pointer; }
        .hamburger span { width: 24px; height: 2px; background: var(--white); border-radius: 2px; transition: 0.3s; }

        /* ── HERO ── */
        .hero {
          min-height: 100vh;
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          text-align: center;
          padding: 7rem 2rem 4rem;
          position: relative; overflow: hidden;
        }
        .hero-bg {
          position: absolute; inset: 0; z-index: 0;
          background: radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,217,126,0.12) 0%, transparent 70%),
                      radial-gradient(ellipse 60% 40% at 80% 80%, rgba(0,80,200,0.15) 0%, transparent 60%);
        }
        .hero-grid {
          position: absolute; inset: 0; z-index: 0;
          background-image:
            linear-gradient(rgba(0,217,126,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,217,126,0.04) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%);
        }
        .hero-badge {
          position: relative; z-index: 1;
          display: inline-flex; align-items: center; gap: 0.5rem;
          border: 1px solid var(--border);
          background: rgba(0,217,126,0.07);
          padding: 0.4rem 1rem; border-radius: 100px;
          font-size: 0.8rem; font-weight: 500; color: var(--green);
          margin-bottom: 1.8rem; letter-spacing: 0.06em; text-transform: uppercase;
          animation: fadeUp 0.8s ease both;
        }
        .hero-badge::before { content: '●'; font-size: 0.5rem; }
        .hero h1 {
          position: relative; z-index: 1;
          font-family: var(--font-display);
          font-size: clamp(2.8rem, 7vw, 5.5rem);
          font-weight: 800; line-height: 1.05; letter-spacing: -0.02em;
          margin-bottom: 1.5rem;
          animation: fadeUp 0.8s 0.1s ease both;
        }
        .hero h1 em { font-style: normal; color: var(--green); }
        .hero p {
          position: relative; z-index: 1;
          max-width: 560px; font-size: 1.1rem;
          color: var(--muted); line-height: 1.7;
          margin: 0 auto 2.5rem;
          animation: fadeUp 0.8s 0.2s ease both;
        }
        .hero-actions {
          position: relative; z-index: 1;
          display: flex; gap: 1rem; flex-wrap: wrap; justify-content: center;
          animation: fadeUp 0.8s 0.3s ease both;
        }
        .btn-primary {
          background: var(--green); color: var(--navy);
          padding: 0.85rem 2rem; border-radius: 8px;
          font-weight: 700; font-size: 0.95rem; text-decoration: none;
          letter-spacing: 0.03em; transition: all 0.2s;
          box-shadow: 0 0 30px rgba(0,217,126,0.3);
        }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 0 50px rgba(0,217,126,0.45); }
        .btn-secondary {
          border: 1px solid var(--border); color: var(--white);
          padding: 0.85rem 2rem; border-radius: 8px;
          font-weight: 500; font-size: 0.95rem; text-decoration: none;
          transition: all 0.2s; background: rgba(255,255,255,0.03);
        }
        .btn-secondary:hover { border-color: var(--green); color: var(--green); }

        /* ── STATS ── */
        .stats {
          display: grid; grid-template-columns: repeat(4, 1fr);
          gap: 1px; background: var(--border);
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }
        .stat {
          background: var(--navy-mid);
          padding: 2.5rem 1rem; text-align: center;
          transition: background 0.2s;
        }
        .stat:hover { background: var(--navy-light); }
        .stat-value {
          font-family: var(--font-display);
          font-size: 2.5rem; font-weight: 800; color: var(--green);
          line-height: 1;
        }
        .stat-label { color: var(--muted); font-size: 0.85rem; margin-top: 0.4rem; }

        /* ── SECTION COMMONS ── */
        section { padding: 6rem 2rem; }
        .container { max-width: 1100px; margin: 0 auto; }
        .section-tag {
          font-size: 0.75rem; font-weight: 700;
          color: var(--green); letter-spacing: 0.15em; text-transform: uppercase;
          margin-bottom: 0.8rem;
        }
        .section-title {
          font-family: var(--font-display);
          font-size: clamp(1.8rem, 4vw, 2.8rem);
          font-weight: 800; line-height: 1.15; letter-spacing: -0.01em;
          margin-bottom: 1rem;
        }
        .section-sub { color: var(--muted); font-size: 1rem; line-height: 1.7; max-width: 500px; }

        /* ── SERVICES ── */
        .services-bg { background: var(--navy-mid); }
        .services-header { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 3.5rem; flex-wrap: wrap; gap: 1rem; }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        .service-card {
          background: var(--navy);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 2rem;
          transition: transform 0.25s, border-color 0.25s, box-shadow 0.25s;
          cursor: default;
        }
        .service-card:hover {
          transform: translateY(-6px);
          border-color: var(--green);
          box-shadow: 0 12px 40px rgba(0,217,126,0.12);
        }
        .service-icon {
          font-size: 2rem; margin-bottom: 1rem;
          display: inline-block;
          background: rgba(0,217,126,0.08);
          border-radius: 10px; padding: 0.6rem;
          line-height: 1;
        }
        .service-card h3 {
          font-family: var(--font-display);
          font-size: 1.1rem; font-weight: 700;
          margin-bottom: 0.6rem;
        }
        .service-card p { color: var(--muted); font-size: 0.9rem; line-height: 1.65; }

        /* ── WHY US ── */
        .why-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: center; }
        .why-visual {
          position: relative; aspect-ratio: 1;
          border-radius: 16px; overflow: hidden;
          background: linear-gradient(135deg, var(--navy-light) 0%, var(--navy-mid) 100%);
          border: 1px solid var(--border);
          display: flex; align-items: center; justify-content: center;
        }
        .why-glow {
          position: absolute; width: 60%; aspect-ratio: 1;
          background: radial-gradient(circle, rgba(0,217,126,0.25) 0%, transparent 70%);
          border-radius: 50%;
        }
        .why-logo-text {
          position: relative; z-index: 1;
          font-family: var(--font-display);
          font-size: 4rem; font-weight: 800; color: var(--white);
          letter-spacing: -0.02em;
        }
        .why-logo-text span { color: var(--green); }
        .why-points { display: flex; flex-direction: column; gap: 1.5rem; margin-top: 2rem; }
        .why-point { display: flex; gap: 1rem; align-items: flex-start; }
        .why-dot {
          width: 10px; height: 10px; border-radius: 50%;
          background: var(--green); flex-shrink: 0; margin-top: 6px;
        }
        .why-point h4 { font-family: var(--font-display); font-weight: 700; margin-bottom: 0.2rem; }
        .why-point p { color: var(--muted); font-size: 0.9rem; line-height: 1.6; }

        /* ── CTA ── */
        .cta-section {
          background: linear-gradient(135deg, rgba(0,217,126,0.1) 0%, rgba(0,80,200,0.1) 100%);
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          text-align: center;
        }
        .cta-section .section-title { margin-bottom: 0.8rem; }
        .cta-section p { color: var(--muted); margin: 0 auto 2.5rem; max-width: 480px; line-height: 1.7; }
        .cta-form {
          display: flex; gap: 0.75rem; justify-content: center;
          flex-wrap: wrap; max-width: 480px; margin: 0 auto;
        }
        .cta-form input {
          flex: 1; min-width: 220px;
          background: rgba(255,255,255,0.05);
          border: 1px solid var(--border);
          border-radius: 8px; padding: 0.85rem 1.2rem;
          color: var(--white); font-family: var(--font-body); font-size: 0.95rem;
          outline: none; transition: border-color 0.2s;
        }
        .cta-form input::placeholder { color: var(--muted); }
        .cta-form input:focus { border-color: var(--green); }
        .cta-form button {
          background: var(--green); color: var(--navy);
          border: none; border-radius: 8px;
          padding: 0.85rem 1.8rem; cursor: pointer;
          font-weight: 700; font-family: var(--font-body); font-size: 0.95rem;
          transition: all 0.2s;
        }
        .cta-form button:hover { background: var(--green-dim); transform: translateY(-1px); }

        /* ── FOOTER ── */
        footer {
          background: var(--navy-mid);
          border-top: 1px solid var(--border);
          padding: 3rem 2rem;
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: 1.5rem;
        }
        .footer-logo {
          font-family: var(--font-display);
          font-weight: 800; font-size: 1.2rem; color: var(--white);
        }
        .footer-logo span { color: var(--green); }
        .footer-links { display: flex; gap: 2rem; list-style: none; flex-wrap: wrap; }
        .footer-links a { color: var(--muted); text-decoration: none; font-size: 0.85rem; transition: color 0.2s; }
        .footer-links a:hover { color: var(--green); }
        .footer-copy { color: var(--muted); font-size: 0.8rem; }

        /* ── ANIMATIONS ── */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 900px) {
          .services-grid { grid-template-columns: repeat(2, 1fr); }
          .why-grid { grid-template-columns: 1fr; }
          .why-visual { max-width: 360px; }
          .stats { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .nav-links, .nav-cta { display: none; }
          .hamburger { display: flex; }
          .services-grid { grid-template-columns: 1fr; }
          .stats { grid-template-columns: repeat(2, 1fr); }
          nav { padding: 1rem 1.25rem; }
        }
      `}</style>

      {/* NAV */}
      <nav className={scrolled ? "scrolled" : ""}>
        <a href="#" className="nav-logo">
          GEO<span>LEX</span>
        </a>
        <ul className="nav-links">
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#why">Why Us</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <a href="#contact" className="nav-cta">
          Get Started
        </a>
        <div className="hamburger">
          <span />
          <span />
          <span />
        </div>
      </nav>

      {/* HERO */}
      <section className="hero" ref={heroRef}>
        <div className="hero-bg" />
        <div className="hero-grid" />
        <div className="hero-badge">Tech Solutions for the Modern Business</div>
        <h1>
          Build. Grow.
          <br />
          <em>Innovate.</em>
        </h1>
        <p>
          Geolex Creations is your end-to-end technology partner — from stunning
          apps and websites to smart IT strategy and always-on support.
        </p>
        <div className="hero-actions">
          <a href="#services" className="btn-primary">
            Explore Services
          </a>
          <a href="#contact" className="btn-secondary">
            Talk to Us →
          </a>
        </div>
      </section>

      {/* STATS */}
      <div className="stats">
        {stats.map((s) => (
          <div className="stat" key={s.label}>
            <div className="stat-value">{s.value}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      {/* SERVICES */}
      <section className="services-bg" id="services">
        <div className="container">
          <div className="services-header">
            <div>
              <div className="section-tag">What We Do</div>
              <h2 className="section-title">
                Services Built
                <br />
                for Growth
              </h2>
            </div>
            <p className="section-sub">
              From strategy to execution, we deliver technology solutions that
              make a real difference.
            </p>
          </div>
          <div className="services-grid">
            {services.map((s) => (
              <div className="service-card" key={s.title}>
                <div className="service-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section id="why">
        <div className="container">
          <div className="why-grid">
            <div className="why-visual">
              <div className="why-glow" />
              <div className="why-logo-text">
                G<span>.</span>
              </div>
            </div>
            <div>
              <div className="section-tag">Why Geolex</div>
              <h2 className="section-title">
                Technology That Works as Hard as You Do
              </h2>
              <div className="why-points">
                {[
                  {
                    title: "Startup Agility",
                    desc: "We move fast, adapt quickly and deliver without the bloat of large agencies.",
                  },
                  {
                    title: "End-to-End Ownership",
                    desc: "We take full ownership from discovery to deployment and beyond.",
                  },
                  {
                    title: "Local Understanding",
                    desc: "Deep understanding of the African market with a global-standard execution.",
                  },
                  {
                    title: "Transparent Pricing",
                    desc: "No hidden fees. You know exactly what you are getting and what it costs.",
                  },
                ].map((p) => (
                  <div className="why-point" key={p.title}>
                    <div className="why-dot" />
                    <div>
                      <h4>{p.title}</h4>
                      <p>{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" id="contact">
        <div className="container">
          <div className="section-tag">Get In Touch</div>
          <h2 className="section-title">Ready to Build Something Great?</h2>
          <p>
            Leave your email and we'll reach out to discuss how Geolex can help
            your business grow.
          </p>
          <div className="cta-form">
            <input type="email" placeholder="your@email.com" />
            <button type="button">Let's Talk</button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-logo">
          GEO<span>LEX</span> CREATIONS
        </div>
        <ul className="footer-links">
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#why">Why Us</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <span className="footer-copy">
          © {new Date().getFullYear()} Geolex Creations. All rights reserved.
        </span>
      </footer>
    </>
  );
}
