import React from "react";

const TIMELINE = [
  {
    year: "2019",
    label:
      "Started B.Tech in Computer Science at Rayalaseema University College of Engineering",
  },
  {
    year: "2023",
    label: "Graduated with B.Tech in Computer Science (CGPA: 7.5/10)",
  },
  {
    year: "2023",
    label:
      "Developed Student Registration System using Java, Spring Boot, and MySQL",
  },
  {
    year: "Apr 2025",
    label: "Joined Aspire TekHub Solutions as Full Stack MERN Developer",
  },
  {
    year: "2025",
    label:
      "Built Aspire Brand Store & Admin Dashboard using MERN Stack technologies",
  },
  {
    year: "Present",
    label:
      "Developing scalable web applications using React.js, Node.js, MongoDB, and MySQL",
  },
];

const COMPETENCIES = [
  {
    name: "MERN Stack Development",
    desc: "React.js, Node.js, Express.js, MongoDB application development",
    year: "2025–Present",
  },
  {
    name: "REST API Development",
    desc: "CRUD operations, validation, business logic, and API integration",
    year: "2025–Present",
  },
  {
    name: "React.js & Redux Toolkit",
    desc: "Reusable components and centralized state management",
    year: "2025–Present",
  },
  {
    name: "Authentication & Security",
    desc: "JWT Authentication and Firebase Authentication",
    year: "2025–Present",
  },
  {
    name: "Database Design",
    desc: "MongoDB, MySQL, PostgreSQL, and AWS RDS",
    year: "2025–Present",
  },
  {
    name: "Payment Gateway Integration",
    desc: "Webhook validation and secure transaction processing",
    year: "2025–Present",
  },
  {
    name: "Spring Boot Development",
    desc: "MVC architecture, JPA/Hibernate, REST APIs",
    year: "2023–2025",
  },
  {
    name: "Version Control & Tools",
    desc: "Git, GitHub, Postman, Axios, VS Code",
    year: "2023–Present",
  },
];

export default function Education() {
  return (
    <div style={{ paddingTop: "64px" }}>
      <section className="section">
        <div className="container">
          <div style={{ animation: "fadeUp 0.7s ease forwards" }}>
            <div className="tag">Education</div>
            <h2 className="sh">
              Academic <em>Background</em>
            </h2>
          </div>

          {/* Education Card */}
          <div
            className="card"
            style={{ padding: "2rem", marginBottom: "4rem" }}
          >
            <div
              style={{
                display: "flex",
                gap: "1.5rem",
                alignItems: "flex-start",
                flexWrap: "wrap",
              }}
            >
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "10px",
                  background: "var(--rose-dim)",
                  border: "1px solid rgba(232,160,168,0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.5rem",
                  flexShrink: 0,
                }}
              >
                🎓
              </div>

              <div style={{ flex: 1 }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: "1rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontFamily: "Syne, sans-serif",
                        fontSize: "1.15rem",
                        fontWeight: 700,
                        color: "var(--text)",
                        marginBottom: "0.25rem",
                      }}
                    >
                      B.Tech in Computer Science
                    </div>

                    <div
                      style={{
                        fontSize: "0.88rem",
                        color: "var(--rose)",
                        fontFamily: "Syne, sans-serif",
                      }}
                    >
                      Rayalaseema University College of Engineering
                    </div>

                    <div
                      style={{
                        fontSize: "0.76rem",
                        color: "var(--text3)",
                        marginTop: "3px",
                      }}
                    >
                      Andhra Pradesh, India
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
                      2019 — 2023
                    </div>

                    <span
                      style={{
                        fontSize: "0.73rem",
                        padding: "0.2rem 0.7rem",
                        background: "var(--rose-dim)",
                        border: "1px solid rgba(232,160,168,0.25)",
                        borderRadius: "4px",
                        color: "var(--rose)",
                        fontFamily: "Syne, sans-serif",
                        fontWeight: 700,
                      }}
                    >
                      CGPA: 7.5 / 10
                    </span>
                  </div>
                </div>

                <div
                  style={{
                    height: "1px",
                    background: "var(--border)",
                    margin: "1rem 0",
                  }}
                />

                <ul style={{ listStyle: "none" }}>
                  {[
                    "Core Subjects: Data Structures, DBMS, Operating Systems, Computer Networks, OOPs",
                    "Built strong foundations in software engineering, problem solving, and web development",
                    "Developed academic and full-stack projects using Java, Spring Boot, MySQL, and MERN technologies",
                    "Graduated with a CGPA of 7.5/10",
                  ].map((item, i) => (
                    <li
                      key={i}
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
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="tag">Career Timeline</div>

          <h3
            style={{
              fontFamily: "Syne, sans-serif",
              fontSize: "1.4rem",
              fontWeight: 700,
              color: "var(--text)",
              marginBottom: "2rem",
            }}
          >
            Learning to <span style={{ color: "var(--rose)" }}>Building</span>
          </h3>

          <div
            style={{
              position: "relative",
              paddingLeft: "1.5rem",
              marginBottom: "4.5rem",
            }}
          >
            <div
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                bottom: 0,
                width: "1px",
                background:
                  "linear-gradient(to bottom, var(--rose), transparent)",
              }}
            />

            {TIMELINE.map((item, i) => (
              <div
                key={i}
                style={{
                  position: "relative",
                  paddingLeft: "1.5rem",
                  paddingBottom: "1.6rem",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    left: "-4px",
                    top: "5px",
                    width: "9px",
                    height: "9px",
                    borderRadius: "50%",
                    background:
                      i === TIMELINE.length - 1
                        ? "var(--rose)"
                        : "var(--bg)",
                    border: "2px solid var(--rose)",
                  }}
                />

                <div
                  style={{
                    fontFamily: "Syne, sans-serif",
                    fontSize: "0.67rem",
                    letterSpacing: "0.12em",
                    color: "var(--rose)",
                    marginBottom: "4px",
                  }}
                >
                  {item.year}
                </div>

                <div
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--text2)",
                  }}
                >
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          {/* Competencies */}
          <div className="tag">Technical Skills</div>

          <h3
            style={{
              fontFamily: "Syne, sans-serif",
              fontSize: "1.4rem",
              fontWeight: 700,
              color: "var(--text)",
              marginBottom: "1.8rem",
            }}
          >
            Professional <span style={{ color: "var(--rose)" }}>Expertise</span>
          </h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))",
              gap: "1rem",
            }}
          >
            {COMPETENCIES.map((c, i) => (
              <div
                key={i}
                style={{
                  padding: "1.1rem 1.3rem",
                  background: "var(--card-bg)",
                  border: "1px solid var(--border)",
                  borderRadius: "8px",
                }}
              >
                <div
                  style={{
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    color: "var(--text)",
                    fontFamily: "Syne, sans-serif",
                    marginBottom: "3px",
                  }}
                >
                  {c.name}
                </div>

                <div
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--text3)",
                    marginBottom: "4px",
                    lineHeight: 1.5,
                  }}
                >
                  {c.desc}
                </div>

                <div
                  style={{
                    fontSize: "0.67rem",
                    color: "var(--rose)",
                    fontFamily: "Syne, sans-serif",
                    fontWeight: 600,
                  }}
                >
                  {c.year}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}