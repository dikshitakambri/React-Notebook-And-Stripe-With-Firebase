import React from 'react';

const Note = ({note}) => {
    return(
        <div className="note white">
            <div className="right-align">
                <i className="material-icons red-text" style={{cursor: 'pointer'}}>favorite</i>
                <i className="material-icons" style={{cursor: 'pointer'}}>delete</i>
            </div>
            <h5 className="black-text">{note.title}</h5>
            <p className="trucate">{note.content}</p>
            <p className="grey-text">2 days ago</p>
            <div className="right-align">
                <i className="material-icons black-text">edit</i>
            </div>
        </div>
    );
}

export default Note;