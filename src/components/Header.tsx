'use client';
import { useState } from 'react';
import Link from 'next/link';
import { PROFILE } from '../constants/profile';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <header>
      <nav>
        <div className="logo">
          <Link href="#">{PROFILE.NAME}</Link>
        </div>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><Link href="#home" onClick={closeMenu}>Home</Link></li>
          <li><Link href="#about" onClick={closeMenu}>About</Link></li>
          <li><Link href="#projects" onClick={closeMenu}>Projects</Link></li>
          <li><Link href="#skills" onClick={closeMenu}>Skills</Link></li>
          <li><Link href="#contact" onClick={closeMenu}>Contact</Link></li>
        </ul>
        <div className="hamburger" onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </nav>
    </header>
  );
} 