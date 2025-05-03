'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Project data could be moved to a separate file or fetched from an API
const projects = [
  {
    id: 1,
    name: 'Project Name 1',
    description: 'A brief description of the project, highlighting key features and technologies used.',
    image: '/images/project1.jpg',
    technologies: ['Kotlin', 'MVVM', 'Retrofit'],
    github: '#',
    playstore: '#',
    detailsPage: '/projects/project1'
  },
  {
    id: 2,
    name: 'Project Name 2',
    description: 'A brief description of the project, highlighting key features and technologies used.',
    image: '/images/project2.jpg',
    technologies: ['Java', 'Firebase', 'Room'],
    github: '#',
    playstore: '#',
    detailsPage: '/projects/project2'
  },
  {
    id: 3,
    name: 'Project Name 3',
    description: 'A brief description of the project, highlighting key features and technologies used.',
    image: '/images/project3.jpg',
    technologies: ['Kotlin', 'Jetpack Compose', 'Coroutines'],
    github: '#',
    playstore: '#',
    detailsPage: '/projects/project3'
  },
];

export default function Projects() {
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initScrollReveal = async () => {
      if (typeof window !== 'undefined') {
        try {
          const ScrollReveal = (await import('scrollreveal')).default;
          const sr = ScrollReveal();
          if (projectsRef.current) {
            const cards = projectsRef.current.querySelectorAll('.project-card');
            cards.forEach((el, idx) => {
              sr.reveal(el as HTMLElement, {
                delay: 200 + idx * 100,
                distance: '30px',
                duration: 800,
                origin: 'bottom',
              });
            });
          }
        } catch {
          // Optionally log error
        }
      }
    };
    initScrollReveal();
  }, []);

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">My Projects</h2>
      <div className="project-grid" ref={projectsRef}>
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="project-image">
              <Image
                src={project.image}
                alt={project.name}
                width={400}
                height={220}
                className="project-img"
              />
            </div>
            <div className="project-details">
              <h3 className="project-title">{project.name}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, index) => (
                  <span key={index}>{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <Link href={project.github} className="btn small-btn">
                  <i className="fab fa-github"></i> GitHub
                </Link>
                <Link href={project.detailsPage} className="btn small-btn">
                  View Details
                </Link>
                <Link href={project.playstore} className="btn small-btn">
                  <i className="fab fa-google-play"></i> Play Store
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="view-more">
        <Link href="/projects" className="btn secondary-btn">View All Projects</Link>
      </div>
    </section>
  );
} 