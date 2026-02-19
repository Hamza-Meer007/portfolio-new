import React, { useEffect, useRef, useState } from 'react';
import './AboutSection.css';

const AboutSection = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    } else {
                        setIsVisible(false); // Reset animation when out of view
                    }
                });
            },
            { threshold: 0.2 }
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
        <section id="about" className="section about-section" ref={sectionRef}>
            <div className={`about-label ${isVisible ? 'animate-fade-in' : ''}`}> ✦ About</div>
            <h2 className={`section-title ${isVisible ? 'animate-slide-up' : ''}`} style={{ animationDelay: '0.2s' }}>
                Transforming Complexity Into<br />
                Effortless Design
            </h2>
            <div className="about-content">
                <p className={`section-description ${isVisible ? 'animate-fade-in' : ''}`} style={{ animationDelay: '0.4s' }}>
                    Skilled and experienced in high and low level languages including Full stack Python, Javascript, C/C++, .Net, PHP languages.
                    Also very well versed with version control systems such as Git, GitLab and Notion.
                </p>
                <a href="#contact" className={`btn-primary ${isVisible ? 'animate-slide-up' : ''}`} style={{ animationDelay: '0.6s' }}>
                    Contact Me
                </a>
            </div>
        </section>
    );
};

export default AboutSection;
