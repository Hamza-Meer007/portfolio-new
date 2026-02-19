import React, { useState } from 'react';
import './Footer.css';
import { FaGithub, FaLinkedinIn, FaWhatsapp, FaEnvelope, FaInstagram, FaTwitter, FaFacebookF } from 'react-icons/fa';

const Footer = () => {
    const [copied, setCopied] = useState(false);

    const handleEmailClick = (e) => {
        // Allow default mailto behavior, but also copy to clipboard
        navigator.clipboard.writeText('hamzameer4152@gmail.com');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-social">
                    {/* <a href="https://github.com/Hamza-Meer007" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <FaGithub />
                    </a> */}
                    <a href="https://www.linkedin.com/in/hamza-meer/" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <FaLinkedinIn />
                    </a>
                    {/* <a href="https://www.instagram.com/strangerr_071/" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <FaInstagram />
                    </a> */}
                    {/* <a href="https://twitter.com/ADNAN_071" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <FaTwitter />
                    </a> */}
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
                <p className="copyright">
                    © {new Date().getFullYear()} Hamza Meer. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
