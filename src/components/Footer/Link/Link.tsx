import './Link.scss';

interface ILink {
  linkHref: string;
  linkTarget: string;
  linkSrc: string;
  linkAlt: string;
  linkCaption: string;
}

const Link = ({
  linkHref,
  linkTarget,
  linkSrc,
  linkAlt,
  linkCaption,
}: ILink): JSX.Element => (
  <a className="links__link" href={linkHref} target={linkTarget}>
    <img className="link__img" src={linkSrc} alt={linkAlt} />
    <p className="link__caption">{linkCaption}</p>
  </a>
);

export default Link;
