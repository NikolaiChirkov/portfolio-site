import { useModalContext } from '../../context/ModalContext';
import { modalEntity } from '../../interfaces/IModalContext';
import { hideModal } from '../../reducer/reducerShortcut';
import IconClose from '../../resources/svg/i-close.svg';
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
        <div className="modal__overview">
          <a href="https://specmax.ru/" target="_blank">
            <img className="modal__overview-img" src={img} alt="" />
          </a>
          <div className="modal__overview-info">
            <h2 className="overview-info__text">Название проекта: {name}</h2>
            <h3 className="overview-info__text odd-line">
              Тип проекта: {type}
            </h3>
            <p className="overview-info__text">{stack}</p>
            <p className="overview-info__text odd-line">
              Ссылка на сайт:
              <a
                className="overview-info__text-a"
                href={linkHref}
                target="_blank"
              >
                {linkName}
              </a>
            </p>
          </div>
        </div>
        <div className="modal__description">{description}</div>
      </div>
    </section>
  );
};

export default ProjectModal;
