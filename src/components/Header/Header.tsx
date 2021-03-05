import Logo from '../../resources/svg/portfolio.svg';
import Navbar from './Navbar/Navbar';
import './Header.scss';

const Header = (): JSX.Element => (
  <div className="header">
    <div className="header__face">
      <img className="header__logo" src={Logo} alt="portfolio logo" />
      <h1 className="header__title">Nikolai's portfolio</h1>
    </div>
    <Navbar />
  </div>
);

export default Header;
