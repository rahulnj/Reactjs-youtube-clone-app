import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
    apiKey: "AIzaSyBwzq6WzXVJwQecoIm9bb7Ut-rJpXrugWw",
    authDomain: "clone-a22ec.firebaseapp.com",
    projectId: "clone-a22ec",
    storageBucket: "clone-a22ec.appspot.com",
    messagingSenderId: "577855090452",
    appId: "1:577855090452:web:77e3290f3c3e0fa32a9c01"
};

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export default app;