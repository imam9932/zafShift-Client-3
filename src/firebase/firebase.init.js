// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZlJMlwdE9HlZXPzmuRy4Ke54N_P61d0k",
  authDomain: "zap-shift-client-3.firebaseapp.com",
  projectId: "zap-shift-client-3",
  storageBucket: "zap-shift-client-3.firebasestorage.app",
  messagingSenderId: "552383621447",
  appId: "1:552383621447:web:b7e3308c84eb1920940462",
  measurementId: "G-WLNDTY6S3Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);