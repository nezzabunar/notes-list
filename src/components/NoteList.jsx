import React from 'react'
import NoteItem from './NoteItem'

function NoteList({ notes , onDelete, onArchive}) {
    return (
        <div className='notes-list'>
            {notes ? notes.map((note) => (
                <NoteItem key={note.id} id={note.id} status={note.archived} onDelete={onDelete} onArchive={onArchive} {...note} > </NoteItem>
            )
            ):null}

        </div>

    )
}

export default NoteList