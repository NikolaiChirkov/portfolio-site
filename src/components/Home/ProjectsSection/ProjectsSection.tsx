import Projects from '../../../resources/data/projects.js';
import ProjectCard from './ProjectCard/ProjectCard';
import './ProjectsSection.scss';

const ProjectsSection = (): JSX.Element => (
  <section id="projects" className="home__projects">
    <h2 className="projects__header">Проекты</h2>
    <div className="projects__container">
      {Projects.map((project) => {
        const { name, img, type, stack, linkHref, description } = project;

        return (
          <ProjectCard
            name={name}
            img={img}
            type={type}
            stack={stack}
            linkHref={linkHref}
            description={description}
          />
        );
      })}
    </div>
  </section>
);

export default ProjectsSection;
