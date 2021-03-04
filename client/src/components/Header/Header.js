import './Header.css';
import logo from '../../logo.svg';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="App-header">
        <Link to="/" >
        <img src={logo} className="App-logo" alt="logo" />
        </Link>
        
        <span>НОРМАЛЬНЫЕ ДИСКИ</span>

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
        </nav>
    </header>
  )
}

export default Header
