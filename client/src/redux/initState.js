function auth() {
  return Boolean(window.localStorage.getItem('auth'))
}

const initState = {
  loader: false,
  error: {
    status: false,
    errorMessage: '',
  },
  auth: auth(),
}
export default initState
