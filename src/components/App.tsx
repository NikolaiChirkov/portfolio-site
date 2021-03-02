import { Switch, Route } from 'react-router-dom';
import Header from './Header/Header';
import Home from './Home/Home';
import Projects from './Projects/Projects';
import '../resources/styles/App.scss';

const App = () => {
  return (
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
  )
}

export default App;