import '../styles/globals.css'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeQw9eAgjDYysPXc6wsKLO2ADzwPFDhdk",
  authDomain: "mbtiisscience-347b5.firebaseapp.com",
  projectId: "mbtiisscience-347b5",
  storageBucket: "mbtiisscience-347b5.appspot.com",
  messagingSenderId: "118052395323",
  appId: "1:118052395323:web:2024e7f9c50f366384ff1e",
  measurementId: "G-NFMV8PV6L9"
};

// Initialize Firebase
function MyApp({ Component, pageProps }) {

  initializeApp(firebaseConfig)
  return <Component {...pageProps} />
}

export default MyApp
