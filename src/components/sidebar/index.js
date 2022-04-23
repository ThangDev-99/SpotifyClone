import React, { useEffect, useState } from 'react'
import { FaGripfire, FaPlay, FaSignOutAlt } from 'react-icons/fa';
import { MdFavorite, MdSpaceDashboard } from 'react-icons/md';
import { IoLibrary } from 'react-icons/io5';

import Button from '../button'
import "./sidebar.css"
import apiClient  from '../../api/spotifyApi';

function Sidebar() {
  const [userInfo, setUserInfo] = useState({ _user: {
    displayName: "",
    image:""
  }
  });

  useEffect(() => {
    apiClient.get("me").then((response) => {
      setUserInfo((prev) => ({...prev,
      _user: {image: response.data.images[0].url, displayName: response.data.display_name}}))
    })
  },[])
  return (
    <div className="sidebar-container">
        <div className="user-info">
          <img src={userInfo._user.image} alt="Profile Avt" className="profile-img" />  
          <p>Hi, {userInfo._user.displayName}</p>
        </div>
        <div className="function">
          <Button title="Feed" to="/feed" icon={<MdSpaceDashboard/>}/>
          <Button title="Trending" to="/trending" icon={<FaGripfire/>}/>
          <Button title="Player" to="/player" icon={<FaPlay/>}/>
          <Button title="Favorites" to="/favorites" icon={<MdFavorite/>}/>
          <Button title="Library" to="/library" icon={<IoLibrary/>}/>
        </div>
        <div className="signout">
          <Button title="Sign Out" to="/Login" icon={<FaSignOutAlt/>}/>
        </div>
    </div>
  )
}

export default Sidebar