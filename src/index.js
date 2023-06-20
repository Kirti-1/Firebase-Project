import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from './App'

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrpNkOJzIO0ES9Ffh7mxPxheurmK56g9g",
  authDomain: "cart-5a688.firebaseapp.com",
  projectId: "cart-5a688",
  storageBucket: "cart-5a688.appspot.com",
  messagingSenderId: "397797702878",
  appId: "1:397797702878:web:f819a91581c1b38e93964f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);



root.render(
  <StrictMode>
    
    <App/>
  </StrictMode>
);
