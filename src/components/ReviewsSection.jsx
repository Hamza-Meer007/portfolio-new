import React, { useState, useEffect, useRef } from 'react';
import './ReviewsSection.css';
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ReviewsSection = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [currentReview, setCurrentReview] = useState(0);

    const reviews = [
        {
            name: 'Alex Tomato',
            role: 'Brand Manager at Instant Design',
            rating: 5,
            text: 'Working with David was an absolute pleasure. His attention to detail, creating insights, and ability to translate complex ideas into stunning visuals truly set him apart.',
            project: 'Project →'
        },
        {
            name: 'Sarah Johnson',
            role: 'CEO at TechStart',
            rating: 5,
            text: 'David delivered exceptional work on our web application. His expertise in React and modern design principles helped us create a product our users love. Highly recommended!',
            project: 'Project →'
        },
        {
            name: 'Michael Chen',
            role: 'Product Lead at InnovateCo',
            rating: 5,
            text: 'Outstanding developer and designer. David transformed our vision into reality with pixel-perfect execution and smooth user experience. A true professional!',
            project: 'Project →'
        }
    ];

    const nextReview = () => {
        setCurrentReview((prev) => (prev + 1) % reviews.length);
    };

    const prevReview = () => {
        setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
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

    const review = reviews[currentReview];

    return (
        <section id="reviews" className="section reviews-section" ref={sectionRef}>
            <div className={`section-label ${isVisible ? 'animate-fade-in' : ''}`}>Reviews</div>
            <h2 className={`section-title ${isVisible ? 'animate-slide-up' : ''}`} style={{ animationDelay: '0.2s' }}>
                What Clients Say About Me
            </h2>

            <div className="review-container">
                <div className={`review-card card ${isVisible ? 'animate-slide-up' : ''}`} style={{ animationDelay: '0.3s' }}>
                    <div className="review-header">
                        <div className="reviewer-info">
                            <div className="reviewer-avatar">
                                {review.name.charAt(0)}
                            </div>
                            <div>
                                <h4 className="reviewer-name">{review.name}</h4>
                                <p className="reviewer-role">{review.role}</p>
                            </div>
                        </div>
                        <div className="review-rating">
                            {[...Array(review.rating)].map((_, i) => (
                                <FaStar key={i} />
                            ))}
                        </div>
                    </div>

                    <p className="review-text">{review.text}</p>

                    {/* <a href="#" className="review-project">{review.project}</a> */}
                </div>

                <div className="review-controls">
                    <button className="review-btn" onClick={prevReview}>
                        <FaChevronLeft />
                    </button>
                    <button className="review-btn" onClick={nextReview}>
                        <FaChevronRight />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ReviewsSection;
