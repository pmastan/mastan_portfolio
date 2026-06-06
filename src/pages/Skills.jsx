import React, { useEffect, useRef } from 'react';

const GROUPS = [
  { label: 'Frontend', skills: [{ n: 'React.js', l: 88 }, { n: 'JavaScript ES6+', l: 87 }, { n: 'Redux Toolkit', l: 78 }, { n: 'Tailwind CSS', l: 85 }, { n: 'HTML5 / CSS3', l: 90 }] },
  { label: 'Backend', skills: [{ n: 'Node.js', l: 86 }, { n: 'Express.js', l: 87 }, { n: 'REST API Development', l: 88 }] },
  { label: 'Databases', skills: [{ n: 'MySQL', l: 86 }, { n: 'MongoDB', l: 74 }, ] },
  { label: 'Auth & Security', skills: [{ n: 'JWT + Refresh Tokens', l: 85 }, { n: 'OAuth 2.0', l: 82 }, { n: 'Sessions', l: 78 }, { n: 'Firebase', l: 82 }] },
];

const TOOLS = ['Git', 'GitHub', 'Postman', 'VS Code', 'Axios'];
const DEPLOYMENT = ['Vercel', 'render'];
const CONCEPTS = [
  'React.js Component Architecture',
  'Redux Toolkit State Management',
  'JavaScript (ES6+) Features',
  'Responsive Web Design',
  'REST API Development',
  'Node.js & Express.js Backend Development',
  'CRUD Application Development',
  'JWT Authentication & Authorization',
  'Firebase Authentication',
  'MySQL Database Design',
  'MongoDB CRUD Operations',
  'Axios API Integration',
  'Git & GitHub Version Control',
  'Postman API Testing',
  'MVC Architecture',
  'Async / Await & Promise Patterns',
  'Error Handling & Validation',
  'Responsive UI Development',
  'Frontend & Backend Integration',
  'Deployment with Vercel',
];

function Bar({ n, l }) {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && ref.current) ref.current.style.width = l + '%';
    }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current.parentElement.parentElement);
    return () => obs.disconnect();
  }, [l]);

  return (
    <div style={{ marginBottom: '0.85rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
        <span style={{ fontSize: '0.84rem', color: 'var(--text)' }}>{n}</span>
        <span style={{ fontSize: '0.72rem', color: 'var(--rose)', fontFamily: 'Syne, sans-serif', fontWeight: 700 }}>{l}%</span>
      </div>
      <div style={{ height: '3px', background: 'var(--bg4)', borderRadius: '2px', overflow: 'hidden' }}>
        <div ref={ref} style={{ height: '100%', width: '0%', background: 'var(--rose)', borderRadius: '2px', transition: 'width 1.2s cubic-bezier(0.4,0,0.2,1)' }} />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <div style={{ paddingTop: '64px' }}>
      <section className="section">
        <div className="container">
          <div style={{ animation: 'fadeUp 0.7s ease forwards' }}>
            <div className="tag">Skills</div>
            <h2 className="sh">Technical <em>skill set</em></h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.2rem', marginBottom: '4rem' }}>
            {GROUPS.map(g => (
              <div key={g.label} className="card">
                <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--rose)', marginBottom: '1.3rem', paddingBottom: '0.7rem', borderBottom: '1px solid var(--border)' }}>{g.label}</div>
                {g.skills.map(s => <Bar key={s.n} n={s.n} l={s.l} />)}
              </div>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem', marginBottom: '4rem' }}>
            <div className="card">
              <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--rose)', marginBottom: '1rem', paddingBottom: '0.7rem', borderBottom: '1px solid var(--border)' }}>Tools</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {TOOLS.map(t => <span key={t} className="pill" style={{ fontSize: '0.8rem', padding: '0.35rem 0.9rem' }}>{t}</span>)}
              </div>
            </div>
            <div className="card">
              <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--rose)', marginBottom: '1rem', paddingBottom: '0.7rem', borderBottom: '1px solid var(--border)' }}>Deployment</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {DEPLOYMENT.map(t => <span key={t} className="pill" style={{ fontSize: '0.8rem', padding: '0.35rem 0.9rem' }}>{t}</span>)}
              </div>
            </div>
          </div>

          <div className="tag">Concepts & Practices</div>
          <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.3rem', fontWeight: 700, color: 'var(--text)', marginBottom: '1.3rem' }}>
            What I <span style={{ color: 'var(--rose)' }}>know & apply</span>
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.55rem' }}>
            {CONCEPTS.map(c => <span key={c} className="pill" style={{ fontSize: '0.78rem', padding: '0.38rem 0.95rem' }}>{c}</span>)}
          </div>
        </div>
      </section>
    </div>
  );
}
