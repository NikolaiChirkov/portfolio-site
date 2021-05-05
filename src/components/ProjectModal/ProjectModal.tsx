import { useModalContext } from '../../context/ModalContext';
import { modalEntity } from '../../interfaces/IModalContext';
import { hideModal } from '../../reducer/reducerShortcut';
import IconClose from '../../resources/svg/i-close.svg';
import ModalOverview from './ModalOverview/ModalOverview';
import './ProjectModal.scss';

const ProjectModal = (): JSX.Element => {
  const { modalState, modalDispatch } = useModalContext();
  const { img, name, type, stack, linkHref, linkName, description } = modalState
    .data?.modal as modalEntity;

  return (
    <section className="project-modal">
      <div className="modal">
        <div className="modal__close">
          <img
            className="modal__close-icon"
            src={IconClose}
            alt="close modal icon"
            onClick={() => modalDispatch(hideModal)}
          />
        </div>
        <ModalOverview
          img={img}
          name={name}
          type={type}
          stack={stack}
          linkHref={linkHref}
          linkName={linkName}
        />
        <div className="modal__description">{description}</div>
      </div>
    </section>
  );
};

export default ProjectModal;
