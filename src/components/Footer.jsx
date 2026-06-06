import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        background: "var(--bg2)",
        padding: "3rem 0 2rem",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto auto",
            gap: "3rem",
            marginBottom: "2rem",
            flexWrap: "wrap",
          }}
        >
          {/* Left */}
          <div>
            <div
              style={{
                fontFamily: "Syne, sans-serif",
                fontSize: "1.1rem",
                fontWeight: 800,
                marginBottom: "0.6rem",
                letterSpacing: "-0.02em",
                color: "var(--text)",
              }}
            >
        
            </div>

            <p
              style={{
                fontSize: "0.82rem",
                color: "var(--text2)",
                maxWidth: "240px",
                lineHeight: 1.75,
              }}
            >
              Full-Stack MERN Developer. 1.2 years
              experience. Based in Hyderabad, India.
            </p>
          </div>

          {/* Pages */}
          <div>
            <div
              style={{
                fontFamily: "Syne, sans-serif",
                fontSize: "0.62rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--text3)",
                marginBottom: "1rem",
              }}
            >
              Pages
            </div>

            {[
              ["/", "Home"],
              ["/about", "About"],
              ["/projects", "Projects"],
              ["/skills", "Skills"],
              ["/education", "Education"],
              ["/contact", "Contact"],
            ].map(([to, label]) => (
              <div
                key={to}
                style={{
                  marginBottom: "0.42rem",
                }}
              >
                <NavLink
                  to={to}
                  style={{
                    textDecoration: "none",
                    fontSize: "0.8rem",
                    color: "var(--text2)",
                    transition: "color 0.18s",
                    fontFamily: "Syne, sans-serif",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.color =
                      "var(--text)")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.color =
                      "var(--text2)")
                  }
                >
                  {label}
                </NavLink>
              </div>
            ))}
          </div>

          {/* Connect */}
          <div>
            <div
              style={{
                fontFamily: "Syne, sans-serif",
                fontSize: "0.62rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--text3)",
                marginBottom: "1rem",
              }}
            >
              Connect
            </div>

            {[
              [
                "mailto:mastan0843@gmail.com",
                "Email",
              ],
              [
                "https://github.com/pmastan/",
                "GitHub",
              ],
              [
                "https://www.linkedin.com/in/mastan-vali-a00112334/",
                "LinkedIn",
              ],
              [
                "tel:+9581010843",
                "+91-9581010843",
              ],
            ].map(([href, label]) => (
              <div
                key={label}
                style={{
                  marginBottom: "0.42rem",
                }}
              >
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    textDecoration: "none",
                    fontSize: "0.8rem",
                    color: "var(--text2)",
                    transition: "color 0.18s",
                    fontFamily: "Syne, sans-serif",
                    fontWeight: 600,
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.color =
                      "var(--text)")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.color =
                      "var(--text2)")
                  }
                >
                  {label}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div
          style={{
            borderTop: "1px solid var(--border)",
            paddingTop: "1.4rem",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "0.8rem",
          }}
        >
          <p
            style={{
              fontSize: "0.72rem",
              color: "var(--text3)",
              fontFamily: "Syne, sans-serif",
            }}
          >
            © 2025 Mastan Vali
          </p>

          <p
            style={{
              fontSize: "0.72rem",
              color: "var(--text3)",
              fontFamily: "Syne, sans-serif",
            }}
          >
            React · Node.js 
          </p>
        </div>
      </div>
    </footer>
  );
}