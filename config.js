import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB80yVI--rWtXI5TFRWE7APESpDbi8rIbk",
    authDomain: "buzzer-a-484b5.firebaseapp.com",
    databaseURL: "https://buzzer-a-484b5-default-rtdb.firebaseio.com",
    projectId: "buzzer-a-484b5",
    storageBucket: "buzzer-a-484b5.appspot.com",
    messagingSenderId: "341681794699",
    appId: "1:341681794699:web:abc8a7da8311e4b965ae8e",
    measurementId: "G-H08YGXN1E3"
};

// Initialize Firebase
let app = firebase.initializeApp(firebaseConfig);
export default app.database();






