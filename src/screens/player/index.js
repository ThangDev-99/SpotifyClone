import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import apiClient from "../../api/spotifyApi"
import AudioPlayer from '../../components/audioPlayer'
import Queue from '../../components/queue'
import Similar from '../../components/similar'
import SongCard from '../../components/songCard'
import "./player.css"

function Player() {

  const location = useLocation()
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if(location.state){
        apiClient
        .get("playlists/" + location.state?.id + "/tracks")
        .then((res) => {
          setTracks(res.data.items)
          setCurrentTrack(res.data.items[0].track)
        })
    }
  },[location.state])

  useEffect(() => {
    setCurrentTrack(tracks[currentIndex]?.track)
  },[currentIndex, tracks])
  return ( 
    <div className="screen-container flex">
      <div className="left-player-body">
        <AudioPlayer currentTrack={currentTrack} total={tracks} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex}/>
      <div className="card-album-container flex">
          <Similar/>
          <Similar/>
          <Similar/>
      </div>
      </div>
      <div className="right-player-body">
        <SongCard album={currentTrack?.album}/>
        <Queue tracks={tracks} setCurrentIndex={setCurrentIndex}/>
      </div>
    </div>       
  )
}

export default Player