import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {updateNote} from '../../store/Reducers/noteAction';
import UseInput from "../useInput";
import {useHistory} from 'react-router-dom';

const EditForm = () => {
    const note = useSelector((state) => state.note)
    const [title, bindTitle, resetTitle] = UseInput(note.title);
    const [content, bindContent, resetContent] = UseInput(note.content);
    const dispatch = useDispatch();
    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateNote({ id: note.id,title, content }));
        resetTitle();
        resetContent();
        history.push('/');
    }
    
    return(
        <div className="section container">
            <form action="" onSubmit={handleSubmit}>
                <h5 className="grey-text text-darken-3">New Note</h5>
                <div className="input-field">
                    <label htmlfor="note_title" className="active">Notes Title</label>
                    <input
                        type="text"
                        id="note_title"
                        className="validate"
                        {...bindTitle}
                    ></input>
                </div>
                <div className="input-field">
                <label htmlfor="note_content" className="active">Note Content</label>
                <textarea
                    id="note_content"
                    className="materialize-textarea"
                    {...bindContent}
                ></textarea>
                <button className="btn" type="submit">
                    Update
                </button>
                </div>
            </form>
        </div>
    );
}
export default EditForm;