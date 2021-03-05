import './Register.css';
import { Link, useHistory } from 'react-router-dom'
import { useState } from 'react';
import { registrationUser, checkAuth } from '../../redux/actionCreators/user';
import { useDispatch, useSelector } from 'react-redux';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const history = useHistory();

  const auth = useSelector(state => state.auth);

  const handlerRegistration = (e, username, email, password) => {
    e.preventDefault();
    dispatch(registrationUser(username, email, password));
    // window.localStorage.setItem('auth', auth);
  };
  if (auth) {
    history.push('/');
  }



  return (
    <div className="form-wrapper">
      <form onSubmit={(e) => { handlerRegistration(e, username, email, password) }}>
        <div className="mb-3">
          <input onChange={(e) => { setUsername(e.target.value) }} value={username} placeholder="login" type="text" className="form-control" required />
        </div>
        <div className="mb-3">
          <input onChange={(e) => { setEmail(e.target.value) }} value={email} placeholder="email" type="email" className="form-control" required />
        </div>
        <div className="mb-3">
          <input onChange={(e) => { setPassword(e.target.value) }} value={password} placeholder="password" type="text" className="form-control" required />
        </div>
        <div className="mb-3">
          <button className="btn btn-light btn-sm">Register</button>
        </div>
      </form>
    </div>
  )
}

export default Register
