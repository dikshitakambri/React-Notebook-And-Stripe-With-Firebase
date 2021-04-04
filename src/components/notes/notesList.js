import React from 'react';
import Note from './Note';

const NoteList = ({notes}) => {
    return(
        <div className="noteslist">
            {notes && notes.map(note => <Note note={note} key={note.id} />)}
        </div>
    );
}

export default NoteList;