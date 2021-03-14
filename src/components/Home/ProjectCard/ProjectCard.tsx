import './ProjectCard.scss';

interface IProjectCard {
  imgSrc: string;
  caption: string;
  lnk: string;
}

const ProjectCard = ({ imgSrc, caption, lnk }: IProjectCard): JSX.Element => (
  <a className="project-card" href={lnk} target="_blank">
    <img className="project-card__img" src={imgSrc} alt="project image" />
    <p className="project-card__caption">{caption}</p>
  </a>
);

export default ProjectCard;
