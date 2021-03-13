import './Navbar.scss';

const Navbar = (): JSX.Element => (
  <ul className="navbar">
    <li className="navbar__link">
      <a className="navbar__link-a" href="#main">
        Главная
      </a>
    </li>
    <li className="navbar__link">
      <a className="navbar__link-a" href="#overview">
        Проекты
      </a>
    </li>
    <li className="navbar__link">
      <a className="navbar__link-a" href="#technology">
        Технологии
      </a>
    </li>
    <li className="navbar__link">
      <a className="navbar__link-a" href="#contacts">
        Контакты
      </a>
    </li>
  </ul>
);

export default Navbar;
