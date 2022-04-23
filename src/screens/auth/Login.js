import React from 'react'
import {loginEndpoint} from "../../api/axiosClient"
import "./login.css"
import logo from "../../assets/spotify_logo.png"

function Login() {
  return (
    <div className="login-page">
        <img src={logo} alt="spotify-logo"  className="logo"/>
        
        <a href={loginEndpoint} >
            <div className="login-btn">LOGIN</div>
        </a>
    </div>
  )
}

export default Login