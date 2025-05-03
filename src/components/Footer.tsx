'use client';
import Link from 'next/link';
import { PROFILE } from '../constants/profile';

export default function Footer() {
  // This replaces the original JS functionality that used:
  // const yearElement = document.getElementById('current-year');
  // if (yearElement) { yearElement.textContent = new Date().getFullYear(); }
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-content">
        <div className="footer-links">
          <Link href="#home">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#skills">Skills</Link>
          <Link href="#contact">Contact</Link>
        </div>
        <div className="social-links">
          <a href={PROFILE.GITHUB} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href={PROFILE.LINKEDIN} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href={PROFILE.TWITTER} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
        <p className="copyright">
          &copy; <span id="current-year">{currentYear}</span> {PROFILE.NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  );
} 