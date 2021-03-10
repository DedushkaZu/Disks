import './Header.scss';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { logoutUser } from '../../redux/actionCreators/user';

function Header() {
  const userName = window.localStorage.getItem('name');
  const index = Math.floor(Math.random() * 4 + 1);
  // console.log(index)
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const handlerLogout = () => {
    dispatch(logoutUser())
    localStorage.clear();
    // console.log(auth);

  };
  return (
    <header className="App-header">
      <div className="logo-wrapper">
        <Link to="/" >
          <img src={`../../logo/logo${index}.svg`} className="App-logo" alt="logo" />
        </Link>
      </div>

      <div className="project-wrapper">
        <p>Shining Text Animation Effects</p>
      </div>
      <nav className="nav-bar">
        {auth ?
          <>
            <div >
              <Link className="nav-bar-link" to="/configurator" >
                <p className="nav-bar-item">Конфигуратор</p>
              </Link>
            </div>
            <div >
              <Link className="nav-bar-link" to="/userzone" >
                <p className="nav-bar-item">Мои диски</p>
              </Link>
            </div>
            <div >
              <Link className="nav-bar-link" to="/" >
                <p onClick={handlerLogout} className="nav-bar-item">Выйти</p>
              </Link>
            </div>
          </> :
          <>
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
          </>
        }
      </nav>
    </header>
  )
}

export default Header
