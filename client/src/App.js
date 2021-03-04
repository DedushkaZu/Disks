import './App.css';
import Header from './components/Header/Header';
import Error from './components/Error/Error';
// import Login from './components/Login/Login';
import { 
  BrowserRouter as Router,
  // Switch,
  // Route,
  // Redirect
} from 'react-router-dom'
import { useSelector } from 'react-redux';


function App() {
  const error = useSelector(state => state.error)

  return (
    <Router >
      <div className="App">
        <Header />
        {error.status ? (
          <div className="App-main">
            <Error />
          </div>) :
          (<div className="App-main">
            {/* <Switch>

              <Route path="/login">  
                <Login />
              </Route>

              <Route path="/info">
                <Info />
              </Route>

            </Switch> */}
          </div>)
        }
      </div>
    </Router>
  );
}

export default App;
