import React, { useState, useEffect, useRef } from 'react';
import './ReviewsSection.css';
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ReviewsSection = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [currentReview, setCurrentReview] = useState(0);

    const reviews = [
    {
        name: 'Khawaja Ali',
        role: 'Technical Mentor | PhD, Yokohama National University | CTI Engineering, Tokyo',
        rating: 5,
        text: 'Hamza has a strong problem-solving mindset and is always willing to validate ideas before building them. During the early planning of ByteDX, he focused on understanding customer problems instead of jumping straight into development. That approach will help him build products with real market value.',
        
    },
    {
        name: 'Anser Javed',
        role: 'Advocate • Legal Advisor',
        rating: 5,
        text: 'What stands out about Hamza is his professionalism and ownership. He communicates clearly, follows through on commitments, and is open to feedback. He approaches technical work with the same seriousness that businesses expect from a reliable technology partner.',
        
    },
    {
        name: 'Haider Ali',
        role: 'Software Engineer • Co-Founder at ByteDX',
        rating: 5,
        text: 'Working with Hamza has been a smooth experience. He keeps the team organized, documents ideas well, and turns discussions into actionable plans. Whether it is product strategy or development, he consistently pushes for quality instead of shortcuts.',
        
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
