import React, { useState } from 'react';
import './ProjectsSection.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ProjectsSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const projects = [
      {
        id: 1,
        image: "/naz-auto.webp",
        title: "NAZ-Auto Exchange",
        description:
          "A modern, production-ready web application for browsing, inquiring, and managing Japanese imported cars.",
        tags: ["React","TypeScript", "Django", "PostgreSQL", "DRF"],
        githubLink: "https://naz-auto.vercel.app/",
      },
      {
        id: 2,
        image: "/Eco-Smart.png",
        title: "Eco-Smart",
        description: "Intelligent Waste Tracking & Management Portal",
        tags: ["React", "TypeScript", "Node.js", "MongoDB"],
        githubLink: "https://github.com/Adnan-Asad1/Eco-Smart",
      },
      {
        id: 3,
        image: "/tour.webp",
        title: "Tourest - Travel Agency",
        description:
          "Tourest is fully responsive travel website,Responsive for all devices, modern design, and user-friendly interface.",
        tags: ["HTML", "CSS", "TailwindCSS", "JavaScript"],
        githubLink: "https://travel-tour09.netlify.app/",
      },
      {
        id: 4,
        image: "/Netflix.webp",
        title: "Netflix Recommendation System",
        description: "Content-based Movie Recommendation System",
        tags: ["Flask", "Data Analysis", "Python", "Machine Learning"],
        githubLink: "https://hamzameer007.pythonanywhere.com/",
      },
      {
        id: 5,
        image: "/brain-tumor.webp",
        title: "Brain Tumor Detection",
        description:
          "Detects Brain Tumors in MRI Images using Machine Learning",
        tags: ["Python", "FastAPI", "TensorFlow", "OpenCV"],
        githubLink: "https://brain-tumor-classification.netlify.app/",
      },
      {
        id: 6,
        image: "/Hyper_Sum.png",
        title: "Hyper-Summarizer",
        description: "Sequential and Parallelized Text Summarization",
        tags: ["Python", "NLP", "Flask"],
        githubLink: "https://github.com/Adnan-Asad1/Hyper-Summ",
      },
      {
        id: 7,
        image: "/project6.jpg",
        title: "NILL",
        description: "NILL",
        tags: ["NILL"],
        githubLink: "#",
      },
      {
        id: 8,
        image: "/project6.jpg",
        title: "NILL",
        description: "NILL",
        tags: ["NILL"],
        githubLink: "#",
      },
    ];

    const totalSlides = 2; // 2 slides (4 projects each)

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

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
                        {/* Slide 1 - Projects 1-4 */}
                        <div className="projects-slide">
                            <div className="projects-grid">
                                {projects.slice(0, 4).map((project) => (
                                    <a
                                        key={project.id}
                                        className="project-card"
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <div className="project-image">
                                            <img src={project.image} alt={`Project ${project.id}`} />
                                        </div>
                                        <div className="project-content">
                                            <h3 className="project-title">{project.title}</h3>
                                            <p className="project-description">{project.description}</p>
                                            <div className="project-tags">
                                                {project.tags.map((tag, index) => (
                                                    <span key={index} className="project-tag">{tag}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Slide 2 - Projects 5-8 */}
                        <div className="projects-slide">
                            <div className="projects-grid">
                                {projects.slice(4, 8).map((project) => (
                                    <a
                                        key={project.id}
                                        className="project-card"
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <div className="project-image">
                                            <img src={project.image} alt={`Project ${project.id}`} />
                                        </div>
                                        <div className="project-content">
                                            <h3 className="project-title">{project.title}</h3>
                                            <p className="project-description">{project.description}</p>
                                            <div className="project-tags">
                                                {project.tags.map((tag, index) => (
                                                    <span key={index} className="project-tag">{tag}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
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
                        className={`indicator ${currentSlide === index ? 'active' : ''}`}
                        onClick={() => setCurrentSlide(index)}
                    />
                ))}
            </div>
        </section>
    );
};

export default ProjectsSection;
