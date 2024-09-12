import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBpBJw5H62t6LNi2Yw2asFujvzL2ykCFwc",
  authDomain: "nasaapi-7ac6c.firebaseapp.com",
  projectId: "nasaapi-7ac6c",
  storageBucket: "nasaapi-7ac6c.appspot.com",
  messagingSenderId: "518943847873",
  appId: "1:518943847873:web:0911e1e86b158b3a156b40",
  measurementId: "G-XFW94FXHGV"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)



export { app, auth };
