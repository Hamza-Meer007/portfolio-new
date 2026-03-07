import React, { useState, useEffect } from "react";
import "./ProjectsSection.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ProjectsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      setCurrentSlide(0); // reset on resize
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const projects = [
    {
      id: 1,
      image: "/naz-auto.webp",
      title: "NAZ Auto Exchange",
      description:
        "A modern, production-ready web application for browsing, inquiring, and managing Japanese imported cars.",
      tags: ["React", "TypeScript", "Django", "PostgreSQL", "DRF"],
      liveDemo: "https://naz-auto.vercel.app/",
    },
    {
      id: 2,
      image: "/Eco-Smart.png",
      title: "Eco-Smart",
      description: "Intelligent Waste Tracking & Management Portal",
      tags: ["React", "TypeScript", "Node.js", "MongoDB"],
      liveDemo: "https://eco-smart.vercel.app/",
    },
    {
      id: 3,
      image: "/tour.webp",
      title: "Tourest - Travel Agency",
      description:
        "Tourest is fully responsive travel website,Responsive for all devices, modern design, and user-friendly interface.",
      tags: ["HTML", "CSS", "TailwindCSS", "JavaScript"],
      liveDemo: "https://travel-tour09.netlify.app/",
    },
    {
      id: 4,
      image: "/Netflix.webp",
      title: "Netflix Recommendation System",
      description: "Content-based Movie Recommendation System",
      tags: ["Flask", "Data Analysis", "Python", "Machine Learning"],
      liveDemo: "https://hamzameer007.pythonanywhere.com/",
    },
    {
      id: 5,
      image: "/brain-tumor.webp",
      title: "NeuroScan AI",
      description: "Detects Brain Tumors in MRI Images using Machine Learning",
      tags: ["Python", "FastAPI", "TensorFlow", "OpenCV"],
      liveDemo: "https://brain-tumor-classification.netlify.app/",
    },
    {
      id: 6,
      image: "/Hyper_Sum.png",
      title: "Hyper-Summarizer",
      description: "Sequential and Parallelized Text Summarization",
      tags: ["Python", "NLP", "Flask"],
      liveDemo: "https://hyper-summ.vercel.app/",
    },
    {
      id: 7,
      image: "/estate_ai.webp",
      title: "EstateAI - Real Estate Price Prediction",
      description: "Predicts real estate prices based on various factors and market trends.",
      tags: ["Python", "Machine Learning", "Pandas", "Scikit-learn"],
      liveDemo: "https://estate-ai-prediction.netlify.app/",
    },
    // {
    //   id: 8,
    //   image: "/project6.jpg",
    //   title: "NILL",
    //   description: "NILL",
    //   tags: ["NILL"],
    //   liveDemo: "#",
    // },
  ];


  // Mobile: 2 per slide → 4 slides | Desktop: 4 per slide → 2 slides
  const perSlide = isMobile ? 2 : 4;
  const totalSlides = Math.ceil(projects.length / perSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Build slide groups dynamically
  const slides = [];
  for (let i = 0; i < totalSlides; i++) {
    slides.push(projects.slice(i * perSlide, i * perSlide + perSlide));
  }

  return (
    <section id="projects" className="section projects-section">
      <div className="section-label">Projects</div>
      <h2 className="section-title">My Featured Projects</h2>

      <div className="projects-carousel-container">
        <button className="carousel-btn carousel-btn-left" onClick={prevSlide}>
          <FaChevronLeft />
        </button>

        <div className="projects-carousel">
          <div
            className="projects-carousel-track"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slideProjects, slideIndex) => (
              <div key={slideIndex} className="projects-slide">
                <div className="projects-grid">
                  {slideProjects.map((project) => (
                    <div key={project.id} className="project-card">
                      <div className="project-image">
                        <img
                          src={project.image}
                          alt={`Project ${project.id}`}
                          loading="lazy"
                        />
                      </div>
                      <div className="project-content">
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-description">
                          {project.description}
                        </p>
                        <div className="project-tags">
                          {project.tags.map((tag, index) => (
                            <span key={index} className="project-tag">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="project-buttons">
                          <a
                            href={project.liveDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-project demo-btn"
                          >
                            Live Demo
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="carousel-btn carousel-btn-right" onClick={nextSlide}>
          <FaChevronRight />
        </button>
      </div>

      <div className="carousel-indicators">
        {[...Array(totalSlides)].map((_, index) => (
          <button
            key={index}
            className={`indicator ${currentSlide === index ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
