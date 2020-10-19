import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyCGk0itPWoT0EOO-zu8swZ1I1ZLPRTb4jc",
        authDomain: "messenger-clone-jsc.firebaseapp.com",
        databaseURL: "https://messenger-clone-jsc.firebaseio.com",
        projectId: "messenger-clone-jsc",
        storageBucket: "messenger-clone-jsc.appspot.com",
        messagingSenderId: "262486242821",
        appId: "1:262486242821:web:5ab7d6633fba3c15744e6c"
});

const db = firebaseApp.firestore();

export default db;