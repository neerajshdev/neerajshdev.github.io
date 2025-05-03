'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PROFILE } from '../constants/profile';

export default function Hero() {
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initScrollReveal = async () => {
      if (typeof window !== 'undefined') {
        try {
          const ScrollReveal = (await import('scrollreveal')).default;
          const sr = ScrollReveal();
          if (contentRef.current) {
            sr.reveal(contentRef.current, {
              delay: 200,
              distance: '50px',
              duration: 1000,
              origin: 'left',
            });
          }
          if (imageRef.current) {
            sr.reveal(imageRef.current, {
              delay: 400,
              distance: '50px',
              duration: 1000,
              origin: 'right',
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
    <section id="home" className="hero">
      <div className="hero-content" ref={contentRef}>
        <h1>Hi, I'm <span className="highlight">{PROFILE.NAME}</span></h1>
        <h2>Android Developer</h2>
        <p>Creating innovative mobile experiences with Kotlin and Java</p>
        <div className="cta-buttons">
          <Link href="#projects" className="btn primary-btn">See My Work</Link>
          <Link href="#contact" className="btn secondary-btn">Get In Touch</Link>
        </div>
      </div>
      <div className="hero-image" ref={imageRef}>
        <Image 
          src="/images/neeraj_profile.jpeg" 
          alt="Neerajshdev Profile photo"
          width={300}
          height={300}
          priority
        />
      </div>
    </section>
  );
} 