import './Section.scss';

interface ISection {
  cls: string;
}

const Section = ({ cls }: ISection): JSX.Element => (
  <section className={cls}>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit.Quae, nisi nihil
    quibusdam, quia exercitationem dolorem, consectetur beatae soluta
    perspiciatis eveniet nam voluptas voluptate! Modi officia esse iure
    temporibus id inventore.
  </section>
);

export default Section;
