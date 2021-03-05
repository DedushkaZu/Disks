// function auth() {
//   return Boolean(window.localStorage.getItem('auth'))
// }
console.log(localStorage.getItem('auth'));
const initState = {
  loader: false,
  error: {
    status: false,
    errorMessage: '',
  },
  auth: false,
}
export default initState
