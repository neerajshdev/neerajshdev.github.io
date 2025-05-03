'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PROFILE } from '../../../constants/profile';

// In a real app, this would be loaded from a database or API
const projectsData = [
  {
    id: 'project1',
    name: 'Project Name 1',
    description: 'A detailed description of the project, including its purpose, features, and the problem it solves.',
    fullDescription: `
      This is a more detailed explanation of the project that can span multiple paragraphs.
      
      It can include information about the technologies used, challenges faced, and solutions implemented.
      
      The project might have had specific requirements or constraints that required creative solutions.
    `,
    image: '/images/project1.jpg',
    technologies: ['Kotlin', 'MVVM', 'Retrofit', 'Room', 'LiveData'],
    github: 'https://github.com/',
    playstore: 'https://play.google.com/',
    screenshots: [
      '/images/project1-screenshot1.jpg',
      '/images/project1-screenshot2.jpg',
      '/images/project1-screenshot3.jpg'
    ]
  },
  {
    id: 'project2',
    name: 'Project Name 2',
    description: 'A detailed description of the project, including its purpose, features, and the problem it solves.',
    fullDescription: `
      This is a more detailed explanation of the project that can span multiple paragraphs.
      
      It can include information about the technologies used, challenges faced, and solutions implemented.
      
      The project might have had specific requirements or constraints that required creative solutions.
    `,
    image: '/images/project2.jpg',
    technologies: ['Java', 'Firebase', 'Room', 'RxJava'],
    github: 'https://github.com/',
    playstore: 'https://play.google.com/',
    screenshots: [
      '/images/project2-screenshot1.jpg',
      '/images/project2-screenshot2.jpg',
      '/images/project2-screenshot3.jpg'
    ]
  },
  {
    id: 'project3',
    name: 'Project Name 3',
    description: 'A detailed description of the project, including its purpose, features, and the problem it solves.',
    fullDescription: `
      This is a more detailed explanation of the project that can span multiple paragraphs.
      
      It can include information about the technologies used, challenges faced, and solutions implemented.
      
      The project might have had specific requirements or constraints that required creative solutions.
    `,
    image: '/images/project3.jpg',
    technologies: ['Kotlin', 'Jetpack Compose', 'Coroutines', 'Flow', 'Hilt'],
    github: 'https://github.com/',
    playstore: 'https://play.google.com/',
    screenshots: [
      '/images/project3-screenshot1.jpg',
      '/images/project3-screenshot2.jpg',
      '/images/project3-screenshot3.jpg'
    ]
  }
];

export default function ProjectPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const [project, setProject] = useState<typeof projectsData[0] | undefined>(undefined);

  useEffect(() => {
    // In a real app, this would be a fetch from an API
    const foundProject = projectsData.find(p => p.id === id);
    if (foundProject) {
      setProject(foundProject);
    }
  }, [id]);

  if (!project) {
    return notFound();
  }

  return (
    <div className="project-details-page">
      <header>
        <nav>
          <div className="logo">
            <Link href="/">{PROFILE.NAME}</Link>
          </div>
          <Link href="/" className="back-btn">
            <i className="fas fa-arrow-left"></i> Back to Home
          </Link>
        </nav>
      </header>

      <main>
        <section className="project-hero">
          <div className="container">
            <h1>{project.name}</h1>
            <p className="project-description">{project.description}</p>
            
            <div className="project-links">
              <a href={project.github} className="btn primary-btn" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i> View on GitHub
              </a>
              <a href={project.playstore} className="btn secondary-btn" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-google-play"></i> View on Play Store
              </a>
            </div>
          </div>
        </section>

        <section className="project-showcase">
          <div className="container">
            <div className="showcase-image">
              <Image 
                src={project.image} 
                alt={project.name}
                width={800}
                height={500}
                priority
              />
            </div>
            
            <div className="project-content">
              <h2>About this Project</h2>
              {project.fullDescription.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
              
              <h2>Technologies Used</h2>
              <div className="tech-stack">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              
              <h2>Screenshots</h2>
              <div className="screenshots-grid">
                {project.screenshots.map((screenshot, index) => (
                  <div key={index} className="screenshot">
                    <Image 
                      src={screenshot} 
                      alt={`${project.name} Screenshot ${index + 1}`}
                      width={400}
                      height={800}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} {PROFILE.NAME}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
} 