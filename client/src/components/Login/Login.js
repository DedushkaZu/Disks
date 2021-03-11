import React, { useEffect } from 'react'
import './Login.scss'
import { useHistory } from 'react-router-dom'
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { loginUser } from '../../redux/actionCreators/user';
import { useSelector } from 'react-redux';
import { writeWrongData } from '../../redux/actionCreators/error';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();
  const auth = useSelector(state => state.auth);
  const error = useSelector(state => state.wrongAuthData);

  // useEffect(() => {
  //   if (auth) {
  //     history.push('/');
  //   } else {
  //     dispatch(writeWrongData(false))
  //   }
  // }, []);


  console.log(error);

  const handlerLogin = async (e, email, password) => {
    e.preventDefault();
    dispatch(loginUser(email, password));
    // setEmail('');
    // setPassword('');

  };


  return (
    <div class="login-box">
      <h2>Вход</h2>
      <form onSubmit={(e) => { handlerLogin(e, email, password) }}>
        <div class="user-box">
          <input onChange={(e) => { setEmail(e.target.value) }} type="email" name="email" required />
          <label>Email</label>
        </div>
        <div class="user-box">
          <input onChange={(e) => { setPassword(e.target.value) }} type="password" name="password" required />
          <label>Пароль</label>
        </div>
        <button className='btn'>Войти</button>
      </form>
      {error ?
        <h4>Неверный логин или пароль</h4> :
        <></>
      }
    </div>
  )
}

export default Login
