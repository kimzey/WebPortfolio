import projects from '../data/projects.js';

const Projects = () => (
  <div>
    <h1>โปรเจค</h1>
    {projects.map((proj, idx) => (
      <div key={idx} className="project">
        <h2>{proj.name}</h2>
        <p>{proj.description}</p>
        <p>{proj.skills}</p>
      </div>
    ))}
  </div>
);

export default Projects;
