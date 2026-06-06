import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ChatBot from '../components/ChatBot';

const ROLES = ['Full-Stack Developer', 'MERN Specialist', 'React Developer', 'API Architect', 'Backend Engineer'];

const STATS = [
  { v: '1.2', l: 'Years Experience' },
  { v: '3+', l: 'Projects Shipped' },
  { v: '7+', l: 'GitHub Repos' },
  { v: '1', l: 'Companies' },
];

export default function Home() {
  const roleRef = useRef(null);
  const idx = useRef(0);
  const charIdx = useRef(0);
  const del = useRef(false);

  useEffect(() => {
    const type = () => {
      const cur = ROLES[idx.current];
      if (!del.current) {
        charIdx.current++;
        if (roleRef.current) roleRef.current.textContent = cur.slice(0, charIdx.current);
        if (charIdx.current === cur.length) { del.current = true; setTimeout(type, 1800); return; }
      } else {
        charIdx.current--;
        if (roleRef.current) roleRef.current.textContent = cur.slice(0, charIdx.current);
        if (charIdx.current === 0) { del.current = false; idx.current = (idx.current + 1) % ROLES.length; }
      }
      setTimeout(type, del.current ? 52 : 88);
    };
    const t = setTimeout(type, 500);
    return () => clearTimeout(t);
  }, []);

  return (
    <div style={{ paddingTop: '64px' }}>
      {/* HERO */}
      <section style={{ minHeight: '92vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', padding: '4rem 0 2rem' }}>
        <div style={{ position: 'absolute', top: '20%', right: '2%', width: '480px', height: '480px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(176,80,96,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div className="container" style={{ width: '100%' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>

            {/* LEFT */}
            <div style={{ animation: 'fadeUp 0.7s ease forwards' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '1.5rem', padding: '0.35rem 0.9rem', background: 'var(--rose-dim)', border: '1px solid rgba(232,160,168,0.25)', borderRadius: '4px' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--green)', display: 'inline-block', animation: 'pulse 2s infinite' }} />
                <span style={{ fontFamily: 'Syne, sans-serif', fontSize: '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--rose)' }}>Open to Opportunities</span>
              </div>

              <h1 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(2.8rem, 5vw, 5rem)', fontWeight: 800, lineHeight: 1.0, letterSpacing: '-0.02em', marginBottom: '1rem' }}>
                Mastan<br />
                <span style={{ color: 'var(--rose)' }}>Vali</span>
              </h1>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1.4rem', height: '1.8rem' }}>
                <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.9rem', color: 'var(--text3)' }}>{'>'}</span>
                <span ref={roleRef} style={{ fontFamily: 'Syne, sans-serif', fontSize: '1rem', fontWeight: 700, color: 'var(--rose)' }} />
                <span style={{ width: '2px', height: '1rem', background: 'var(--rose)', display: 'inline-block', animation: 'blink 1s step-end infinite' }} />
              </div>

              <p style={{ fontSize: '0.97rem', lineHeight: 1.8, color: 'var(--text2)', maxWidth: '480px', marginBottom: '2rem' }}>
                Full-Stack MERN Developer with 1.2 years of hands-on experience building responsive, scalable web applications
                using React.js, Node.js, Express.js, and MongoDB. Experienced in REST API development, JWT and OAuth 2.0
                authentication, Firebase Authentication, signup with google API’s. Comfortable working across the full stack —
                from designing database schemas and backend business logic to building clean, reusable React UI components</p>

              <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap', marginBottom: '2.2rem' }}>
                <Link to="/projects" className="btn btn-primary">View Projects</Link>
                <Link to="/about" className="btn btn-outline">About Me →</Link>
              </div>

              <div style={{ display: 'flex', gap: '0.55rem', flexWrap: 'wrap' }}>
                {[
                  { label: 'GitHub', href: 'https://github.com/pmastan/' },
                  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mastan-vali-a00112334/' },
                  { label: 'Email', href: 'mailto:mastan0843@gmail.com' },
                ].map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                    style={{ padding: '0.4rem 0.9rem', background: 'var(--bg3)', border: '1px solid var(--border)', borderRadius: '6px', fontSize: '0.76rem', color: 'var(--text2)', textDecoration: 'none', fontFamily: 'Syne, sans-serif', fontWeight: 600, transition: 'all 0.2s' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--rose)'; e.currentTarget.style.color = 'var(--rose)'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text2)'; }}>
                    {s.label}
                  </a>
                ))}
              </div>
            </div>

            {/* RIGHT — AI Bot */}
            <div style={{ animation: 'fadeUp 0.7s 0.15s ease both' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '0.8rem' }}>
                <div>
                  <div className="tag" style={{ marginBottom: '0.2rem' }}>AI Assistant</div>
                  <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '0.95rem', fontWeight: 700, color: 'var(--text)' }}>
                    Ask <span style={{ color: 'var(--rose)' }}>anything</span> about me
                  </div>
                </div>
              </div>
              <ChatBot compact />
            </div>
          </div>

          {/* Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', marginTop: '3.5rem', animation: 'fadeUp 0.7s 0.3s ease both' }}>
            {STATS.map(s => (
              <div key={s.l} style={{ textAlign: 'center', padding: '1.2rem 1rem', background: 'var(--card-bg)', border: '1px solid var(--border)', borderRadius: '8px', transition: 'all 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--rose)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; }}>
                <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.7rem', fontWeight: 800, color: 'var(--rose)', lineHeight: 1 }}>{s.v}</div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text3)', marginTop: '4px', fontFamily: 'Syne, sans-serif', letterSpacing: '0.05em' }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack marquee */}
    {/* Tech Stack marquee */}
<section
  style={{
    padding: '3rem 0',
    borderTop: '1px solid var(--border)',
    borderBottom: '1px solid var(--border)',
    background: 'var(--bg2)',
    overflow: 'hidden'
  }}
>
  <div className="container">
    <div
      style={{
        display: 'flex',
        gap: '0.8rem',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}
    >
      {[
        'React.js',
        'Redux Toolkit',
        'JavaScript (ES6+)',
        'HTML5',
        'CSS3',
        'Tailwind CSS',
        'Node.js',
        'Express.js',
        'REST API Development',
        'MySQL',
        'MongoDB',
        'Redis',
        'JWT',
        'Firebase',
        'Git',
        'GitHub',
        'Postman',
        'VS Code',
        'Axios',
        'Vercel'
      ].map((s) => (
        <span
          key={s}
          className="pill"
          style={{
            fontSize: '0.78rem',
            padding: '0.38rem 1rem'
          }}
        >
          {s}
        </span>
      ))}
    </div>
  </div>
</section>

      {/* Featured Projects */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div className="tag">Featured Work</div>
              <h2 className="sh" style={{ marginBottom: 0 }}>Recent <em>projects</em></h2>
            </div>
            <Link to="/projects" className="btn btn-outline">All Projects →</Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.2rem' }}>
            {[
              {
  num: '01',
  name: 'Calculator App',
  desc: 'Developed a responsive calculator application using React.js with support for arithmetic operations, state management, real-time result updates, and a modern user interface.',
  tags: ['React.js', 'JavaScript', 'HTML5', 'CSS3'],
  href: 'https://github.com/pmastan/appcalculator',
},
              {
  num: '02',
  name: 'Weather Report App',
  desc: 'Built a weather forecasting application using React.js and weather APIs to display real-time weather conditions, temperature, humidity, wind speed, and location-based forecasts through an intuitive user interface.',
  tags: ['React.js', 'JavaScript', 'API Integration', 'CSS3'],
  href: 'https://github.com/pmastan/WeatherReport',
},
              {
  num: '03',
  name: 'Aspire Brand Store & Admin',
  desc: 'Full-stack MERN eCommerce platform featuring a customer storefront, product catalog, shopping cart, secure JWT authentication, role-based admin dashboard, and RESTful API integration.',
  tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
  href: 'https://github.com/Sajid-sid/Aspire-Brand-Store-website',
},
            ].map((p) => (
              <a key={p.num} href={p.href} target="_blank" rel="noreferrer" className="card" style={{ textDecoration: 'none', display: 'block' }}>
                <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.8rem', fontWeight: 800, color: 'var(--rose-dim)', lineHeight: 1, marginBottom: '0.6rem' }}>{p.num}</div>
                <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '0.95rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.5rem' }}>{p.name}</div>
                <p style={{ fontSize: '0.82rem', color: 'var(--text2)', lineHeight: 1.65, marginBottom: '1rem' }}>{p.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                  {p.tags.map(t => <span key={t} className="pill" style={{ fontSize: '0.67rem' }}>{t}</span>)}
                </div>
                <div style={{ marginTop: '1rem', fontSize: '0.73rem', color: 'var(--rose)', fontFamily: 'Syne, sans-serif', fontWeight: 600 }}>View on GitHub →</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '5rem 0', borderTop: '1px solid var(--border)', background: 'var(--bg2)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="tag" style={{ justifyContent: 'center' }}>Let's Work Together</div>
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 800, marginBottom: '1rem', color: 'var(--text)' }}>
            Got a project in mind?
          </h2>
          <p style={{ fontSize: '0.97rem', color: 'var(--text2)', maxWidth: '420px', margin: '0 auto 2rem', lineHeight: 1.8 }}>
            Open to full-time roles, freelance projects, and interesting collaborations. Let's build something great together.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary">Get In Touch</Link>
            <a href="https://github.com/pmastan/" target="_blank" rel="noreferrer" className="btn btn-outline">GitHub Profile</a>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 860px) {
          [style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; }
          [style*="grid-template-columns: repeat(4"] { grid-template-columns: repeat(2, 1fr) !important; }
          [style*="grid-template-columns: repeat(3"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
