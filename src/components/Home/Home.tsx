// import Section from '../Common/Section/Section';
// import data from './data';
import './Home.scss';

const Home = (): JSX.Element => (
  <main className="home">
    <section className="home_intr">
      <h2 className="intr_title">Привет, я Николай</h2>
      <h3 className="intr_subtitle">JavaScript разработчик</h3>
    </section>
    <section className="home_overview">
      <h2 className="overview_header">Проекты, в которых учавствовал</h2>
    </section>
  </main>
);

export default Home;
