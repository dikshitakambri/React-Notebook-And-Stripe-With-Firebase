import React from 'react';
import {useSelector} from 'react-redux';
import {useFirestoreConnect} from 'react-redux-firebase';
import NoteList from '../notes/notesList';

const Favorites = () => {
    useFirestoreConnect([{collection: 'notes', where:[ 'favorite', '==', true], orderBy:['createdAt','desc'],storeAs:'favnotes'}])
    const favnotes = useSelector(state => state.firestore.ordered.favnotes)
    console.log(favnotes);
    return(
        <div>
            <NoteList notes= {notes} />
        </div>
    );
}

export default Favorites;