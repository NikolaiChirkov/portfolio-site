import ProjectCard from './ProjectCard/ProjectCard';
import './Home.scss';

const Home = (): JSX.Element => (
  <main className="home">
    <section id="main" className="home__intr">
      <h2 className="intr__title">Привет, я Николай</h2>
      <h3 className="intr__subtitle">JavaScript разработчик</h3>
    </section>
    <section id="overview" className="home__overview">
      <h2 className="overview__header">Проекты</h2>
      <div className="overview__container">
        <ProjectCard
          name="specmax.ru"
          img="https://imgur.com/bwVBrnql.png"
          type="commercial"
          stack="EJS + CSS + JS(ES6) + TS + BABEL + Webpack"
          linkHref="https://specmax.ru/"
          description="lorem ipsum"
        />
        <ProjectCard
          name="glarimac.ru"
          img="https://imgur.com/1LKkSjMl.png"
          type="commercial"
          stack="NodeJS + Express"
          linkHref="https://glarimac.ru/"
          description="lorem ipsum"
        />
        <ProjectCard
          name="n-chirkov.netlify.app"
          img="https://imgur.com/1SdipZxl.png"
          type="personal"
          stack="HTML + SCSS + React + TS"
          linkHref="#"
          description="lorem ipsum"
        />
      </div>
    </section>
    <section id="technology" className="home__technology">
      <h1>Известные технологии:</h1>
      <div className="technology__container"></div>
    </section>
  </main>
);

export default Home;
