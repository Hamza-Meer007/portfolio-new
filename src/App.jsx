import React from 'react';
import './App.css';
import ProfileSidebar from './components/ProfileSidebar';
import RightSidebarMenu from './components/RightSidebarMenu';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ResumeSection from './components/ResumeSection';
import ToolsSection from './components/ToolsSection';
import ReviewsSection from './components/ReviewsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <ProfileSidebar />
      <RightSidebarMenu />

      <main className="main-wrapper">
        <div id="home">
          <HeroSection />
        </div>
        <div id="projects">
          <ProjectsSection />
        </div>
        <div id="about">
          <AboutSection />
        </div>
        <div id="services">
          <ServicesSection />
        </div>
        <div id="resume">
          <ResumeSection />
        </div>
        <div id="tools">
          <ToolsSection />
        </div>
        <div id="reviews">
          <ReviewsSection />
        </div>
        <div id="contact">
          <ContactSection />
        </div>
        <Footer />
      </main>
    </div>
  );
}

export default App;
