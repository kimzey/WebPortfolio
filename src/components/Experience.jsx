import React from 'react';
import experiences from '../data/experiences.js';

const Experience = () => (
  <div>
    <h1>ประสบการณ์</h1>
    {experiences.map((exp, idx) => (
      <div key={idx} className="experience">
        <h2>{exp.company}</h2>
        <p>{exp.role} - {exp.type}</p>
        <p>{exp.period}</p>
        <p>{exp.location}</p>
        {exp.description && <p>{exp.description}</p>}
      </div>
    ))}
  </div>
);

export default Experience;
