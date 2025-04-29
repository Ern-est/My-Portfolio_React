import React from 'react';
import './Hero.css';
import reactLogo from '../assets/react.png';
import supabaseLogo from '../assets/supabase.png';
import flutterLogo from '../assets/flutter.png';
import ernestImage from '../assets/ernest.png';
import firebaseLogo from '../assets/firebase.png';
export default function Hero() {
  return (
    <section className="hero">
        <div className="hero-logos">
            <img src={reactLogo} alt="React Logo" />
            <img src={supabaseLogo} alt="Supabase Logo" />
            <img src={flutterLogo} alt="Supabase Logo" />
            <img src={firebaseLogo} alt="Firebase Logo" />
          </div>
      <div className="hero-container">
        <div className="hero-left">
          
          <h1>
            Hi, I'm 
            <br />
            <span>
                Ernest
                <br />
             Cheruiyot
            </span>
          </h1>
          <p>Software Engineer</p>
        </div>

        <div className="hero-right">
          <img src={ernestImage} alt="Ernest" className="profile" />
        </div>
      </div>
    </section>
  );
}
