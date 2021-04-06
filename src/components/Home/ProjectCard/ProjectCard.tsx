import { useModalContext } from '../../../context/ModalContext';
import { IProjectCard } from '../../../interfaces/IProjectCard';
import { showModal } from '../../../reducer/reducerShortcut';
import './ProjectCard.scss';

const ProjectCard = ({ imgSrc, caption }: IProjectCard): JSX.Element => {
  const { modalDispatch } = useModalContext();

  return (
    <button className="project-card" onClick={() => modalDispatch(showModal)}>
      <img className="project-card__img" src={imgSrc} alt="project image" />
      <p className="project-card__caption">{caption}</p>
    </button>
  );
};

export default ProjectCard;
