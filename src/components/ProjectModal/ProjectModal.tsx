import { useModalContext } from '../../context/ModalContext';
import { hideModal } from '../../reducer/reducerShortcut';
import IconClose from '../../resources/svg/i-close.svg';
import './ProjectModal.scss';

const ProjectModal = (): JSX.Element => {
  const { modalState, modalDispatch } = useModalContext();

  const stack =
    'Стэк: EJS + SCSS + JavaScript(JS + ES6) + TypeScript(TS) + Babel + Webpack';

  return (
    <section className="project-modal">
      <div className="modal">
        <div className="modal__close">
          <img
            className="modal__close-icon"
            src={IconClose}
            alt="close modal icon"
            onClick={() => modalDispatch(hideModal())}
          />
        </div>
        <div className="modal__overview">
          <a href="https://specmax.ru/" target="_blank">
            <img
              className="modal__overview-img"
              src="https://imgur.com/bwVBrnql.png"
              alt=""
            />
          </a>
          <div className="modal__overview-info">
            <h2 className="overview-info__text">
              Название проекта: specmax.ru
            </h2>
            <h3 className="overview-info__text odd-line">
              Тип проекта: Коммерческий
            </h3>
            <p className="overview-info__text">{stack}</p>
            <p className="overview-info__text odd-line">
              Ссылка на сайт:
              <a
                className="overview-info__text-a"
                href="https://specmax.ru/"
                target="_blank"
              >
                specmax.ru
              </a>
            </p>
          </div>
        </div>
        <div className="modal__description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam aut
          repudiandae error ad? Reprehenderit aperiam dolorum corrupti cum ex
          veniam quia deleniti fugit architecto, omnis temporibus suscipit
          recusandae quis exercitationem.
        </div>
      </div>
    </section>
  );
};

export default ProjectModal;
