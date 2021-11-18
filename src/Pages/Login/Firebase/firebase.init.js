import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initilaizationAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default initilaizationAuthentication;