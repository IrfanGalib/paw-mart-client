// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpsWvQIDptbMJIx0QCuCMjlztv1FQeNJU",
  authDomain: "paw-mart-ddfab.firebaseapp.com",
  projectId: "paw-mart-ddfab",
  storageBucket: "paw-mart-ddfab.firebasestorage.app",
  messagingSenderId: "953875853302",
  appId: "1:953875853302:web:fdceb31284aeaeafbaa1d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
