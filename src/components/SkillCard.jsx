import React from 'react'

const SkillCard = ({ category }) => {
  return (
    <div className="skill-card">
      <div className="skill-header">
        <div 
          className="skill-icon"
          style={{ backgroundColor: category.color }}
        >
          {category.name.charAt(0)}
        </div>
        <h3>{category.name}</h3>
      </div>
      <div className="skill-list">
        {category.skills.map((skill, index) => (
          <span key={index} className="skill-item">{skill}</span>
        ))}
      </div>
      <style jsx>{`
          .skill-card {
          background-color: #1a1a1a;
          border-radius: 12px;
          padding: 1.5rem;
          border: 1px solid transparent;
          transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
        }

        .skill-card:hover {
          transform: translateY(-5px);
         
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        
         border-color: #fbbf24; 
        }

        .skill-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .skill-icon {
          width: 40px;
          height: 40px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #000;
          font-weight: 700;
          font-size: 1.2rem;
        }

        .skill-header h3 {
          color: #ffffff;
          font-size: 1.2rem;
        }

        .skill-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .skill-item {
          background-color: #2a2a2a;
          color: #cccccc;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.9rem;
        }
      `}</style>
    </div>
  )
}

export default SkillCard
