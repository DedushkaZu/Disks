import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

function Login() {
  return (
       <div className="form-wrapper">
          <form>
              <div className="mb-3">
                <input placeholder="login" type="text" className="form-control" required/>
              </div>
              <div className="mb-3">
                <input placeholder="password" type="text" className="form-control" required/>
              </div>

              <Link to="/" >
                <div className="mb-3">
                  <button  type="submit" className="btn btn-light btn-sm">Login</button>
                </div>
              </Link>
          </form>
      </div>
  )
}

export default Login
