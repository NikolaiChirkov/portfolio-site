import './Section.scss';

interface ISection {
  cls?: string;
  text: string[];
  img?: string;
}

const Section = ({ cls, text }: ISection): JSX.Element => (
  <section className={cls}>
    <div className="section-text">
      {text.map((tblock) => (
        <p>{tblock}</p>
      ))}
    </div>
  </section>
);

export default Section;
