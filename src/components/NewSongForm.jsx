import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'

const NewSongForm = ({ addSong }) => {
    const [title, setTitle] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setTitle("");
        addSong({ id: uuid(), title: title })
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Song name: </label>
            <input type="text" value={title} required onChange={(e) => setTitle(e.target.value)} />
            <input type="submit" value="add song" />
        </form>
    )
}

export default NewSongForm