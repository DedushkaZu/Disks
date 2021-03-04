import './Error.css';
import logo from '../../logo.svg';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

  function Error() {
  const error = useSelector(state => state.error)
  return (
    <div className="error">
      <div className="back"/>
      <div className="back-link">
        <Link to="/" >
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
      </div>
      <div className="error-status-wrapper">
        <div className="error-status">
          <h1 className="error-status-text">404</h1>
          <div className="error-message">
            <p>{error.errorMessage}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Error
