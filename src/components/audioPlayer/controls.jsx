import React from 'react'
import "./controls.css"
import { IconContext } from "react-icons"
import { ImShuffle } from "react-icons/im"
import { CgRedo } from "react-icons/cg"
import { IoPlaySkipBack, IoPlay, IoPause, IoPlaySkipForward, IoShuffleOutline} from "react-icons/io5"


function Controls({isPlaying, setIsPlaying, handleNext, handlePrev, handleRedo, handleShuffle}) {
  return <IconContext.Provider value={{size: "35px", color:"#fff"}}>
      <div className="controls-wrapper flex">
        <div className="action-btn" onClick={handleShuffle}>
          <ImShuffle />
        </div>
        <div className="action-btn" onClick={handlePrev}>
          <IoPlaySkipBack />
        </div>
        <div className={isPlaying ? "play-pause-btn active" : "play-pause-btn"} onClick={() => setIsPlaying(!isPlaying)}>
          {!isPlaying ? <IoPlay/> : <IoPause/>}
        </div>
        <div className="action-btn" onClick={handleNext}>
          <IoPlaySkipForward />
        </div>
        <div className="action-btn" onClick={handleRedo}>
          <CgRedo />
        </div>
      </div>
  </IconContext.Provider>
}

export default Controls