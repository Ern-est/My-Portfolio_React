import React from 'react';
import './about.css';
import flutterLogo from '../assets/flutter.png'; // Add this to your assets

export default function About() {
  return (
    <section className="about-section">
      <div className="about-content">
        {/* Left Column */}
        <div className="about-left">
          <h2>About Me</h2>
          <p>
            I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences.
            Currently, I'm focused on developing applications with
            <span className="highlight"> React</span>,
            <span className="highlight"> Flutter</span>, and
            <span className="highlight"> Supabase</span>.
          </p>
        </div>

        {/* Right Column */}
        <div className="about-right">
          <h2>Skills</h2>
          <p>I have experience developing cross platform mobile applications using <span className="highlight">Flutter</span></p>
          <img src={flutterLogo} alt="Flutter Logo" className="flutter-logo" />
        </div>
      </div>
    </section>
  );
}
