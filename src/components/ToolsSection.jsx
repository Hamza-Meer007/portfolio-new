import React, { useState, useEffect, useRef } from "react";
import "./ToolsSection.css";
import {
  SiFigma,
  SiCss3,
  SiTailwindcss,
  SiReact,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPython,
  SiLaravel,
  SiFlask,
  SiMysql,
  SiPhp,
  SiDjango,
  SiPandas,
  SiPostgresql,
  SiTensorflow,
  SiCrewunited,
  SiPostman,
} from "react-icons/si";

const ToolsSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const tools = [
    { name: "Python", icon: <SiPython />, color: "#3776AB" },
    { name: "Django", icon: <SiDjango />, color: "#092E20" },
    { name: "TensorFlow", icon: <SiTensorflow />, color: "#FF6F00" },
    { name: "Pandas", icon: <SiPandas />, color: "#150458" },
    { name: "HTML", icon: <SiCss3 />, color: "#E34C26" },
    { name: "CSS", icon: <SiCss3 />, color: "#1572B6" },
    { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
    { name: "React", icon: <SiReact />, color: "#61DAFB" },
    { name: "Postman", icon: <SiPostman />, color: "#ec3a0d" },
    { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
    { name: "VS Code", icon: <SiCrewunited />, color: "#0078d4" },
    { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
    
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="tools" className="section tools-section" ref={sectionRef}>
      <div className={`section-label ${isVisible ? "animate-fade-in" : ""}`}>
        Tools
      </div>
      <h2
        className={`section-title ${isVisible ? "animate-slide-up" : ""}`}
        style={{ animationDelay: "0.2s" }}
      >
        My Favorite Tools
      </h2>

      <div className="tools-grid">
        {tools.map((tool, index) => (
          <div
            key={index}
            className={`tool-card card ${isVisible ? "animate-slide-up" : ""}`}
            style={{ animationDelay: `${0.3 + index * 0.05}s` }}
          >
            <div className="tool-icon" style={{ color: tool.color }}>
              {tool.icon}
            </div>
            <p className="tool-name">{tool.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ToolsSection;
