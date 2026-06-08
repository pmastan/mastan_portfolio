import React, { useState } from 'react';

const PROJECTS = [
 {
  num: '01',
  name: 'Student Registration System',
  category: 'Full Stack',
  featured: true,

  desc: 'Developed a full-stack Student Registration System using Spring Boot and MySQL, enabling complete CRUD operations for student records. Designed RESTful APIs for seamless frontend-backend communication, implemented database schema design with relational mapping, and built a responsive user interface with HTML, CSS, and JavaScript. Applied validation, exception handling, and MVC architecture to ensure data integrity, scalability, and maintainability.',

  tech: [
    'Java',
    'Spring Boot',
    'MySQL',
    'JavaScript',
    'HTML5',
    'CSS3',
    'REST API'
  ],

  highlights: [
    'Full CRUD Operations',
    'RESTful API Development',
    'MySQL Database Design',
    'MVC Architecture',
    'Frontend-Backend Integration',
    'Validation & Exception Handling'
  ],

  github: 'https://github.com/pmastan/student-registration-system.git',
  live: "https://student-registration-system-pi.vercel.app/",
},
 {
  num: '02',
  name: 'Spring Boot CRUD Application',
  category: 'Backend',
  featured: true,

  desc: 'Developed a backend application using Java, Spring Boot, and MySQL following MVC architecture principles. Implemented complete CRUD operations, RESTful APIs, JPA/Hibernate ORM, validation, exception handling, and layered architecture to ensure scalable and maintainable application development.',

  tech: [
    'Java',
    'Spring Boot',
    'MySQL',
    'JPA/Hibernate',
    'REST API',
    'Postman'
  ],

  highlights: [
    'CRUD Operations',
    'RESTful API Development',
    'JPA/Hibernate ORM',
    'MVC Architecture',
    'Exception Handling & Validation',
    'Layered Architecture'
  ],

  github: 'YOUR_GITHUB_REPOSITORY_LINK',
  live: null,
},

  {
    num: '03', name: 'Aspire Brand Store — Website',
    category: 'Frontend',
    desc: 'Customer-facing eCommerce storefront for Aspire Brand. Responsive product listings, cart management, dynamic filtering, and checkout flow. Built with React.js and Tailwind CSS, integrated with the Aspire Brand Store API.',
    tech: ['React.js', 'JavaScript ES6+', 'Tailwind CSS', 'Axios', 'REST API'],
    highlights: ['Dynamic product listings', 'Cart & checkout flow', 'Responsive layout', 'API integration'],
    github: 'https://github.com/Sajid-sid/Aspire-Brand-Store-website',
    live: null,
  },
 {
  num: "04",
  name: "Live Weather Application",
  category: "Frontend",
  featured: true,

  desc: "Developed a responsive Live Weather Application using React.js that provides real-time weather updates for cities worldwide. Integrated a weather API to fetch current temperature, humidity, wind speed, weather conditions, and location-based forecasts. Implemented dynamic search functionality, error handling, and responsive UI design to deliver a seamless user experience across desktop and mobile devices.",

  highlights: [
    "Integrated OpenWeatherMap API for real-time weather data",
    "Search weather conditions for any city worldwide",
    "Displays temperature, humidity, wind speed, and weather status",
    "Responsive design optimized for mobile, tablet, and desktop",
    "Implemented loading states and error handling for API requests",
    "Used React Hooks (useState, useEffect) for state management"
  ],

  tech: [
    "React.js",
    "JavaScript",
    "HTML5",
    "CSS3",
    "REST API",
    "OpenWeatherMap API",
    "Axios"
  ],

  github: "https://github.com/pmastan/WeatherReport.git",
  live: "https://weather-report-xi-eight.vercel.app/"
},
 {
  num: "05",
  name: "Calculator Application",
  category: "Frontend",
  featured: true,

  desc: "Developed a responsive Calculator Application using React.js that performs basic arithmetic operations with a clean and intuitive user interface. Implemented dynamic state management to handle user inputs, calculations, and real-time result display while ensuring accurate mathematical operations.",

  highlights: [
    "Performed addition, subtraction, multiplication, and division operations",
    "Implemented real-time calculation and display updates",
    "Built reusable React components for calculator buttons and display",
    "Managed application state using React Hooks",
    "Responsive design compatible with desktop and mobile devices",
    "Included clear and delete functionality for enhanced usability"
  ],

  tech: [
    "React.js",
    "JavaScript",
    "HTML5",
    "CSS3",
    "React Hooks"
  ],

  github: "https://github.com/pmastan/appcalculator",
  live: "https://appcalculator-one.vercel.app/"
},
 
  
  
 
];

const CATS = ['All', 'Full Stack', 'Backend', 'Frontend'];

export default function Projects() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === active);

  return (
    <div style={{ paddingTop: '64px' }}>
      <section className="section">
        <div className="container">
          <div style={{ animation: 'fadeUp 0.7s ease forwards' }}>
            <div className="tag">Projects</div>
            <h2 className="sh">7 repos,<br />all <em>real & shipped</em></h2>
          </div>

          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
            {CATS.map(c => (
              <button key={c} onClick={() => setActive(c)}
                style={{ padding: '0.45rem 1rem', border: '1px solid', borderRadius: '6px', fontSize: '0.75rem', fontFamily: 'Syne, sans-serif', fontWeight: 700, transition: 'all 0.2s',
                  borderColor: active === c ? 'var(--rose)' : 'var(--border)',
                  background: active === c ? 'var(--rose-dim)' : 'transparent',
                  color: active === c ? 'var(--rose)' : 'var(--text2)',
                }}>
                {c} {active === c && `(${filtered.length})`}
              </button>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.2rem' }}>
            {filtered.map((p) => (
              <div key={p.num} className="card" style={{ display: 'flex', flexDirection: 'column', borderColor: p.featured ? 'rgba(232,160,168,0.28)' : 'var(--border)' }}>
                {p.featured && (
                  <div style={{ position: 'absolute', top: '1rem', right: '1rem', fontSize: '0.6rem', padding: '0.18rem 0.6rem', background: 'var(--rose-dim)', border: '1px solid var(--rose)', borderRadius: '4px', color: 'var(--rose)', fontFamily: 'Syne, sans-serif', letterSpacing: '0.08em', fontWeight: 700 }}>
                    FEATURED
                  </div>
                )}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.7rem' }}>
                  <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '2rem', fontWeight: 800, color: 'var(--rose-dim)', lineHeight: 1 }}>{p.num}</div>
                  <span style={{ fontSize: '0.6rem', padding: '0.18rem 0.65rem', background: 'var(--bg3)', border: '1px solid var(--border)', borderRadius: '4px', color: 'var(--text3)', fontFamily: 'Syne, sans-serif', fontWeight: 600 }}>{p.category}</span>
                </div>
                <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '1rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.5rem' }}>{p.name}</div>
                <p style={{ fontSize: '0.82rem', lineHeight: 1.7, color: 'var(--text2)', marginBottom: '1rem', flex: 1 }}>{p.desc}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.28rem', marginBottom: '1rem' }}>
                  {p.highlights.map(h => (
                    <div key={h} style={{ display: 'flex', gap: '0.5rem', fontSize: '0.75rem', color: 'var(--text3)' }}>
                      <span style={{ color: 'var(--rose)', flexShrink: 0, fontFamily: 'DM Mono, monospace' }}>→</span>{h}
                    </div>
                  ))}
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.32rem', marginBottom: '1.1rem' }}>
                  {p.tech.map(t => <span key={t} className="pill" style={{ fontSize: '0.67rem' }}>{t}</span>)}
                </div>
                {/* GitHub Button */}
  <a
    href={p.github}
    target="_blank"
    rel="noreferrer"
    style={{
      flex: 1,
      textAlign: 'center',
      padding: '0.5rem',
      background: 'var(--bg3)',
      border: '1px solid var(--border)',
      borderRadius: '6px',
      fontSize: '0.73rem',
      color: 'var(--text2)',
      textDecoration: 'none',
      fontFamily: 'Syne, sans-serif',
      fontWeight: 600,
      transition: 'all 0.2s'
    }}
    onMouseEnter={e => {
      e.currentTarget.style.borderColor = 'var(--rose)';
      e.currentTarget.style.color = 'var(--rose)';
    }}
    onMouseLeave={e => {
      e.currentTarget.style.borderColor = 'var(--border)';
      e.currentTarget.style.color = 'var(--text2)';
    }}
  >
    GitHub →
  </a>

  {/* Live Demo Button */}
  <a
    href={p.live}
    target="_blank"
    rel="noreferrer"
    style={{
      flex: 1,
      textAlign: 'center',
      padding: '0.5rem',
      background: 'var(--rose)',
      border: '1px solid var(--rose)',
      borderRadius: '6px',
      fontSize: '0.73rem',
      color: '#fff',
      textDecoration: 'none',
      fontFamily: 'Syne, sans-serif',
      fontWeight: 600,
      transition: 'all 0.2s'
    }}
    onMouseEnter={e => {
      e.currentTarget.style.transform = 'translateY(-2px)';
    }}
    onMouseLeave={e => {
      e.currentTarget.style.transform = 'translateY(0)';
    }}
  >
    Live Demo ↗
  </a>

                
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
