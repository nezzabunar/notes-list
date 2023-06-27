import React from 'react'

function NoteArchive({ id, onArchive, status }) {
    return (
        <button className='note-item__archive-button' onClick={() => onArchive(id)}>{status ? `Pindahkan` : `Arsipkan`}</button>
    )
}

export default NoteArchive