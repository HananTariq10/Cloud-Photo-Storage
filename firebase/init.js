// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQwo2IfExVKgYtI8bQnDZlrIhk7KS1Jbg",
  authDomain: "classwork-e977a.firebaseapp.com",
  projectId: "classwork-e977a",
  storageBucket: "classwork-e977a.appspot.com",
  messagingSenderId: "363068143906",
  appId: "1:363068143906:web:ab6b93253420063d6a8d7b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage= getStorage(app)
export {storage}