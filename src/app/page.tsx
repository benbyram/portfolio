export default function Home() {
  return (
    <div style={{ background: "#fff", color: "#0c0c0c", minHeight: "100vh" }}>

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
        borderBottom: "1px solid #0c0c0c",
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
        borderBottom: "1px solid #0c0c0c",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
      }}>
        <div style={{
          padding: "80px 40px 80px 40px",
          borderRight: "1px solid #0c0c0c",
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
              Product<br />Strategy<br />&amp; UX<br />Consulting
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
          <p style={{ fontSize: "22px", lineHeight: 1.4, letterSpacing: "-0.02em", maxWidth: "480px", margin: "0 0 40px 0" }}>
            I help companies build better products through strategic thinking, user-centered design, and data-driven decision making.
          </p>
          <div style={{ display: "flex", gap: "60px" }}>
            <div>
              <div style={{ fontSize: "48px", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1 }}>5+</div>
              <div style={{ fontSize: "11px", letterSpacing: "0.06em", textTransform: "uppercase", marginTop: "6px", color: "#666" }}>Years Experience</div>
            </div>
            <div>
              <div style={{ fontSize: "48px", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1 }}>20+</div>
              <div style={{ fontSize: "11px", letterSpacing: "0.06em", textTransform: "uppercase", marginTop: "6px", color: "#666" }}>Projects Delivered</div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" style={{ borderBottom: "1px solid #0c0c0c" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "240px 1fr",
        }}>
          <div style={{
            padding: "40px",
            borderRight: "1px solid #0c0c0c",
          }}>
            <div style={{ fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#666" }}>
              About
            </div>
          </div>
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
          }}>
            <div style={{ padding: "40px", borderRight: "1px solid #0c0c0c" }}>
              <p style={{ fontSize: "16px", lineHeight: 1.6, marginBottom: "20px" }}>
                I&apos;m a strategic product professional with a passion for creating user-centered solutions that drive business growth. With experience across multiple industries, I bring a unique perspective to product strategy and user experience design.
              </p>
              <p style={{ fontSize: "16px", lineHeight: 1.6 }}>
                Whether you&apos;re looking for contract consulting to accelerate your product development or seeking a full-time product manager to lead your team, I&apos;m here to help you achieve your goals.
              </p>
            </div>
            <div style={{ padding: "40px" }}>
              <div style={{ fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "24px", color: "#666" }}>
                Core Expertise
              </div>
              {[
                "Product Strategy & Roadmapping",
                "User Research & UX Design",
                "Data-Driven Decision Making",
                "Cross-Functional Team Leadership",
                "Agile Product Development",
              ].map((skill) => (
                <div key={skill} style={{
                  padding: "14px 0",
                  borderTop: "1px solid #0c0c0c",
                  fontSize: "15px",
                  letterSpacing: "-0.01em",
                }}>
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" style={{ borderBottom: "1px solid #0c0c0c" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "240px 1fr",
        }}>
          <div style={{ padding: "40px", borderRight: "1px solid #0c0c0c" }}>
            <div style={{ fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#666" }}>
              Services
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
            {[
              { title: "Product Strategy", desc: "Develop comprehensive strategies, roadmaps, and go-to-market plans that align with business objectives." },
              { title: "User Research", desc: "Conduct user interviews, usability testing, and market research to inform product decisions." },
              { title: "UX Design", desc: "Create intuitive user interfaces and experiences that delight users while meeting business requirements." },
              { title: "Product Management", desc: "Lead cross-functional teams, manage backlogs, and drive product development from concept to launch." },
              { title: "Analytics & Insights", desc: "Set up product analytics, analyze user behavior, and provide actionable insights to optimize performance." },
              { title: "Team Leadership", desc: "Build and lead high-performing product teams, establish processes, and foster collaborative culture." },
            ].map((service, i) => (
              <div key={service.title} style={{
                padding: "32px",
                borderRight: i % 3 !== 2 ? "1px solid #0c0c0c" : undefined,
                borderBottom: i < 3 ? "1px solid #0c0c0c" : undefined,
              }}>
                <div style={{ fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#666", marginBottom: "16px" }}>
                  0{i + 1}
                </div>
                <h3 style={{ fontSize: "18px", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: "12px" }}>
                  {service.title}
                </h3>
                <p style={{ fontSize: "14px", lineHeight: 1.6, color: "#444" }}>
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" style={{ borderBottom: "1px solid #0c0c0c" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "240px 1fr",
        }}>
          <div style={{ padding: "40px", borderRight: "1px solid #0c0c0c" }}>
            <div style={{ fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#666" }}>
              Projects
            </div>
          </div>
          <div>
            {[
              {
                category: "Product Strategy",
                title: "E-commerce Platform Redesign",
                desc: "Led the complete redesign of a B2B e-commerce platform, resulting in 40% increase in conversion rates and 25% improvement in user satisfaction scores.",
                tags: ["User Research", "UX Design", "A/B Testing"],
                metric: "+40% conversion",
              },
              {
                category: "Product Management",
                title: "Mobile App Launch Strategy",
                desc: "Developed and executed go-to-market strategy for a fintech mobile app, achieving 100K downloads in the first quarter and 4.5-star app store rating.",
                tags: ["Market Research", "Product Roadmap", "Launch Strategy"],
                metric: "100K downloads",
              },
              {
                category: "UX Consulting",
                title: "SaaS Dashboard Optimization",
                desc: "Redesigned complex analytics dashboard for a SaaS platform, reducing task completion time by 60% and improving user onboarding conversion by 35%.",
                tags: ["Information Architecture", "Wireframing", "Usability Testing"],
                metric: "−60% task time",
              },
              {
                category: "Digital Transformation",
                title: "Legacy System Modernization",
                desc: "Led digital transformation initiative for enterprise client, modernizing legacy systems and implementing agile processes, resulting in 50% faster time-to-market.",
                tags: ["Process Improvement", "Change Management", "Team Training"],
                metric: "2× faster TTM",
              },
            ].map((project, i) => (
              <div key={project.title} style={{
                display: "grid",
                gridTemplateColumns: "1fr auto",
                alignItems: "start",
                padding: "32px 40px",
                borderBottom: i < 3 ? "1px solid #0c0c0c" : undefined,
                gap: "40px",
              }}>
                <div>
                  <div style={{ fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#666", marginBottom: "12px" }}>
                    {project.category}
                  </div>
                  <h3 style={{ fontSize: "22px", fontWeight: 700, letterSpacing: "-0.03em", marginBottom: "12px" }}>
                    {project.title}
                  </h3>
                  <p style={{ fontSize: "14px", lineHeight: 1.6, color: "#444", maxWidth: "560px", marginBottom: "16px" }}>
                    {project.desc}
                  </p>
                  <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                    {project.tags.map((tag) => (
                      <span key={tag} style={{
                        fontSize: "11px",
                        letterSpacing: "0.04em",
                        textTransform: "uppercase",
                        border: "1px solid #0c0c0c",
                        padding: "4px 10px",
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div style={{
                  fontSize: "28px",
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

      {/* Contact */}
      <section id="contact" style={{ borderBottom: "1px solid #0c0c0c" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "240px 1fr",
        }}>
          <div style={{ padding: "40px", borderRight: "1px solid #0c0c0c" }}>
            <div style={{ fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#666" }}>
              Contact
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
            <div style={{ padding: "40px", borderRight: "1px solid #0c0c0c" }}>
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
                  href="https://linkedin.com/in/benbyram"
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
              <div style={{ padding: "40px", borderBottom: "1px solid #0c0c0c" }}>
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

    </div>
  );
}
