import React, { useState } from "react";
import "./ChatBot.css";

const SUGGESTIONS = [
  "Tell me about yourself",
  "What skills do you have?",
  "Show your projects",
  "Education details",
  "Contact information",
];

export default function ChatBot() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi 👋 I'm Mastan Vali's AI Assistant. Ask me about skills, projects, experience or education.",
    },
  ]);

  const [input, setInput] = useState("");

  const getResponse = (question) => {
    const q = question.toLowerCase();

    if (q.includes("yourself") || q.includes("about")) {
     return `
Hello! I'm P. Mastan Vali, a passionate Full Stack Developer from Kurnool, Andhra Pradesh.

I completed my Bachelor of Technology in Computer Science and Engineering and have a strong interest in building modern, scalable, and user-friendly web applications.

My technical expertise includes:
• Frontend Development: React.js, JavaScript, HTML5, CSS3, Tailwind CSS, Redux Toolkit
• Backend Development: Node.js, Express.js, REST APIs
• Database Management: MongoDB, MySQL, Redis

I have worked on projects such as:
• Student Registration System
• Spring Boot CRUD Application
• Aspire Brand Store E-Commerce Website
• Personal Portfolio Website

I enjoy solving real-world problems through technology and continuously learning new tools and frameworks to improve my development skills.

Apart from coding, I enjoy:
🏏 Playing and watching cricket`;
    }

 if (q.includes("date of birth")) {
    return `
Personal Information:

👤 Name: P. Mastan Vali
🎂 Date of Birth: 15 August 2002
📍 Location: Kurnool, Andhra Pradesh, India

Hello! I'm P. Mastan Vali, a passionate Full Stack Developer...
`;}

    if (q.includes("skill")) {
      return  `
I have experience across the full web development stack.

Frontend Development:
• React.js for building dynamic and reusable user interfaces.
• Redux Toolkit for efficient state management.
• JavaScript (ES6+) for interactive web applications.
• HTML5 and CSS3 for semantic, responsive, and accessible designs.
• Tailwind CSS for rapid and modern UI development.

Backend Development:
• Node.js and Express.js for developing scalable server-side applications.
• REST API development and integration for seamless client-server communication.

Database Management:
• MongoDB for NoSQL data storage and flexible schema design.
• MySQL for relational database management and complex querying.
• Redis for caching, session management, and application performance enhancement.

I focus on developing responsive, scalable, and user-friendly web applications following modern development practices and clean code principles.
`;
    }
    if (q.includes ("hobbies")) {
  return `
Hobbies & Interests:

🏏 Cricket
• Playing and watching cricket
• Teamwork and strategic thinking
• Following international and domestic tournaments
`;
}

    if (q.includes("project")) {
      return `Projects:

1. Aspire Brand Store
Tech: React.js, Node.js, MongoDB

2. Student Registration System
Tech: Spring Boot, MySQL

3. Spring Boot CRUD Application
Tech: Spring Boot, JPA/Hibernate, MySQL`;
    }

    if (q.includes("education")) {
      return `B.Tech Computer Science

Rayalaseema University College of Engineering

CGPA: 7.5`;
    }

    if (q.includes("contact")) {
      return `Email:
mastan0843@gmail.com

GitHub:
github.com/pmastan

LinkedIn:
linkedin.com/in/mastan-vali-a00112334`;
    }

    return "Ask me about skills, projects, education, experience or contact information.";
  };

  const sendMessage = (text) => {
    const userText = text || input.trim();

    if (!userText) return;

    const newMessages = [
      ...messages,
      {
        role: "user",
        content: userText,
      },
    ];

    setMessages(newMessages);
    setInput("");

    setTimeout(() => {
      setMessages([
        ...newMessages,
        {
          role: "assistant",
          content: getResponse(userText),
        },
      ]);
    }, 600);
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        Mastan Vali AI Assistant
      </div>

      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message-row ${
              msg.role === "user" ? "user-row" : "bot-row"
            }`}
          >
            <div
              className={`message-bubble ${
                msg.role === "user"
                  ? "user-bubble"
                  : "bot-bubble"
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}
      </div>

      {messages.length === 1 && (
        <div className="suggestions">
          {SUGGESTIONS.map((q) => (
            <button
              key={q}
              onClick={() => sendMessage(q)}
              className="suggestion-btn"
            >
              {q}
            </button>
          ))}
        </div>
      )}

      <div className="input-container">
        <input
          type="text"
          value={input}
          placeholder="Ask something..."
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) =>
            e.key === "Enter" && sendMessage()
          }
          className="chat-input"
        />

        <button
          onClick={() => sendMessage()}
          className="send-btn"
        >
          Send
        </button>
      </div>
    </div>
  );
}