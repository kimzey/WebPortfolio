
import Profile from './components/Profile.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import ParallaxSection from './components/ParallaxSection.jsx';

const App = () => (
  <>
    <ParallaxSection id="profile" bgImage="assets/profile.jpg">
      <Profile />
    </ParallaxSection>
    <ParallaxSection id="experience" bgImage="assets/project1.jpg">
      <Experience />
    </ParallaxSection>
    <ParallaxSection id="projects" bgImage="assets/project2.jpg">
      <Projects />
    </ParallaxSection>
    <ParallaxSection id="skills" bgImage="assets/project3.png">
      <Skills />
    </ParallaxSection>
  </>
);

export default App;
