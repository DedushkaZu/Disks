import './Register.css';
import { useHistory } from 'react-router-dom'
import { useState } from 'react';
import { registrationUser } from '../../redux/actionCreators/user';
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
    <div class="login-box">
      <h2>Login</h2>
      <form onSubmit={(e) => { handlerRegistration(e, username, email, password) }}>
        <div class="user-box">
          <input onChange={(e) => { setUsername(e.target.value) }} type="text" name="username" required />
          <label>Username</label>
        </div>
        <div class="user-box">
          <input onChange={(e) => { setEmail(e.target.value) }} type="email" name="email" required />
          <label>Email</label>
        </div>
        <div class="user-box">
          <input onChange={(e) => { setPassword(e.target.value) }} type="password" name="password" required />
          <label>Password</label>
        </div>
        <button className='btn'>Submit</button>
      </form>
    </div>
  )
}

export default Register
