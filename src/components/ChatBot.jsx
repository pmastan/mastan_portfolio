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
      return `Mastan Vali is a Full Stack MERN Developer with experience building responsive web applications using React.js, Node.js, Express.js and MongoDB.`;
    }

    if (q.includes("skill")) {
      return `Frontend:
• React.js
• Redux Toolkit
• JavaScript
• HTML5
• CSS3
• Tailwind CSS

Backend:
• Node.js
• Express.js
• REST APIs

Database:
• MongoDB
• MySQL
• Redis`;
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