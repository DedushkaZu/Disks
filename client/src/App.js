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
import { useSelector } from 'react-redux';
import Configurator from './components/Configurator/Configurator';


function App() {
  const error = useSelector(state => state.error)
  const loader = useSelector(state => state.loader)
  console.log(error);

  return (
    <Router >
      {error.status ?
        (
          <Error />
        ) :
        loader ? 
        (<div className="App">
          <Header />
          <Loader />
        </div>) :
        (<div className="App">
          <Header />
          <div className="App-main">
            <Switch>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/register">
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
