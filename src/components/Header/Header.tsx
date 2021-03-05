import Logo from '../../resources/svg/portfolio.svg';
import Navbar from './Navbar/Navbar';
import './Header.scss';

const Header = (): JSX.Element => (
  <div className="header">
    <img className="header__image" src={Logo} alt="portfolio logo" />
    <h1 className="header__title">Nikolai's portfolio</h1>
    <Navbar />
  </div>
);

export default Header;
