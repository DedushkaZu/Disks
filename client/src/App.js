import './App.css';
import Header from './components/Header/Header';
import Error from './components/Error/Error';
import Loader from './components/Loader/Loader';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Redirect
} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import Configurator from './components/Configurator/Configurator';
import { useEffect } from 'react';
import { checkAuth } from './redux/actionCreators/user';
import WelcomePage from './components/WelcomePage/WelcomePage';


function App() {
  const error = useSelector(state => state.error)
  console.log(error);
  const dispatch = useDispatch();

  useEffect(() => {

    fetch('http://localhost:3001/user/check', {
      credentials: 'include'
    }).then(response => response.json())
      .then(result => result.cheker === 'ok' ? dispatch(checkAuth(true)) : dispatch(checkAuth(false)))
  }, [])

  return (
    <Router >
      {error.status ?
        (
          <Error />
        ) :
        (<div className="App">
          <Header />
          <Loader />
          <div className="App-main">
            <Switch>
              <Route exact path="/">
                <WelcomePage />
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/register">
                <Register />
              </Route>
              <Route exact path="/configurator">
                <Configurator />
              </Route>
            </Switch>
          </div>
        </div>)
      }
    </Router>
  );
}

export default App;
