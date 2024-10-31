// src/components/Skills.jsx
import  { useRef } from 'react';
import { gsap } from 'gsap';
import data from '../data.json';
import './Skills.css';

const Skills = () => {
  const skillRefs = useRef([]);

  const handleMouseEnter = (index) => {
    gsap.to(skillRefs.current[index], {
      width: 150,
      height: 150,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = (index) => {
    gsap.to(skillRefs.current[index], {
      width: 100,
      height: 100,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  return (
    <section className="skills-container">
      <div className="skills">
        <h2 className="skills-title">{data.skills.title}</h2>
        <div className="skills-icons">
          {data.skills.list.map((skill, index) => (
            <div
              key={index}
              className="skill-icon-container"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              ref={(el) => (skillRefs.current[index] = el)}
            >
              <img src={skill.icon} alt={skill.name} className="skill-icon" title={skill.name} />
              <div className="skill-title">{skill.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
