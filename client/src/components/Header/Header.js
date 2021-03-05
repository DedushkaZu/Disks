import './Header.css';
import logo from '../../logo.svg';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="App-header">
        <div className="logo-wrapper">
            <Link to="/" >
            <img src={logo} className="App-logo" alt="logo" />
            </Link>
        </div>
        
        <div className="project-wrapper">
          <span>НОРМАЛЬНЫЕ ДИСКИ</span>
        </div>

        <nav className="nav-bar">
          <div >
            <Link className="nav-bar-link" to="/login" >
              <p className="nav-bar-item">login</p>
            </Link>
          </div>
          <div >
            <Link className="nav-bar-link" to="/register" >
              <p className="nav-bar-item">register</p>
            </Link>
          </div>
          <div >
            <Link className="nav-bar-link" to="/configurator" >
              <p className="nav-bar-item">configurator</p>
            </Link>
          </div>
        </nav>
    </header>
  )
}

export default Header
