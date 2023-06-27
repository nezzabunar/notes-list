import React from 'react'
import NoteItemBody from './NoteItemBody'
import NoteDelete from './NoteDelete'
import NoteArchive from './NoteArchive'

function NoteItem({ id, title, body, createdAt, onDelete, onArchive, status }) {
    return (
        <div className='note-item'>
            <div className='note-item__content'>
                <NoteItemBody id={id} title={title} body={body} createdAt={createdAt}></NoteItemBody>
            </div>

            <div className='note-item__action'>
                <NoteDelete id={id} onDelete={onDelete}></NoteDelete>
                <NoteArchive id={id} status={status} onArchive={onArchive}></NoteArchive>
            </div>
        </div>
    )
}

export default NoteItem