import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import {setClientToken} from "../../api/spotifyApi"
import Sidebar from '../../components/sidebar'
import Login from '../auth/Login'
import Favorites from "../favorites"
import Feed from "../feed"
import Library from "../library"
import Player from "../player"
import Trending from "../trending"
import "./home.css"

function Home() {
  const [token, setToken] = useState("");
  
  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const hash = window.location.hash;
    window.location.hash = ""
    if(!token && hash){
      const _token = hash.split("̃&")[0].split("=")[1]
      window.localStorage.setItem("token", _token)
      setToken(_token)
      setClientToken(_token)
    }
    else{
        setToken(token)
        setClientToken(token)
    }
  }, []);

  return !token ? <Login/> : (
    <BrowserRouter>
      <div className="main-body">
        <Sidebar/>
        <Routes>
            <Route path="/" element={<Library/>}/>
            <Route path="/feed" element={<Feed/>}/>
            <Route path="/trending" element={<Trending/>}/>
            <Route path="/player" element={<Player/>}/>
            <Route path="/favorites" element={<Favorites/>}/>
            <Route path="/library" element={<Library/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default Home