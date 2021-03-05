import Section from './Section/Section';
import './Home.scss';

const Home = (): JSX.Element => (
  <main className="home">
    <Section cls="w-bg block" />
    <Section cls="g-bg block" />
  </main>
);

export default Home;
