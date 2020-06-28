import React, { useState, useEffect } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';
import { HOME_PATH, ABOUT_PATH, REGISTER, LOGIN } from "./utils/constant";
import Home from './components/Home';
import NotFound from "./components/layouts/NotFound";
import Header from './components/layouts/Header';
import About from './components/About';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import PublicRoute from './components/authRoutes/PublicRoute';
import PrivateRoute from './components/authRoutes/PrivateRoute';
import jwt_decode from 'jwt-decode';
import setJwtToken from './utils/setJwtToken';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.token;
    if (token) {
      setJwtToken(token);
      const decodedToken = jwt_decode(token);
      const currentTime = Date.now() / 1000;
      if (decodedToken.exp < currentTime) {
        handleExpireToken();
        window.location.href = LOGIN;
      } else {
        setUser(decodedToken.user.id);
      }
    }

    //eslint-disable-next-line
  }, []);

  const handleExpireToken = () => {
    localStorage.removeItem("token");
    setJwtToken(false);
    setUser(null);
  }

  return (
    <Provider store={store}>
      <Router>
        <Header user={user} setUser={setUser} />
        <div className="App">
          <Switch>

            <PublicRoute user={user} setUser={setUser} exact path={LOGIN} component={Login} />
            <PublicRoute user={user} setUser={setUser} exact path={REGISTER} component={Register} />

            <PrivateRoute user={user} exact path={HOME_PATH} component={Home} />
            <PrivateRoute user={user} exact path={ABOUT_PATH} component={About} />

            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;