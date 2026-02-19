import React, { useEffect, useRef, useState } from 'react';
import './ServicesSection.css';
import { FaPalette, FaPencilRuler, FaCode, FaMobileAlt, FaRocket, FaBullhorn, FaSearch, FaChartLine, FaEnvelope, FaCamera, FaGlobe, FaCog, FaCloud } from 'react-icons/fa';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ServicesSection = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

    const services = [
        { id: 1, title: 'AI Solutions', description: 'Development of artificially intelligent systems, ML and DL models. Automation with Chatbots, AI Agents, and more. ', projects: 6, icon: <FaRocket /> },
        { id: 2, title: 'Web Development', description: 'Full stack development using Python, JavaScript, PHP and modern frameworks like Django, Node.js, Express.js, Flask, FastAPI, Laravel and React', projects: 38, icon: <FaCode /> },
        { id: 3, title: 'Backend Engineering', description: 'Robust backend systems with Node.js, Django, Flask, and Laravel.', projects: 45, icon: <FaCode /> }, // Using generic code icon as placeholder
        { id: 4, title: 'Database Design', description: 'Designing databases in MySQL, SQLite, PostgreSQL, MongoDB, and SQL Server.', projects: 45, icon: <FaChartLine /> },
        { id: 5, title: 'UI/UX Design', description: 'User-centric design implementation and frontend integration.', projects: 15, icon: <FaPencilRuler /> },
        { id: 6, title: 'API Integration', description: 'Seamless integration of third-party APIs like Stripe, Maps, AI Models etc.', projects: 40, icon: <FaGlobe /> }, // Need to import globe or similar
        { id: 7, title: 'Web Automation', description: 'Automating workflows and data scraping tasks.', projects: 10, icon: <FaCog /> }, // Need to import cog
        { id: 8, title: 'Cloud Deployment', description: 'Deploying applications to cloud platforms and managing servers.', projects: 12, icon: <FaCloud /> } // Need to import cloud
    ];

    const itemsPerSlide = 4;
    const totalSlides = 2; // 2 slides (4 services each)

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

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
        <section id="services" className="section services-section" ref={sectionRef}>
            <div className={`services-label ${isVisible ? 'animate-fade-in' : ''}`}>✦ Services</div>
            <h2 className={`section-title ${isVisible ? 'animate-slide-up' : ''}`} style={{ animationDelay: '0.2s' }}>
                Building With Purpose & Precision
            </h2>

            <div className="services-carousel-container">
                <div className="services-carousel">
                    <div
                        className="services-carousel-track"
                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                        {/* Slide 1 - Services 1-4 */}
                        <div className="services-slide">
                            <div className="services-grid">
                                {services.slice(0, 4).map((service, index) => (
                                    <div
                                        key={service.id}
                                        className={`service-card ${isVisible ? 'animate-slide-up' : ''}`}
                                        style={{ animationDelay: `${0.3 + (index * 0.1)}s` }}
                                    >
                                        <div className="service-header">
                                            <h3 className="service-title">{service.title}</h3>
                                            <div className="service-icon">{service.icon}</div>
                                        </div>
                                        <p className="service-description">{service.description}</p>
                                        <p className="service-projects">{service.projects} PROJECTS</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Slide 2 - Services 5-8 */}
                        <div className="services-slide">
                            <div className="services-grid">
                                {services.slice(4, 8).map((service, index) => (
                                    <div
                                        key={service.id}
                                        className={`service-card ${isVisible ? 'animate-slide-up' : ''}`}
                                        style={{ animationDelay: `${0.3 + (index * 0.1)}s` }}
                                    >
                                        <div className="service-header">
                                            <h3 className="service-title">{service.title}</h3>
                                            <div className="service-icon">{service.icon}</div>
                                        </div>
                                        <p className="service-description">{service.description}</p>
                                        <p className="service-projects">{service.projects} PROJECTS</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="services-controls">
                <button className="carousel-btn" onClick={prevSlide}>
                    <FaChevronLeft />
                </button>

                <div className="carousel-indicators">
                    {[...Array(totalSlides)].map((_, index) => (
                        <button
                            key={index}
                            className={`indicator ${currentSlide === index ? 'active' : ''}`}
                            onClick={() => setCurrentSlide(index)}
                        />
                    ))}
                </div>

                <button className="carousel-btn" onClick={nextSlide}>
                    <FaChevronRight />
                </button>
            </div>
        </section>
    );
};

export default ServicesSection;
