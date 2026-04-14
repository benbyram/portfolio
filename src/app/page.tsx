"use client";
import { useState, useEffect } from "react";

const CYCLING_WORDS = ["Startups", "Creator Companies", "Non-Profits", "Universities", "Small Businesses"];

function generateLines(input: string): string[] {
  const short = input.length > 48 ? input.slice(0, 48) + "..." : input;
  return [
    `> analyzing: "${short}"`,
    `> scoping requirements...`,
    ``,
    `const engagement = {`,
    `  lead:     "Ben Byram",`,
    `  request:  "${short}",`,
    `  approach: [`,
    `    "discovery + stakeholder mapping",`,
    `    "strategy & roadmap",`,
    `    "execution & iteration",`,
    `  ],`,
    `  timeline: "let's talk",`,
    `}`,
    ``,
    `> identifying quick wins...`,
    `> drafting roadmap...`,
    `> strategy initialized.`,
    ``,
    `// Ben can help with this.`,
    `// Get in touch to get started.`,
  ];
}

export default function Home() {
  const [wordIndex, setWordIndex] = useState(0);
  const [fading, setFading] = useState(false);
  const [aiInput, setAiInput] = useState("");
  const [aiSubmitted, setAiSubmitted] = useState(false);
  const [aiLines, setAiLines] = useState<string[]>([]);
  const [aiDone, setAiDone] = useState(false);

  function handleAiSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!aiInput.trim() || aiSubmitted) return;
    setAiSubmitted(true);
    setAiLines([]);
    setAiDone(false);
    const lines = generateLines(aiInput.trim());
    lines.forEach((line, i) => {
      setTimeout(() => {
        setAiLines((prev) => [...prev, line]);
        if (i === lines.length - 1) setAiDone(true);
      }, 400 + i * 120);
    });
  }

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
      <nav style={{
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
        <div style={{ fontWeight: 700, fontSize: "14px", letterSpacing: "0.05em", textTransform: "uppercase" }}>
          Ben Byram
        </div>
        <div style={{ display: "flex", gap: "40px" }}>
          {["About", "Services", "Projects", "Contact"].map((item) => (
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
      <section style={{
        paddingTop: "56px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
      }}>
        <div style={{
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
                  {CYCLING_WORDS[wordIndex]}
                </span>
              </span>
            </h1>
            <div style={{ display: "flex", gap: "16px" }}>
              <a
                href="#contact"
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
                Get In Touch
              </a>
              <a
                href="#projects"
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
                View Work
              </a>
            </div>
          </div>
        </div>
        <div style={{
          padding: "80px 40px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
        }}>
          <p style={{ fontSize: "28px", lineHeight: 1.4, letterSpacing: "-0.02em", maxWidth: "480px", margin: "0 0 40px 0", color: "#555" }}>
            I help companies make the{" "}
            <span style={{ color: "#0c0c0c" }}>right product</span>
            {" "}for the{" "}
            <span style={{ color: "#0c0c0c" }}>right people</span>
            {" "}and actually reach them.
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

      {/* AI Input */}
      <section style={{ padding: "80px 40px" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <div style={{
            fontSize: "11px",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#666",
            marginBottom: "24px",
            textAlign: "center",
          }}>
            What can Ben help you with today?
          </div>
          <form onSubmit={handleAiSubmit}>
            <div style={{
              display: "flex",
              border: "1px solid #0c0c0c",
              background: "#fff",
            }}>
              <input
                type="text"
                value={aiInput}
                onChange={(e) => setAiInput(e.target.value)}
                placeholder="e.g. I need a product strategy for my early-stage startup..."
                disabled={aiSubmitted}
                style={{
                  flex: 1,
                  padding: "20px 24px",
                  fontSize: "16px",
                  letterSpacing: "-0.01em",
                  border: "none",
                  outline: "none",
                  background: "transparent",
                  fontFamily: "inherit",
                  color: "#0c0c0c",
                }}
              />
              <button
                type="submit"
                disabled={aiSubmitted || !aiInput.trim()}
                style={{
                  padding: "20px 28px",
                  background: aiSubmitted ? "#eee" : "#0c0c0c",
                  color: aiSubmitted ? "#999" : "#fff",
                  border: "none",
                  cursor: aiSubmitted ? "default" : "pointer",
                  fontSize: "11px",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                  fontFamily: "inherit",
                  transition: "background 0.2s",
                }}
              >
                {aiSubmitted ? "Running" : "Build"}
              </button>
            </div>
          </form>

          {aiLines.length > 0 && (
            <div style={{
              marginTop: "0px",
              border: "1px solid #0c0c0c",
              borderTop: "none",
              background: "#0c0c0c",
              padding: "24px",
              minHeight: "160px",
            }}>
              {aiLines.map((line, i) => (
                <div key={i} style={{
                  fontFamily: "monospace",
                  fontSize: "13px",
                  lineHeight: 1.7,
                  color: line.startsWith("//") ? "#888"
                       : line.startsWith(">") ? "#ccc"
                       : line === "" ? undefined
                       : "#e8e8e8",
                  whiteSpace: "pre",
                }}>
                  {line || "\u00A0"}
                </div>
              ))}
              {!aiDone && (
                <span style={{
                  display: "inline-block",
                  width: "8px",
                  height: "14px",
                  background: "#fff",
                  marginTop: "4px",
                  animation: "blink 1s step-end infinite",
                }} />
              )}
              {aiDone && (
                <div style={{ marginTop: "20px", borderTop: "1px solid #333", paddingTop: "20px" }}>
                  <a
                    href="#contact"
                    style={{
                      fontSize: "11px",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      fontWeight: 600,
                      color: "#fff",
                      border: "1px solid #555",
                      padding: "10px 20px",
                      textDecoration: "none",
                      marginRight: "12px",
                    }}
                  >
                    Get in Touch
                  </a>
                  <button
                    onClick={() => { setAiSubmitted(false); setAiInput(""); setAiLines([]); setAiDone(false); }}
                    style={{
                      fontSize: "11px",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      fontWeight: 600,
                      color: "#666",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontFamily: "inherit",
                      padding: 0,
                    }}
                  >
                    Try another
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Projects */}
      <section id="projects">
        <div style={{
          display: "grid",
          gridTemplateColumns: "240px 1fr",
        }}>
          <div style={{ padding: "40px" }}>
            <div style={{ fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#666" }}>
              Projects
            </div>
          </div>
          <div>
            {[
              {
                category: "Kaizen",
                title: "Fan Powered Tour Pages",
                desc: "First-to-market Kickstarter-style presale tool for independent artists. Built it from zero. First artist to use it generated $40k before playing a single show.",
                metric: "$40k presale",
              },
              {
                category: "Kaizen",
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
                category: "CoFounder.AI",
                title: "AI Creator Research Pipeline",
                desc: "Built an agentic pipeline that discovers, enriches, and scores YouTube creators for outreach — routed directly into Notion. No humans in the loop.",
                metric: "0 humans",
              },
              {
                category: "Side Project",
                title: "Godspeed Coworking Platform",
                desc: "Vibe-coded a text broadcast + event management tool for my in-person coworking group. Twilio integration. Built it in Cursor because the tools that existed were overkill.",
                metric: "Built in Cursor",
              },
            ].map((project, i) => (
              <div key={project.title} style={{
                display: "grid",
                gridTemplateColumns: "1fr auto",
                alignItems: "start",
                padding: "56px 60px",
                gap: "60px",
              }}>
                <div>
                  <div style={{ fontSize: "13px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#666", marginBottom: "16px" }}>
                    {project.category}
                  </div>
                  <h3 style={{ fontSize: "34px", fontWeight: 700, letterSpacing: "-0.03em", marginBottom: "16px" }}>
                    {project.title}
                  </h3>
                  <p style={{ fontSize: "18px", lineHeight: 1.6, color: "#444", maxWidth: "620px" }}>
                    {project.desc}
                  </p>
                </div>
                <div style={{
                  fontSize: "42px",
                  fontWeight: 700,
                  letterSpacing: "-0.03em",
                  whiteSpace: "nowrap",
                  color: "#0c0c0c",
                }}>
                  {project.metric}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience">
        <div style={{ display: "grid", gridTemplateColumns: "240px 1fr" }}>
          <div style={{ padding: "40px" }}>
            <div style={{ fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#666" }}>
              Experience
            </div>
          </div>
          <div>
            {[
              {
                role: "Founding PM & GM",
                company: "CoFounder.AI",
                desc: "Built the product 0→1 for an AI platform helping entrepreneurs find co-founders and launch companies. Owned product strategy, roadmap, and business operations.",
              },
              {
                role: "Co-Founder & Head of Product",
                company: "kaizen.place",
                desc: "Co-founded and led product for a continuous improvement platform for teams. Drove full product vision from concept through launch.",
              },
              {
                role: "Product Manager",
                company: "Dubsado",
                desc: "PM on core product at a leading CRM and business management platform for freelancers and small businesses.",
              },
              {
                role: "UX Designer",
                company: "Social Curator",
                desc: "Designed user interfaces and experiences for a social media content and marketing platform.",
              },
            ].map((job) => (
              <div key={job.company} style={{
                display: "grid",
                gridTemplateColumns: "1fr auto",
                alignItems: "start",
                padding: "56px 60px",
                gap: "60px",
              }}>
                <div>
                  <div style={{ fontSize: "13px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#666", marginBottom: "16px" }}>
                    {job.company}
                  </div>
                  <h3 style={{ fontSize: "34px", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: "16px" }}>
                    {job.role}
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
        <div style={{
          display: "grid",
          gridTemplateColumns: "240px 1fr",
        }}>
          <div style={{ padding: "40px" }}>
            <div style={{ fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#666" }}>
              Contact
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
            <div style={{ padding: "40px" }}>
              <h2 style={{ fontSize: "36px", fontWeight: 700, letterSpacing: "-0.03em", marginBottom: "20px", lineHeight: 1.1 }}>
                Let&apos;s Work<br />Together
              </h2>
              <p style={{ fontSize: "15px", lineHeight: 1.6, color: "#444", marginBottom: "32px" }}>
                Ready to accelerate your product development? Available for contract consulting and full-time product management opportunities.
              </p>
              <div style={{ display: "flex", gap: "16px" }}>
                <a
                  href="mailto:ben@example.com"
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
            <div style={{ display: "grid", gridTemplateRows: "1fr 1fr" }}>
              <div style={{ padding: "40px" }}>
                <div style={{ fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#666", marginBottom: "16px" }}>
                  Contract Consulting
                </div>
                <div style={{ fontSize: "13px", lineHeight: 2, color: "#444" }}>
                  <div>Product Strategy &amp; Roadmapping</div>
                  <div>UX Research &amp; Design</div>
                  <div>Process Optimization</div>
                  <div>Team Training &amp; Mentoring</div>
                </div>
              </div>
              <div style={{ padding: "40px" }}>
                <div style={{ fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#666", marginBottom: "16px" }}>
                  Full-Time Opportunities
                </div>
                <div style={{ fontSize: "13px", lineHeight: 2, color: "#444" }}>
                  <div>Senior Product Manager</div>
                  <div>Head of Product</div>
                  <div>Product Strategy Lead</div>
                  <div>VP of Product</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: "24px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
        <div style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase" }}>
          Ben Byram
        </div>
        <div style={{ fontSize: "12px", color: "#666", letterSpacing: "0.02em" }}>
          © 2024 Ben Byram
        </div>
        <div style={{ fontSize: "11px", letterSpacing: "0.06em", textTransform: "uppercase", color: "#666" }}>
          Product Strategy &amp; UX Consulting
        </div>
      </footer>

      </div>{/* end content wrapper */}
    </div>
  );
}
