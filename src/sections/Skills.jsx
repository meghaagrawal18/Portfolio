import React from 'react'
import SkillCard from '../components/SkillCard'
import { skillCategories } from '../data/skills'

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">
          Technologies and tools I use to bring ideas to life
        </p>
        <div className="skills-grid grid grid-3">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} category={category} />
          ))}
        </div>
      </div>

      <style jsx>{`
        .section-subtitle {
          text-align: center;
          color: #cccccc;
          font-size: 1.1rem;
          margin-bottom: 3rem;
        }
          .section-title {
          text-align: center;
          color: #ffffff;
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 3rem;
        }
      `}</style>
    </section>
  )
}

export default Skills
