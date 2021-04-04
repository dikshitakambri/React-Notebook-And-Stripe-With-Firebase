import React from "react";
import Form from './Form';
import NoteList from './notes/notesList'
import {useSelector} from 'react-redux';
import {useFirestoreConnect} from 'react-redux-firebase';

const Home = () => {
  useFirestoreConnect([{collection:'notes', orderBy:['createdAt','desc']}])
  const notes = useSelector((state) => state.firestore.ordered.notes)
  console.log(notes);
  return(
    <div className="container">
      <div className="row center-align">
        <div className="col-7">
          <Form />
        </div>
        <div className="col-5">
          <NoteList notes={notes} />
        </div>
      </div>
    </div>)
    ;
}

export default Home;
