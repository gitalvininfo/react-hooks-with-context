import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'

const Songlist = () => {
    const [songs, setSongs] = useState([
        { title: 'almost home', id: 1 },
        { title: 'memory gospel', id: 2 },
        { title: 'this wild darkness', id: 3 },
    ])

    const addSong = () => {
        setSongs([...songs, { id: uuid(), title: uuid() }])
    }


    return (
        <div className='song-list'>
            <ul>
                {songs.map((song) => <li key={song.id}>{song.title}</li>)}
            </ul>
            <button onClick={addSong}>
                Add Song
            </button>
        </div>
    )
}

export default Songlist