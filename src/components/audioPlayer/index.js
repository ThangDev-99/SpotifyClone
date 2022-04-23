import React, { useState, useEffect, useRef } from 'react'
import "./audioPlayer.css"
import Controls from './controls'
import ProgressCircle from './progressCircle'
import WaveAnimation from './waveAnimation'

function AudioPlayer({currentTrack, currentIndex, setCurrentIndex, total}) {
  const artists = []
  const [isPlaying, setIsPlaying] = useState(true);
  const [trackProgress, setTrackProgress] = useState(0);
  var audioSrc = total[currentIndex]?.track.preview_url
  const audioRef = useRef(new Audio(total[0]?.track.preview_url))
  const intervalRef = useRef()
  const isReady = useRef(false)
  const {duration } = audioRef.current
  const currentPercentage = duration ?  (trackProgress / duration) * 100 : 0

   
  const startTimer = () => {
    clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      if(audioRef.current.ended){ handleNext()}
      else {setTrackProgress(audioRef.current.currentTime)}

    },[1000])
  }

  useEffect(() => {
    if(audioRef.current.src){ 
      if(isPlaying)
        {
          audioRef.current.play()
          startTimer()
        }
        else{
          clearInterval(intervalRef.current)
          audioRef.current.pause()
        }
    }
    else{
      if(isPlaying)
        {
          audioRef.current = new Audio(audioSrc)
          audioRef.current.play()
          startTimer()
        }
        else{
          clearInterval(intervalRef.current)
          audioRef.current.pause()
        }
    }
  }, [isPlaying]);


  useEffect(() => {
    audioRef.current.pause()
    audioRef.current = new Audio(audioSrc)
    setTrackProgress(audioRef.current.currentTime)

    if(isReady.current){
      audioRef.current.play()
      setIsPlaying(true)
      startTimer()
    }
    else{
      isReady.current = true
    }
  },[currentIndex])

  useEffect(() => {
    return() => {
      audioRef.current.pause()
      clearInterval(intervalRef.current)
    }
  },[])

  currentTrack?.album?.artists.forEach(artist => {
    artists.push(artist.name)
  })


  const handleNext = () => {
    if(currentIndex < total.length - 1) {
        setCurrentIndex(currentIndex + 1)
    }
    else {
      setCurrentIndex(0)
    }
  }

  const handlePrev = () => {
      if(currentIndex - 1 < 0)
      {
        setCurrentIndex(total.length - 1)
      }
      else {setCurrentIndex(currentIndex - 1)}
  }

  const addZero = (n) => {
    return n > 9 ? "" + n : "0" + n
  }

  const handleShuffle = () => {
    // currentIndex = Math.floor(Math.random() * total.length)

  }
  const handleRedo = () => {
  
  }


  return (
    <div className="player-body flex">
        <div className="player-left">
            <ProgressCircle
                percentage={currentPercentage}
                isPlaying={true}
                image={currentTrack?.album?.images[0]?.url}
                size={300}
                color="#1DB954"
            />
        </div>
        <div className="player-right flex">
          <p className="song-title">{currentTrack?.name}</p>
          <p className="song-artist">{artists.join(" | ")}</p>
          <div className="player-right-bottom flex">
            <div className="song-duration flex">
              <p className="duration">{`0:${addZero(Math.round(trackProgress))}`}</p>
              <WaveAnimation isPlaying={isPlaying}/>
              <p className="duration">3:45</p>
            </div>
            <Controls
              isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
              handleNext={handleNext}
              handlePrev={handlePrev}
              handleShuffle={handleShuffle}
              handleRedo={handleRedo}
              total={total}
            />
          </div>
        </div>
    </div>
  )
}

export default AudioPlayer