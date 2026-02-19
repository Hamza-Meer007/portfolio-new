import React, { useState } from 'react';
import './ProfileSidebar.css';
import { FaGithub, FaLinkedinIn, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const ProfileSidebar = () => {
    const [copied, setCopied] = useState(false);

    const handleEmailClick = () => {
        navigator.clipboard.writeText('hamzameer4152@gmail.com');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="profile-sidebar">
            <div className="profile-content">
                <div className="profile-header">
                    <h1 className="profile-name">Hamza Meer</h1>
                    <p className="profile-title">Software Engineer</p>
                </div>

                <div className="profile-image-container">
                    <img
                        src="src/assets/Hamza_Photo1.jpeg"
                        alt="Hamza Meer"
                        className="profile-image"
                    />
                </div>

                <div className="profile-info">
                    <p className="profile-label">Specialization</p>
                    <p className="profile-value"> Software Development , Full Stack Development & AI Integration</p>
                </div>

                <div className="profile-info">
                    <p className="profile-label">Based in</p>
                    <p className="profile-value">Gujranwala, Pakistan</p>
                </div>

                <div className="profile-social">
                    {/* <a href="https://github.com/Hamza-Meer007" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <FaGithub />
                    </a> */}
                    <a href="https://www.linkedin.com/in/hamza-meer/" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <FaLinkedinIn />
                    </a>
                    <a href="https://wa.me/923127674165" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <FaWhatsapp />
                    </a>
                    <div className="social-icon-wrapper" style={{ position: 'relative' }}>
                        <a
                            href="mailto:hamzameer4152@gmail.com"
                            onClick={handleEmailClick}
                            className="social-icon"
                            title="Copy Email & Open Mail App"
                        >
                            <FaEnvelope />
                        </a>
                        {copied && <span className="tooltip">Copied!</span>}
                    </div>
                </div>

                <button
                    className="btn-work"
                    onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                >
                    Let's Work Togather!
                </button>
            </div>
        </div>
    );
};

export default ProfileSidebar;
