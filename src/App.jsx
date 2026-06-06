import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import { ThemeProvider } from "./ThemeContext.jsx";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Education from "./pages/Education";
import Contact from "./pages/Contact";

function ScrollTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function CursorGlow() {
  const [pos, setPos] = useState({
    x: -999,
    y: -999,
  });

  useEffect(() => {
    const fn = (e) => {
      setPos({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", fn);

    return () => {
      window.removeEventListener("mousemove", fn);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        zIndex: 0,
        left: pos.x,
        top: pos.y,
        width: 320,
        height: 320,
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(232,160,168,0.045) 0%, transparent 70%)",
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
        transition: "left 0.1s ease, top 0.1s ease",
      }}
    />
  );
}

function AppInner() {
  return (
    <>
      <ScrollTop />

      <CursorGlow />

      <div
        style={{
          position: "relative",
          zIndex: 1,
        }}
      >
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/projects" element={<Projects />} />

          <Route path="/skills" element={<Skills />} />

          <Route
            path="/education"
            element={<Education />}
          />

          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppInner />
      </BrowserRouter>
    </ThemeProvider>
  );
}