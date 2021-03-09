import Section from '../Common/Section/Section';
import data from './data';
import './Home.scss';

const Home = (): JSX.Element => (
  <main className="home">
    {data.map((section) => (
      <Section {...section} />
    ))}
  </main>
);

export default Home;
