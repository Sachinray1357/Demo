// Import the functions you need from the SDKs you need

import 'firebase/auth';

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCMVG-F9kL0NDKWmfhsQV_GYstTHj4At80",
    authDomain: "login-app-53fa7.firebaseapp.com",
    projectId: "login-app-53fa7",
    storageBucket: "login-app-53fa7.appspot.com",
    messagingSenderId: "620429560877",
    appId: "1:620429560877:web:b171246f5d6cd8800f3ca4",
    measurementId: "G-02R8RTPWR8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;