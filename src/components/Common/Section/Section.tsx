import './Section.scss';

interface ISection {
  cls: string;
  text: string;
  img?: string;
}

const Section = ({ cls, text }: ISection): JSX.Element => (
  <section className={cls}>{text}</section>
);

export default Section;
