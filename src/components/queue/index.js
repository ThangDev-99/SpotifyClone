import React from 'react'
import "./queue.css"

function millisToMinutesAndSeconds(millis) {
  var minutes = Math.floor(millis / 60000);
  var seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

function Queue({tracks, setCurrentIndex}) {
  
  return (
    <div className="queue-container flex">
      <div className="queue flex">
        <p className="upNext" style={{fontSize: '20px'}}>Up Next</p>
        <div className="queue-list">
          {tracks.map((track, index) => (
            <div 
              key={track.track.id} 
              className="queue-item flex"
              onClick={() => setCurrentIndex(index)}
            >
                <p className="track-name">{track?.track?.name}</p>
                <p>{millisToMinutesAndSeconds(track.track.duration_ms)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Queue