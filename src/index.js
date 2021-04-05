import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {createStore, applyMiddleware,compose} from 'redux';
import rootReducer from './store/Reducers/rootReducer';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {ReactReduxFirebaseProvider, getFirebase} from 'react-redux-firebase';
import {createFirestoreInstance , getFirestore, reduxFirestore} from 'redux-firestore';
import firebase from 'firebase/app';
import fbconfig from './config-dir/fbconfig';

const store = createStore(rootReducer, compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reduxFirestore(fbconfig)
),
)

const rrfProps = {
    firebase,
    config : fbconfig,
    dispatch: store.dispatch,
    createFirestoreInstance
}

ReactDOM.render(
    <Provider store={store}>   
        <ReactReduxFirebaseProvider {...rrfProps} >
            <App />
        </ReactReduxFirebaseProvider>    
    </Provider>,
 document.getElementById("root"));
