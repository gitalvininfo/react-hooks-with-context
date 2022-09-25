import React, { useState, useEffect } from 'react'
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

    useEffect(() => {
        console.log('use effect ran', songs)
    }, [songs])


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