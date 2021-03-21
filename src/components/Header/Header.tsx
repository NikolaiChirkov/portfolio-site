import { useState } from 'react';
import IconLogo from '../../resources/svg/portfolio.svg';
import Navbar from './Navbar/Navbar';
import './Header.scss';

const Header = (): JSX.Element => {
  const [prevScroll, setPrevScroll] = useState(window.pageYOffset);

  window.onscroll = () => {
    const currentScroll = window.pageYOffset;
    const navbar = document.getElementsByClassName('header')[0];
    if (prevScroll > currentScroll) {
      (navbar as HTMLElement).style.top = '0';
    } else {
      (navbar as HTMLElement).style.top = '-50px';
    }
    setPrevScroll(currentScroll);
  };

  return (
    <header className="header">
      <a className="header__face" href="#">
        <img className="header__logo" src={IconLogo} alt="portfolio logo" />
        <h1 className="header__title">Портфолио Николая</h1>
      </a>
      <Navbar />
    </header>
  );
};

export default Header;
