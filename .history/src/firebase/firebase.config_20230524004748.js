// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_api_key,
    authDomain: "news-portal-8432e.firebaseapp.com",
    projectId: "news-portal-8432e",
    storageBucket: "news-portal-8432e.appspot.com",
    messagingSenderId: "72565487625",
    appId: "1:72565487625:web:62dd4fe6eabf627ca8e0d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;