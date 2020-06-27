import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';
import { HOME_PATH, ABOUT_PATH } from "./utils/constant";
import Home from './components/Home';
import NotFound from "./components/layouts/NotFound";
import Header from './components/layouts/Header';
import About from './components/About';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <div className="App">
          <Switch>
            <Route exact path={HOME_PATH} component={Home} />
            <Route exact path={ABOUT_PATH} component={About} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;