
import skills from '../data/skills.js';

const Skills = () => (
  <div>
    <h1>ทักษะ</h1>
    <ul className="skills">
      {skills.map((skill, idx) => (
        <li key={idx}>{skill}</li>
      ))}
    </ul>
  </div>
);

export default Skills;
