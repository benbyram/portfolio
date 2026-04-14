"use client";
import { useState, useEffect } from "react";

const CYCLING_WORDS = ["Startups", "Creator Companies", "Non-Profits"];

export default function Home() {
  const [wordIndex, setWordIndex] = useState(0);
  const [fading, setFading] = useState(false);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setWordIndex((i) => (i + 1) % CYCLING_WORDS.length);
        setFading(false);
      }, 400);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div style={{ background: "#fff", color: "#0c0c0c", minHeight: "100vh", position: "relative" }}>

      {/* Grid background */}
      <div style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }}>
        {/* Always-on faint grid */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `linear-gradient(rgba(255,0,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,0,255,0.07) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }} />
        {/* Cursor-lit grid */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `linear-gradient(rgba(255,0,255,0.22) 1px, transparent 1px), linear-gradient(90deg, rgba(255,0,255,0.22) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
          WebkitMaskImage: `radial-gradient(circle 380px at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 100%)`,
          maskImage: `radial-gradient(circle 380px at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 100%)`,
        }} />
      </div>

      {/* Content wrapper */}
      <div style={{ position: "relative", zIndex: 1 }}>

      {/* Mobile responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          .nav-bar { padding: 0 16px !important; }
          .nav-bar > div:first-child { font-size: 14px !important; }
          .nav-links { gap: 12px !important; }
          .nav-links a { font-size: 10px !important; letter-spacing: 0.03em !important; }
          .hero-section { grid-template-columns: 1fr !important; }
          .hero-left { padding: 40px 20px 24px !important; min-height: unset !important; }
          .hero-right { padding: 0 20px 56px !important; justify-content: flex-start !important; }
          .hero-desc { font-size: 20px !important; margin-bottom: 24px !important; }
          .section-layout { grid-template-columns: 1fr !important; }
          .section-label { padding: 40px 20px 0 !important; position: static !important; height: auto !important; }
          .project-row { flex-direction: column !important; padding: 32px 20px !important; gap: 12px !important; }
          .project-metric { padding-top: 0 !important; font-size: 26px !important; }
          .role-row { padding: 32px 20px !important; }
          .role-row h3 { font-size: 26px !important; }
          .contact-content { padding: 32px 20px 60px !important; }
          .contact-inner-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .contact-inner-grid h2 { font-size: 48px !important; }
        }
      `}</style>

      {/* SVG ink-trap filter */}
      <svg style={{ position: "absolute", width: 0, height: 0 }}>
        <defs>
          <filter id="ink-trap" x="-5%" y="-5%" width="110%" height="110%">
            <feMorphology operator="erode" radius="0.4" result="eroded" />
            <feGaussianBlur in="eroded" stdDeviation="0.4" result="blurred" />
            <feColorMatrix
              in="blurred"
              type="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 14 -4"
              result="thresholded"
            />
            <feMorphology in="thresholded" operator="dilate" radius="0.3" />
          </filter>
        </defs>
      </svg>

      {/* Navigation */}
      <nav className="nav-bar" style={{
        position: "fixed",
        top: 0,
        width: "100%",
        height: "56px",
        background: "#fff",
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        padding: "0 40px",
        justifyContent: "space-between",
      }}>
        <div style={{ fontWeight: 700, fontSize: "18px", letterSpacing: "0.05em", textTransform: "uppercase" }}>
          Ben Byram
        </div>
        <div className="nav-links" style={{ display: "flex", gap: "40px" }}>
          {["Projects", "Roles", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{ fontSize: "13px", letterSpacing: "0.04em", textTransform: "uppercase" }}
            >
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* Hero */}
      <section className="hero-section" style={{
        paddingTop: "56px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
      }}>
        <div className="hero-left" style={{
          padding: "80px 40px 80px 40px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          minHeight: "480px",
        }}>
          <div style={{ fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#666" }}>
            Available for Work
          </div>
          <div>
            <h1 style={{
              fontSize: "clamp(48px, 6vw, 88px)",
              fontWeight: 700,
              lineHeight: 1.0,
              letterSpacing: "-0.04em",
              margin: "0 0 32px 0",
            }}>
              Product<br />Leadership<br />&amp; AI<br />Consulting
              <br />
              <span style={{
                fontSize: "0.5em",
                fontWeight: 400,
                letterSpacing: "0.01em",
                color: "#555",
                display: "inline-block",
                marginTop: "8px",
              }}>
                for{" "}
                <span style={{
                  transition: "opacity 0.4s ease",
                  opacity: fading ? 0 : 1,
                  display: "inline-block",
                  color: "#555",
                }}>
                  {CYCLING_WORDS[wordIndex % CYCLING_WORDS.length]}
                </span>
              </span>
            </h1>
            <div style={{ display: "flex", gap: "16px" }}>
              <a
                href="#contact"
                style={{
                  display: "inline-block",
                  padding: "10px 24px",
                  border: "1px solid #0c0c0c",
                  fontSize: "12px",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "#ff00ff";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "inherit";
                }}
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
        <div className="hero-right" style={{
          padding: "80px 40px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
        }}>
          <p className="hero-desc" style={{ fontSize: "28px", lineHeight: 1.4, letterSpacing: "-0.02em", maxWidth: "480px", margin: "0 0 40px 0", color: "#555" }}>
            I help companies make the{" "}
            <span style={{ color: "#0c0c0c" }}>right product</span>
            {" "}for the{" "}
            <span style={{ color: "#0c0c0c" }}>right people</span>
            {" "}— and then actually reach them.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px 48px" }}>
            <div>
              <div style={{ fontSize: "36px", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1 }}>200k+</div>
              <div style={{ fontSize: "11px", letterSpacing: "0.06em", textTransform: "uppercase", marginTop: "6px", color: "#666" }}>Business owners & creators actively using products I built</div>
            </div>
            <div>
              <div style={{ fontSize: "36px", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1 }}>17k+</div>
              <div style={{ fontSize: "11px", letterSpacing: "0.06em", textTransform: "uppercase", marginTop: "6px", color: "#666" }}>Downloads of my apps · 5-star rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects">
        <div className="section-layout" style={{
          display: "grid",
          gridTemplateColumns: "240px 1fr",
        }}>
          <div className="section-label" style={{ padding: "40px", position: "sticky", top: "56px", alignSelf: "start", height: "fit-content" }}>
            <div style={{ fontSize: "28px", fontWeight: 700, letterSpacing: "-0.02em", textTransform: "uppercase", color: "#0c0c0c" }}>
              Projects
            </div>
          </div>
          <div>
            {[
              {
                category: "Kaizen Place",
                title: "Fan Powered Tour Pages",
                desc: "First-to-market Kickstarter-style presale tool for independent artists. Built it from zero. First artist to use it generated $40k before playing a single show.",
                metric: "$40k presale",
              },
              {
                category: "Kaizen Place",
                title: "Early Access Music Funnels",
                desc: "Designed a campaign workflow that let independent artists make a year's worth of Spotify revenue in 10 days. Not a typo.",
                metric: "10-day ROI",
              },
              {
                category: "Dubsado",
                title: "Dubsado Payments",
                desc: "Built a native payment processor from scratch — strategy, compliance, the whole thing. Went from $0 to $70k MRR.",
                metric: "$70k MRR",
              },
              {
                category: "Dubsado",
                title: "Dubsado Mobile App",
                desc: "Owned it end-to-end. 17k downloads. 5-star rating. First version shipped.",
                metric: "17k downloads",
              },
              {
                category: "Side Project",
                title: "Godspeed Coworking Platform",
                desc: "Text broadcasts, event pages, signups — everything I need to run my in-person coworking community of 50+ people. Built, designed, and shipped solo.",
                metric: "50+ members",
              },
            ].map((project) => (
              <div key={project.title} className="project-row" style={{
                display: "flex",
                alignItems: "flex-start",
                padding: "56px 60px",
                gap: "140px",
              }}>
                <div>
                  <h3 style={{ fontSize: "34px", fontWeight: 700, letterSpacing: "-0.03em", marginBottom: "16px" }}>
                    {project.title}
                  </h3>
                  <p style={{ fontSize: "18px", lineHeight: 1.6, color: "#444", maxWidth: "620px" }}>
                    {project.desc}{" "}
                    <span style={{ fontSize: "13px", color: "#aaa", fontWeight: 400, letterSpacing: "0.02em", whiteSpace: "nowrap" }}>— {project.category}</span>
                  </p>
                </div>
                <div className="project-metric" style={{
                  fontSize: "34px",
                  fontWeight: 700,
                  letterSpacing: "-0.03em",
                  whiteSpace: "nowrap",
                  color: "#0c0c0c",
                  paddingTop: "36px",
                }}>
                  {project.metric}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roles */}
      <section id="roles">
        <div className="section-layout" style={{ display: "grid", gridTemplateColumns: "240px 1fr" }}>
          <div className="section-label" style={{ padding: "40px", position: "sticky", top: "56px", alignSelf: "start", height: "fit-content" }}>
            <div style={{ fontSize: "28px", fontWeight: 700, letterSpacing: "-0.02em", textTransform: "uppercase", color: "#0c0c0c" }}>
              Roles
            </div>
          </div>
          <div>
            {[
              {
                role: "PM, Creator Economy",
                current: true,
                company: "CoFounder.AI",
                desc: "Democratizing entrepreneurship by giving every solopreneur and small business owner an AI cofounder and a team of AI specialists purpose-built for their business.",
              },
              {
                role: "Co-Founder & Head of Product",
                company: "Kaizen Place",
                desc: "Built a direct-to-fan monetization platform used by 1,400+ artists and 300,000+ fans.",
              },
              {
                role: "Product Manager",
                company: "Dubsado",
                desc: "Led strategy across Payments, Projects & Clients, and Mobile — delivering workflow and payment solutions to 150k+ SMB owners.",
              },
              {
                role: "UX Designer",
                company: "Social Curator",
                desc: "Led product design for social media marketing and workflow tools used by 7,000+ business owners.",
              },
            ].map((job) => (
              <div key={job.company} className="role-row" style={{
                display: "grid",
                gridTemplateColumns: "1fr auto",
                alignItems: "start",
                padding: "56px 60px",
                gap: "60px",
              }}>
                <div>
                  <div style={{ fontSize: "16px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#666", marginBottom: "16px" }}>
                    {job.company}
                  </div>
                  <h3 style={{ fontSize: "34px", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: "16px" }}>
                    {job.role}{"current" in job && job.current && (
                      <span style={{ fontSize: "22px", fontWeight: 400, color: "#555", marginLeft: "12px", letterSpacing: "0" }}>(current)</span>
                    )}
                  </h3>
                  <p style={{ fontSize: "18px", lineHeight: 1.6, color: "#444", maxWidth: "620px" }}>
                    {job.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact">
        <div className="section-layout" style={{
          display: "grid",
          gridTemplateColumns: "240px 1fr",
        }}>
          <div className="section-label" style={{ padding: "40px" }}>
            <div style={{ fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#666" }}>
              Contact
            </div>
          </div>
          <div className="contact-content" style={{ padding: "40px 60px 80px" }}>
            <h2 style={{ fontSize: "clamp(48px, 6vw, 88px)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1.0, marginBottom: "48px" }}>
              Let&apos;s Work<br />Together
            </h2>
            <div className="contact-inner-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "start" }}>
              <div>
                <div style={{ fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#666", marginBottom: "16px" }}>
                  Contract Consulting
                </div>
                <div style={{ fontSize: "15px", lineHeight: 2.2, color: "#444" }}>
                  <div>Product Strategy</div>
                  <div>Custom 0→1 Product Builds</div>
                  <div>AI Implementation &amp; Consulting</div>
                  <div>Fractional Product Leadership</div>
                  <div>Growth Funnel Optimization</div>
                </div>
              </div>
              <div style={{ display: "flex", gap: "16px", alignItems: "flex-start", paddingTop: "8px" }}>
                <a
                  href="mailto:benbyram@gmail.com"
                  style={{
                    display: "inline-block",
                    padding: "10px 24px",
                    background: "#0c0c0c",
                    color: "#fff",
                    fontSize: "12px",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    fontWeight: 600,
                  }}
                >
                  Email Me
                </a>
                <a
                  href="https://www.linkedin.com/in/benjamin-byram/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-block",
                    padding: "10px 24px",
                    border: "1px solid #0c0c0c",
                    fontSize: "12px",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    fontWeight: 600,
                  }}
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: "24px 40px",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
      }}>
        <div style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase" }}>
          Ben Byram
        </div>
      </footer>

      </div>{/* end content wrapper */}
    </div>
  );
}
