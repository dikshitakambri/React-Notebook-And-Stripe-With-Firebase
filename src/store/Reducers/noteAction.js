export const addNote = (note) => {
    return(dispatch,getState, {getFirestore}) => {
        const firestore = getFirestore()
        firestore.collection('notes')
        .add({
            ...note,
            favourite: false,
            createdAt: new Date()
        })
        .then(() => {
            console.log('note aaded successfully');
        })
        .catch(err => {
            console.log(err);
        })
    }
}