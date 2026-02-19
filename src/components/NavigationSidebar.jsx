import React from 'react';
import './NavigationSidebar.css';
import { FaHome, FaBriefcase, FaUser, FaCog, FaFileAlt, FaEnvelope } from 'react-icons/fa';

const NavigationSidebar = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const navItems = [
        { id: 'home', icon: <FaHome />, label: 'Home' },
        { id: 'services', icon: <FaBriefcase />, label: 'Services' },
        { id: 'about', icon: <FaUser />, label: 'About' },
        { id: 'resume', icon: <FaFileAlt />, label: 'Resume' },
        { id: 'tools', icon: <FaCog />, label: 'Tools' },
        { id: 'contact', icon: <FaEnvelope />, label: 'Contact' },
    ];

    return (
        <div className="navigation-sidebar">
            <button className="menu-toggle">
                <span></span>
                <span></span>
                <span></span>
            </button>

            <nav className="nav-items">
                {navItems.map((item) => (
                    <button
                        key={item.id}
                        className="nav-item"
                        onClick={() => scrollToSection(item.id)}
                        title={item.label}
                    >
                        {item.icon}
                    </button>
                ))}
            </nav>
        </div>
    );
};

export default NavigationSidebar;
