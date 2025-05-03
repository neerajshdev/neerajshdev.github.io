'use client';
import { useEffect, useRef } from 'react';
import { PROFILE } from '../constants/profile';

export default function About() {
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initScrollReveal = async () => {
      if (typeof window !== 'undefined') {
        try {
          const ScrollReveal = (await import('scrollreveal')).default;
          const sr = ScrollReveal();
          if (aboutRef.current) {
            sr.reveal(aboutRef.current, {
              delay: 200,
              distance: '30px',
              duration: 800,
              origin: 'bottom',
            });
          }
        } catch (err) {
          // Optionally log error
        }
      }
    };
    initScrollReveal();
  }, []);

  return (
    <section id="about" className="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-content" ref={aboutRef}>
        <div className="about-card">
          <div className="about-text">
            <p>I am a passionate Android developer with expertise in creating user-friendly, efficient, and innovative mobile applications. With a strong foundation in Java and Kotlin, I specialize in building responsive and intuitive user interfaces.</p>
            <p>My journey in Android development began in 2021. I am committed to creating applications that not only meet functional requirements but also provide an exceptional user experience.</p>
            <div className="quick-info">
              <div className="info-item">
                <i className="fas fa-graduation-cap"></i>
                <span>{PROFILE.DEGREE}</span>
              </div>
              <div className="info-item">
                <i className="fas fa-briefcase"></i>
                <span>{PROFILE.EXPERIENCE}</span>
              </div>
              <div className="info-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>{PROFILE.LOCATION}</span>
              </div>
            </div>
            <a href={PROFILE.RESUME_LINK} className="btn primary-btn" download>Download Resume</a>
          </div>
        </div>
      </div>
    </section>
  );
} 