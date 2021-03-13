import './Navbar.scss';

const Navbar = (): JSX.Element => (
  <ul className="navbar">
    <li className="navbar__link">
      <a href="#">Главная</a>
    </li>
    <li className="navbar__link">
      <a href="#">Проекты</a>
    </li>
  </ul>
);

export default Navbar;
