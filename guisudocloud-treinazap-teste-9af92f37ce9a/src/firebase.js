import firebase from 'firebase';	

const firebaseConfig = {	
    apiKey: "AIzaSyAU8y5LWMaGkO5OQsr4I2ZgCzJCjfAwg18",
    authDomain: "teste-azure-treinazap.firebaseapp.com",
    projectId: "teste-azure-treinazap",
    storageBucket: "teste-azure-treinazap.appspot.com",
    messagingSenderId: "600991093272",
    appId: "1:600991093272:web:8214302762a5bf708da96d"
};	

const firebaseApp = firebase.initializeApp(firebaseConfig);	

const db = firebaseApp.firestore();	
const auth = firebase.auth();	
const provider = new firebase.auth.GoogleAuthProvider();	
const storage = firebase.storage();

export { auth, provider, storage, firebase };	
export default db;  
