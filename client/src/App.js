import './App.css';
import Header from './components/Header/Header';
import Error from './components/Error/Error';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  // Redirect
} from 'react-router-dom'
import { useSelector } from 'react-redux';


function App() {
  const error = useSelector(state => state.error)
  console.log(error);

  return (
    <Router >
      {error.status ? 
        (
          <Error />
        ) :
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

              {/* <Route path="/info">
                <Info />
              </Route> */}

            </Switch>
          </div>
        </div>  )
      }
    </Router>
  );
}

export default App;
