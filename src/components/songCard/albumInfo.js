import "./albumInfo.css"
import React from 'react'

function AlbumInfo({album}) {
  const artists = []
  album?.artists?.forEach(artist => {
    artists.push(artist.name)
  })
  return (
    <div className="albumInfo-card">
      <div className="albumName-container">
          <div className="marquee">
            <p>{album?.name + " - " + artists?.join(", ")}</p>
          </div>
      </div>
      <div className="album-info">
        <p>{`${album?.name} is an ${album?.album_type} by ${artists?.join(", ")} with ${album?.total_tracks} track(s)`}</p>
      </div>  
      <div className="album-release">
        <p>Release date: {album?.release_date}</p>
      </div>

    </div>
  )
}

export default AlbumInfo