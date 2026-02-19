import React, { useState, useEffect, useRef } from 'react';
import './ContactSection.css';

const ContactSection = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    // Your WhatsApp number (update this with your actual number)
    const WHATSAPP_NUMBER = '923127674165'; // Adnan's number

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');

        // Format message for WhatsApp
        const whatsappMessage = `*New Portfolio Contact*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Company:* ${formData.company || 'N/A'}%0A*Message:*%0A${formData.message}`;

        // Create WhatsApp link
        const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

        // Open WhatsApp in new tab
        window.open(whatsappLink, '_blank');

        // Show success message
        setStatus('success');

        // Reset form
        setFormData({ name: '', email: '', company: '', message: '' });

        // Clear status after 3 seconds
        setTimeout(() => setStatus(''), 3000);
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
        <section id="contact" className="section contact-section" ref={sectionRef}>
            <div className={`section-label ${isVisible ? 'animate-fade-in' : ''}`}>Contact</div>
            <h2 className={`section-title ${isVisible ? 'animate-slide-up' : ''}`} style={{ animationDelay: '0.2s' }}>
                Let's Make Something Awesome<br />
                Together!
            </h2>

            <form className={`contact-form ${isVisible ? 'animate-slide-up' : ''}`} style={{ animationDelay: '0.3s' }} onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="name">Your name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="company">Company name</label>
                        <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Company Inc."
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="message">Write your message...</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project..."
                        rows="6"
                        required
                    ></textarea>
                </div>

                <button type="submit" className="btn-submit" disabled={status === 'sending'}>
                    {status === 'sending' ? 'Opening WhatsApp...' : 'Send Message'}
                </button>

                {status === 'success' && (
                    <p className="form-message success">Opening WhatsApp with your message!</p>
                )}
            </form>
        </section>
    );
};

export default ContactSection;
