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
<<<<<<< HEAD
        <p>НОРМАЛЬНЫЕ ДИСКИ</p>
=======
        <span>НОРМАЛЬНЫЕ ДИСКИ</span>
>>>>>>> 6eccd3108a58a5c547dbc54a7f90ec2fe95c84a2
      </div>
      <nav className="nav-bar">
        {auth ?
          <>
            <div className='beauty'>
              <Link className="nav-bar-link" to="/configurator" >
                <p className="nav-bar-item">Конфигуратор</p>
              </Link>
            </div>
            <div className='beauty'>
              <Link className="nav-bar-link" to="/userzone" >
                <p className="nav-bar-item">Мои диски</p>
              </Link>
            </div>
            <div className='beauty'>
              <Link className="nav-bar-link" to="/" >
                <p onClick={handlerLogout} className="nav-bar-item">Выйти</p>
              </Link>
            </div>
          </> :
          <>
            <div className='beauty'>
              <Link className="nav-bar-link" to="/login" >
<<<<<<< HEAD
                <p className="nav-bar-item">Логин</p>
=======
                <p className="nav-bar-item">Войти</p>
>>>>>>> 6eccd3108a58a5c547dbc54a7f90ec2fe95c84a2
              </Link>
            </div>
            <div className='beauty'>
              <Link className="nav-bar-link" to="/register" >
<<<<<<< HEAD
                <p className="nav-bar-item">Регистрация</p>
=======
                <p className="nav-bar-item">Зарегистрироваться</p>
>>>>>>> 6eccd3108a58a5c547dbc54a7f90ec2fe95c84a2
              </Link>
            </div>
          </>
        }
      </nav>
    </header>
  )
}

export default Header
