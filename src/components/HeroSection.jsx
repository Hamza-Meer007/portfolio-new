import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <section className="hero-section">
            <div className="hero-content">
                <div className="hero-text">
                    <div className="hero-intro animate-fade-in">
                        <span className="hero-label">✦ Introduction</span>
                    </div>

                    <h1 className="hero-title animate-slide-up" style={{ animationDelay: '0.2s' }}>
                        I'm Hamza Meer<br />
                        Software Engineer<br />
                        & Full Stack Developer
                    </h1>

                    <div className="hero-buttons animate-slide-up" style={{ animationDelay: '0.4s' }}>
                        <a href="#projects" className="btn-hero-primary">My Projects</a>
                        <a href="/Hamza-Resume.pdf" download="Hamza-Resume.pdf" className="btn-hero-secondary">Download Resume</a>
                    </div>

                    <div className="hero-stats">
                        <div className="stat-card animate-fade-in" style={{ animationDelay: '0.6s' }}>
                            <h3 className="stat-number">30+</h3>
                            <p className="stat-label">Happy Clients</p>
                        </div>
                        <div className="stat-card animate-fade-in" style={{ animationDelay: '0.7s' }}>
                            <h3 className="stat-number">05+</h3>
                            <p className="stat-label">Years Of Experience</p>
                        </div>
                        <div className="stat-card animate-fade-in" style={{ animationDelay: '0.8s' }}>
                            <h3 className="stat-number">50+</h3>
                            <p className="stat-label">Projects Done</p>
                        </div>
                    </div>
                </div>

                <div className="hero-image animate-fade-in" style={{ animationDelay: '0.4s' }}>
                    <div className="image-placeholder">
                        <img src="/profile-pic.webp" alt="Hamza Meer" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
