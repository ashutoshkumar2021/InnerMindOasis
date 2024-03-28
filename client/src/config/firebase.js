import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB5sWjL8_HkxZaXv9x6jzwcF37eFuWMF6A",
  authDomain: "innermindoasis.firebaseapp.com",
  projectId: "innermindoasis",
  storageBucket: "innermindoasis.appspot.com",
  messagingSenderId: "325993511503",
  appId: "1:325993511503:web:19c92617d3e1c44335083a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;