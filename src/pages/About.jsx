
import React from "react";
import { Link } from "react-router-dom";

const EXP = [
  {
    role: "Full Stack MERN Developer",
    company: "Aspire TekHub Solutions",
    duration: "Apr 2025 – Present",
    location: "Hyderabad, India",
    type: "Full-time",
    highlights: [
      "Built and maintained MERN stack applications supporting business workflow automation and admin management systems.",
      "Designed and documented REST APIs using Node.js and Express.js with CRUD operations, business logic, and data validation.",
      "Integrated payment gateway APIs including webhook validation and signature verification for secure transaction processing.",
      "Developed responsive and reusable UI components using React.js and Tailwind CSS following component-driven development practices.",
      "Integrated RESTful APIs and efficiently handled asynchronous data flows, loading states, and error handling.",
      "Implemented Redux Toolkit for centralized state management across multi-screen workflows.",
      "Worked with MySQL, PostgreSQL, MongoDB, and AWS RDS for database design and query optimization.",
      "Collaborated using Git workflows, pull requests, Agile/Scrum methodologies, and integration testing.",
    ],
  },
];

const INFO = [
  { label: "Location", value: "Kurnool, Andhra Pradesh" },
  { label: "Email", value: "mastan0843@gmail.com" },
  { label: "Phone", value: "+91-9581010843" },
  { label: "GitHub", value: "github.com/pmastan" },
  { label: "LinkedIn", value: "mastan-vali-a00112334" },
  { label: "Education", value: "B.Tech CSE, 2023 · CGPA 7.5" },
  { label: "Experience", value: "1.2+ Years" },
  { label: "Status", value: "Open to Opportunities" },
];

export default function About() {
  return (
    <div style={{ paddingTop: "64px" }}>
      <section className="section">
        <div className="container">
          <div style={{ animation: "fadeUp 0.7s ease forwards" }}>
            <div className="tag">About Me</div>

            <h2 className="sh">
              Building scalable
              <br />
              <em>Full-Stack Applications</em>
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "4rem",
              marginBottom: "5rem",
            }}
          >
            <div>
              {[
                "I'm a Full-Stack MERN Developer with 1.2+ years of hands-on experience building responsive and scalable web applications using React.js, Node.js, Express.js, and MongoDB. I enjoy developing modern web solutions that solve real-world business challenges while maintaining clean architecture and performance-focused development practices.",

                "My expertise includes designing RESTful APIs, implementing authentication systems using JWT, Firebase Authentication, and Google Sign-In integrations. I've worked extensively with React.js, Redux Toolkit, Express.js, MySQL, MongoDB, and Redis while building production-ready applications for workflow automation, admin dashboards, and eCommerce platforms.",

                "I am comfortable working across the entire development lifecycle—from database design and backend business logic to creating reusable frontend components and integrating third-party services. I continuously focus on writing maintainable code, improving user experiences, and learning modern technologies that help build better software.",
              ].map((p, i) => (
                <p
                  key={i}
                  style={{
                    fontSize: "0.97rem",
                    lineHeight: 1.85,
                    color: "var(--text2)",
                    marginBottom: "1.1rem",
                  }}
                >
                  {p}
                </p>
              ))}

              <div
                style={{
                  display: "flex",
                  gap: "0.85rem",
                  flexWrap: "wrap",
                  marginTop: "1.5rem",
                }}
              >
                <Link to="/projects" className="btn btn-primary">
                  View Projects
                </Link>

                <Link to="/contact" className="btn btn-outline">
                  Contact Me
                </Link>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.6rem",
              }}
            >
              {INFO.map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: "flex",
                    gap: "1rem",
                    alignItems: "center",
                    padding: "0.75rem 1.1rem",
                    background: "var(--card-bg)",
                    border: "1px solid var(--border)",
                    borderRadius: "8px",
                    transition: "border-color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--rose)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border)";
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.62rem",
                      fontFamily: "Syne, sans-serif",
                      letterSpacing: "0.12em",
                      color: "var(--rose)",
                      textTransform: "uppercase",
                      width: "80px",
                      flexShrink: 0,
                    }}
                  >
                    {item.label}
                  </div>

                  <div
                    style={{
                      fontSize: "0.85rem",
                      color: "var(--text)",
                    }}
                  >
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div className="tag">Professional Experience</div>

          <h3
            style={{
              fontFamily: "Syne, sans-serif",
              fontSize: "1.6rem",
              fontWeight: 700,
              color: "var(--text)",
              marginBottom: "2rem",
            }}
          >
            My{" "}
            <span style={{ color: "var(--rose)" }}>
              Professional Journey
            </span>
          </h3>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.2rem",
            }}
          >
            {EXP.map((exp, i) => (
              <div
                key={i}
                className="card"
                style={{ padding: "1.8rem" }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: "1rem",
                    marginBottom: "1rem",
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontFamily: "Syne, sans-serif",
                        fontSize: "1.1rem",
                        fontWeight: 700,
                        color: "var(--text)",
                        marginBottom: "0.2rem",
                      }}
                    >
                      {exp.role}
                    </div>

                    <div
                      style={{
                        fontFamily: "Syne, sans-serif",
                        fontSize: "0.8rem",
                        color: "var(--rose)",
                      }}
                    >
                      {exp.company} · {exp.location}
                    </div>
                  </div>

                  <div style={{ textAlign: "right" }}>
                    <div
                      style={{
                        fontSize: "0.78rem",
                        color: "var(--text2)",
                        marginBottom: "4px",
                      }}
                    >
                      {exp.duration}
                    </div>

                    <span
                      style={{
                        fontSize: "0.65rem",
                        padding: "0.18rem 0.65rem",
                        background: "var(--rose-dim)",
                        border:
                          "1px solid rgba(232,160,168,0.25)",
                        borderRadius: "4px",
                        color: "var(--rose)",
                        fontFamily: "Syne, sans-serif",
                        fontWeight: 600,
                      }}
                    >
                      {exp.type}
                    </span>
                  </div>
                </div>

                <div
                  style={{
                    height: "1px",
                    background: "var(--border)",
                    margin: "0.8rem 0",
                  }}
                />

                <ul style={{ listStyle: "none" }}>
                  {exp.highlights.map((h, j) => (
                    <li
                      key={j}
                      style={{
                        display: "flex",
                        gap: "0.7rem",
                        fontSize: "0.86rem",
                        color: "var(--text2)",
                        lineHeight: 1.65,
                        marginBottom: "0.4rem",
                      }}
                    >
                      <span
                        style={{
                          color: "var(--rose)",
                          flexShrink: 0,
                          fontFamily: "DM Mono, monospace",
                        }}
                      >
                        →
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}