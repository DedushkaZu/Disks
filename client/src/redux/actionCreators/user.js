import { CHECK_AUTH } from '../types/user';
import { addLoader, removeLoader } from '../actionCreators/loader';


const registrationUser = (username, email, password) => async (dispatch, getState) => {
  dispatch(addLoader());
  const response = await fetch('http://localhost:3001/user/registration', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({ username, email, password }),
  });
  if (response.status !== 200) {
    alert('Данный логин или email уже используется')
  } else {
    const userID = await response.json();
    dispatch(checkAuth(true));
    window.localStorage.setItem('userID', userID)
  }
  dispatch(removeLoader());
}

const loginUser = (email, password) => async (dispatch, getState) => {
  dispatch(addLoader());
  const response = await fetch('http://localhost:3001/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({ email, password }),
  });
  if (response.status !== 200) {
    alert('Неверный логин или пароль');
  } else {
    const userID = await response.json();
    dispatch(checkAuth(true));
    window.localStorage.setItem('userID', userID);
  }
  dispatch(removeLoader());
};

const checkAuth = (flag) => {
  return {
    type: CHECK_AUTH,
    payload: flag,
  }
}
export {
  registrationUser,
  loginUser,
  checkAuth,
} 
