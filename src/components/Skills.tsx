'use client';
import { useEffect, useRef } from 'react';

const skills = {
  programmingLanguages: [
    { name: 'Kotlin', level: 90 },
    { name: 'Java', level: 85 },
    { name: 'XML', level: 95 }
  ],
  androidDevelopment: [
    { name: 'Android SDK', level: 90 },
    { name: 'Jetpack Compose', level: 80 },
    { name: 'MVVM Architecture', level: 85 }
  ],
  databases: [
    { name: 'Room', level: 90 },
    { name: 'SQLite', level: 85 },
    { name: 'Firebase', level: 80 }
  ],
  tools: [
    { name: 'Git', level: 85 },
    { name: 'Android Studio', level: 95 },
    { name: 'Gradle', level: 80 }
  ]
};

export default function Skills() {
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initScrollReveal = async () => {
      if (typeof window !== 'undefined') {
        try {
          const ScrollReveal = (await import('scrollreveal')).default;
          const sr = ScrollReveal();
          // Animate all .skill-category elements if present
          if (skillsRef.current) {
            const categories = skillsRef.current.querySelectorAll('.skill-category');
            categories.forEach((el, idx) => {
              sr.reveal(el as HTMLElement, {
                delay: 200 + idx * 100,
                distance: '30px',
                duration: 800,
                origin: 'bottom',
              });
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
    <section id="skills" className="skills">
      <h2 className="section-title">My Skills</h2>
      <div className="skills-container" ref={skillsRef}>
        <div className="skill-category">
          <h3>Programming Languages</h3>
          <div className="skill-list">
            {skills.programmingLanguages.map((skill, index) => (
              <div className="skill-item" key={index}>
                <span>{skill.name}</span>
                <div className="skill-bar">
                  <div
                    className="skill-level"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="skill-category">
          <h3>Android Development</h3>
          <div className="skill-list">
            {skills.androidDevelopment.map((skill, index) => (
              <div className="skill-item" key={index}>
                <span>{skill.name}</span>
                <div className="skill-bar">
                  <div
                    className="skill-level"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="skill-category">
          <h3>Databases</h3>
          <div className="skill-list">
            {skills.databases.map((skill, index) => (
              <div className="skill-item" key={index}>
                <span>{skill.name}</span>
                <div className="skill-bar">
                  <div
                    className="skill-level"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="skill-category">
          <h3>Tools & Technologies</h3>
          <div className="skill-list">
            {skills.tools.map((skill, index) => (
              <div className="skill-item" key={index}>
                <span>{skill.name}</span>
                <div className="skill-bar">
                  <div
                    className="skill-level"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 