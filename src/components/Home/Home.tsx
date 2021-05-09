import MainSection from './MainSection/MainSection';
import ProjectsSection from './ProjectsSection/ProjectsSection';
import TechnologySection from './TechnologySection/TechnologySection';
import './Home.scss';

const Home = (): JSX.Element => (
  <main className="home">
    <MainSection />
    <ProjectsSection />
    <TechnologySection />
  </main>
);

export default Home;
