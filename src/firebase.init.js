// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyANq_3u5fVF0EirWfdx-NnFc9nQPp5k7qo",
    authDomain: "doctors-portal-50d88.firebaseapp.com",
    projectId: "doctors-portal-50d88",
    storageBucket: "doctors-portal-50d88.appspot.com",
    messagingSenderId: "987448677700",
    appId: "1:987448677700:web:5490356a07d35d5fb1f311"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;