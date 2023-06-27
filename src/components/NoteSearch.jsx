import React from 'react'

function NoteSearch({ query, onFilter }) {

    return (
        <div className='note-app__header'>
            <h1>
                Notes
            </h1>
            <div className='note-search'>
                <input type="text" name='query' value={query} onChange={onFilter} placeholder='Cari catatan ...' />
                <button style={{width:'50px', height:'40px', borderRadius:'5px',cursor:'pointer'}}>X</button>
            </div>
        </div>
    )

}

export default NoteSearch