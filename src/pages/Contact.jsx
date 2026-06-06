import React from "react";
import ChatBot from "../components/ChatBot";

const CONTACTS = [
  {
    label: "Email",
    value: "mastan0843@gmail.com",
    href: "mailto:mastan0843@gmail.com",
    desc: "Best way to reach me",
  },
  {
    label: "GitHub",
    value: "github.com/pmastan",
    href: "https://github.com/pmastan",
    desc: "Code repositories & projects",
  },
  {
    label: "LinkedIn",
    value: "mastan-vali-a00112334",
    href: "https://www.linkedin.com/in/mastan-vali-a00112334/",
    desc: "Professional profile",
  },
  {
    label: "Phone",
    value: "+91-9581010843",
    href: "tel:+919581010843",
    desc: "Call or WhatsApp",
  },
];

export default function Contact() {
  return (
    <div style={{ paddingTop: "64px" }}>
      <section className="section">
        <div className="container">
          <div className="tag">Contact</div>

          <h2 className="sh">
            Let's build something
            <br />
            <em>amazing together</em>
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.1fr",
              gap: "4rem",
              alignItems: "start",
            }}
          >
            {/* Left Section */}
            <div>
              <p
                style={{
                  fontSize: "0.96rem",
                  lineHeight: 1.84,
                  color: "var(--text2)",
                  marginBottom: "2.2rem",
                }}
              >
                I'm a Full-Stack MERN Developer with 1.2+ years of experience
                building scalable web applications using React.js, Node.js,
                Express.js, MongoDB, and MySQL. I'm open to full-time
                opportunities, freelance projects, and collaborations where I
                can contribute to impactful products.
              </p>

              {/* Availability */}
              <div
                style={{
                  padding: "1.1rem 1.3rem",
                  background: "var(--card-bg)",
                  border: "1px solid var(--border)",
                  borderRadius: "4px",
                  marginBottom: "1.8rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.8rem",
                }}
              >
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: "var(--green)",
                    flexShrink: 0,
                    animation: "pulse 2s infinite",
                    display: "inline-block",
                  }}
                />

                <div>
                  <div
                    style={{
                      fontFamily: "Syne, sans-serif",
                      fontSize: "0.75rem",
                      fontWeight: 800,
                      color: "var(--text)",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      marginBottom: "2px",
                    }}
                  >
                    Currently Available
                  </div>

                  <div
                    style={{
                      fontSize: "0.78rem",
                      color: "var(--text2)",
                    }}
                  >
                    Open to Full-Time Roles • MERN Stack Developer • React.js •
                    Node.js
                  </div>
                </div>
              </div>

              {/* Contact List */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {CONTACTS.map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "1rem 0",
                      borderBottom: "1px solid var(--border)",
                      textDecoration: "none",
                      transition: "all 0.18s",
                      gap: "1rem",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.querySelector(".cl").style.color =
                        "var(--text)";
                      e.currentTarget.querySelector(".arr").style.opacity =
                        "1";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.querySelector(".cl").style.color =
                        "var(--text2)";
                      e.currentTarget.querySelector(".arr").style.opacity =
                        "0.3";
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontFamily: "Syne, sans-serif",
                          fontSize: "0.62rem",
                          fontWeight: 700,
                          color: "var(--text3)",
                          textTransform: "uppercase",
                          letterSpacing: "0.12em",
                          marginBottom: "2px",
                        }}
                      >
                        {c.label}
                      </div>

                      <div
                        className="cl"
                        style={{
                          fontSize: "0.88rem",
                          color: "var(--text2)",
                          fontFamily: "Syne, sans-serif",
                          fontWeight: 600,
                          transition: "color 0.18s",
                        }}
                      >
                        {c.value}
                      </div>

                      <div
                        style={{
                          fontSize: "0.72rem",
                          color: "var(--text3)",
                        }}
                      >
                        {c.desc}
                      </div>
                    </div>

                    <span
                      className="arr"
                      style={{
                        color: "var(--text)",
                        fontSize: "0.9rem",
                        opacity: 0.3,
                        transition: "opacity 0.18s",
                        flexShrink: 0,
                      }}
                    >
                      →
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Right Section */}
            <div>
              <div className="tag">AI Assistant</div>

              <h3
                style={{
                  fontFamily: "Syne, sans-serif",
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "var(--text)",
                  marginBottom: "0.5rem",
                  letterSpacing: "-0.01em",
                }}
              >
                Chat with my AI Assistant
              </h3>

              <p
                style={{
                  fontSize: "0.8rem",
                  color: "var(--text3)",
                  marginBottom: "1rem",
                  lineHeight: 1.65,
                }}
              >
                Ask about my skills, projects, work experience, technologies,
                availability, and career journey. The assistant is trained on
                my portfolio and professional background.
              </p>

              <ChatBot />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}