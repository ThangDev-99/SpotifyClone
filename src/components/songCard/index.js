import React from 'react'
import AlbumInfo from './albumInfo'
import AlbumImage from './albumImage'
import "./songCard.css"

function SongCard({album}) {
    return (
        <div className="songCard-body flex">
            <AlbumImage url={album?.images[0]?.url}/>
            <AlbumInfo album={album}/>
        </div>
    )
}

export default SongCard