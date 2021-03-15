import { useModalContext } from '../../context/ModalContext';
import './ProjectModal.scss';

const ProjectModal = (): JSX.Element => {
  const { modalState, modalDispatch } = useModalContext();

  return (
    <section className="project-modal">
      <div className="modal">
        <div className="modal__face">
          <img src="" alt="" />
          <div className="modal_face-description">
            <h2 className="face-desription__text">Title</h2>
            <h3 className="face-descrption__text">Commercial</h3>
            <p className="face-description__text">Stack</p>
            <a className="face-descrption__text" href="#" target="_blank">
              site
            </a>
          </div>
        </div>
        <div className="modal_desription"></div>
      </div>
    </section>
  );
};

export default ProjectModal;
