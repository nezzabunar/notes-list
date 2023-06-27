import React from 'react'
import NoteList from './NoteList'
import { getInitialData } from '../utils/index'
import NoteInput from './input_comp/NoteInput'
import NoteSearch from './NoteSearch'

class NoteApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            notes: getInitialData(),
            query: '',
        }
    }

    onAddNote({ title, body }) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        createdAt: new Date(),
                        archived: false,
                    }
                ]
            }
        })
    }

    onDeleteNote(id) {
        const notes = this.state.notes.filter(notes => notes.id !== id);
        this.setState({ notes });
    }

    onArchiveNote(id) {
        const UpdateNote = this.state.notes.map(note => (note.id === id ? { ...note, archived: !note.archived } : note));
        this.setState({ notes: UpdateNote });
    }

    onFilter(event) {
        this.setState(() => {
            return {
                query: event.target.value
            }
        })
    }

    render() {
        const FilteredNotes = this.state.notes.filter((note)=> note.title.toLowerCase().includes(this.state.query.toLowerCase()));
        const activeNote = FilteredNotes.filter((note) => {
            return note.archived === false;
        });
        const deactiveNote = FilteredNotes.filter((note) => {
            return note.archived === true;
        });

        return (

            <div children='note-app__header'>
                <NoteSearch query={this.state.query} onFilter={this.onFilter.bind(this)}></NoteSearch>

                <div className='note-app__body'>
                    <NoteInput addNotes={this.onAddNote.bind(this)}></NoteInput>

                    <h2>Catatan Aktif</h2>
                    {activeNote.length > 0 ?
                        <NoteList notes={activeNote} onDelete={this.onDeleteNote.bind(this)} onArchive={this.onArchiveNote.bind(this)}></NoteList>
                        : <p className='notes-list__empty-message'>Tidak ada catatan</p>
                    }

                    <h2>Catatan Archive</h2>
                    {deactiveNote.length > 0 ?
                        <NoteList notes={deactiveNote} onDelete={this.onDeleteNote.bind(this)} onArchive={this.onArchiveNote.bind(this)}></NoteList>
                        : <p className='notes-list__empty-message'>Tidak ada catatan</p>
                    }
                </div>
            </div>
        )
    }
}

export default NoteApp