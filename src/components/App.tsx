import { Switch, Route } from 'react-router-dom';
import Header from './Header/Header';
import Home from './Home/Home';
import Programming from './Programming/Programming';
import '../resources/styles/App.scss';

const App = (): JSX.Element => {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/programming">
          <Programming />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
