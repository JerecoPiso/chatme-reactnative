// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, orderByChild, equalTo, query, orderByValue } from 'firebase/database';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCLcNXX4nmpIHSLoC2yqVBa7_zOwz-vQXI",
    authDomain: "chatme-1d500.firebaseapp.com",
    projectId: "chatme-1d500",
    databaseURL: "https://chatme-1d500-default-rtdb.firebaseio.com/",
    storageBucket: "chatme-1d500.appspot.com",
    messagingSenderId: "333143325578",
    appId: "1:333143325578:web:6e0801f13e67b24d172673"
};

const firebase = initializeApp(firebaseConfig);
const usersRef = ref(getDatabase(firebase), 'users')
const messagesRef = ref(getDatabase(firebase), 'messages')
const auth = getAuth(firebase);

export { auth, usersRef, messagesRef, onValue, orderByChild, equalTo, query, firebase, ref, getDatabase, orderByValue}
