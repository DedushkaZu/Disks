import { CHECK_AUTH, PUSH_IN_USERBASKET } from '../types/user';
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
    const user = await response.json();
    dispatch(checkAuth(true));
    window.localStorage.setItem('userID', user._id);
    window.localStorage.setItem('name', user.username)
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
    const user = await response.json();
    dispatch(checkAuth(true));
    window.localStorage.setItem('userID', user._id);
    window.localStorage.setItem('name', user.username)
  }
  dispatch(removeLoader());
};

const logoutUser = () => async (dispatch, getState) => {
  dispatch(addLoader());
  const response = await fetch('http://localhost:3001/user/logout', {
    credentials: 'include',
  });
  console.log(response.status)
  if (response.status === 200) {
    dispatch(checkAuth(false));
    dispatch(removeLoader());
  }
};

const checkAuth = (flag) => {
  return {
    type: CHECK_AUTH,
    payload: flag,
  }
}

const saveConfig = (config) => async (dispatch, getState) => {
  const id = window.localStorage.getItem('userID')
  dispatch(addLoader());
  const response = await fetch('http://localhost:3001/user/config', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ config, id }),
  })

  const savedConfig = await response.json();

  if (response.status !== 200) {
    alert('Что то пошло не так.')
  } else {
    dispatch(pushInUserBasket(savedConfig.basket))
    alert('Успешно.')
  }
  dispatch(removeLoader());
};

const pushInUserBasket = (config) => {
  return {
    type: PUSH_IN_USERBASKET,
    payload: config,
  }
};

export {
  registrationUser,
  loginUser,
  logoutUser,
  checkAuth,
  saveConfig,
}
