// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhAncFIM8dJJblDz3Fuzov5QM7QJeM7PU",
  authDomain: "westrain-40221.firebaseapp.com",
  projectId: "westrain-40221",
  storageBucket: "westrain-40221.appspot.com",
  messagingSenderId: "733768210657",
  appId: "1:733768210657:web:179cd980feee8b94cd7fa0",
  measurementId: "G-LC49NT7XDF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
