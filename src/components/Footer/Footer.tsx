import HHLogo from '../../resources/svg/hh-ru.svg';
import GitHubLogo from '../../resources/svg/github.svg';
import './Footer.scss';

const Footer = (): JSX.Element => (
  <footer className="footer">
    <div className="footer_links">
      <a
        className="links_link"
        href="https://spb.hh.ru/resume/5872d277ff062edf220039ed1f67657738596a"
        target="_blank"
      >
        <img className="link_img" src={HHLogo} alt="hh.ru logo" />
        <p className="link_caption">hh.ru</p>
      </a>
      <a
        className="links_link"
        href="https://github.com/NikolaiChirkov"
        target="_blank"
      >
        <img className="link_img" src={GitHubLogo} alt="github logo" />
        <p className="link_caption">GitHub</p>
      </a>
    </div>
  </footer>
);

export default Footer;
