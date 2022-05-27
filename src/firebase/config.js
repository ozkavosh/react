// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbAj6czhxbUBTbzdS78TYNoCmTGStfLl0",
  authDomain: "ecommercecoderhouse-2f872.firebaseapp.com",
  projectId: "ecommercecoderhouse-2f872",
  storageBucket: "ecommercecoderhouse-2f872.appspot.com",
  messagingSenderId: "882349166406",
  appId: "1:882349166406:web:5404ebeec19d5156f0df47"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () => {
    return app;
} 