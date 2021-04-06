import { useModalContext } from '../../../context/ModalContext';
import { IProjectCard } from '../../../interfaces/IProjectCard';
import { showModal } from '../../../reducer/reducerShortcut';
import './ProjectCard.scss';

const ProjectCard = ({
  img,
  name,
  type,
  stack,
  linkHref,
  description,
}: IProjectCard): JSX.Element => {
  const { modalDispatch } = useModalContext();

  return (
    <button
      className="project-card"
      onClick={() =>
        modalDispatch(
          showModal({
            img,
            name,
            type,
            stack,
            linkHref,
            linkName: name,
            description,
          })
        )
      }
    >
      <img className="project-card__img" src={img} alt="project image" />
      <p className="project-card__caption">{name}</p>
    </button>
  );
};

export default ProjectCard;
