import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyCqSvJTgJtSv_HV3wjIMQq8cUaUU-ZPQ8w",
    authDomain: "netflix-clone-c3100.firebaseapp.com",
    projectId: "netflix-clone-c3100",
    storageBucket: "netflix-clone-c3100.appspot.com",
    messagingSenderId: "924280379249",
    appId: "1:924280379249:web:daadae703aad06423048d0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();


export { auth };
export default db;