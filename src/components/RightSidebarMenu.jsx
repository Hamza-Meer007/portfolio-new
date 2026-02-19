import React, { useState } from 'react';
import './RightSidebarMenu.css';
import { FaHome, FaBriefcase, FaUser, FaCog, FaFileAlt, FaEnvelope, FaStar, FaTimes, FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube, FaGithub, FaWhatsapp, FaInstagram } from 'react-icons/fa';

const RightSidebarMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [copied, setCopied] = useState(false);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setIsOpen(false); // Close menu after clicking
        }
    };

    const handleEmailClick = (e) => {
        // Allow default mailto behavior, but also copy to clipboard
        navigator.clipboard.writeText('hamzameer4152@gmail.com');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const menuItems = [
        { id: 'home', icon: <FaHome />, label: 'Home' },
        { id: 'projects', icon: <FaBriefcase />, label: 'Projects' },
        { id: 'about', icon: <FaUser />, label: 'About' },
        { id: 'services', icon: <FaBriefcase />, label: 'Services' },
        { id: 'resume', icon: <FaFileAlt />, label: 'Resume' },
        { id: 'reviews', icon: <FaStar />, label: 'Reviews' },
        { id: 'contact', icon: <FaEnvelope />, label: 'Contact' },
    ];

    return (
        <>
            {/* Menu Toggle Button */}
            <button
                className="menu-toggle-btn"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle Menu"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            {/* Overlay */}
            {isOpen && <div className="menu-overlay" onClick={() => setIsOpen(false)}></div>}

            {/* Right Sidebar Menu */}
            <div className={`right-sidebar-menu ${isOpen ? 'open' : ''}`}>
                <div className="menu-header">
                    <h3>Menu</h3>
                    <button className="menu-close-btn" onClick={() => setIsOpen(false)}>
                        <FaTimes />
                    </button>
                </div>

                <nav className="menu-nav">
                    {menuItems.map((item) => (
                        <button
                            key={item.id}
                            className="menu-nav-item"
                            onClick={() => scrollToSection(item.id)}
                        >
                            <span className="menu-icon">{item.icon}</span>
                            <span className="menu-label">{item.label}</span>
                        </button>
                    ))}
                </nav>

                <div className="menu-footer">
                    <p className="menu-footer-label">Social</p>
                    <div className="menu-social">
                        {/* <a href="https://github.com/Hamza-Meer007" target="_blank" rel="noopener noreferrer" className="menu-social-icon">
                            <FaGithub />
                        </a> */}
                        <a href="https://www.linkedin.com/in/hamza-meer/" target="_blank" rel="noopener noreferrer" className="menu-social-icon">
                            <FaLinkedinIn />
                        </a>
                        {/* <a href="https://www.instagram.com/strangerr_071/" target="_blank" rel="noopener noreferrer" className="menu-social-icon">
                            <FaInstagram />
                        </a>
                        <a href="https://twitter.com/ADNAN_071" target="_blank" rel="noopener noreferrer" className="menu-social-icon">
                            <FaTwitter />
                        </a> */}
                        <a href="https://wa.me/923127674165" target="_blank" rel="noopener noreferrer" className="menu-social-icon">
                            <FaWhatsapp />
                        </a>
                        <div className="social-icon-wrapper" style={{ position: 'relative' }}>
                            <a
                                href="mailto:hamzameer4152@gmail.com"
                                onClick={handleEmailClick}
                                className="menu-social-icon"
                                title="Copy Email & Open Mail App"
                            >
                                <FaEnvelope />
                            </a>
                            {copied && <span className="tooltip">Copied!</span>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RightSidebarMenu;
