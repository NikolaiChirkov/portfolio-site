import Header from './Header/Header';
import Home from './Home/Home';
import Footer from './Footer/Footer';
import './reset.scss';
import './App.scss';

const App = (): JSX.Element => (
  <div className="app">
    <Header />
    <main className="page">
      <Home />
    </main>
    <Footer />
  </div>
);

export default App;
