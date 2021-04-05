import React from 'react';
import {deleteNote, toggleFav} from '../../store/Reducers/noteAction';
import {useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import moment from 'moment';

const Note = ({note}) => {
    const dispatch = useDispatch();
    const deleteNoteHandler = () => {
        dispatch(deleteNote(note))
    }
    const toggleFavHandler = () => {
        dispatch(toggleFav(note))
    }
    const heartMarkup = note.favorite ? 'favorite' : 'favorite_border'
    return(
        <div className="note white">
            <div className="right-align">
                <i className="material-icons red-text" style={{cursor: 'pointer'}} onClick={toggleFavHandler} >{heartMarkup}</i>
                <i className="material-icons" style={{cursor: 'pointer'}} onClick={deleteNoteHandler} >delete</i>
            </div>
            <Link to={"/note/" + note.id}>
                <h5 className="black-text">{note.title}</h5>
            </Link>
            <p className="trucate">{note.content}</p>
            <p className="grey-text">{moment(note.createdAt.toDate()).fromNow()}</p>
            <div className="right-align">
                <i className="material-icons black-text">edit</i>
            </div>
        </div>
    );
}

export default Note;