import ProjectCard from './ProjectCard/ProjectCard';
import './Home.scss';

const Home = (): JSX.Element => (
  <main className="home">
    <section id="main" className="home_intr">
      <h2 className="intr_title">Привет, я Николай</h2>
      <h3 className="intr_subtitle">JavaScript разработчик</h3>
    </section>
    <section id="overview" className="home_overview">
      <h2 className="overview_header">Проекты, в которых учавствовал</h2>
      <div className="overview_container">
        <ProjectCard
          caption="specmax.ru"
          imgSrc="https://imgur.com/bwVBrnql.png"
          lnk="https://specmax.ru/"
        />
        <ProjectCard
          caption="glarimac.ru"
          imgSrc="https://imgur.com/1LKkSjMl.png"
          lnk="https://glarimac.ru/"
        />
        <ProjectCard
          caption="n-chirkov.netlify.app"
          imgSrc="https://imgur.com/1SdipZxl.png"
          lnk="#"
        />
      </div>
    </section>
    <section id="technology" className="technology">
      <h1>Известные технологии:</h1>
      <div className="technology__container"></div>
    </section>
  </main>
);

export default Home;
