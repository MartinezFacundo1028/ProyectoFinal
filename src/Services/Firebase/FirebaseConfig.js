import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDgYp5eXkfFB_aqTmNC6M_gleP2PnrFa1Y",
    authDomain: "proyecto-final-coderhous-143c0.firebaseapp.com",
    projectId: "proyecto-final-coderhous-143c0",
    storageBucket: "proyecto-final-coderhous-143c0.appspot.com",
    messagingSenderId: "207250594504",
    appId: "1:207250594504:web:85d765b2c4a83d9aa1a3fd",
    measurementId: "G-FWCSS2GQNF"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);