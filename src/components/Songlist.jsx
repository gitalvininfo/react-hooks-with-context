import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'
import NewSongForm from './NewSongForm'

const Songlist = () => {
    const [songs, setSongs] = useState([
        { title: 'almost home', id: 1 },
        { title: 'memory gospel', id: 2 },
        { title: 'this wild darkness', id: 3 },
    ])

    const addSong = (song) => {
        setSongs([...songs, { id: song.id, title: song.title }])
    }


    return (
        <div className='song-list'>
            <ul>
                {songs.map((song) => <li key={song.id}>{song.title}</li>)}
            </ul>
            <NewSongForm addSong={addSong} />
        </div>
    )
}

export default Songlist