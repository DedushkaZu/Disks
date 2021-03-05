import React from 'react'
import './Login.css'
import { useHistory } from 'react-router-dom'
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { checkAuth, loginUser } from '../../redux/actionCreators/user';
import { useSelector } from 'react-redux';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const history = useHistory();

  const auth = useSelector(state => state.auth);

  const handlerLogin = async (e, email, password) => {
    e.preventDefault();
    dispatch(loginUser(email, password));
    // setEmail('');
    // setPassword('');
  };
  if (auth) {
    // window.localStorage.setItem('auth', auth);
    history.push('/');
  }

  return (
    <div className="form-wrapper">
      <form onSubmit={(e) => { handlerLogin(e, email, password) }}>
        <div className="mb-3">
          <input onChange={(e) => { setEmail(e.target.value) }} placeholder="email" type="email" className="form-control" required />
        </div>
        <div className="mb-3">
          <input onChange={(e) => { setPassword(e.target.value) }} placeholder="password" type="text" className="form-control" required />
        </div>
        <div className="mb-3">
          <button className="btn btn-light btn-sm">Login</button>
        </div>
      </form>
    </div>
  )
}

export default Login
