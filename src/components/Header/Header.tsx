import Logo from '../../resources/svg/portfolio.svg';
import Navbar from './Navbar/Navbar';
import './Header.scss';

const Header = (): JSX.Element => (
  <header className="header">
    <a className="header__face" href="#">
      <img className="header__logo" src={Logo} alt="portfolio logo" />
      <h1 className="header__title">Портфолио Николая</h1>
    </a>
    <Navbar />
  </header>
);

export default Header;
