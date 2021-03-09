import { Switch, Route } from 'react-router-dom';
import Header from './Common/Header/Header';
import Home from './Home/Home';
import Projects from './Projects/Projects';
import './reset.scss';
import './App.scss';

const App = (): JSX.Element => (
  <div className="app">
    <Header />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/projects">
        <Projects />
      </Route>
    </Switch>
  </div>
);

export default App;
