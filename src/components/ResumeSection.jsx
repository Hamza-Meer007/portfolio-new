import React, { useState, useEffect, useRef } from 'react';
import './ResumeSection.css';
import resumePDF from '../assets/Hamza-Resume.pdf';

const ResumeSection = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const education = [
      {
        year: "2022 - 2026",
        title: "BSc (Hons) Computer Science",
        institution: "University of Gujrat",
        description:
          "CGPA: 3.50. Courses included Programming, Databases, AI, and Hardware.",
      },
      {
        year: "2020 - 2022",
        title: "F.Sc. (Pre-Engineering)",
        institution: "Punjab College",
        description:
          "Obtained 976/1100 marks (88.7%). Awarded merit scholarship by the college.",
      },
      {
        year: "2018 - 2020",
        title: "Matriculation",
        institution: "Govt. High School GT Road",
        description:
          "Obtained 1032/1100 marks (93.8%). A+ in Physics, Chemistry, and Mathematics.",
      },
    ];

    const experience = [
      {
        year: "Dec 2024 - July 2025",
        title: "Full Stack Developer",
        company: "Qodeon Labs",
        description:
          "Full Stack Development, Data Analysis, GCP, Web Automation, Web Scraping and Data pipelines.",
      },
      {
        year: "Sep 2024 - Nov 2024",
        title: "Machine Learning Intern",
        company: "Cognorise Infotech",
        description:
          "Gained predictive modeling expertise, delivering impactful insights that could guide policymakers to support millions, enhance sales growth for 15%, and boost retail revenue by $1.2 million",
      },
      {
        year: "Nov 2022 - Present",
        title: "Teaching Assistant",
        company: "University of Gujrat",
        description:
          "Delivered lectures on Programming, designed and evaluated assignments and quizzes.",
      },
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
            { threshold: 0.1 }
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
        <section id="resume" className="section resume-section" ref={sectionRef}>
            <div className={`section-label ${isVisible ? 'animate-fade-in' : ''}`}>Resume</div>
            <h2 className={`section-title ${isVisible ? 'animate-slide-up' : ''}`} style={{ animationDelay: '0.2s' }}>
                Education And Practical Experience
            </h2>
            <p className={`section-description ${isVisible ? 'animate-slide-up' : ''}`} style={{ animationDelay: '0.3s' }}>
                With a background in Computer Science and hands-on experience in Design, Backend, AI and Frontend development, I've worked on diverse projects ranging from landing pages to SaaS dashboards. Each project has strengthened my focus on building clean, functional, and user-friendly digital experiences.
            </p>

            <div className="resume-grid">
                <div className="resume-column">
                    <h3 className={`resume-column-title ${isVisible ? 'animate-slide-up' : ''}`} style={{ animationDelay: '0.4s' }}>Education</h3>
                    <div className="timeline">
                        {education.map((item, index) => (
                            <div
                                key={index}
                                className={`timeline-item ${isVisible ? 'animate-slide-up' : ''}`}
                                style={{ animationDelay: `${0.5 + (index * 0.1)}s` }}
                            >
                                <div className="timeline-dot"></div>
                                <div className="timeline-content">
                                    <p className="timeline-year">{item.year}</p>
                                    <h4 className="timeline-title">{item.title}</h4>
                                    <p className="timeline-institution">{item.institution}</p>
                                    <p className="timeline-description">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="resume-column">
                    <h3 className={`resume-column-title ${isVisible ? 'animate-slide-up' : ''}`} style={{ animationDelay: '0.4s' }}>Work Experience</h3>
                    <div className="timeline">
                        {experience.map((item, index) => (
                            <div
                                key={index}
                                className={`timeline-item ${isVisible ? 'animate-slide-up' : ''}`}
                                style={{ animationDelay: `${0.5 + (index * 0.1)}s` }}
                            >
                                <div className="timeline-dot"></div>
                                <div className="timeline-content">
                                    <p className="timeline-year">{item.year}</p>
                                    <h4 className="timeline-title">{item.title}</h4>
                                    <p className="timeline-institution">{item.company}</p>
                                    <p className="timeline-description">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Download Resume Button */}
            <div className="resume-download-container">
                <a
                    href={resumePDF}
                    download="Hamza-Meer-Resume.pdf"
                    className={`btn-download-resume ${isVisible ? 'animate-slide-up' : ''}`}
                    style={{ animationDelay: '0.8s' }}
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="7 10 12 15 17 10"></polyline>
                        <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                    Download Resume
                </a>
            </div>
        </section>
    );
};

export default ResumeSection;
