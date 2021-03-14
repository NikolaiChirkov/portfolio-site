import HHLogo from '../../resources/svg/hh-ru.svg';
import GitHubLogo from '../../resources/svg/i-github.svg';
import MailLogo from '../../resources/svg/i-mail.svg';
import PhoneLogo from '../../resources/svg/i-phone.svg';
import Link from './Link/Link';
import './Footer.scss';

const Footer = (): JSX.Element => (
  <footer className="footer">
    <section id="contacts" className="contact__links">
      <h2 className="links__header">Ссылки на всякое</h2>
      <div className="links__container">
        <Link
          linkHref="https://spb.hh.ru/resume/5872d277ff062edf220039ed1f67657738596a"
          linkTarget="_blank"
          linkSrc={HHLogo}
          linkAlt="hh.ru logo"
          linkCaption="Резюме"
        />
        <Link
          linkHref="https://github.com/NikolaiChirkov"
          linkTarget="_blank"
          linkSrc={GitHubLogo}
          linkAlt="github logo"
          linkCaption="GitHub"
        />
        <Link
          linkHref="tel:+79313331417"
          linkTarget="_self"
          linkSrc={PhoneLogo}
          linkAlt="phone logo"
          linkCaption="Телефон"
        />
        <Link
          linkHref="mail:nikolyachirkov@yandex.ru"
          linkTarget="_blank"
          linkSrc={MailLogo}
          linkAlt="mail logo"
          linkCaption="Почта"
        />
      </div>
    </section>
  </footer>
);

export default Footer;
