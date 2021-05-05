import { IModalOverview } from '../../../interfaces/IModalOverview';
import './ModalOverview.scss';

const ModalOverview = ({
  img,
  name,
  type,
  stack,
  linkHref,
  linkName,
}: IModalOverview): JSX.Element => (
  <div className="modal__overview">
    <a href="https://specmax.ru/" target="_blank">
      <img className="modal__overview-img" src={img} alt="" />
    </a>
    <div className="modal__overview-info">
      <h2 className="overview-info__text">Название проекта: {name}</h2>
      <h3 className="overview-info__text odd-line">Тип проекта: {type}</h3>
      <p className="overview-info__text">Технологии: {stack}</p>
      <p className="overview-info__text odd-line">
        Ссылка на сайт:
        <a className="overview-info__text-a" href={linkHref} target="_blank">
          {linkName}
        </a>
      </p>
    </div>
  </div>
);

export default ModalOverview;
