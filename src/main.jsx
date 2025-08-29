import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills"; // ✅ Pointing to the new Hero component
import Projects  from "./components/Projects";
import Experience from "./components/Experiences";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
            <Footer />
    </React.StrictMode>
);